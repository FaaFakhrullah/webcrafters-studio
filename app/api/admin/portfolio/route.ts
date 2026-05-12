import { NextRequest } from "next/server";

import { parseAndValidate } from "@/lib/api";
import { db } from "@/lib/db";
import { jsonResponse } from "@/lib/utils";
import { portfolioSchema } from "@/lib/validations";

export async function GET() {
  const items = await db.portfolio.findMany({ orderBy: { createdAt: "desc" } });
  return jsonResponse(true, "Portfolio items fetched", items);
}

export async function POST(request: NextRequest) {
  const parsed = await parseAndValidate(request, portfolioSchema);
  if (parsed.error) return parsed.error;

  const item = await db.portfolio.create({ data: parsed.data });
  return jsonResponse(true, "Portfolio item created", item, 201);
}