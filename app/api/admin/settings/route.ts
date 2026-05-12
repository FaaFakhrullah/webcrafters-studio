import { NextRequest } from "next/server";

import { parseAndValidate } from "@/lib/api";
import { db } from "@/lib/db";
import { jsonResponse } from "@/lib/utils";
import { siteSettingSchema } from "@/lib/validations";

export async function GET() {
  const setting = await db.siteSetting.findFirst();
  return jsonResponse(true, "Settings fetched", setting);
}

export async function PATCH(request: NextRequest) {
  const parsed = await parseAndValidate(request, siteSettingSchema);
  if (parsed.error) return parsed.error;

  const existing = await db.siteSetting.findFirst();

  const setting = existing
    ? await db.siteSetting.update({ where: { id: existing.id }, data: parsed.data })
    : await db.siteSetting.create({ data: parsed.data });

  return jsonResponse(true, "Settings updated", setting);
}