import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

const VIEW_PERMISSION = "view_moraspirit360_requests";
const MANAGE_PERMISSION = "manage_moraspirit360_requests";
const VALID_SERVICES = new Set([
  "photography",
  "videography",
  "webService",
  "marketing",
]);

export async function GET(request: Request) {
  try {
    const gatewayKey = request.headers.get("x-internal-gateway-key");
    const expectedGatewayKey = process.env.INTERNAL_GATEWAY_KEY;
    if (!expectedGatewayKey || gatewayKey !== expectedGatewayKey) {
      return NextResponse.json(
        { message: "Forbidden: invalid gateway signature." },
        { status: 403 },
      );
    }

    const forwardedUserId = request.headers.get("x-user-id");
    const rawPermissions = request.headers.get("x-user-permissions");
    const userId = forwardedUserId ? Number(forwardedUserId) : NaN;

    if (!Number.isFinite(userId) || userId <= 0 || !rawPermissions) {
      return NextResponse.json(
        { message: "Unauthorized: missing forwarded user context." },
        { status: 401 },
      );
    }

    let permissions: string[] = [];
    try {
      const parsed = JSON.parse(rawPermissions) as unknown;
      permissions = Array.isArray(parsed) ? parsed.filter((p): p is string => typeof p === "string") : [];
    } catch {
      return NextResponse.json(
        { message: "Unauthorized: invalid forwarded permissions payload." },
        { status: 401 },
      );
    }

    const canView =
      permissions.includes(VIEW_PERMISSION) || permissions.includes(MANAGE_PERMISSION);

    if (!canView) {
      return NextResponse.json(
        { message: "Forbidden: insufficient permissions." },
        { status: 403 },
      );
    }

    const { searchParams } = new URL(request.url);
    const page = Math.max(Number(searchParams.get("page") || 1), 1);
    const pageSizeRaw = Number(searchParams.get("pageSize") || 20);
    const pageSize = Math.min(Math.max(pageSizeRaw, 1), 100);
    const search = (searchParams.get("search") || "").trim();
    const service = (searchParams.get("service") || "").trim();

    const where: any = {};

    if (search) {
      where.OR = [
        { name: { contains: search } },
        { email: { contains: search } },
        { contact: { contains: search } },
        { organization: { contains: search } },
      ];
    }

    if (VALID_SERVICES.has(service)) {
      where[service as "photography" | "videography" | "webService" | "marketing"] = true;
    }

    const [total, items] = await Promise.all([
      prisma.requestSubmission.count({ where }),
      prisma.requestSubmission.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
    ]);

    return NextResponse.json({
      items,
      pagination: {
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize),
      },
    });
  } catch (error) {
    console.error("Failed to fetch request submissions:", error);
    return NextResponse.json(
      { message: "Failed to fetch request submissions." },
      { status: 500 },
    );
  }
}
