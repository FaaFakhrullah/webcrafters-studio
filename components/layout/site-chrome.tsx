"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import { FloatingWhatsAppButton } from "@/components/layout/floating-whatsapp-button";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}