import { NextRequest } from "next/server";

import { parseAndValidate } from "@/lib/api";
import { db } from "@/lib/db";
import { jsonResponse } from "@/lib/utils";
import { statusUpdateSchema } from "@/lib/validations";

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = await db.quotationRequest.findUnique({ where: { id: Number(id) } });
  if (!item) return jsonResponse(false, "Not found", undefined, 404);
  return jsonResponse(true, "Quotation fetched", item);
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const parsed = await parseAndValidate(request, statusUpdateSchema);
  if (parsed.error) return parsed.error;

  const item = await db.quotationRequest.update({
    where: { id: Number(id) },
    data: {
      status: parsed.data.status,
      internalNotes: parsed.data.internalNotes || null
    }
  });

  return jsonResponse(true, "Quotation updated", item);
}