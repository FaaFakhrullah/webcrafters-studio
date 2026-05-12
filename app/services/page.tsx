export const dynamic = "force-dynamic";
import type { Metadata } from "next";

import { SectionHeader } from "@/components/layout/section-header";
import { ServiceCard } from "@/components/marketing/service-card";
import { getActiveServices } from "@/lib/data";
import { toArray } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Web Development Services Malaysia",
  description: "Business websites, e-commerce, web apps, dashboards, maintenance, SEO basic setup, and security hardening services."
};

export default async function ServicesPage() {
  const services = await getActiveServices();

  return (
    <main className="page-section">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Services"
          title="Professional web development services"
          description="Complete delivery from business websites to custom agency and dashboard systems."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              features={toArray(service.features) as string[]}
              timeline={service.timeline}
              startingPrice={service.startingPrice}
              category={service.category}
            />
          ))}
        </div>
      </div>
    </main>
  );
}