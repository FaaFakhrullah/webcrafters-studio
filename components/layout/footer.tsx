import Link from "next/link";

import { COMPANY_NAME, CONTACT_EMAIL, CONTACT_PHONE, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-slate-950 text-slate-200">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold">{COMPANY_NAME}</p>
          <p className="mt-3 text-sm text-slate-300">
            Secure, responsive, and scalable web solutions for Malaysian businesses, agencies, and organizations.
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">Quick Links</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/request-quotation" className="hover:text-white">
                Request Quotation
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>{CONTACT_EMAIL}</li>
            <li>{CONTACT_PHONE}</li>
            <li>Kuala Lumpur, Malaysia</li>
            <li>Mon-Fri, 9:00 AM - 6:00 PM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4">
        <p className="container-shell text-xs text-slate-400">(c) {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
      </div>
    </footer>
  );
}