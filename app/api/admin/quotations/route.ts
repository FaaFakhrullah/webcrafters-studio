import { InquiryStatus, ProjectType } from "@prisma/client";
import { NextRequest } from "next/server";

import { db } from "@/lib/db";
import { parsePagination } from "@/lib/admin";
import { jsonResponse } from "@/lib/utils";

const projectTypes = Object.values(ProjectType);

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const q = (url.searchParams.get("q") || "").trim();
  const statusRaw = url.searchParams.get("status");
  const status = statusRaw && statusRaw !== "ALL" ? (statusRaw as InquiryStatus) : null;
  const { page, pageSize, skip, take } = parsePagination(url);

  const normalizedProjectType = q.toUpperCase().replace(/\s+/g, "_");
  const projectTypeFilter = projectTypes.includes(normalizedProjectType as ProjectType)
    ? [{ projectType: { equals: normalizedProjectType as ProjectType } }]
    : [];

  const where = {
    ...(q
      ? {
          OR: [
            { fullName: { contains: q } },
            { email: { contains: q } },
            { companyName: { contains: q } },
            ...projectTypeFilter
          ]
        }
      : {}),
    ...(status ? { status } : {})
  };

  const [items, total] = await Promise.all([
    db.quotationRequest.findMany({ where, orderBy: { createdAt: "desc" }, skip, take }),
    db.quotationRequest.count({ where })
  ]);

  return jsonResponse(true, "Quotation requests fetched", {
    items,
    pagination: {
      page,
      pageSize,
      total,
      totalPages: Math.ceil(total / pageSize)
    }
  });
}
