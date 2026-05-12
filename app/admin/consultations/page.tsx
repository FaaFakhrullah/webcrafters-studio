export const dynamic = "force-dynamic";
import Link from "next/link";

import { FilterDropdown } from "@/components/admin/filter-dropdown";
import { SearchInput } from "@/components/admin/search-input";
import { StatusBadge } from "@/components/admin/status-badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { db } from "@/lib/db";

export default async function ConsultationsPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const q = typeof params.q === "string" ? params.q : "";
  const status = typeof params.status === "string" ? params.status : "ALL";

  const items = await db.consultationBooking.findMany({
    where: {
      ...(q
        ? {
            OR: [
              { fullName: { contains: q } },
              { email: { contains: q } },
              { companyName: { contains: q } }
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
      <h2 className="font-display text-2xl font-bold">Consultation Bookings</h2>
      <form className="grid gap-3 md:grid-cols-3" method="GET">
        <SearchInput name="q" placeholder="Search by name, email, company" defaultValue={q} />
        <FilterDropdown name="status" defaultValue={status} options={["ALL", "NEW", "SCHEDULED", "COMPLETED", "CANCELLED"]} />
        <Button type="submit">Apply</Button>
      </form>

      <div className="rounded-xl border border-border bg-white p-4 shadow-soft">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item: any) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Link href={`/admin/consultations/${item.id}`} className="font-semibold text-primary">
                    {item.fullName}
                  </Link>
                </TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.preferredMethod.replaceAll("_", " ")}</TableCell>
                <TableCell>
                  <StatusBadge status={item.status} />
                </TableCell>
                <TableCell>{new Date(item.preferredDate).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}