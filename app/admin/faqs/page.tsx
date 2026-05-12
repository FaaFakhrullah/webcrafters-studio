export const dynamic = "force-dynamic";
import { SimpleCrudManager } from "@/components/admin/simple-crud-manager";
import { db } from "@/lib/db";

export default async function AdminFaqsPage() {
  const records = await db.fAQ.findMany({ orderBy: { sortOrder: "asc" } });

  const items = records.map((item: any) => ({
    id: item.id,
    question: item.question,
    answer: item.answer,
    category: item.category,
    sortOrder: item.sortOrder,
    isActive: item.isActive
  }));

  return (
    <SimpleCrudManager
      title="FAQs"
      endpoint="/api/admin/faqs"
      columns={["question", "category", "sortOrder", "isActive"]}
      fields={[
        { name: "question", label: "Question", type: "text", required: true },
        { name: "answer", label: "Answer", type: "textarea", required: true },
        { name: "category", label: "Category", type: "text", required: true },
        { name: "sortOrder", label: "Sort order", type: "number", required: true },
        { name: "isActive", label: "Is active", type: "checkbox" }
      ]}
      items={items}
    />
  );
}