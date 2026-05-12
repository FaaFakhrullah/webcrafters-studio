import { NextRequest } from "next/server";

import { parseAndValidate } from "@/lib/api";
import { db } from "@/lib/db";
import { jsonResponse } from "@/lib/utils";
import { faqSchema } from "@/lib/validations";

export async function GET() {
  const items = await db.fAQ.findMany({ orderBy: { sortOrder: "asc" } });
  return jsonResponse(true, "FAQs fetched", items);
}

export async function POST(request: NextRequest) {
  const parsed = await parseAndValidate(request, faqSchema);
  if (parsed.error) return parsed.error;

  const item = await db.fAQ.create({ data: parsed.data });
  return jsonResponse(true, "FAQ created", item, 201);
}