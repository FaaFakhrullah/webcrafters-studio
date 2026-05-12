"use client";

import Link from "next/link";

import { MobileNav } from "@/components/layout/mobile-nav";
import { Button } from "@/components/ui/button";
import { COMPANY_NAME, NAV_LINKS, WHATSAPP_LINK } from "@/lib/constants";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/90 backdrop-blur">
      <div className="container-shell flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-lg font-bold text-slate-900">
          {COMPANY_NAME}
        </Link>
        <nav className="hidden items-center gap-5 md:flex">
          {NAV_LINKS.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            <Button className="bg-secondary">WhatsApp Us</Button>
          </a>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}