"use client";

import { ContactStatus } from "@prisma/client";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export function MessageStatusUpdater({ id, status }: { id: number; status: ContactStatus }) {
  const router = useRouter();

  async function toggle() {
    const next = status === "UNREAD" ? "READ" : "UNREAD";
    await fetch(`/api/admin/messages/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: next })
    });
    router.refresh();
  }

  return (
    <Button size="sm" variant="outline" onClick={toggle}>
      Mark as {status === "UNREAD" ? "READ" : "UNREAD"}
    </Button>
  );
}