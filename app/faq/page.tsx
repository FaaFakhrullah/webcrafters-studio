import type { Metadata } from "next";

import { SectionHeader } from "@/components/layout/section-header";
import { FAQAccordion } from "@/components/marketing/faq-accordion";
import { Reveal } from "@/components/motion/reveal";
import { expandedFaqs } from "@/lib/marketing-content";

export const metadata: Metadata = {
  title: "Website Development FAQ Malaysia | WebCrafters Studio",
  description:
    "Answers about website cost in Malaysia, timelines, hosting, redesign, admin panels, custom web applications, maintenance, SEO, bilingual websites, and quotation preparation."
};

export default function FAQPage() {
  return (
    <main>
      <section className="dark-section page-section">
        <div className="container-shell max-w-5xl">
          <Reveal>
            <SectionHeader
              eyebrow="FAQ"
              title="Frequently asked questions"
              description="Clear answers before you request a website, dashboard, e-commerce store, maintenance plan, or custom web application quotation."
              tone="light"
              titleAs="h1"
            />
          </Reveal>
        </div>
      </section>
      <section className="page-section">
        <div className="container-shell max-w-5xl">
          <Reveal>
            <FAQAccordion
              items={expandedFaqs.map(([question, answer], index) => ({
                id: index + 1,
                question,
                answer
              }))}
            />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
