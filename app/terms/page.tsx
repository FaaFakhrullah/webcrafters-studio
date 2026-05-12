import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Service terms, quotation validity, payment placeholders, revisions, and maintenance disclaimers."
};

export default function TermsPage() {
  return (
    <main className="page-section">
      <div className="container-shell max-w-4xl rounded-xl border border-border bg-white p-6 shadow-soft">
        <h1 className="font-display text-3xl font-bold">Terms and Conditions</h1>
        <div className="mt-6 space-y-5 text-sm leading-7 text-slate-700">
          <section>
            <h2 className="font-semibold text-slate-900">Service scope disclaimer</h2>
            <p>Project deliverables follow approved scope documents. Additional requests may require change orders.</p>
          </section>
          <section>
            <h2 className="font-semibold text-slate-900">Quotation validity</h2>
            <p>Quotations are typically valid for 30 days unless otherwise stated in writing.</p>
          </section>
          <section>
            <h2 className="font-semibold text-slate-900">Payment terms placeholder</h2>
            <p>Payment structure may follow milestone billing and is finalized in the signed agreement.</p>
          </section>
          <section>
            <h2 className="font-semibold text-slate-900">Revision policy placeholder</h2>
            <p>Reasonable revisions are covered according to package and scope terms. Major rework may be quoted separately.</p>
          </section>
          <section>
            <h2 className="font-semibold text-slate-900">Delivery timeline disclaimer</h2>
            <p>Timeline estimates depend on project complexity, response time, and content readiness.</p>
          </section>
          <section>
            <h2 className="font-semibold text-slate-900">Maintenance disclaimer</h2>
            <p>Ongoing maintenance requires an active maintenance agreement or ad-hoc support quotation.</p>
          </section>
        </div>
      </div>
    </main>
  );
}