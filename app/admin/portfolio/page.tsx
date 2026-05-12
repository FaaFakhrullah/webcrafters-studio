export const dynamic = "force-dynamic";
import { SimpleCrudManager } from "@/components/admin/simple-crud-manager";
import { db } from "@/lib/db";
import { toArray } from "@/lib/utils";

export default async function AdminPortfolioPage() {
  const records = await db.portfolio.findMany({ orderBy: { createdAt: "desc" } });

  const items = records.map((item: any) => ({
    id: item.id,
    title: item.title,
    slug: item.slug,
    category: item.category,
    description: item.description,
    imageUrl: item.imageUrl,
    technologies: toArray(item.technologies),
    projectUrl: item.projectUrl || "",
    isFeatured: item.isFeatured,
    isActive: item.isActive
  }));

  return (
    <SimpleCrudManager
      title="Portfolio"
      endpoint="/api/admin/portfolio"
      columns={["title", "slug", "category", "imageUrl"]}
      fields={[
        { name: "title", label: "Title", type: "text", required: true },
        { name: "slug", label: "Slug", type: "text", required: true },
        { name: "category", label: "Category", type: "text", required: true },
        { name: "description", label: "Description", type: "textarea", required: true },
        { name: "imageUrl", label: "Image URL", type: "text", required: true },
        { name: "technologies", label: "Technologies (comma-separated)", type: "array", required: true },
        { name: "projectUrl", label: "Project URL", type: "text" },
        { name: "isFeatured", label: "Featured", type: "checkbox" },
        { name: "isActive", label: "Is active", type: "checkbox" }
      ]}
      items={items}
    />
  );
}