"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { AdminTopbar } from "@/components/admin/admin-topbar";

export function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/admin/login") {
    return <main className="min-h-screen">{children}</main>;
  }

  return (
    <div className="min-h-screen md:flex">
      <AdminSidebar />
      <div className="flex-1">
        <AdminTopbar />
        <main className="p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}