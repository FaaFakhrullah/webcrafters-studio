export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { ContactForm } from "@/components/forms/contact-form";
import { SectionHeader } from "@/components/layout/section-header";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL, CONTACT_PHONE, createWhatsAppLink, WHATSAPP_NUMBER } from "@/lib/constants";
import { getSiteSetting } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact WebCrafters Studio | Website Development Malaysia",
  description:
    "Contact WebCrafters Studio for Malaysian website development, web design, e-commerce websites, admin dashboards, maintenance, and custom web application enquiries."
};

export default async function ContactPage() {
  const settings = await getSiteSetting();
  const email = settings?.email || CONTACT_EMAIL;
  const phone = settings?.phone || CONTACT_PHONE;
  const address = settings?.address || "Kuala Lumpur, Malaysia (remote support nationwide)";
  const businessHours = settings?.businessHours || "Mon-Fri, 9:00 AM - 6:00 PM";
  const whatsappLink = createWhatsAppLink(settings?.whatsappNumber || WHATSAPP_NUMBER);

  const contactItems = [
    { icon: Mail, label: "Email", value: email },
    { icon: Phone, label: "Phone", value: phone },
    { icon: Clock, label: "Business hours", value: businessHours },
    { icon: MapPin, label: "Service area", value: "Malaysia-wide remote support. Kuala Lumpur by appointment." }
  ];

  return (
    <main>
      <section className="dark-section page-section">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Contact"
              title="Let us discuss your website or web system"
              description="Send your enquiry, request guidance, or share project requirements. We will review your message and respond with a practical next step."
              tone="light"
              titleAs="h1"
            />
          </Reveal>
        </div>
      </section>

      <section className="page-section">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="space-y-5">
              {contactItems.map((item) => (
                <div key={item.label} className="premium-card flex gap-4 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">{item.label}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{item.value}</p>
                  </div>
                </div>
              ))}
              <div className="premium-card border-cyan-200 bg-cyan-50 p-5">
                <MessageCircle className="h-7 w-7 text-cyan-700" />
                <h2 className="mt-3 font-display text-2xl font-bold text-slate-950">Prefer WhatsApp?</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Send your project type, website URL if any, preferred timeline, and budget range so we can guide you efficiently.
                </p>
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-4 inline-block">
                  <Button className="bg-teal-500 hover:bg-teal-600">WhatsApp Us</Button>
                </a>
              </div>
              <p className="text-sm leading-6 text-slate-500">
                Mailing/location reference: {address}
              </p>
            </div>
          </Reveal>
          <Reveal delay={100} className="premium-card p-6">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
