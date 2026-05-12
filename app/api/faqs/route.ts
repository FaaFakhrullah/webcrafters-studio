import { db } from "@/lib/db";
import { jsonResponse } from "@/lib/utils";

export async function GET() {
  const faqs = await db.fAQ.findMany({ where: { isActive: true }, orderBy: { sortOrder: "asc" } });
  return jsonResponse(true, "FAQs fetched", faqs);
}