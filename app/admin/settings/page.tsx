export const dynamic = "force-dynamic";
import { SettingsForm } from "@/components/admin/settings-form";
import { db } from "@/lib/db";

export default async function AdminSettingsPage() {
  const setting = await db.siteSetting.findFirst();

  const fallback = {
    companyName: "WebCrafters Studio",
    email: "hello@webcraftersstudio.com",
    phone: "+60 12-345 6789",
    whatsappNumber: "60123456789",
    address: "Kuala Lumpur, Malaysia",
    businessHours: "Mon-Fri, 9:00 AM - 6:00 PM",
    facebookUrl: "",
    instagramUrl: "",
    linkedinUrl: ""
  };

  return <SettingsForm settings={setting || fallback} />;
}