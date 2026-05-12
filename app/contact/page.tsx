import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/contact-form";
import { SectionHeader } from "@/components/layout/section-header";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL, CONTACT_PHONE, WHATSAPP_LINK } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact WebCrafters Studio",
  description: "Contact WebCrafters Studio for website development inquiries, support, or project consultations."
};

export default function ContactPage() {
  return (
    <main className="page-section">
      <div className="container-shell grid gap-8 lg:grid-cols-2">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Let us discuss your project"
            description="Reach us through form, email, phone, or WhatsApp."
          />
          <div className="mt-6 space-y-3 text-sm text-slate-700">
            <p>Email: {CONTACT_EMAIL}</p>
            <p>Phone: {CONTACT_PHONE}</p>
            <p>Business hours: Mon-Fri, 9:00 AM - 6:00 PM</p>
            <p>Location: Kuala Lumpur, Malaysia (appointment basis)</p>
          </div>
          <div className="mt-5">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              <Button className="bg-secondary">WhatsApp Us</Button>
            </a>
          </div>
          <div className="mt-5 rounded-xl border border-border bg-white p-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-800">Social Media</p>
            <p className="mt-1">Facebook, Instagram, and LinkedIn links can be managed from admin site settings.</p>
          </div>
          <div className="mt-4 rounded-xl border border-border bg-white p-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-800">Need help before filling the form?</p>
            <p className="mt-1">Share your business goals, preferred timeline, and budget range so we can guide you efficiently.</p>
          </div>
          <div className="mt-4 rounded-xl border border-border bg-slate-50 p-4 text-sm text-slate-600">
            OpenStreetMap placeholder: Add your embedded map or static location image here.
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}