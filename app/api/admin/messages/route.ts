import { ContactStatus } from "@prisma/client";
import { NextRequest } from "next/server";

import { parsePagination } from "@/lib/admin";
import { db } from "@/lib/db";
import { jsonResponse } from "@/lib/utils";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const q = (url.searchParams.get("q") || "").trim();
  const statusRaw = url.searchParams.get("status");
  const status = statusRaw && statusRaw !== "ALL" ? (statusRaw as ContactStatus) : null;
  const { page, pageSize, skip, take } = parsePagination(url);

  const where = {
    ...(q
      ? {
          OR: [{ name: { contains: q } }, { email: { contains: q } }, { subject: { contains: q } }]
        }
      : {}),
    ...(status ? { status } : {})
  };

  const [items, total] = await Promise.all([
    db.contactMessage.findMany({ where, orderBy: { createdAt: "desc" }, skip, take }),
    db.contactMessage.count({ where })
  ]);

  return jsonResponse(true, "Messages fetched", {
    items,
    pagination: {
      page,
      pageSize,
      total,
      totalPages: Math.ceil(total / pageSize)
    }
  });
}
