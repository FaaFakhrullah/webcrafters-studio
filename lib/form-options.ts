import { z } from "zod";

export const preferredContactMethods = ["EMAIL", "PHONE_CALL", "WHATSAPP"] as const;
export const consultationMethods = ["WHATSAPP", "PHONE_CALL", "ONLINE_MEETING"] as const;
export const projectTypes = [
  "BUSINESS_WEBSITE",
  "ECOMMERCE",
  "LANDING_PAGE",
  "WEB_APPLICATION",
  "DASHBOARD_SYSTEM",
  "GOVERNMENT_SYSTEM",
  "WEBSITE_REDESIGN",
  "MAINTENANCE",
  "OTHER"
] as const;

export const budgetRanges = [
  "Below RM1,000",
  "RM1,000 - RM3,000",
  "RM3,000 - RM8,000",
  "RM8,000 - RM15,000",
  "RM15,000+",
  "Not sure yet"
] as const;

export const timelines = ["Urgent", "1-2 weeks", "1 month", "2-3 months", "Flexible"] as const;

export const quotationFeatureOptions = [
  "Contact form",
  "Admin panel",
  "Online payment",
  "User login",
  "Booking system",
  "Blog/news",
  "Product catalog",
  "Dashboard/reporting",
  "API integration",
  "WhatsApp integration",
  "SEO setup",
  "Maintenance"
] as const;

const safeText = (min: number, max: number) => z.string().min(min).max(max).transform((v) => v.trim());

export const quotationClientSchema = z.object({
  fullName: safeText(2, 191),
  companyName: z.string().max(191).optional().default(""),
  email: z.string().email(),
  phone: safeText(7, 50),
  preferredContactMethod: z.enum(preferredContactMethods),
  projectType: z.enum(projectTypes),
  budgetRange: safeText(2, 191),
  timeline: safeText(2, 191),
  requiredFeatures: z.array(z.string()).min(1),
  existingWebsiteUrl: z.string().max(255).optional().default(""),
  projectDescription: safeText(10, 5000),
  fileUrl: z.string().max(255).optional().default(""),
  consent: z.literal(true),
  website: z.string().max(0).optional().default("")
});

export const consultationClientSchema = z.object({
  fullName: safeText(2, 191),
  companyName: z.string().max(191).optional().default(""),
  email: z.string().email(),
  phone: safeText(7, 50),
  preferredMethod: z.enum(consultationMethods),
  preferredDate: z.string().min(1),
  preferredTime: safeText(2, 50),
  projectType: z.enum(projectTypes),
  projectDescription: safeText(10, 3000),
  consent: z.literal(true),
  website: z.string().max(0).optional().default("")
});

export const contactClientSchema = z.object({
  name: safeText(2, 191),
  email: z.string().email(),
  phone: z.string().max(50).optional().default(""),
  subject: safeText(3, 191),
  message: safeText(10, 3000),
  website: z.string().max(0).optional().default("")
});

export type QuotationClientInput = z.infer<typeof quotationClientSchema>;
export type ConsultationClientInput = z.infer<typeof consultationClientSchema>;
export type ContactClientInput = z.infer<typeof contactClientSchema>;