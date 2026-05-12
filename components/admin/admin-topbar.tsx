"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export function AdminTopbar() {
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className="flex items-center justify-between border-b border-border bg-white px-6 py-4">
      <h1 className="font-display text-2xl font-bold text-slate-900">Admin Dashboard</h1>
      <Button variant="outline" onClick={logout}>
        Logout
      </Button>
    </div>
  );
}