import { ConsultationMethod, ContactStatus, ConsultationStatus, InquiryStatus, PreferredContactMethod, ProjectType, UserRole } from "@prisma/client";
import { z } from "zod";

const safeText = (min: number, max: number) =>
  z
    .string()
    .min(min)
    .max(max)
    .transform((v) => v.replace(/[<>]/g, "").trim());

export const honeypotSchema = z.object({
  website: z.string().max(0).optional().default("")
});

export const quotationSchema = z.object({
  fullName: safeText(2, 191),
  companyName: safeText(0, 191).optional().or(z.literal("")),
  email: z.string().email().max(191),
  phone: safeText(7, 50),
  preferredContactMethod: z.nativeEnum(PreferredContactMethod),
  projectType: z.nativeEnum(ProjectType),
  budgetRange: safeText(2, 191),
  timeline: safeText(2, 191),
  requiredFeatures: z.array(z.string().min(2).max(80)).min(1),
  existingWebsiteUrl: z.string().url().max(255).optional().or(z.literal("")),
  projectDescription: safeText(10, 5000),
  fileUrl: z.string().max(255).optional().or(z.literal("")),
  consent: z.literal(true),
  website: z.string().max(0).optional().default("")
});

export const consultationSchema = z.object({
  fullName: safeText(2, 191),
  companyName: safeText(0, 191).optional().or(z.literal("")),
  email: z.string().email().max(191),
  phone: safeText(7, 50),
  preferredMethod: z.nativeEnum(ConsultationMethod),
  preferredDate: z.string().date(),
  preferredTime: safeText(2, 50),
  projectType: z.nativeEnum(ProjectType),
  projectDescription: safeText(10, 3000),
  consent: z.literal(true),
  website: z.string().max(0).optional().default("")
});

export const contactSchema = z.object({
  name: safeText(2, 191),
  email: z.string().email().max(191),
  phone: safeText(0, 50).optional().or(z.literal("")),
  subject: safeText(3, 191),
  message: safeText(10, 3000),
  website: z.string().max(0).optional().default("")
});

export const adminLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(128)
});

export const statusUpdateSchema = z.object({
  status: z.nativeEnum(InquiryStatus),
  internalNotes: z.string().max(5000).optional()
});

export const consultationStatusUpdateSchema = z.object({
  status: z.nativeEnum(ConsultationStatus),
  internalNotes: z.string().max(5000).optional()
});

export const messageStatusSchema = z.object({
  status: z.nativeEnum(ContactStatus)
});

export const serviceSchema = z.object({
  title: safeText(2, 191),
  slug: z.string().min(2).max(191).regex(/^[a-z0-9-]+$/),
  description: safeText(10, 5000),
  features: z.array(z.string().min(2).max(120)).min(1),
  timeline: safeText(2, 191),
  startingPrice: safeText(1, 191),
  category: safeText(2, 191),
  isActive: z.boolean().default(true)
});

export const packageSchema = z.object({
  name: safeText(2, 191),
  slug: z.string().min(2).max(191).regex(/^[a-z0-9-]+$/),
  description: safeText(10, 5000),
  features: z.array(z.string().min(2).max(120)).min(1),
  price: z.string().max(191).optional().or(z.literal("")),
  priceLabel: safeText(1, 191),
  deliveryTimeline: safeText(2, 191),
  bestFor: safeText(2, 255),
  isPopular: z.boolean().default(false),
  isActive: z.boolean().default(true)
});

export const portfolioSchema = z.object({
  title: safeText(2, 191),
  slug: z.string().min(2).max(191).regex(/^[a-z0-9-]+$/),
  category: safeText(2, 191),
  description: safeText(10, 5000),
  imageUrl: z.string().max(255),
  technologies: z.array(z.string().min(2).max(100)).min(1),
  projectUrl: z.string().url().max(255).optional().or(z.literal("")),
  isFeatured: z.boolean().default(false),
  isActive: z.boolean().default(true)
});

export const templateThemeSchema = z.object({
  name: safeText(2, 191),
  slug: z.string().min(2).max(191).regex(/^[a-z0-9-]+$/),
  code: safeText(2, 50),
  category: safeText(2, 191),
  description: safeText(10, 3000),
  templateUrl: z.string().url().max(255),
  sourceUrl: z.string().url().max(255),
  previewImageUrl: z.string().max(255),
  previewClass: safeText(5, 191),
  sortOrder: z.number().int().min(0).default(0),
  isActive: z.boolean().default(true)
});

export const testimonialSchema = z.object({
  clientName: safeText(2, 191),
  companyName: safeText(2, 191),
  role: safeText(2, 191),
  message: safeText(10, 3000),
  rating: z.number().int().min(1).max(5),
  isActive: z.boolean().default(true)
});

export const faqSchema = z.object({
  question: safeText(5, 255),
  answer: safeText(10, 3000),
  category: safeText(2, 191),
  sortOrder: z.number().int().min(0).default(0),
  isActive: z.boolean().default(true)
});

export const siteSettingSchema = z.object({
  companyName: safeText(2, 191),
  email: z.string().email().max(191),
  phone: safeText(7, 50),
  whatsappNumber: safeText(7, 30),
  address: safeText(5, 2000),
  businessHours: safeText(5, 255),
  facebookUrl: z.string().url().max(255).optional().or(z.literal("")),
  instagramUrl: z.string().url().max(255).optional().or(z.literal("")),
  linkedinUrl: z.string().url().max(255).optional().or(z.literal(""))
});

export const adminUserSchema = z.object({
  name: safeText(2, 191),
  email: z.string().email().max(191),
  password: z.string().min(8).max(128),
  role: z.nativeEnum(UserRole).default(UserRole.ADMIN)
});
