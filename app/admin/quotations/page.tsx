export const dynamic = "force-dynamic";
import Link from "next/link";

import { ProjectType } from "@prisma/client";

import { FilterDropdown } from "@/components/admin/filter-dropdown";
import { SearchInput } from "@/components/admin/search-input";
import { StatusBadge } from "@/components/admin/status-badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { db } from "@/lib/db";

const projectTypes = Object.values(ProjectType);

export default async function QuotationsPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const q = typeof params.q === "string" ? params.q : "";
  const status = typeof params.status === "string" ? params.status : "ALL";

  const normalizedProjectType = q.toUpperCase().replace(/\s+/g, "_");
  const projectTypeFilter = projectTypes.includes(normalizedProjectType as ProjectType)
    ? [{ projectType: { equals: normalizedProjectType as ProjectType } }]
    : [];

  const items = await db.quotationRequest.findMany({
    where: {
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
      ...(status !== "ALL" ? { status: status as any } : {})
    },
    orderBy: { createdAt: "desc" },
    take: 100
  });

  return (
    <div className="space-y-5">
      <div>
        <h2 className="font-display text-2xl font-bold">Quotation Requests</h2>
        <p className="mt-1 text-sm text-slate-500">Use the Manage button to update status and add internal notes.</p>
      </div>
      <form className="grid gap-3 md:grid-cols-3" method="GET">
        <SearchInput name="q" placeholder="Search by name, email, company, project type" defaultValue={q} />
        <FilterDropdown
          name="status"
          defaultValue={status}
          options={["ALL", "NEW", "CONTACTED", "QUOTED", "IN_PROGRESS", "COMPLETED", "REJECTED"]}
        />
        <Button type="submit">Apply</Button>
      </form>

      <div className="rounded-xl border border-border bg-white p-4 shadow-soft">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Project</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item: any) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Link href={`/admin/quotations/${item.id}`} className="font-semibold text-primary">
                    {item.fullName}
                  </Link>
                </TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.projectType.replaceAll("_", " ")}</TableCell>
                <TableCell>
                  <StatusBadge status={item.status} />
                </TableCell>
                <TableCell>{new Date(item.createdAt).toLocaleDateString()}</TableCell>
                <TableCell className="text-right">
                  <Link href={`/admin/quotations/${item.id}`}>
                    <Button size="sm" variant="outline">Manage</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
