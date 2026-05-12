export const dynamic = "force-dynamic";
import { notFound } from "next/navigation";

import { ConsultationStatusUpdater } from "@/components/admin/consultation-status-updater";
import { StatusBadge } from "@/components/admin/status-badge";
import { db } from "@/lib/db";

export default async function ConsultationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = await db.consultationBooking.findUnique({ where: { id: Number(id) } });
  if (!item) notFound();

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="space-y-4 rounded-xl border border-border bg-white p-5 shadow-soft lg:col-span-2">
        <h2 className="font-display text-2xl font-bold">Consultation #{item.id}</h2>
        <p className="text-sm text-slate-500">Submitted on {new Date(item.createdAt).toLocaleString()}</p>
        <div className="grid gap-3 text-sm text-slate-700 md:grid-cols-2">
          <p><strong>Name:</strong> {item.fullName}</p>
          <p><strong>Company:</strong> {item.companyName || "-"}</p>
          <p><strong>Email:</strong> {item.email}</p>
          <p><strong>Phone:</strong> {item.phone}</p>
          <p><strong>Preferred method:</strong> {item.preferredMethod.replaceAll("_", " ")}</p>
          <p><strong>Project type:</strong> {item.projectType.replaceAll("_", " ")}</p>
          <p><strong>Date:</strong> {new Date(item.preferredDate).toLocaleDateString()}</p>
          <p><strong>Time:</strong> {item.preferredTime}</p>
        </div>
        <p className="text-sm"><strong>Description:</strong> {item.projectDescription}</p>
      </div>
      <div className="space-y-4">
        <div className="rounded-xl border border-border bg-white p-4 shadow-soft">
          <p className="mb-2 text-sm text-slate-500">Current status</p>
          <StatusBadge status={item.status} />
        </div>
        <ConsultationStatusUpdater id={item.id} status={item.status} internalNotes={item.internalNotes} />
      </div>
    </div>
  );
}