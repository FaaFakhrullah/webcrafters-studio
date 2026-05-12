import { NextRequest } from "next/server";

import { parseAndValidate } from "@/lib/api";
import { db } from "@/lib/db";
import { jsonResponse } from "@/lib/utils";
import { packageSchema } from "@/lib/validations";

export async function GET() {
  const items = await db.package.findMany({ orderBy: { createdAt: "desc" } });
  return jsonResponse(true, "Packages fetched", items);
}

export async function POST(request: NextRequest) {
  const parsed = await parseAndValidate(request, packageSchema);
  if (parsed.error) return parsed.error;

  const item = await db.package.create({ data: parsed.data });
  return jsonResponse(true, "Package created", item, 201);
}