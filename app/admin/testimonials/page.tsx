export const dynamic = "force-dynamic";
import { SimpleCrudManager } from "@/components/admin/simple-crud-manager";
import { db } from "@/lib/db";

export default async function AdminTestimonialsPage() {
  const records = await db.testimonial.findMany({ orderBy: { createdAt: "desc" } });

  const items = records.map((item: any) => ({
    id: item.id,
    clientName: item.clientName,
    companyName: item.companyName,
    role: item.role,
    message: item.message,
    rating: item.rating,
    isActive: item.isActive
  }));

  return (
    <SimpleCrudManager
      title="Testimonials"
      endpoint="/api/admin/testimonials"
      columns={["clientName", "companyName", "role", "rating"]}
      fields={[
        { name: "clientName", label: "Client name", type: "text", required: true },
        { name: "companyName", label: "Company name", type: "text", required: true },
        { name: "role", label: "Role", type: "text", required: true },
        { name: "message", label: "Message", type: "textarea", required: true },
        { name: "rating", label: "Rating", type: "number", required: true },
        { name: "isActive", label: "Is active", type: "checkbox" }
      ]}
      items={items}
    />
  );
}