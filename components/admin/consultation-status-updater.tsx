"use client";

import { ConsultationStatus } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const options: ConsultationStatus[] = ["NEW", "SCHEDULED", "COMPLETED", "CANCELLED"];

export function ConsultationStatusUpdater({
  id,
  status,
  internalNotes
}: {
  id: number;
  status: ConsultationStatus;
  internalNotes?: string | null;
}) {
  const [currentStatus, setCurrentStatus] = useState<ConsultationStatus>(status);
  const [notes, setNotes] = useState(internalNotes || "");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function save() {
    setLoading(true);
    await fetch(`/api/admin/consultations/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: currentStatus, internalNotes: notes })
    });
    setLoading(false);
    router.refresh();
  }

  return (
    <div className="space-y-3 rounded-xl border border-border bg-white p-4">
      <Select value={currentStatus} onChange={(e) => setCurrentStatus(e.target.value as ConsultationStatus)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option.replaceAll("_", " ")}
          </option>
        ))}
      </Select>
      <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Internal notes" />
      <Button onClick={save} disabled={loading}>
        {loading ? "Saving..." : "Update Status"}
      </Button>
    </div>
  );
}