export const dynamic = "force-dynamic";

import { SimpleCrudManager } from "@/components/admin/simple-crud-manager";
import { db } from "@/lib/db";

export default async function AdminTemplateThemesPage() {
  const records = await db.templateTheme.findMany({ orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }] });

  const items = records.map((item: any) => ({
    id: item.id,
    name: item.name,
    slug: item.slug,
    code: item.code,
    category: item.category,
    description: item.description,
    templateUrl: item.templateUrl,
    sourceUrl: item.sourceUrl,
    previewImageUrl: item.previewImageUrl,
    previewClass: item.previewClass,
    sortOrder: item.sortOrder,
    isActive: item.isActive
  }));

  return (
    <SimpleCrudManager
      title="Template Themes"
      endpoint="/api/admin/template-themes"
      columns={["code", "name", "category", "sortOrder", "isActive"]}
      fields={[
        { name: "name", label: "Name", type: "text", required: true },
        { name: "slug", label: "Slug", type: "text", required: true },
        { name: "code", label: "Code", type: "text", required: true },
        { name: "category", label: "Category", type: "text", required: true },
        { name: "description", label: "Description", type: "textarea", required: true },
        { name: "templateUrl", label: "Template Live URL", type: "text", required: true },
        { name: "sourceUrl", label: "Template Source URL", type: "text", required: true },
        { name: "previewImageUrl", label: "Preview Image URL", type: "text", required: true },
        { name: "previewClass", label: "Preview Gradient Classes", type: "text", required: true },
        { name: "sortOrder", label: "Sort Order", type: "number", required: true },
        { name: "isActive", label: "Is Active", type: "checkbox" }
      ]}
      items={items}
    />
  );
}
