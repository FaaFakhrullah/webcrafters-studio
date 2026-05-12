export const dynamic = "force-dynamic";
import { SimpleCrudManager } from "@/components/admin/simple-crud-manager";
import { db } from "@/lib/db";
import { toArray } from "@/lib/utils";

export default async function AdminPackagesPage() {
  const records = await db.package.findMany({ orderBy: { createdAt: "desc" } });

  const items = records.map((item: any) => ({
    id: item.id,
    name: item.name,
    slug: item.slug,
    description: item.description,
    features: toArray(item.features),
    price: item.price || "",
    priceLabel: item.priceLabel,
    deliveryTimeline: item.deliveryTimeline,
    bestFor: item.bestFor,
    isPopular: item.isPopular,
    isActive: item.isActive
  }));

  return (
    <SimpleCrudManager
      title="Packages"
      endpoint="/api/admin/packages"
      columns={["name", "slug", "priceLabel", "deliveryTimeline"]}
      fields={[
        { name: "name", label: "Name", type: "text", required: true },
        { name: "slug", label: "Slug", type: "text", required: true },
        { name: "description", label: "Description", type: "textarea", required: true },
        { name: "features", label: "Features (comma-separated)", type: "array", required: true },
        { name: "price", label: "Price", type: "text" },
        { name: "priceLabel", label: "Price label", type: "text", required: true },
        { name: "deliveryTimeline", label: "Delivery timeline", type: "text", required: true },
        { name: "bestFor", label: "Best for", type: "text", required: true },
        { name: "isPopular", label: "Popular", type: "checkbox" },
        { name: "isActive", label: "Is active", type: "checkbox" }
      ]}
      items={items}
    />
  );
}