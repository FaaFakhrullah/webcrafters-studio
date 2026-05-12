import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How WebCrafters Studio collects and uses personal data submitted through website forms."
};

export default function PrivacyPage() {
  return (
    <main className="page-section">
      <div className="container-shell max-w-4xl rounded-xl border border-border bg-white p-6 shadow-soft">
        <h1 className="font-display text-3xl font-bold">Privacy Policy</h1>
        <div className="mt-6 space-y-5 text-sm leading-7 text-slate-700">
          <section>
            <h2 className="font-semibold text-slate-900">Data collected through forms</h2>
            <p>We collect contact details and project information submitted through quotation, consultation, and contact forms.</p>
          </section>
          <section>
            <h2 className="font-semibold text-slate-900">Purpose of data collection</h2>
            <p>Data is used to evaluate project requirements, prepare quotations, and provide relevant responses.</p>
          </section>
          <section>
            <h2 className="font-semibold text-slate-900">Contact usage</h2>
            <p>Submitted contact details are used only for project communication and service updates.</p>
          </section>
          <section>
            <h2 className="font-semibold text-slate-900">Email notification</h2>
            <p>Form submissions may trigger internal email notifications to authorized administrators.</p>
          </section>
          <section>
            <h2 className="font-semibold text-slate-900">Data retention placeholder</h2>
            <p>Retention periods are based on operational necessity, legal obligations, and contractual requirements.</p>
          </section>
          <section>
            <h2 className="font-semibold text-slate-900">User consent statement</h2>
            <p>By submitting forms on this site, users consent to the processing of provided data for service-related communication.</p>
          </section>
        </div>
      </div>
    </main>
  );
}