export const dynamic = "force-dynamic";
import { SimpleCrudManager } from "@/components/admin/simple-crud-manager";
import { db } from "@/lib/db";
import { toArray } from "@/lib/utils";

export default async function AdminServicesPage() {
  const records = await db.service.findMany({ orderBy: { createdAt: "desc" } });

  const items = records.map((item: any) => ({
    id: item.id,
    title: item.title,
    slug: item.slug,
    description: item.description,
    features: toArray(item.features),
    timeline: item.timeline,
    startingPrice: item.startingPrice,
    category: item.category,
    isActive: item.isActive
  }));

  return (
    <SimpleCrudManager
      title="Services"
      endpoint="/api/admin/services"
      columns={["title", "slug", "startingPrice", "timeline"]}
      fields={[
        { name: "title", label: "Title", type: "text", required: true },
        { name: "slug", label: "Slug", type: "text", required: true },
        { name: "description", label: "Description", type: "textarea", required: true },
        { name: "features", label: "Features (comma-separated)", type: "array", required: true },
        { name: "timeline", label: "Timeline", type: "text", required: true },
        { name: "startingPrice", label: "Starting price", type: "text", required: true },
        { name: "category", label: "Category", type: "text", required: true },
        { name: "isActive", label: "Is active", type: "checkbox" }
      ]}
      items={items}
    />
  );
}