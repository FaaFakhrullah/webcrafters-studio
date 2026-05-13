"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FieldType = "text" | "textarea" | "checkbox" | "array" | "number";

type FieldConfig = {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
};

type ItemRecord = { id: number; [key: string]: unknown };

type SimpleCrudManagerProps = {
  title: string;
  endpoint: string;
  fields: FieldConfig[];
  items: ItemRecord[];
  columns: string[];
};

function normalizeFieldValue(type: FieldType, value: unknown) {
  if (type === "checkbox") return Boolean(value);
  if (type === "array") {
    if (Array.isArray(value)) return value.join(", ");
    return "";
  }
  if (type === "number") return typeof value === "number" ? String(value) : "0";
  return String(value ?? "");
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function normalizeUrl(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  if (/^[a-z0-9.-]+\.[a-z]{2,}(\/.*)?$/i.test(trimmed)) return `https://${trimmed}`;
  return trimmed;
}

function isUrlField(fieldName: string) {
  return fieldName.toLowerCase().endsWith("url");
}

function payloadValue(field: FieldConfig, value: unknown) {
  const { type, name } = field;

  if (type === "checkbox") return Boolean(value);
  if (type === "array") {
    return String(value || "")
      .split(/[\n,]/)
      .map((v) => v.trim())
      .filter(Boolean);
  }
  if (type === "number") {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  let text = String(value || "").trim();
  if (name === "slug") text = slugify(text);
  if (isUrlField(name)) text = normalizeUrl(text);
  return text;
}

function flattenValidationDetails(details: unknown) {
  if (!details || typeof details !== "object") return [];
  const fieldErrors = (details as { fieldErrors?: Record<string, string[]> }).fieldErrors;
  if (!fieldErrors) return [];
  const lines: string[] = [];
  for (const [key, value] of Object.entries(fieldErrors)) {
    const first = Array.isArray(value) ? value.find(Boolean) : undefined;
    if (first) lines.push(`${key}: ${first}`);
  }
  return lines;
}

export function SimpleCrudManager({ title, endpoint, fields, items, columns }: SimpleCrudManagerProps) {
  const router = useRouter();
  const [editingId, setEditingId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const initialForm = useMemo(() => {
    const state: Record<string, unknown> = {};
    for (const field of fields) {
      state[field.name] = field.type === "checkbox" ? false : "";
    }
    return state;
  }, [fields]);

  const [form, setForm] = useState<Record<string, unknown>>(initialForm);

  function resetForm() {
    setForm(initialForm);
    setEditingId(null);
  }

  function startEdit(item: ItemRecord) {
    const state: Record<string, unknown> = {};
    for (const field of fields) {
      state[field.name] = normalizeFieldValue(field.type, item[field.name]);
    }
    setForm(state);
    setEditingId(item.id);
  }

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    const payload: Record<string, unknown> = {};
    for (const field of fields) {
      payload[field.name] = payloadValue(field, form[field.name]);
    }

    const url = editingId ? `${endpoint}/${editingId}` : endpoint;
    const method = editingId ? "PATCH" : "POST";
    const actionLabel = editingId ? "updated" : "created";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const body = await response.json().catch(() => null);

      if (!response.ok) {
        const detailLines = flattenValidationDetails(body?.data);
        const detailText = detailLines.length ? ` (${detailLines.join("; ")})` : "";
        throw new Error(`${body?.message || `Failed to save ${title.toLowerCase()} item.`}${detailText}`);
      }

      setSuccess(`${title} ${actionLabel} successfully.`);
      resetForm();
      router.refresh();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Request failed.");
    } finally {
      setLoading(false);
    }
  }

  async function remove(id: number) {
    if (!confirm("Delete this item?")) return;
    setError(null);
    setSuccess(null);
    const response = await fetch(`${endpoint}/${id}`, { method: "DELETE" });
    if (!response.ok) {
      const body = await response.json().catch(() => null);
      setError(body?.message || "Failed to delete item.");
      return;
    }
    setSuccess("Item deleted successfully.");
    router.refresh();
  }

  return (
    <div className="space-y-6">
      <form onSubmit={submit} className="space-y-4 rounded-xl border border-border bg-white p-4 shadow-soft">
        <h3 className="font-display text-xl font-bold">{editingId ? `Edit ${title}` : `Add ${title}`}</h3>
        {error && (
          <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
            {error}
          </div>
        )}
        {success && (
          <div className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700" role="status">
            {success}
          </div>
        )}
        <div className="grid gap-4 md:grid-cols-2">
          {fields.map((field) => (
            <div key={field.name} className={field.type === "textarea" ? "md:col-span-2" : ""}>
              <label className="mb-1 block text-sm font-medium text-slate-700">{field.label}</label>
              {field.type === "textarea" ? (
                <Textarea
                  required={field.required}
                  value={String(form[field.name] ?? "")}
                  onChange={(event) => setForm((prev) => ({ ...prev, [field.name]: event.target.value }))}
                />
              ) : field.type === "checkbox" ? (
                <input
                  type="checkbox"
                  checked={Boolean(form[field.name])}
                  onChange={(event) => setForm((prev) => ({ ...prev, [field.name]: event.target.checked }))}
                />
              ) : (
                <Input
                  required={field.required}
                  type={field.type === "number" ? "number" : "text"}
                  pattern={field.name === "slug" ? "[a-z0-9-]+" : undefined}
                  title={field.name === "slug" ? "Use lowercase letters, numbers, and hyphen only." : undefined}
                  value={String(form[field.name] ?? "")}
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      [field.name]: field.name === "slug" ? slugify(event.target.value) : event.target.value
                    }))
                  }
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <Button type="submit" disabled={loading}>
            {loading ? "Saving..." : editingId ? "Update" : "Create"}
          </Button>
          {editingId && (
            <Button type="button" variant="outline" onClick={resetForm}>
              Cancel
            </Button>
          )}
        </div>
      </form>

      <div className="rounded-xl border border-border bg-white p-4 shadow-soft">
        <h3 className="font-display text-xl font-bold">Manage {title}</h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-slate-600">
                {columns.map((column) => (
                  <th key={column} className="p-2 font-semibold">
                    {column}
                  </th>
                ))}
                <th className="p-2 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 && (
                <tr>
                  <td colSpan={columns.length + 1} className="p-4 text-center text-slate-500">
                    No records found.
                  </td>
                </tr>
              )}
              {items.map((item) => (
                <tr key={item.id} className="border-b border-border">
                  {columns.map((column) => (
                    <td key={`${item.id}-${column}`} className="p-2 text-slate-700">
                      {Array.isArray(item[column])
                        ? (item[column] as string[]).join(", ")
                        : String(item[column] ?? "-").slice(0, 80)}
                    </td>
                  ))}
                  <td className="space-x-2 p-2">
                    <Button size="sm" variant="outline" onClick={() => startEdit(item)}>
                      Edit
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => remove(item.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
