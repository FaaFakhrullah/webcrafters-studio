import Link from "next/link";

import { NAV_LINKS } from "@/lib/constants";

type FooterProps = {
  companyName: string;
  email: string;
  phone: string;
  address: string;
  businessHours: string;
};

export function Footer({ companyName, email, phone, address, businessHours }: FooterProps) {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-200">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-4">
        <div>
          <p className="font-display text-xl font-bold">{companyName}</p>
          <p className="mt-3 text-sm text-slate-300">
            Premium website development, dashboards, and custom web applications for Malaysian businesses and organizations.
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
          <p className="font-semibold text-white">Policies</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy / PDPA Notice
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/maintenance-policy" className="hover:text-white">
                Maintenance Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>{email}</li>
            <li>{phone}</li>
            <li>{address}</li>
            <li>{businessHours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4">
        <p className="container-shell text-xs text-slate-400">(c) {new Date().getFullYear()} {companyName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
