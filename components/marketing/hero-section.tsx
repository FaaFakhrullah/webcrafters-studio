import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      <div className="container-shell page-section grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          <p className="mb-4 inline-flex rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-700">
            Website Solutions Designed for Malaysian Businesses
          </p>
          <h1 className="hero-title">Professional websites built to support your business growth</h1>
          <p className="hero-subtitle">
            From company profiles to custom dashboards, we help organizations move online with confidence through secure,
            responsive, and scalable web solutions.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/request-quotation" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto">
                Request a Website
              </Button>
            </Link>
            <Link href="/packages" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View Packages
              </Button>
            </Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-secondary sm:w-auto">
                WhatsApp Us
              </Button>
            </a>
          </div>
        </Reveal>
        <Reveal delay={120} variant="scale" className="motion-card rounded-2xl border border-border bg-white p-6 shadow-soft">
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
        </Reveal>
      </div>
    </section>
  );
}
