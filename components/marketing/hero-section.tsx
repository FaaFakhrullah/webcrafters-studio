import Link from "next/link";

import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      <div className="container-shell page-section grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-700">
            Website Solutions Designed for Malaysian Businesses
          </p>
          <h1 className="hero-title">Professional websites built to support your business growth</h1>
          <p className="hero-subtitle">
            From company profiles to custom dashboards, we help organizations move online with confidence through secure,
            responsive, and scalable web solutions.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/request-quotation">
              <Button size="lg">Request a Website</Button>
            </Link>
            <Link href="/packages">
              <Button variant="outline" size="lg">
                View Packages
              </Button>
            </Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              <Button size="lg" className="bg-secondary">
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
          <h2 className="font-display text-2xl font-bold">Clear process, transparent quotation, and reliable delivery</h2>
          <p className="mt-3 text-slate-600">
            We build digital systems for SMEs, startups, NGOs, and government-aligned organizations with practical timelines
            and strong engineering discipline.
          </p>
          <ul className="mt-5 space-y-3 text-sm text-slate-700">
            <li>Secure architecture and coding standards</li>
            <li>Mobile-first responsive implementation</li>
            <li>Business-focused outcomes and maintainability</li>
          </ul>
        </div>
      </div>
    </section>
  );
}