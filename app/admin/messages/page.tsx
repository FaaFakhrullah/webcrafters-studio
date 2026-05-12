export const dynamic = "force-dynamic";
import { FilterDropdown } from "@/components/admin/filter-dropdown";
import { MessageStatusUpdater } from "@/components/admin/message-status-updater";
import { SearchInput } from "@/components/admin/search-input";
import { StatusBadge } from "@/components/admin/status-badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { db } from "@/lib/db";

export default async function MessagesPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const q = typeof params.q === "string" ? params.q : "";
  const status = typeof params.status === "string" ? params.status : "ALL";

  const items = await db.contactMessage.findMany({
    where: {
      ...(q
        ? {
            OR: [
              { name: { contains: q } },
              { email: { contains: q } },
              { subject: { contains: q } }
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
      <h2 className="font-display text-2xl font-bold">Contact Messages</h2>
      <form className="grid gap-3 md:grid-cols-3" method="GET">
        <SearchInput name="q" placeholder="Search by name, email, subject" defaultValue={q} />
        <FilterDropdown name="status" defaultValue={status} options={["ALL", "UNREAD", "READ"]} />
        <Button type="submit">Apply</Button>
      </form>

      <div className="rounded-xl border border-border bg-white p-4 shadow-soft">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item: any) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.subject}</TableCell>
                <TableCell>{item.message.slice(0, 120)}{item.message.length > 120 ? "..." : ""}</TableCell>
                <TableCell>
                  <StatusBadge status={item.status} />
                </TableCell>
                <TableCell>
                  <MessageStatusUpdater id={item.id} status={item.status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}