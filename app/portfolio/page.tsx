import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MonitorSmartphone } from "lucide-react";

import { SectionHeader } from "@/components/layout/section-header";
import { Reveal, StaggeredReveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { solutionExamples } from "@/lib/marketing-content";

export const metadata: Metadata = {
  title: "Project Capabilities & Case Study Examples | WebCrafters Studio",
  description:
    "Selected project capabilities for Malaysian web development: corporate websites, admin dashboards, e-commerce websites, NGO portals, and custom web applications."
};

export default function PortfolioPage() {
  return (
    <main>
      <section className="dark-section page-section">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Project Capabilities"
              title="Selected solution examples"
              description="These examples show the types of websites, dashboards, and systems WebCrafters Studio can design and build without presenting them as completed client projects."
              tone="light"
              titleAs="h1"
            />
          </Reveal>
        </div>
      </section>

      <section className="page-section">
        <div className="container-shell">
          <StaggeredReveal className="grid gap-6 lg:grid-cols-2">
            {solutionExamples.map((item) => (
              <article key={item.title} className="motion-card premium-card overflow-hidden">
                <div className="border-b border-slate-200 bg-gradient-to-br from-slate-950 to-blue-950 p-6 text-white">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200">{item.clientType}</p>
                      <h2 className="mt-3 font-display text-2xl font-bold">{item.title}</h2>
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200">
                      <MonitorSmartphone className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="mt-6 grid gap-2 rounded-xl border border-white/10 bg-white/10 p-4">
                    <div className="h-3 w-2/3 rounded-full bg-cyan-200/80" />
                    <div className="h-3 w-full rounded-full bg-white/20" />
                    <div className="h-3 w-5/6 rounded-full bg-white/20" />
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      <div className="h-16 rounded-lg bg-cyan-300/20" />
                      <div className="h-16 rounded-lg bg-teal-300/20" />
                      <div className="h-16 rounded-lg bg-blue-300/20" />
                    </div>
                  </div>
                </div>
                <div className="grid gap-5 p-6 text-sm leading-6 text-slate-700">
                  <p>
                    <span className="font-semibold text-slate-950">Challenge:</span> {item.challenge}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-950">Solution:</span> {item.solution}
                  </p>
                  <div>
                    <p className="font-semibold text-slate-950">Features</p>
                    <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                      {item.features.map((feature) => (
                        <li key={feature} className="flex gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-950">Technology</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {item.technology.map((tech) => (
                        <span key={tech} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p>
                    <span className="font-semibold text-slate-950">Business value:</span> {item.outcome}
                  </p>
                </div>
              </article>
            ))}
          </StaggeredReveal>
          <Reveal className="mt-10 rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
            <h2 className="font-display text-2xl font-bold text-slate-950">Have a different workflow or website idea?</h2>
            <p className="mt-2 text-slate-600">
              Share your requirements and we will recommend whether you need a website package, a dashboard, or a custom web platform.
            </p>
            <Link href="/request-quotation" className="mt-5 inline-block">
              <Button>Request a Quotation</Button>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
