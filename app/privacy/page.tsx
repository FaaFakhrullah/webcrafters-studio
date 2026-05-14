import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy & PDPA Notice | WebCrafters Studio",
  description:
    "Privacy Policy and PDPA notice explaining how WebCrafters Studio collects, uses, stores, and protects contact and quotation form data."
};

const sections = [
  {
    title: "Personal data we collect",
    body: "When you submit a contact, consultation, or quotation form, we may collect your name, email address, phone or WhatsApp number, organization name, project type, budget range, timeline, existing website URL, project requirements, IP address, and browser information."
  },
  {
    title: "Why we collect it",
    body: "We use this information to understand your requirements, respond to enquiries, prepare quotations, schedule discussions, provide support, improve our services, and maintain basic security controls for public forms."
  },
  {
    title: "Contact and quotation form data",
    body: "Form submissions may be stored in our website database and may trigger internal email notifications to authorized team members. We do not sell your submitted personal data."
  },
  {
    title: "Data retention",
    body: "We keep enquiry and quotation records only for as long as reasonably needed for business follow-up, service delivery, legal, accounting, security, or operational purposes."
  },
  {
    title: "Your rights",
    body: "You may request access, correction, or deletion of your personal data where applicable under Malaysian privacy expectations and the Personal Data Protection Act 2010. Some records may need to be retained where required for legal or operational reasons."
  },
  {
    title: "Privacy requests",
    body: "For privacy-related requests, contact WebCrafters Studio using the email or contact details shown on this website."
  }
];

export default function PrivacyPage() {
  return (
    <main className="page-section">
      <div className="container-shell max-w-4xl">
        <article className="premium-card p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary">PDPA Notice</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-slate-950">Privacy Policy</h1>
          <p className="mt-4 leading-7 text-slate-600">
            This notice explains how WebCrafters Studio handles personal data submitted through this website for enquiries,
            quotations, consultations, and service communication.
          </p>
          <div className="mt-8 space-y-6 text-sm leading-7 text-slate-700">
            {sections.map((section) => (
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
