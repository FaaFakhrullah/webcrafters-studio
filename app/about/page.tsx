import type { Metadata } from "next";
import Link from "next/link";

import { SectionHeader } from "@/components/layout/section-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About WebCrafters Studio",
  description: "Learn about our mission, values, delivery process, and expertise for Malaysian web development projects."
};

export default function AboutPage() {
  return (
    <main className="page-section">
      <div className="container-shell space-y-10">
        <SectionHeader
          eyebrow="About Us"
          title="Modern web solutions with practical business outcomes"
          description="WebCrafters Studio is a Malaysian-focused agency delivering secure, scalable websites and systems for organizations of different sizes."
        />

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-white p-6 shadow-soft">
            <h2 className="font-display text-2xl font-bold">Mission</h2>
            <p className="mt-2 text-slate-600">Help organizations adopt digital platforms with confidence through clear execution and trustworthy engineering.</p>
          </div>
          <div className="rounded-xl border border-border bg-white p-6 shadow-soft">
            <h2 className="font-display text-2xl font-bold">Vision</h2>
            <p className="mt-2 text-slate-600">Be a reliable technology partner for SMEs, agencies, NGOs, and corporate teams across Malaysia.</p>
          </div>
        </section>

        <section className="rounded-xl border border-border bg-white p-6 shadow-soft">
          <h2 className="font-display text-2xl font-bold">Values</h2>
          <ul className="mt-3 grid gap-2 text-slate-700 md:grid-cols-2">
            <li>- Security-first development discipline</li>
            <li>- Transparent quotation and scope communication</li>
            <li>- User-focused design and accessibility</li>
            <li>- Reliable delivery and maintainable codebase</li>
          </ul>
        </section>

        <section className="rounded-xl border border-border bg-white p-6 shadow-soft">
          <h2 className="font-display text-2xl font-bold">Skills and Technologies</h2>
          <p className="mt-2 text-slate-600">Next.js, TypeScript, MySQL, Prisma, Docker, REST APIs, admin dashboards, security hardening, SEO foundational setup.</p>
        </section>

        <section className="rounded-xl border border-border bg-white p-6 shadow-soft">
          <h2 className="font-display text-2xl font-bold">Who We Serve</h2>
          <p className="mt-2 text-slate-600">SMEs, startups, freelancers, government agencies, organizations, NGOs, and corporate clients requiring reliable web systems.</p>
        </section>

        <section className="rounded-xl border border-border bg-white p-6 shadow-soft">
          <h2 className="font-display text-2xl font-bold">Development Philosophy</h2>
          <p className="mt-2 text-slate-600">Build with clarity, scale with confidence, and deliver technology that supports measurable business goals.</p>
          <Link href="/request-quotation" className="mt-5 inline-block">
            <Button>Request Quotation</Button>
          </Link>
        </section>
      </div>
    </main>
  );
}