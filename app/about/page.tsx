import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ShieldCheck } from "lucide-react";

import { SectionHeader } from "@/components/layout/section-header";
import { Reveal, StaggeredReveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About WebCrafters Studio | Malaysian Web Development Agency",
  description:
    "WebCrafters Studio is a Malaysian web development agency focused on secure, maintainable websites, dashboards, and custom web applications for SMEs, NGOs, agencies, and organizations."
};

const principles = [
  "Security and validation should be designed into forms and systems early.",
  "A website should communicate business value clearly before it becomes visually impressive.",
  "Maintainable code matters because real businesses evolve after launch.",
  "Scope, timeline, and quotation should be transparent enough for non-technical decision makers.",
  "Mobile experience is not optional for Malaysian customers."
];

const audiences = ["SMEs and service businesses", "Startups and product teams", "NGOs and foundations", "Agencies and consultants", "Government-aligned organizations", "Internal operations teams"];

export default function AboutPage() {
  return (
    <main>
      <section className="dark-section page-section">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="About WebCrafters Studio"
              title="A practical Malaysian web development partner"
              description="We design and build secure, responsive, scalable, and maintainable websites, dashboards, and custom web applications for organizations that need stronger digital trust and better workflow."
              tone="light"
              titleAs="h1"
            />
          </Reveal>
        </div>
      </section>

      <section className="page-section">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <Reveal className="premium-card p-6 md:p-8">
            <h2 className="font-display text-3xl font-bold text-slate-950">Who we are</h2>
            <p className="mt-4 leading-8 text-slate-600">
              WebCrafters Studio is positioned for Malaysian businesses and organizations that need more than a generic website.
              We help turn business requirements into professional web experiences, admin dashboards, and digital systems that
              are easier to maintain and extend.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Our work focuses on clarity, secure implementation, responsive design, and long-term usability. The goal is not only
              to launch pages, but to create a dependable digital foundation for trust, enquiries, and operations.
            </p>
          </Reveal>
          <Reveal delay={100} className="premium-card bg-slate-50 p-6 md:p-8">
            <ShieldCheck className="h-10 w-10 text-secondary" />
            <h2 className="mt-4 font-display text-2xl font-bold text-slate-950">Mission</h2>
            <p className="mt-3 text-slate-600">
              Help Malaysian SMEs, NGOs, agencies, startups, and organizations adopt professional digital platforms with clear
              scope, trustworthy engineering, and practical support after launch.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="page-section bg-slate-50">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Who We Help"
              title="Built for Malaysian organizations with real operating needs"
              description="Whether you need a public website, an admin dashboard, or an internal workflow, the structure should fit how your team actually works."
            />
          </Reveal>
          <StaggeredReveal className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((audience) => (
              <div key={audience} className="motion-card flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-soft">
                <CheckCircle2 className="h-5 w-5 text-secondary" />
                <p className="font-semibold text-slate-800">{audience}</p>
              </div>
            ))}
          </StaggeredReveal>
        </div>
      </section>

      <section className="page-section">
        <div className="container-shell grid gap-8 lg:grid-cols-2">
          <Reveal>
            <SectionHeader
              eyebrow="Philosophy"
              title="Security, maintainability, and business clarity"
              description="We choose practical engineering and clear UX over decorative complexity."
            />
          </Reveal>
          <StaggeredReveal className="grid gap-3">
            {principles.map((principle) => (
              <div key={principle} className="motion-card rounded-xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700 shadow-soft">
                {principle}
              </div>
            ))}
          </StaggeredReveal>
        </div>
      </section>

      <section className="page-section dark-section">
        <div className="container-shell grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white">Need a website or system that can grow with your organization?</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Share your goals and we will help you choose the right scope, package, and implementation path.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Link href="/request-quotation">
              <Button className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">Request Quotation</Button>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
