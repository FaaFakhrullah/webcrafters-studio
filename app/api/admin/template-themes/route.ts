import { NextRequest } from "next/server";

import { parseAndValidate } from "@/lib/api";
import { db } from "@/lib/db";
import { jsonResponse } from "@/lib/utils";
import { templateThemeSchema } from "@/lib/validations";

export async function GET() {
  const items = await db.templateTheme.findMany({ orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }] });
  return jsonResponse(true, "Template themes fetched", items);
}

export async function POST(request: NextRequest) {
  const parsed = await parseAndValidate(request, templateThemeSchema);
  if (parsed.error) return parsed.error;

  const item = await db.templateTheme.create({ data: parsed.data });
  return jsonResponse(true, "Template theme created", item, 201);
}