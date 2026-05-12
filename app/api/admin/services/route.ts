import { NextRequest } from "next/server";

import { parseAndValidate } from "@/lib/api";
import { db } from "@/lib/db";
import { jsonResponse } from "@/lib/utils";
import { serviceSchema } from "@/lib/validations";

export async function GET() {
  const items = await db.service.findMany({ orderBy: { createdAt: "desc" } });
  return jsonResponse(true, "Services fetched", items);
}

export async function POST(request: NextRequest) {
  const parsed = await parseAndValidate(request, serviceSchema);
  if (parsed.error) return parsed.error;

  const item = await db.service.create({ data: parsed.data });
  return jsonResponse(true, "Service created", item, 201);
}