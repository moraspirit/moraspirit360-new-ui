import { mkdir, writeFile } from 'fs/promises';
import path from 'path';
import { randomUUID } from 'crypto';
import { NextResponse } from 'next/server';
import type { Prisma } from '@prisma/client';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';

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

const sanitizeFilename = (filename: string) => {
  const extension = path.extname(filename || '').toLowerCase();
  const safeExtension = extension.replace(/[^a-z0-9.]/g, '') || '.bin';
  return `${Date.now()}-${randomUUID()}${safeExtension}`;
};

const saveUploadedFile = async (file: File, requestId: string, fieldName: string) => {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'requests', requestId);
  await mkdir(uploadDir, { recursive: true });

  const generatedName = `${fieldName}-${sanitizeFilename(file.name)}`;
  const destination = path.join(uploadDir, generatedName);
  await writeFile(destination, buffer);

  return `/uploads/requests/${requestId}/${generatedName}`;
};

export async function POST(request: Request) {
  try {
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

    const photographyAgenda = formData.get('photographyAgenda');
    const videographyAgenda = formData.get('videographyAgenda');
    const material = formData.get('material');

    const photographyAgendaPath =
      photographyAgenda instanceof File && photographyAgenda.size > 0
        ? await saveUploadedFile(photographyAgenda, requestId, 'photography-agenda')
        : null;

    const videographyAgendaPath =
      videographyAgenda instanceof File && videographyAgenda.size > 0
        ? await saveUploadedFile(videographyAgenda, requestId, 'videography-agenda')
        : null;

    const materialPath =
      material instanceof File && material.size > 0
        ? await saveUploadedFile(material, requestId, 'material')
        : null;

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
        photographyAgendaPath: photographyAgendaPath ?? undefined,
        videographyAgendaPath: videographyAgendaPath ?? undefined,
        materialPath: materialPath ?? undefined,
      },
    });

    return NextResponse.json({ message: 'Request submitted successfully.', success: true }, { status: 201 });
  } catch (error) {
    console.error('Failed to save request form:', error);
    return NextResponse.json({ message: 'Failed to submit request.', success: false }, { status: 500 });
  }
}
