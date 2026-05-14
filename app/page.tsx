import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  FileSearch,
  Gauge,
  LayoutDashboard,
  LineChart,
  Lock,
  RefreshCcw,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Wrench
} from "lucide-react";

import { CTASection } from "@/components/layout/cta-section";
import { SectionHeader } from "@/components/layout/section-header";
import { Reveal, StaggeredReveal } from "@/components/motion/reveal";
import { FAQAccordion } from "@/components/marketing/faq-accordion";
import { HeroSection } from "@/components/marketing/hero-section";
import { PackageCard } from "@/components/marketing/package-card";
import { ProcessSteps } from "@/components/marketing/process-steps";
import { TrustBadges } from "@/components/marketing/trust-badges";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { expandedFaqs, premiumPackages, premiumServices, solutionExamples } from "@/lib/marketing-content";

export const metadata: Metadata = {
  title: "Premium Website Development Malaysia | WebCrafters Studio",
  description:
    "WebCrafters Studio builds secure, responsive websites, admin dashboards, e-commerce websites, and custom web applications for Malaysian SMEs, NGOs, agencies, and organizations.",
  openGraph: {
    title: "Premium Website & Web System Development for Malaysian Businesses",
    description:
      "Secure, responsive, scalable, and maintainable websites, dashboards, and custom web applications for Malaysian organizations."
  },
  twitter: {
    card: "summary_large_image",
    title: "WebCrafters Studio | Website Development Malaysia",
    description: "Premium website development, admin dashboards, maintenance, and custom web applications in Malaysia."
  }
};

const problems = [
  "Outdated website that weakens trust",
  "Poor mobile experience",
  "No clear lead generation path",
  "Difficult content updates",
  "Weak SEO foundation",
  "No admin panel or workflow visibility",
  "Security concerns around forms and access"
];

const solutions = [
  "Clean modern UI with responsive layouts",
  "Conversion-focused sections and CTA flow",
  "Secure forms with validation and rate limiting",
  "SEO-ready pages, metadata, sitemap, and headings",
  "Scalable architecture for future features",
  "Admin dashboard support for internal workflows",
  "Maintenance planning for long-term reliability"
];

const whyChooseUs = [
  "Malaysian business understanding",
  "Secure development practices",
  "Maintainable codebase structure",
  "Transparent pricing and scope",
  "Scalable features for future growth",
  "Website and custom system expertise",
  "Long-term maintenance support"
];

const serviceIcons = [BriefcaseBusiness, FileSearch, ShoppingCart, LineChart, Code2, LayoutDashboard, RefreshCcw, Wrench, Search, ShieldCheck];

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustBadges />

      <section className="page-section">
        <div className="container-shell grid gap-8 lg:grid-cols-2">
          <Reveal className="premium-card p-6 md:p-8">
            <Badge variant="secondary">Common Problems</Badge>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-950">When a website is unclear, trust leaks quietly.</h2>
            <p className="mt-3 text-slate-600">
              Many Malaysian organizations already have a website, but it no longer reflects their real capability, workflow, or
              customer expectations.
            </p>
            <div className="mt-6 grid gap-3">
              {problems.map((problem) => (
                <div key={problem} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-500" />
                  {problem}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100} className="premium-card border-cyan-200/80 bg-gradient-to-br from-slate-950 to-blue-950 p-6 text-white md:p-8">
            <Badge className="bg-cyan-300 text-slate-950">Our Solution</Badge>
            <h2 className="mt-4 font-display text-3xl font-bold">Build a digital platform that feels credible and works harder.</h2>
            <p className="mt-3 text-slate-300">
              WebCrafters Studio combines UI/UX, secure engineering, SEO foundations, and maintainable systems so your digital
              presence supports trust, enquiries, and operational growth.
            </p>
            <div className="mt-6 grid gap-3">
              {solutions.map((solution) => (
                <div key={solution} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/10 p-3 text-sm text-slate-100">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                  {solution}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page-section bg-slate-50">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Services"
              title="Digital solutions built for trust, workflow, and growth"
              description="From public websites to secure dashboards, we design the customer-facing and internal systems Malaysian organizations need."
            />
          </Reveal>
          <StaggeredReveal className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {premiumServices.map((service, index) => {
              const Icon = serviceIcons[index] || Sparkles;
              return (
                <article key={service.slug} className="motion-card h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-secondary">{service.category}</p>
                  <h3 className="mt-2 font-display text-lg font-bold text-slate-950">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
                  <Link href="/services" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Explore service <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              );
            })}
          </StaggeredReveal>
        </div>
      </section>

      <section className="page-section">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Packages"
              title="Clear packages for different levels of digital maturity"
              description="Start small with a credible website or scope a custom platform when your team needs dashboards, data, and workflow support."
            />
          </Reveal>
          <StaggeredReveal className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {premiumPackages.map((pkg) => (
              <PackageCard
                key={pkg.slug}
                name={pkg.name}
                description={pkg.description}
                features={[...pkg.features]}
                priceLabel={pkg.priceLabel}
                deliveryTimeline={pkg.timeline}
                bestFor={pkg.bestFor}
                isPopular={pkg.isPopular}
              />
            ))}
          </StaggeredReveal>
          <Reveal className="mt-7">
            <Link href="/packages">
              <Button variant="outline">Compare all package details</Button>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="page-section dark-section">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Capabilities"
              title="Selected solution examples"
              description="These examples describe the type of systems and websites we can build without presenting them as completed client projects."
              tone="light"
            />
          </Reveal>
          <StaggeredReveal className="mt-8 grid gap-5 md:grid-cols-2">
            {solutionExamples.map((example) => (
              <article key={example.title} className="glass-card h-full p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200">{example.clientType}</p>
                <h3 className="mt-3 font-display text-2xl font-bold text-white">{example.title}</h3>
                <div className="mt-5 grid gap-4 text-sm leading-6 text-slate-300">
                  <p>
                    <span className="font-semibold text-white">Challenge:</span> {example.challenge}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Solution:</span> {example.solution}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Business value:</span> {example.outcome}
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {example.technology.map((tech) => (
                    <span key={tech} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </StaggeredReveal>
        </div>
      </section>

      <section className="page-section bg-slate-50">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Process"
              title="A clear delivery process from discovery to maintenance"
              description="Premium does not mean vague. We keep scope, requirements, decisions, and launch steps clear."
            />
          </Reveal>
          <div className="mt-8">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeader
              eyebrow="Why Choose Us"
              title="A practical technology partner for Malaysian organizations"
              description="We focus on websites and systems that are easier to trust, maintain, and extend as your organization grows."
            />
          </Reveal>
          <StaggeredReveal className="grid gap-3 sm:grid-cols-2">
            {whyChooseUs.map((item) => (
              <div key={item} className="motion-card flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-soft">
                <Gauge className="h-5 w-5 text-secondary" />
                <p className="text-sm font-semibold text-slate-700">{item}</p>
              </div>
            ))}
          </StaggeredReveal>
        </div>
      </section>

      <section className="page-section bg-slate-50">
        <div className="container-shell max-w-5xl">
          <Reveal>
            <SectionHeader
              eyebrow="FAQ"
              title="Useful answers before you request a quotation"
              description="A quick starting point for cost, timeline, hosting, maintenance, SEO, and custom web application questions."
            />
          </Reveal>
          <Reveal className="mt-8">
            <FAQAccordion
              items={expandedFaqs.slice(0, 6).map(([question, answer], index) => ({
                id: index + 1,
                question,
                answer
              }))}
            />
          </Reveal>
          <Reveal className="mt-6">
            <Link href="/faq">
              <Button variant="outline">View all FAQs</Button>
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Ready to build a professional website or custom web system?"
        description="Tell us your goals, required features, budget range, and timeline. We will review your requirements and prepare a clear next step."
      />
    </main>
  );
}
