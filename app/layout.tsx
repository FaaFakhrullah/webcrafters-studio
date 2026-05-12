import type { Metadata } from "next";

import "@/app/globals.css";
import { SiteChrome } from "@/components/layout/site-chrome";
import { COMPANY_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "WebCrafters Studio | Professional Website Development Services Malaysia",
    template: `%s | ${COMPANY_NAME}`
  },
  description:
    "WebCrafters Studio provides professional website development, web applications, dashboards, e-commerce, and maintenance services for Malaysian businesses, SMEs, organizations, and agencies.",
  openGraph: {
    title: "WebCrafters Studio | Professional Website Development Services Malaysia",
    description:
      "Secure, responsive, and scalable web solutions for Malaysian businesses, organizations, and agencies.",
    url: SITE_URL,
    siteName: COMPANY_NAME,
    locale: "en_MY",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}