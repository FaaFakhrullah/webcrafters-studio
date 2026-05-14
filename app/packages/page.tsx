export const dynamic = "force-dynamic";
import type { Metadata } from "next";

import { SectionHeader } from "@/components/layout/section-header";
import { Reveal, StaggeredReveal } from "@/components/motion/reveal";
import { PackageCard } from "@/components/marketing/package-card";
import { getActivePackages } from "@/lib/data";
import { toArray } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Website Packages and Pricing",
  description: "Transparent web development packages for Malaysian SMEs, organizations, and agencies."
};

export default async function PackagesPage() {
  const packagesData = await getActivePackages();

  return (
    <main className="page-section">
      <div className="container-shell">
        <Reveal>
          <SectionHeader
            eyebrow="Pricing"
            title="Packages and pricing"
            description="Clear package options with practical timelines for different business needs."
          />
        </Reveal>
        <StaggeredReveal className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {packagesData.map((pkg) => (
            <PackageCard
              key={pkg.id}
              name={pkg.name}
              description={pkg.description}
              features={toArray(pkg.features) as string[]}
              priceLabel={pkg.priceLabel}
              deliveryTimeline={pkg.deliveryTimeline}
              bestFor={pkg.bestFor}
              isPopular={pkg.isPopular}
            />
          ))}
        </StaggeredReveal>
        <Reveal>
          <p className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-700">
            Final pricing depends on project scope, features, content, integrations, and timeline.
          </p>
        </Reveal>
      </div>
    </main>
  );
}
