import { db } from "@/lib/db";
import { TEMPLATE_THEME_CATALOG } from "@/lib/template-theme-catalog";

export async function getActiveServices(limit?: number) {
  return db.service.findMany({
    where: { isActive: true },
    orderBy: { createdAt: "asc" },
    take: limit
  });
}

export async function getActivePackages() {
  return db.package.findMany({
    where: { isActive: true },
    orderBy: { createdAt: "asc" }
  });
}

export async function getActivePortfolio(featuredOnly = false) {
  return db.portfolio.findMany({
    where: { isActive: true, ...(featuredOnly ? { isFeatured: true } : {}) },
    orderBy: { createdAt: "desc" }
  });
}

export async function getActiveTestimonials() {
  return db.testimonial.findMany({
    where: { isActive: true },
    orderBy: { createdAt: "desc" }
  });
}

export async function getActiveFaqs(limit?: number) {
  return db.fAQ.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
    take: limit
  });
}

export async function getSiteSetting() {
  return db.siteSetting.findFirst();
}

export async function getActiveTemplateThemes() {
  try {
    const rows = await db.templateTheme.findMany({
      where: { isActive: true },
      orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }]
    });

    if (rows.length > 0) {
      return rows;
    }
  } catch (error) {
    console.warn("TemplateTheme query failed, using fallback themes.", error);
  }

  return TEMPLATE_THEME_CATALOG.map((item, index) => ({
    id: index + 1,
    ...item
  }));
}
