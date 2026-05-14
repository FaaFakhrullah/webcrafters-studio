import type { Metadata } from "next";

import "@/app/globals.css";
import { SiteChrome } from "@/components/layout/site-chrome";
import { db } from "@/lib/db";
import { COMPANY_NAME, CONTACT_EMAIL, CONTACT_PHONE, createWhatsAppLink, SITE_URL, WHATSAPP_NUMBER } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "WebCrafters Studio | Premium Website Development Malaysia",
    template: `%s | ${COMPANY_NAME}`
  },
  description:
    "Premium Malaysian website development agency for secure websites, admin dashboards, e-commerce, maintenance, SEO setup, and custom web applications.",
  openGraph: {
    title: "WebCrafters Studio | Premium Website Development Malaysia",
    description:
      "Secure, responsive, scalable, and maintainable websites, dashboards, and custom web applications for Malaysian organizations.",
    url: SITE_URL,
    siteName: COMPANY_NAME,
    locale: "en_MY",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  },
  twitter: {
    card: "summary_large_image",
    title: "WebCrafters Studio | Website Development Malaysia",
    description: "Premium websites, dashboards, e-commerce, and custom web applications for Malaysian businesses."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const settingsPromise = db.siteSetting.findFirst();

  return (
    <html lang="en">
      <body>
        <RootLayoutBody settingsPromise={settingsPromise}>{children}</RootLayoutBody>
      </body>
    </html>
  );
}

async function RootLayoutBody({
  children,
  settingsPromise
}: {
  children: React.ReactNode;
  settingsPromise: ReturnType<typeof db.siteSetting.findFirst>;
}) {
  const settings = await settingsPromise;
  const companyName = settings?.companyName || COMPANY_NAME;
  const contactEmail = settings?.email || CONTACT_EMAIL;
  const contactPhone = settings?.phone || CONTACT_PHONE;
  const address = settings?.address || "Kuala Lumpur, Malaysia";
  const businessHours = settings?.businessHours || "Mon-Fri, 9:00 AM - 6:00 PM";
  const whatsappLink = createWhatsAppLink(settings?.whatsappNumber || WHATSAPP_NUMBER);

  return (
    <SiteChrome
      companyName={companyName}
      contactEmail={contactEmail}
      contactPhone={contactPhone}
      address={address}
      businessHours={businessHours}
      whatsappLink={whatsappLink}
    >
      {children}
    </SiteChrome>
  );
}
