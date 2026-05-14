export const dynamic = "force-dynamic";
import Link from "next/link";

import { CTASection } from "@/components/layout/cta-section";
import { SectionHeader } from "@/components/layout/section-header";
import { Reveal, StaggeredReveal } from "@/components/motion/reveal";
import { FAQAccordion } from "@/components/marketing/faq-accordion";
import { HeroSection } from "@/components/marketing/hero-section";
import { PackageCard } from "@/components/marketing/package-card";
import { PortfolioCard } from "@/components/marketing/portfolio-card";
import { ProcessSteps } from "@/components/marketing/process-steps";
import { ServiceCard } from "@/components/marketing/service-card";
import { TemplateThemeShowcase } from "@/components/marketing/template-theme-showcase";
import { TestimonialCard } from "@/components/marketing/testimonial-card";
import { TrustBadges } from "@/components/marketing/trust-badges";
import { Button } from "@/components/ui/button";
import {
  getActiveFaqs,
  getActivePackages,
  getActivePortfolio,
  getActiveServices,
  getActiveTemplateThemes,
  getActiveTestimonials
} from "@/lib/data";
import { toArray } from "@/lib/utils";

export default async function HomePage() {
  const [services, packagesData, portfolio, testimonials, faqs, templateThemes] = await Promise.all([
    getActiveServices(6),
    getActivePackages(),
    getActivePortfolio(true),
    getActiveTestimonials(),
    getActiveFaqs(6),
    getActiveTemplateThemes()
  ]);

  return (
    <main>
      <HeroSection />
      <TrustBadges />

      <section className="page-section">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Services"
              title="Secure, responsive, and scalable web solutions"
              description="Website solutions designed for Malaysian businesses, agencies, and organizations."
            />
          </Reveal>
          <StaggeredReveal className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                features={toArray(service.features) as string[]}
                timeline={service.timeline}
                startingPrice={service.startingPrice}
                category={service.category}
              />
            ))}
          </StaggeredReveal>
          <Reveal className="mt-6">
            <Link href="/services">
              <Button variant="outline">View all services</Button>
            </Link>
          </Reveal>
        </div>
      </section>

      <TemplateThemeShowcase
        mode="preview"
        items={templateThemes.map((item: any) => ({
          id: item.id,
          slug: item.slug,
          code: item.code,
          name: item.name,
          category: item.category,
          description: item.description,
          templateUrl: item.templateUrl,
          sourceUrl: item.sourceUrl || `https://templatemo.com/tm-${item.code.replace("TM ", "")}-${item.slug}`,
          previewImageUrl: item.previewImageUrl || `/images/template-themes/${item.slug}.jpg`,
          previewClass: item.previewClass
        }))}
      />

      <section className="page-section bg-slate-50">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Our Process"
              title="From consultation to maintenance"
              description="A clear development process for predictable delivery and quality outcomes."
            />
          </Reveal>
          <div className="mt-8">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Featured Portfolio"
              title="Recent project highlights"
              description="From company profiles to custom dashboards, we help organizations move online with confidence."
            />
          </Reveal>
          <StaggeredReveal className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((project) => (
              <PortfolioCard
                key={project.id}
                title={project.title}
                category={project.category}
                description={project.description}
                imageUrl={project.imageUrl}
                technologies={toArray(project.technologies) as string[]}
              />
            ))}
          </StaggeredReveal>
        </div>
      </section>

      <section className="page-section bg-slate-50">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Packages"
              title="Transparent package options"
              description="Choose a package that matches your goals and scale as your business grows."
            />
          </Reveal>
          <StaggeredReveal className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {packagesData.map((pkg) => (
              <PackageCard
                key={pkg.id}
                name={pkg.name}
                description={pkg.description}
                features={toArray(pkg.features) as string[]}
                priceLabel={pkg.priceLabel}
                deliveryTimeline={pkg.deliveryTimeline}
                bestFor={pkg.bestFor}
                isPopular={pkg.isPopular}
              />
            ))}
          </StaggeredReveal>
        </div>
      </section>

      <section className="page-section">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Testimonials"
              title="Trusted by Malaysian teams"
              description="Client feedback from business, operational, and organizational digital projects."
            />
          </Reveal>
          <StaggeredReveal className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </StaggeredReveal>
        </div>
      </section>

      <section className="page-section bg-slate-50">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="FAQ"
              title="Answers before we start"
              description="Need quick clarity before requesting a quotation? Start here."
            />
          </Reveal>
          <Reveal className="mt-8">
            <FAQAccordion items={faqs.map((faq) => ({ id: faq.id, question: faq.question, answer: faq.answer }))} />
          </Reveal>
          <Reveal className="mt-6">
            <Link href="/faq">
              <Button variant="outline">View all FAQs</Button>
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Ready to launch your next website or system?"
        description="Tell us your goals and requirements. We will prepare a clear scope, timeline, and quotation."
      />
    </main>
  );
}
