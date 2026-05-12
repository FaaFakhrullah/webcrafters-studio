export const dynamic = "force-dynamic";

import type { Metadata } from "next";

import { TemplateThemeShowcase } from "@/components/marketing/template-theme-showcase";
import { getActiveTemplateThemes } from "@/lib/data";

export const metadata: Metadata = {
  title: "Website Themes | WebCrafters Studio",
  description: "Browse website theme options by category and preview design references for your project."
};

export default async function WebsiteThemesPage() {
  const templateThemes = await getActiveTemplateThemes();

  return (
    <main>
      <TemplateThemeShowcase
        mode="full"
        items={templateThemes.map((item: any) => ({
          id: item.id,
          slug: item.slug,
          code: item.code,
          name: item.name,
          category: item.category,
          description: item.description,
          templateUrl: item.templateUrl,
          sourceUrl: item.sourceUrl || `https://templatemo.com/tm-${item.code.replace("TM ", "")}-${item.slug}`,
          previewImageUrl: item.previewImageUrl || `/images/template-themes/${item.slug}.jpg`,
          previewClass: item.previewClass
        }))}
      />
    </main>
  );
}
