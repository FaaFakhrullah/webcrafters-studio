export const dynamic = "force-dynamic";
import Link from "next/link";

import { StatCard } from "@/components/admin/stat-card";
import { StatusBadge } from "@/components/admin/status-badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { db } from "@/lib/db";

export default async function AdminDashboardPage() {
  const [
    totalQuotations,
    totalConsultations,
    totalMessages,
    completedProjects,
    monthlyInquiries,
    recentQuotations
  ] = await Promise.all([
    db.quotationRequest.count(),
    db.consultationBooking.count(),
    db.contactMessage.count(),
    db.quotationRequest.count({ where: { status: "COMPLETED" } }),
    db.quotationRequest.count({
      where: {
        createdAt: {
          gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
        }
      }
    }),
    db.quotationRequest.findMany({ orderBy: { createdAt: "desc" }, take: 8 })
  ]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <StatCard title="Total quotation requests" value={totalQuotations} />
        <StatCard title="Consultation bookings" value={totalConsultations} />
        <StatCard title="Contact messages" value={totalMessages} />
        <StatCard title="Completed projects" value={completedProjects} />
        <StatCard title="Monthly inquiry count" value={monthlyInquiries} />
        <StatCard title="New inquiries" value={recentQuotations.filter((item: any) => item.status === "NEW").length} />
      </div>

      <div className="rounded-xl border border-border bg-white p-4 shadow-soft">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-display text-xl font-bold">Recent quotation requests</h2>
          <Link href="/admin/quotations" className="text-sm font-semibold text-primary">
            View all
          </Link>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Project Type</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentQuotations.map((item: any) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Link href={`/admin/quotations/${item.id}`} className="font-semibold text-primary">
                    {item.fullName}
                  </Link>
                </TableCell>
                <TableCell>{item.companyName || "-"}</TableCell>
                <TableCell>{item.projectType.replaceAll("_", " ")}</TableCell>
                <TableCell>
                  <StatusBadge status={item.status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}