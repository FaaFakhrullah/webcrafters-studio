export const COMPANY_NAME =
  process.env.NEXT_PUBLIC_COMPANY_NAME || process.env.PUBLIC_COMPANY_NAME || "WebCrafters Studio";

export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || process.env.PUBLIC_WHATSAPP_NUMBER || "60123456789";

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || process.env.PUBLIC_CONTACT_EMAIL || "hello@webcraftersstudio.com";

export const CONTACT_PHONE =
  process.env.NEXT_PUBLIC_CONTACT_PHONE || process.env.PUBLIC_CONTACT_PHONE || "+60 12-345 6789";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || process.env.PUBLIC_SITE_URL || "http://localhost:3000";

export const WHATSAPP_TEXT = encodeURIComponent(
  "Hi WebCrafters Studio, I would like to request a quotation for a website project."
);

export function createWhatsAppLink(number: string) {
  return `https://wa.me/${number}?text=${WHATSAPP_TEXT}`;
}

export const WHATSAPP_LINK = createWhatsAppLink(WHATSAPP_NUMBER);

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
] as const;

export const PROCESS_STEPS = [
  "Consultation",
  "Requirement gathering",
  "Proposal and quotation",
  "UI/UX design",
  "Development",
  "Testing",
  "Deployment",
  "Maintenance"
] as const;

export const TRUST_BADGES = [
  "Fast Delivery",
  "Secure Development",
  "Mobile Responsive",
  "Malaysian Business Friendly"
] as const;

export const PUBLIC_FORM_RATE_LIMIT = {
  windowMs: 15 * 60 * 1000,
  maxRequests: 8
};
