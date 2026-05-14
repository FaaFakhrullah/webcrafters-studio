export const premiumServices = [
  {
    title: "Business Website",
    slug: "business-website",
    category: "Website",
    description: "A polished, mobile-first website that builds trust and turns visitors into qualified enquiries.",
    whoFor: "SMEs, consultants, service businesses, clinics, training providers, and local brands.",
    features: ["Responsive page design", "Lead capture forms", "WhatsApp CTA", "SEO-ready structure"],
    benefit: "Create a credible digital presence that helps customers understand, trust, and contact your business.",
    suggestedPackage: "Launch Website or Business Growth Website"
  },
  {
    title: "Corporate Profile Website",
    slug: "corporate-profile-website",
    category: "Corporate",
    description: "A structured company profile site for organizations that need stronger credibility and clearer positioning.",
    whoFor: "Established companies, agencies, NGOs, government-aligned organizations, and corporate teams.",
    features: ["Company profile pages", "Service architecture", "Leadership or program sections", "Inquiry funnels"],
    benefit: "Improve stakeholder confidence with clear information, professional presentation, and reliable contact paths.",
    suggestedPackage: "Business Growth Website"
  },
  {
    title: "E-commerce Website",
    slug: "ecommerce-website",
    category: "Commerce",
    description: "Online stores designed around product discovery, conversion, checkout readiness, and maintainable operations.",
    whoFor: "Retailers, distributors, product brands, and SMEs moving sales online.",
    features: ["Product catalog", "Order workflow", "Payment gateway readiness", "Promotion sections"],
    benefit: "Launch a scalable online selling channel with a user experience customers can trust.",
    suggestedPackage: "Business Growth Website or Custom Web Platform"
  },
  {
    title: "Landing Page",
    slug: "landing-page",
    category: "Marketing",
    description: "Focused campaign pages for launches, promotions, lead generation, and paid traffic.",
    whoFor: "Marketing teams, founders, agencies, event organizers, and sales teams.",
    features: ["Conversion-focused copy layout", "Fast loading", "Lead form", "Campaign tracking readiness"],
    benefit: "Give campaigns a focused destination with a clear message, CTA, and measurable enquiry path.",
    suggestedPackage: "Launch Website"
  },
  {
    title: "Web Application",
    slug: "web-application",
    category: "System",
    description: "Custom web platforms built for business workflows, portals, records, approvals, and operational visibility.",
    whoFor: "Organizations that need more than a brochure website.",
    features: ["Database-backed modules", "Authentication", "Role-based access", "Custom workflow logic"],
    benefit: "Replace manual spreadsheets and fragmented processes with a secure, scalable digital system.",
    suggestedPackage: "Custom Web Platform or Enterprise / Agency Solution"
  },
  {
    title: "Admin Dashboard",
    slug: "admin-dashboard",
    category: "Dashboard",
    description: "Internal dashboards for managing content, enquiries, users, reports, and business activity.",
    whoFor: "Teams that need controlled content updates or operational reporting.",
    features: ["Admin panels", "Status management", "Reporting views", "User permissions"],
    benefit: "Give your team better control without depending on developers for every small operational update.",
    suggestedPackage: "Custom Web Platform"
  },
  {
    title: "Website Redesign",
    slug: "website-redesign",
    category: "Optimization",
    description: "A modern rebuild for outdated websites with better structure, speed, trust, and mobile experience.",
    whoFor: "Businesses with old, slow, unclear, or hard-to-update websites.",
    features: ["UI refresh", "Content restructuring", "Mobile optimization", "SEO migration support"],
    benefit: "Recover credibility and improve lead generation without losing the useful parts of your existing presence.",
    suggestedPackage: "Business Growth Website"
  },
  {
    title: "Maintenance & Support",
    slug: "maintenance-support",
    category: "Support",
    description: "Ongoing care for updates, minor improvements, backups, security checks, and support requests.",
    whoFor: "Organizations that want their website to stay stable after launch.",
    features: ["Content updates", "Security updates", "Backup checks", "Issue support"],
    benefit: "Keep your site reliable, current, and safer over the long term.",
    suggestedPackage: "Maintenance option"
  },
  {
    title: "SEO Setup",
    slug: "seo-setup",
    category: "SEO",
    description: "Foundational SEO setup so key pages are crawlable, structured, and aligned with local search intent.",
    whoFor: "Businesses targeting visibility for Malaysian service and product searches.",
    features: ["Meta titles and descriptions", "Structured headings", "Sitemap", "Local keyword alignment"],
    benefit: "Give search engines cleaner signals and make each page easier for customers to understand.",
    suggestedPackage: "Business Growth Website"
  },
  {
    title: "Security Hardening",
    slug: "security-hardening",
    category: "Security",
    description: "Practical hardening for forms, access, headers, validation, and common website risk areas.",
    whoFor: "Businesses handling enquiries, forms, customer data, or internal dashboards.",
    features: ["Input validation", "Security headers", "Access checks", "Safe deployment guidance"],
    benefit: "Reduce avoidable risk and improve digital trust from day one.",
    suggestedPackage: "Custom Web Platform or maintenance add-on"
  }
] as const;

export const premiumPackages = [
  {
    name: "Launch Website",
    slug: "launch-website",
    priceLabel: "Starting from RM599",
    bestFor: "Small businesses, individuals, simple company profiles",
    description: "A clean entry-level website for getting online with professional essentials.",
    timeline: "5-7 working days",
    features: ["1-3 key pages", "Responsive design", "Contact/WhatsApp CTA", "Basic SEO setup", "Launch guidance"],
    isPopular: false
  },
  {
    name: "Business Growth Website",
    slug: "business-growth-website",
    priceLabel: "Starting from RM1,499",
    bestFor: "SMEs that need stronger pages, SEO, lead forms, and branding",
    description: "A richer business website designed to improve trust, enquiries, and search readiness.",
    timeline: "10-14 working days",
    features: ["5-8 pages", "Conversion-focused sections", "Lead forms", "SEO-ready pages", "Analytics-ready setup"],
    isPopular: true
  },
  {
    name: "Custom Web Platform",
    slug: "custom-web-platform",
    priceLabel: "Starting from RM2,999",
    bestFor: "Businesses needing database features, dashboards, portals, or workflows",
    description: "A custom web system with admin capability, database-backed features, and workflow logic.",
    timeline: "2-6 weeks",
    features: ["Database modules", "Admin dashboard", "User access", "Custom workflow", "Security setup"],
    isPopular: false
  },
  {
    name: "Enterprise / Agency Solution",
    slug: "enterprise-agency-solution",
    priceLabel: "Custom quotation",
    bestFor: "Government-aligned organizations, agencies, NGOs, and complex systems",
    description: "A scoped solution for advanced requirements, multi-role systems, governance, and long-term support.",
    timeline: "Scoped after discovery",
    features: ["Requirement workshop", "Advanced modules", "Role-based workflows", "Reporting", "Maintenance planning"],
    isPopular: false
  }
] as const;

export const packageComparison = [
  ["Number of pages", "1-3", "5-8", "Custom", "Custom"],
  ["Responsive design", "Included", "Included", "Included", "Included"],
  ["Contact form", "Basic", "Advanced", "Workflow-ready", "Workflow-ready"],
  ["WhatsApp integration", "Included", "Included", "Included", "Included"],
  ["SEO setup", "Basic", "Enhanced", "Technical baseline", "Scoped"],
  ["Admin panel", "Not included", "Optional", "Included", "Scoped"],
  ["Database", "Not included", "Optional", "Included", "Scoped"],
  ["Analytics", "Ready", "Ready", "Ready", "Scoped"],
  ["Security setup", "Baseline", "Baseline", "Enhanced", "Scoped"],
  ["Revision rounds", "1 round", "2 rounds", "Scoped", "Scoped"],
  ["Maintenance option", "Available", "Available", "Recommended", "Recommended"],
  ["Estimated timeline", "5-7 working days", "10-14 working days", "2-6 weeks", "Scoped"]
] as const;

export const solutionExamples = [
  {
    title: "Corporate Profile Website System",
    clientType: "SME or professional services company",
    challenge: "The business needs a credible website that explains services clearly and encourages enquiries.",
    solution: "A structured corporate profile website with service pages, trust sections, contact paths, and SEO-ready metadata.",
    features: ["Company profile", "Services architecture", "Lead form", "WhatsApp CTA", "SEO-ready pages"],
    technology: ["Next.js", "Tailwind CSS", "Prisma-ready backend"],
    outcome: "Improves credibility, makes services easier to evaluate, and creates a clearer enquiry flow."
  },
  {
    title: "Admin Dashboard & Workflow Portal",
    clientType: "Organization, agency, NGO, or internal team",
    challenge: "Teams rely on manual records and need a controlled way to manage information and statuses.",
    solution: "A secure dashboard with role-aware management screens, record tracking, filters, and admin workflows.",
    features: ["Admin login", "Status updates", "Search and filters", "Data tables", "Role-based access"],
    technology: ["Next.js", "MySQL", "Prisma", "Docker"],
    outcome: "Reduces manual tracking and gives teams better visibility over operational activity."
  },
  {
    title: "E-commerce Product Website",
    clientType: "Retail SME or product brand",
    challenge: "The brand needs a storefront that presents products professionally and supports online sales growth.",
    solution: "A responsive e-commerce experience with product browsing, promotion sections, checkout readiness, and enquiry paths.",
    features: ["Product catalog", "Campaign sections", "Checkout-ready structure", "Search-friendly pages"],
    technology: ["Next.js", "Tailwind CSS", "Payment gateway-ready architecture"],
    outcome: "Creates a stronger digital selling channel and improves product discovery for customers."
  },
  {
    title: "NGO / Program Information Portal",
    clientType: "NGO, foundation, or community organization",
    challenge: "Programs, updates, and contact routes are scattered, making it harder for stakeholders to understand the organization.",
    solution: "A clear information portal for programs, updates, impact messaging, and enquiry or support forms.",
    features: ["Program pages", "News-ready structure", "Donation or enquiry CTA", "Content management planning"],
    technology: ["Next.js", "MySQL-ready content model", "SEO-ready pages"],
    outcome: "Improves stakeholder understanding and gives the organization a more dependable public information hub."
  }
] as const;

export const expandedFaqs = [
  ["How much does a website cost in Malaysia?", "A simple launch website can start from RM599, while SME business websites commonly start from RM1,499. Custom platforms, dashboards, portals, and workflow systems are quoted after reviewing features, integrations, content, and timeline."],
  ["How long does website development take?", "A basic website can take around 5-7 working days once content is ready. Business websites usually take 10-14 working days, while custom web applications or dashboards may take 2-6 weeks or more depending on scope."],
  ["Do you provide domain and hosting?", "We provide guidance for domain, DNS, hosting, SSL, deployment, and ownership setup. Where possible, we recommend that the client keeps ownership of domain and hosting accounts for long-term control."],
  ["Can you redesign my existing website?", "Yes. We can review your existing website, preserve useful content, improve the UI, restructure pages, improve mobile responsiveness, and rebuild it with cleaner SEO and conversion paths."],
  ["Can you build an admin panel?", "Yes. We can build admin panels for content, enquiries, users, reports, project statuses, and other workflows. Admin scope depends on the package and project requirements."],
  ["Can you build custom web applications?", "Yes. We build custom web applications for portals, dashboards, records, approvals, booking workflows, reporting, and internal business systems."],
  ["Do you provide maintenance?", "Yes. Maintenance can include updates, minor content changes, backup checks, security updates, issue support, and ongoing improvement requests. See the maintenance policy for details."],
  ["Do you support SEO?", "Yes. We include foundational SEO setup such as page titles, descriptions, headings, sitemap, robots.txt, and local keyword alignment. Advanced SEO campaigns can be scoped separately."],
  ["Do you support bilingual Malay and English websites?", "Yes. We can structure bilingual Malay/English pages when you provide or approve the content for each language. Bilingual setup may affect scope and timeline."],
  ["Do you work with SMEs, NGOs, or agencies?", "Yes. The site and system packages are suitable for SMEs, startups, NGOs, agencies, government-aligned organizations, and operational teams in Malaysia."],
  ["What do I need to prepare before starting?", "Prepare your business goals, required pages or features, logo/brand assets, existing website link if any, content drafts, preferred references, budget range, and target timeline."],
  ["Will my website be mobile responsive?", "Yes. Responsive design is included so the website works across mobile, tablet, and desktop screens with readable content and accessible calls to action."],
  ["Can you add WhatsApp integration?", "Yes. We can add WhatsApp buttons, CTA sections, and enquiry paths so visitors can contact you quickly using your preferred business WhatsApp number."],
  ["Do you build secure forms?", "Yes. Public forms use validation, rate limiting, anti-spam fields, and secure handling patterns. More advanced security requirements can be scoped for systems and dashboards."]
] as const;
