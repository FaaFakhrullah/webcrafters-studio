import { db } from "@/lib/db";
import { jsonResponse } from "@/lib/utils";

export async function GET() {
  const services = await db.service.findMany({ where: { isActive: true }, orderBy: { createdAt: "asc" } });
  return jsonResponse(true, "Services fetched", services);
}