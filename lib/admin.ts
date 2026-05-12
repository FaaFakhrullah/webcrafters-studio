import { NextRequest } from "next/server";

import { getRequestSession, getServerSession } from "@/lib/auth";

export async function requireAdminRequest(request: NextRequest) {
  const session = await getRequestSession(request);
  if (!session) return null;
  return session;
}

export async function requireAdminServerSession() {
  return getServerSession();
}

export function parsePagination(url: URL) {
  const page = Number(url.searchParams.get("page") || 1);
  const pageSize = Math.min(Number(url.searchParams.get("pageSize") || 10), 50);
  const safePage = Number.isNaN(page) || page < 1 ? 1 : page;
  const safePageSize = Number.isNaN(pageSize) || pageSize < 1 ? 10 : pageSize;
  return {
    page: safePage,
    pageSize: safePageSize,
    skip: (safePage - 1) * safePageSize,
    take: safePageSize
  };
}