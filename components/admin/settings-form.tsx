"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Settings = {
  companyName: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  address: string;
  businessHours: string;
  facebookUrl?: string | null;
  instagramUrl?: string | null;
  linkedinUrl?: string | null;
};

export function SettingsForm({ settings }: { settings: Settings }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [form, setForm] = useState<Settings>({
    ...settings,
    facebookUrl: settings.facebookUrl || "",
    instagramUrl: settings.instagramUrl || "",
    linkedinUrl: settings.linkedinUrl || ""
  });

  async function save(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/admin/settings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus({ type: "error", message: result.message || "Failed to save settings." });
        return;
      }

      setStatus({ type: "success", message: "Settings saved successfully." });
      router.refresh();
    } catch {
      setStatus({ type: "error", message: "Failed to save settings. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={save} className="space-y-4 rounded-xl border border-border bg-white p-5 shadow-soft">
      <h2 className="font-display text-2xl font-bold">Site Settings</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label>Company name</Label>
          <Input value={form.companyName} onChange={(e) => setForm((prev) => ({ ...prev, companyName: e.target.value }))} />
        </div>
        <div>
          <Label>Email</Label>
          <Input type="email" value={form.email} onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))} />
        </div>
        <div>
          <Label>Phone</Label>
          <Input value={form.phone} onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))} />
        </div>
        <div>
          <Label>WhatsApp number</Label>
          <Input value={form.whatsappNumber} onChange={(e) => setForm((prev) => ({ ...prev, whatsappNumber: e.target.value }))} />
        </div>
      </div>
      <div>
        <Label>Address</Label>
        <Textarea value={form.address} onChange={(e) => setForm((prev) => ({ ...prev, address: e.target.value }))} />
      </div>
      <div>
        <Label>Business hours</Label>
        <Input value={form.businessHours} onChange={(e) => setForm((prev) => ({ ...prev, businessHours: e.target.value }))} />
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <Label>Facebook URL</Label>
          <Input value={form.facebookUrl || ""} onChange={(e) => setForm((prev) => ({ ...prev, facebookUrl: e.target.value }))} />
        </div>
        <div>
          <Label>Instagram URL</Label>
          <Input value={form.instagramUrl || ""} onChange={(e) => setForm((prev) => ({ ...prev, instagramUrl: e.target.value }))} />
        </div>
        <div>
          <Label>LinkedIn URL</Label>
          <Input value={form.linkedinUrl || ""} onChange={(e) => setForm((prev) => ({ ...prev, linkedinUrl: e.target.value }))} />
        </div>
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? "Saving..." : "Save settings"}
      </Button>
      {status ? (
        <p className={status.type === "error" ? "text-sm text-red-600" : "text-sm text-emerald-600"}>{status.message}</p>
      ) : null}
    </form>
  );
}
