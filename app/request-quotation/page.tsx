import type { Metadata } from "next";

import { QuotationForm } from "@/components/forms/quotation-form";
import { SectionHeader } from "@/components/layout/section-header";

export const metadata: Metadata = {
  title: "Request Website Quotation",
  description: "Submit your project requirements to receive a transparent quotation for website or system development."
};

export default function RequestQuotationPage() {
  return (
    <main className="page-section">
      <div className="container-shell max-w-4xl">
        <SectionHeader
          eyebrow="Quotation"
          title="Request a project quotation"
          description="Share your requirements and we will prepare a clear proposal, timeline, and price estimate."
        />
        <div className="mt-8 rounded-2xl border border-border bg-white p-6 shadow-soft">
          <QuotationForm />
        </div>
      </div>
    </main>
  );
}