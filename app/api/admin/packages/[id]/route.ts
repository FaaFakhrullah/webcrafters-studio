import { NextRequest } from "next/server";

import { parseAndValidate } from "@/lib/api";
import { db } from "@/lib/db";
import { jsonResponse } from "@/lib/utils";
import { packageSchema } from "@/lib/validations";

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = await db.package.findUnique({ where: { id: Number(id) } });
  if (!item) return jsonResponse(false, "Not found", undefined, 404);
  return jsonResponse(true, "Package fetched", item);
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const parsed = await parseAndValidate(request, packageSchema);
  if (parsed.error) return parsed.error;

  const item = await db.package.update({ where: { id: Number(id) }, data: parsed.data });
  return jsonResponse(true, "Package updated", item);
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await db.package.delete({ where: { id: Number(id) } });
  return jsonResponse(true, "Package deleted");
}