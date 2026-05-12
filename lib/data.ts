import { db } from "@/lib/db";

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