"use client";

import Link from "next/link";

import { MobileNav } from "@/components/layout/mobile-nav";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";

type NavbarProps = {
  companyName: string;
  whatsappLink: string;
};

export function Navbar({ companyName, whatsappLink }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/90 shadow-[0_8px_24px_-22px_rgba(15,23,42,0.65)] backdrop-blur">
      <div className="container-shell flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-lg font-bold text-slate-900 transition hover:text-primary">
          {companyName}
        </Link>
        <nav className="hidden items-center gap-5 md:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-slate-600 transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-secondary after:transition-transform hover:text-slate-900 hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <a href={whatsappLink} target="_blank" rel="noreferrer">
            <Button className="bg-secondary">WhatsApp Us</Button>
          </a>
        </div>
        <MobileNav companyName={companyName} whatsappLink={whatsappLink} />
      </div>
    </header>
  );
}
