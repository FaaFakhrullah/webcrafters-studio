export const dynamic = "force-dynamic";
import { notFound } from "next/navigation";

import { InquiryStatusUpdater } from "@/components/admin/inquiry-status-updater";
import { StatusBadge } from "@/components/admin/status-badge";
import { db } from "@/lib/db";
import { toArray } from "@/lib/utils";

export default async function QuotationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = await db.quotationRequest.findUnique({ where: { id: Number(id) } });

  if (!item) notFound();

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="space-y-4 rounded-xl border border-border bg-white p-5 shadow-soft lg:col-span-2">
        <h2 className="font-display text-2xl font-bold">Quotation #{item.id}</h2>
        <p className="text-sm text-slate-500">Submitted on {new Date(item.createdAt).toLocaleString()}</p>
        <div className="grid gap-3 text-sm text-slate-700 md:grid-cols-2">
          <p><strong>Name:</strong> {item.fullName}</p>
          <p><strong>Company:</strong> {item.companyName || "-"}</p>
          <p><strong>Email:</strong> {item.email}</p>
          <p><strong>Phone:</strong> {item.phone}</p>
          <p><strong>Project type:</strong> {item.projectType.replaceAll("_", " ")}</p>
          <p><strong>Budget:</strong> {item.budgetRange}</p>
          <p><strong>Timeline:</strong> {item.timeline}</p>
          <p><strong>Preferred contact:</strong> {item.preferredContactMethod.replaceAll("_", " ")}</p>
        </div>
        <p className="text-sm"><strong>Required features:</strong> {(toArray(item.requiredFeatures) as string[]).join(", ")}</p>
        <p className="text-sm"><strong>Existing website:</strong> {item.existingWebsiteUrl || "-"}</p>
        <p className="text-sm"><strong>Description:</strong> {item.projectDescription}</p>
      </div>
      <div className="space-y-4">
        <div className="rounded-xl border border-border bg-white p-4 shadow-soft">
          <p className="mb-2 text-sm text-slate-500">Current status</p>
          <StatusBadge status={item.status} />
        </div>
        <InquiryStatusUpdater id={item.id} status={item.status} internalNotes={item.internalNotes} />
      </div>
    </div>
  );
}