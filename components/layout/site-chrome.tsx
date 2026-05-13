"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import { FloatingWhatsAppButton } from "@/components/layout/floating-whatsapp-button";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

type SiteChromeProps = {
  children: ReactNode;
  companyName: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  businessHours: string;
  whatsappLink: string;
};

export function SiteChrome({
  children,
  companyName,
  contactEmail,
  contactPhone,
  address,
  businessHours,
  whatsappLink
}: SiteChromeProps) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar companyName={companyName} whatsappLink={whatsappLink} />
      {children}
      <Footer companyName={companyName} email={contactEmail} phone={contactPhone} address={address} businessHours={businessHours} />
      <FloatingWhatsAppButton whatsappLink={whatsappLink} />
    </>
  );
}
