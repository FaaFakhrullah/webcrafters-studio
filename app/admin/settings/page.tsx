export const dynamic = "force-dynamic";
import { SettingsForm } from "@/components/admin/settings-form";
import { db } from "@/lib/db";

export default async function AdminSettingsPage() {
  const setting = await db.siteSetting.findFirst();

  const fallback = {
    companyName: "WebCrafters Studio",
    email: "hello@webcraftersstudio.com",
    phone: "+60 18-204 5771",
    whatsappNumber: "60182045771",
    address: "Kuala Lumpur, Malaysia (remote support nationwide)",
    businessHours: "Mon-Fri, 9:00 AM - 6:00 PM",
    facebookUrl: "",
    instagramUrl: "",
    linkedinUrl: ""
  };

  return <SettingsForm settings={setting || fallback} />;
}
