import type { Metadata } from "next";
import Link from "next/link";
import { Check, Minus } from "lucide-react";

import { SectionHeader } from "@/components/layout/section-header";
import { PackageCard } from "@/components/marketing/package-card";
import { Reveal, StaggeredReveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { packageComparison, premiumPackages } from "@/lib/marketing-content";

export const metadata: Metadata = {
  title: "Website Packages Malaysia | WebCrafters Studio",
  description:
    "Compare website development packages in Malaysia from RM599, including SME websites, SEO-ready business websites, custom dashboards, admin panels, and enterprise web systems."
};

function renderValue(value: string) {
  if (value === "Included" || value === "Ready" || value === "Available" || value === "Recommended") {
    return (
      <span className="inline-flex items-center gap-1 font-semibold text-emerald-700">
        <Check className="h-4 w-4" />
        {value}
      </span>
    );
  }

  if (value === "Not included") {
    return (
      <span className="inline-flex items-center gap-1 text-slate-500">
        <Minus className="h-4 w-4" />
        {value}
      </span>
    );
  }

  return value;
}

export default function PackagesPage() {
  return (
    <main>
      <section className="dark-section page-section">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Packages"
              title="Website packages and custom system pricing"
              description="Transparent starting points for Malaysian businesses, with custom scoping available for dashboards, portals, internal systems, and agency-grade requirements."
              tone="light"
              titleAs="h1"
            />
          </Reveal>
        </div>
      </section>

      <section className="page-section">
        <div className="container-shell">
          <StaggeredReveal className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {premiumPackages.map((pkg) => (
              <PackageCard
                key={pkg.slug}
                name={pkg.name}
                description={pkg.description}
                features={[...pkg.features]}
                priceLabel={pkg.priceLabel}
                deliveryTimeline={pkg.timeline}
                bestFor={pkg.bestFor}
                isPopular={pkg.isPopular}
              />
            ))}
          </StaggeredReveal>

          <Reveal className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-800">
            Final pricing depends on project scope, content readiness, integrations, admin features, timeline, and maintenance
            requirements. We review your requirements before confirming a fixed quotation.
          </Reveal>
        </div>
      </section>

      <section className="page-section bg-slate-50">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Comparison"
              title="Compare package inclusions"
              description="Use this table as a practical guide. Complex systems are scoped after requirement review."
            />
          </Reveal>
          <Reveal className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-950 hover:bg-slate-950">
                  <TableHead className="text-white">Feature</TableHead>
                  {premiumPackages.map((pkg) => (
                    <TableHead key={pkg.slug} className="min-w-44 text-white">
                      {pkg.name}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {packageComparison.map(([feature, launch, growth, platform, enterprise]) => (
                  <TableRow key={feature}>
                    <TableCell className="font-semibold text-slate-900">{feature}</TableCell>
                    {[launch, growth, platform, enterprise].map((value, index) => (
                      <TableCell key={`${feature}-${index}`}>{renderValue(value)}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Reveal>
          <Reveal className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/request-quotation">
              <Button>Request Package Recommendation</Button>
            </Link>
            <Link href="/services">
              <Button variant="outline">Explore Services</Button>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
