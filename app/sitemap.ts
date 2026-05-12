import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/services",
    "/packages",
    "/portfolio",
    "/request-quotation",
    "/book-consultation",
    "/contact",
    "/about",
    "/faq",
    "/terms",
    "/privacy"
  ];

  const now = new Date();

  return pages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7
  }));
}