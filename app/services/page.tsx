import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Code2, FileSearch, LayoutDashboard, Lock, Search, ShieldCheck, ShoppingCart, Smartphone, Wrench } from "lucide-react";

import { SectionHeader } from "@/components/layout/section-header";
import { Reveal, StaggeredReveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { premiumServices } from "@/lib/marketing-content";

export const metadata: Metadata = {
  title: "Website Development Services Malaysia | WebCrafters Studio",
  description:
    "Premium web design Malaysia, SME website Malaysia, e-commerce website Malaysia, admin dashboard development, custom web application Malaysia, SEO setup, maintenance, and security hardening."
};

const icons = [Smartphone, FileSearch, ShoppingCart, Search, Code2, LayoutDashboard, ArrowRight, Wrench, Search, ShieldCheck];

export default function ServicesPage() {
  return (
    <main>
      <section className="dark-section page-section">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Services"
              title="Premium website and digital solution services"
              description="Benefit-driven web development for Malaysian SMEs, startups, NGOs, agencies, and organizations that need stronger trust, better workflow, and maintainable systems."
              tone="light"
              titleAs="h1"
            />
          </Reveal>
        </div>
      </section>

      <section className="page-section">
        <div className="container-shell">
          <StaggeredReveal className="grid gap-6 lg:grid-cols-2">
            {premiumServices.map((service, index) => {
              const Icon = icons[index] || Lock;
              return (
                <article key={service.slug} className="motion-card premium-card flex h-full flex-col p-6">
                  <div className="flex flex-1 flex-col gap-5 sm:flex-row">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col">
                      <p className="text-xs font-semibold uppercase tracking-wide text-secondary">{service.category}</p>
                      <h2 className="mt-2 font-display text-2xl font-bold text-slate-950">{service.title}</h2>
                      <p className="mt-3 text-slate-600">{service.description}</p>
                      <div className="mt-5 grid gap-4 md:grid-cols-2">
                        <div>
                          <h3 className="text-sm font-semibold text-slate-950">Who it is for</h3>
                          <p className="mt-1 text-sm leading-6 text-slate-600">{service.whoFor}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-slate-950">Business benefit</h3>
                          <p className="mt-1 text-sm leading-6 text-slate-600">{service.benefit}</p>
                        </div>
                      </div>
                      <div className="mt-5">
                        <h3 className="text-sm font-semibold text-slate-950">Key features</h3>
                        <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex gap-2 text-sm text-slate-700">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-auto pt-6">
                        <div className="grid gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-[minmax(0,1fr)_10.5rem] sm:items-center">
                          <p className="min-w-0 text-sm leading-6 text-slate-600">
                          Suggested path: <span className="font-semibold text-slate-950">{service.suggestedPackage}</span>
                          </p>
                          <Link href="/request-quotation" className="w-full">
                            <Button size="sm" className="h-10 w-full whitespace-nowrap px-4 text-center">
                              Request Scope Review
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </StaggeredReveal>
        </div>
      </section>
    </main>
  );
}
