import { db } from "@/lib/db";
import { jsonResponse } from "@/lib/utils";

export async function GET() {
  const portfolio = await db.portfolio.findMany({ where: { isActive: true }, orderBy: { createdAt: "desc" } });
  return jsonResponse(true, "Portfolio fetched", portfolio);
}