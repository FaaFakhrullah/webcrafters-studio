"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";

type MobileNavProps = {
  companyName: string;
  whatsappLink: string;
};

export function MobileNav({ companyName, whatsappLink }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button variant="outline" size="sm" aria-label="Toggle navigation" onClick={() => setOpen((prev) => !prev)}>
        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>
      {open && (
        <div className="motion-reveal motion-reveal-scale is-visible absolute left-4 right-4 top-16 z-50 rounded-xl border border-border bg-white p-4 shadow-soft">
          <ul className="space-y-2">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium transition hover:bg-slate-100 hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-3 block">
            <Button className="w-full bg-secondary">WhatsApp Us</Button>
          </a>
          <p className="mt-2 text-center text-xs text-slate-500">{companyName}</p>
        </div>
      )}
    </div>
  );
}
