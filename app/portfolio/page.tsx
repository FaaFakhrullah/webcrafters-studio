export const dynamic = "force-dynamic";
import type { Metadata } from "next";

import { SectionHeader } from "@/components/layout/section-header";
import { PortfolioGrid } from "@/components/marketing/portfolio-grid";
import { getActivePortfolio } from "@/lib/data";
import { toArray } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Website Portfolio",
  description: "Explore selected website, e-commerce, government, and dashboard development projects."
};

export default async function PortfolioPage() {
  const projects = await getActivePortfolio(false);

  return (
    <main className="page-section">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Portfolio"
          title="Selected digital projects"
          description="Sample project references across business websites, e-commerce, government systems, and dashboards."
        />
        <div className="mt-8">
          <PortfolioGrid
            items={projects.map((project) => ({
              id: project.id,
              title: project.title,
              category: project.category,
              description: project.description,
              imageUrl: project.imageUrl,
              technologies: toArray(project.technologies) as string[]
            }))}
          />
        </div>
      </div>
    </main>
  );
}