import type { Metadata } from "next";

import { ConsultationForm } from "@/components/forms/consultation-form";
import { SectionHeader } from "@/components/layout/section-header";

export const metadata: Metadata = {
  title: "Book Consultation",
  description: "Book a consultation session for your website, e-commerce, dashboard, or custom web application project."
};

export default function ConsultationPage() {
  return (
    <main className="page-section">
      <div className="container-shell max-w-4xl">
        <SectionHeader
          eyebrow="Consultation"
          title="Book a consultation"
          description="Choose your preferred method, date, and project context."
        />
        <div className="mt-8 rounded-2xl border border-border bg-white p-6 shadow-soft">
          <ConsultationForm />
        </div>
      </div>
    </main>
  );
}