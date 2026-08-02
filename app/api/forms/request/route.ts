import { randomUUID } from 'crypto';
import { NextResponse } from 'next/server';
import type { Prisma } from '@prisma/client';
import { prisma } from '@/lib/prisma';
import { checkRateLimit, getClientIp } from '@/lib/rate-limit';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface Services {
  photography: boolean;
  videography: boolean;
  webService: boolean;
  marketing: boolean;
}

interface PersonalDetails {
  name: string;
  contact: string;
  email: string;
  organization: string;
}

const parseJsonField = <T>(value: FormDataEntryValue | null): T | null => {
  if (typeof value !== 'string') return null;
  try {
    return JSON.parse(value) as T;
  } catch {
    return null;
  }
};

const toInputJson = (value: Record<string, unknown> | null): Prisma.InputJsonValue | undefined => {
  if (!value) return undefined;
  return value as Prisma.InputJsonValue;
};

const RATE_LIMIT_MAX = Math.max(Number(process.env.FORM_SUBMIT_RATE_LIMIT_MAX ?? 5), 1);
const RATE_LIMIT_WINDOW_SECONDS = Math.max(
  Number(process.env.FORM_SUBMIT_RATE_LIMIT_WINDOW_SECONDS ?? 300),
  1,
);

export async function POST(request: Request) {
  try {
    const clientIp = getClientIp(request);
    const rateLimit = checkRateLimit({
      key: `forms:request:${clientIp}`,
      limit: RATE_LIMIT_MAX,
      windowSeconds: RATE_LIMIT_WINDOW_SECONDS,
    });

    if (rateLimit.limited) {
      return NextResponse.json(
        {
          message: 'Too many submissions. Please wait a few minutes before trying again.',
          success: false,
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(rateLimit.retryAfterSeconds),
            'X-RateLimit-Limit': String(RATE_LIMIT_MAX),
            'X-RateLimit-Remaining': String(rateLimit.remaining),
            'X-RateLimit-Reset': String(Math.floor(rateLimit.resetAt / 1000)),
          },
        },
      );
    }

    const formData = await request.formData();

    const personalDetails = parseJsonField<PersonalDetails>(formData.get('personalDetails'));
    const services = parseJsonField<Services>(formData.get('services'));

    if (!personalDetails || !services) {
      return NextResponse.json({ message: 'Invalid request payload.' }, { status: 400 });
    }

    if (!personalDetails.name || !personalDetails.email || !personalDetails.contact) {
      return NextResponse.json({ message: 'Missing required personal details.' }, { status: 400 });
    }

    const requestId = randomUUID();

    const photographyDetails = parseJsonField<Record<string, unknown>>(formData.get('photographyDetails'));
    const videographyDetails = parseJsonField<Record<string, unknown>>(formData.get('videographyDetails'));
    const webServiceDetails = parseJsonField<Record<string, unknown>>(formData.get('webServiceDetails'));
    const marketingDetails = parseJsonField<Record<string, unknown>>(formData.get('marketingDetails'));

    await prisma.requestSubmission.create({
      data: {
        id: requestId,
        name: personalDetails.name,
        contact: personalDetails.contact,
        email: personalDetails.email,
        organization: personalDetails.organization,
        photography: services.photography,
        videography: services.videography,
        webService: services.webService,
        marketing: services.marketing,
        photographyDetails: toInputJson(photographyDetails),
        videographyDetails: toInputJson(videographyDetails),
        webServiceDetails: toInputJson(webServiceDetails),
        marketingDetails: toInputJson(marketingDetails),
      },
    });

    return NextResponse.json(
      { message: 'Request submitted successfully.', success: true },
      {
        status: 201,
        headers: {
          'X-RateLimit-Limit': String(RATE_LIMIT_MAX),
          'X-RateLimit-Remaining': String(rateLimit.remaining),
          'X-RateLimit-Reset': String(Math.floor(rateLimit.resetAt / 1000)),
        },
      },
    );
  } catch (error) {
    console.error('Failed to save request form:', error);
    const message =
      process.env.NODE_ENV === 'development' && error instanceof Error
        ? `Failed to submit request: ${error.message}`
        : 'Failed to submit request.';
    return NextResponse.json({ message, success: false }, { status: 500 });
  }
}
