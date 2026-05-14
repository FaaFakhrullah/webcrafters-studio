import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Maintenance Policy | WebCrafters Studio",
  description:
    "Website maintenance policy covering updates, backups, security updates, content updates, response expectations, exclusions, and emergency fixes."
};

const policies = [
  {
    title: "What maintenance can include",
    body: "Maintenance may include minor content updates, plugin or dependency checks where applicable, uptime review, backup checks, form testing, small bug fixes, basic performance review, and security update guidance."
  },
  {
    title: "What is excluded",
    body: "Maintenance does not automatically include major redesigns, new modules, custom integrations, copywriting, photography, paid advertising, advanced SEO campaigns, hosting fees, domain renewals, or third-party subscription costs unless stated in writing."
  },
  {
    title: "Support response expectation",
    body: "Standard support requests are reviewed during business hours. Urgent issues are prioritized based on impact, active agreement, and availability. Response time is not the same as full resolution time."
  },
  {
    title: "Backups",
    body: "Backup handling depends on the hosting environment and maintenance plan. Where possible, we recommend scheduled backups and periodic restore checks for business-critical sites."
  },
  {
    title: "Security updates",
    body: "Security maintenance may include dependency review, configuration checks, access review, and recommended patches. No website can be guaranteed completely risk-free, but regular maintenance reduces avoidable exposure."
  },
  {
    title: "Content updates",
    body: "Minor content changes may include text edits, image replacement, small page updates, and contact detail changes. Larger content restructuring or new pages may be quoted separately."
  },
  {
    title: "Emergency fixes",
    body: "Emergency fixes are handled based on severity, access availability, hosting condition, and active support arrangement. Issues caused by third-party outages or unauthorized modifications may require additional investigation."
  }
];

export default function MaintenancePolicyPage() {
  return (
    <main className="page-section">
      <div className="container-shell max-w-4xl">
        <article className="premium-card p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary">Maintenance</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-slate-950">Website Maintenance Policy</h1>
          <p className="mt-4 leading-7 text-slate-600">
            This policy explains how ongoing website maintenance and support are generally handled for WebCrafters Studio projects.
            Specific inclusions depend on the selected maintenance plan or written agreement.
          </p>
          <div className="mt-8 space-y-6 text-sm leading-7 text-slate-700">
            {policies.map((section) => (
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
