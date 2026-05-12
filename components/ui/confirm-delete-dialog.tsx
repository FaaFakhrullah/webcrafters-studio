"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

type ConfirmDeleteDialogProps = {
  title?: string;
  description?: string;
  onConfirm: () => void | Promise<void>;
};

export function ConfirmDeleteDialog({
  title = "Delete item",
  description = "This action cannot be undone.",
  onConfirm
}: ConfirmDeleteDialogProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleConfirm() {
    setLoading(true);
    await onConfirm();
    setLoading(false);
    setOpen(false);
  }

  if (!open) {
    return (
      <Button variant="destructive" size="sm" onClick={() => setOpen(true)}>
        Delete
      </Button>
    );
  }

  return (
    <div className="rounded-md border border-red-200 bg-red-50 p-3">
      <p className="font-semibold text-red-700">{title}</p>
      <p className="mb-3 text-sm text-red-600">{description}</p>
      <div className="flex gap-2">
        <Button variant="destructive" size="sm" onClick={handleConfirm} disabled={loading}>
          {loading ? "Deleting..." : "Confirm"}
        </Button>
        <Button variant="outline" size="sm" onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </div>
    </div>
  );
}