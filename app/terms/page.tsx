import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | WebCrafters Studio",
  description:
    "Terms of Service for WebCrafters Studio website development, quotation validity, payment terms, revisions, responsibilities, maintenance, intellectual property, and liability."
};

const terms = [
  {
    title: "Scope of services",
    body: "Services may include website development, landing pages, e-commerce websites, dashboards, custom web applications, maintenance, SEO setup, hosting guidance, and security hardening. Final deliverables follow the approved quotation or scope document."
  },
  {
    title: "Quotation validity",
    body: "Unless stated otherwise, quotations are generally valid for 30 days from the issue date. Changes to requirements, timeline, integrations, or content may require a revised quotation."
  },
  {
    title: "Payment terms",
    body: "Payment structure is confirmed in the quotation or agreement. Projects may use milestone payments, deposits, or staged billing depending on scope."
  },
  {
    title: "Revision policy",
    body: "Revision rounds are based on the selected package or approved scope. Requests outside the agreed scope, major redesigns, or new features may be quoted separately."
  },
  {
    title: "Client responsibilities",
    body: "Clients are responsible for providing accurate information, timely feedback, approved content, brand assets, account access where required, and any legal permissions for supplied materials."
  },
  {
    title: "Timeline dependency",
    body: "Delivery timelines depend on requirement clarity, content readiness, client feedback, third-party services, integrations, and approval speed."
  },
  {
    title: "Maintenance and support",
    body: "Post-launch support and ongoing maintenance require an active maintenance agreement or separate support quotation unless included in the project scope."
  },
  {
    title: "Intellectual property ownership",
    body: "Ownership of approved final deliverables is transferred according to the project agreement after full payment. Third-party assets, libraries, plugins, templates, and services remain subject to their own licenses."
  },
  {
    title: "Limitation of liability",
    body: "WebCrafters Studio is not liable for indirect losses, third-party service outages, hosting provider issues, platform policy changes, or problems caused by unauthorized modifications outside our control."
  }
];

export default function TermsPage() {
  return (
    <main className="page-section">
      <div className="container-shell max-w-4xl">
        <article className="premium-card p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary">Terms</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-slate-950">Terms of Service</h1>
          <p className="mt-4 leading-7 text-slate-600">
            These terms provide general guidance for working with WebCrafters Studio. Specific project details are confirmed
            through written quotation, scope, invoice, or agreement.
          </p>
          <div className="mt-8 space-y-6 text-sm leading-7 text-slate-700">
            {terms.map((section) => (
              <section key={section.title}>
                <h2 className="font-display text-xl font-bold text-slate-950">{section.title}</h2>
                <p className="mt-2">{section.body}</p>
              </section>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
