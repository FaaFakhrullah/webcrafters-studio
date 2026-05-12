"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export function DeleteEntityButton({ endpoint }: { endpoint: string }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function remove() {
    if (!confirm("Delete this item?")) return;
    setLoading(true);
    await fetch(endpoint, { method: "DELETE" });
    setLoading(false);
    router.refresh();
  }

  return (
    <Button variant="destructive" size="sm" onClick={remove} disabled={loading}>
      {loading ? "Deleting..." : "Delete"}
    </Button>
  );
}