import { NextRequest } from "next/server";

import { parseAndValidate } from "@/lib/api";
import { db } from "@/lib/db";
import { jsonResponse } from "@/lib/utils";
import { testimonialSchema } from "@/lib/validations";

export async function GET() {
  const items = await db.testimonial.findMany({ orderBy: { createdAt: "desc" } });
  return jsonResponse(true, "Testimonials fetched", items);
}

export async function POST(request: NextRequest) {
  const parsed = await parseAndValidate(request, testimonialSchema);
  if (parsed.error) return parsed.error;

  const item = await db.testimonial.create({ data: parsed.data });
  return jsonResponse(true, "Testimonial created", item, 201);
}