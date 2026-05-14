import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

import { QuotationForm } from "@/components/forms/quotation-form";
import { SectionHeader } from "@/components/layout/section-header";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Request Website Quotation Malaysia | WebCrafters Studio",
  description:
    "Request a quotation for website development, SME websites, e-commerce, admin dashboards, custom web applications, maintenance, and digital solutions in Malaysia."
};

const reviewPoints = ["Project goals and target users", "Pages, features, and integrations", "Budget range and timeline", "Recommended package or custom scope"];

export default function RequestQuotationPage() {
  return (
    <main>
      <section className="dark-section page-section">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Quotation"
              title="Request a website or web system quotation"
              description="Share your requirements and we will review the scope, timeline, and best-fit implementation path before preparing the next step."
              tone="light"
              titleAs="h1"
            />
          </Reveal>
        </div>
      </section>

      <section className="page-section">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal className="space-y-5">
            <div className="premium-card p-6">
              <h2 className="font-display text-2xl font-bold text-slate-950">What we review</h2>
              <div className="mt-5 grid gap-3">
                {reviewPoints.map((point) => (
                  <div key={point} className="flex gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
            <div className="premium-card border-cyan-200 bg-cyan-50 p-6">
              <h2 className="font-display text-xl font-bold text-slate-950">Response expectation</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                After submission, we will review your requirements and contact you within 1-2 working days where possible.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} className="premium-card p-6">
            <QuotationForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
