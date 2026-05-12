import { db } from "@/lib/db";
import { jsonResponse } from "@/lib/utils";

export async function GET() {
  const packagesData = await db.package.findMany({ where: { isActive: true }, orderBy: { createdAt: "asc" } });
  return jsonResponse(true, "Packages fetched", packagesData);
}