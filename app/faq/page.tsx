export const dynamic = "force-dynamic";
import type { Metadata } from "next";

import { SectionHeader } from "@/components/layout/section-header";
import { FAQAccordion } from "@/components/marketing/faq-accordion";
import { getActiveFaqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to common questions about timelines, pricing, hosting, maintenance, and custom feature development."
};

export default async function FAQPage() {
  const faqs = await getActiveFaqs();

  return (
    <main className="page-section">
      <div className="container-shell max-w-4xl">
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" description="Everything you need to know before starting a project with us." />
        <div className="mt-8">
          <FAQAccordion items={faqs.map((faq) => ({ id: faq.id, question: faq.question, answer: faq.answer }))} />
        </div>
      </div>
    </main>
  );
}