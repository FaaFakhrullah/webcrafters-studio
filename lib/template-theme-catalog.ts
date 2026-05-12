type ThemeInput = {
  tmId: number;
  slug: string;
  name: string;
  category: string;
  description: string;
  previewClass: string;
  sortOrder: number;
};

export type TemplateThemeCatalogItem = {
  name: string;
  slug: string;
  code: string;
  category: string;
  description: string;
  templateUrl: string;
  sourceUrl: string;
  previewImageUrl: string;
  previewClass: string;
  sortOrder: number;
  isActive: boolean;
};

const buildTemplateTheme = (input: ThemeInput): TemplateThemeCatalogItem => {
  const code = `TM ${input.tmId}`;
  return {
    name: input.name,
    slug: input.slug,
    code,
    category: input.category,
    description: input.description,
    templateUrl: `https://templatemo.com/live/templatemo_${input.tmId}_${input.slug.replace(/-/g, "_")}`,
    sourceUrl: `https://templatemo.com/tm-${input.tmId}-${input.slug}`,
    previewImageUrl: `/images/template-themes/${input.slug}.jpg`,
    previewClass: input.previewClass,
    sortOrder: input.sortOrder,
    isActive: true
  };
};

const rawThemes: ThemeInput[] = [
  {
    tmId: 548,
    slug: "training-studio",
    name: "Training Studio",
    category: "Sports & Health",
    description: "Modern layout for fitness clubs, yoga centers, and wellness brands.",
    previewClass: "from-emerald-500 via-green-400 to-teal-500",
    sortOrder: 1
  },
  {
    tmId: 566,
    slug: "medic-care",
    name: "Medic Care",
    category: "Sports & Health",
    description: "Clean and professional medical-style one-page design for clinics and wellness services.",
    previewClass: "from-cyan-500 via-sky-500 to-blue-500",
    sortOrder: 2
  },
  {
    tmId: 587,
    slug: "tiya-golf-club",
    name: "Tiya Golf Club",
    category: "Sports & Health",
    description: "Premium sports club layout with event sections, pricing tables, and booking blocks.",
    previewClass: "from-lime-500 via-emerald-500 to-teal-600",
    sortOrder: 3
  },
  {
    tmId: 487,
    slug: "fitness",
    name: "Fitness",
    category: "Sports & Health",
    description: "Responsive fitness theme with pricing, testimonials, and lead capture flow.",
    previewClass: "from-zinc-700 via-slate-700 to-zinc-900",
    sortOrder: 4
  },
  {
    tmId: 571,
    slug: "hexashop",
    name: "Hexashop",
    category: "Fashion",
    description: "E-commerce storefront theme with category-focused product listing sections.",
    previewClass: "from-neutral-100 via-stone-200 to-zinc-300",
    sortOrder: 5
  },
  {
    tmId: 559,
    slug: "zay-shop",
    name: "Zay Shop",
    category: "Fashion",
    description: "Modern online store template ideal for apparel and lifestyle brands.",
    previewClass: "from-green-300 via-emerald-300 to-teal-300",
    sortOrder: 6
  },
  {
    tmId: 546,
    slug: "sixteen-clothing",
    name: "Sixteen Clothing",
    category: "Fashion",
    description: "Product-focused multi-page design for clothing collections and catalogs.",
    previewClass: "from-rose-200 via-orange-100 to-amber-100",
    sortOrder: 7
  },
  {
    tmId: 456,
    slug: "luxury-gold",
    name: "Luxury Gold",
    category: "Fashion",
    description: "Elegant fashion-oriented design with premium styling and editorial layout.",
    previewClass: "from-yellow-300 via-amber-300 to-yellow-500",
    sortOrder: 8
  },
  {
    tmId: 562,
    slug: "space-dynamic",
    name: "Space Dynamic",
    category: "Art",
    description: "Creative digital agency style with energetic visuals and modern composition.",
    previewClass: "from-fuchsia-500 via-violet-500 to-indigo-500",
    sortOrder: 9
  },
  {
    tmId: 560,
    slug: "astro-motion",
    name: "Astro Motion",
    category: "Art",
    description: "Art-forward one-page layout with cinematic sections and dynamic transitions.",
    previewClass: "from-emerald-400 via-lime-400 to-cyan-500",
    sortOrder: 10
  },
  {
    tmId: 555,
    slug: "upright",
    name: "Upright",
    category: "Art",
    description: "Gallery-inspired theme suitable for visual portfolios and creative showcases.",
    previewClass: "from-slate-500 via-slate-700 to-slate-900",
    sortOrder: 11
  },
  {
    tmId: 552,
    slug: "video-catalog",
    name: "Video Catalog",
    category: "Art",
    description: "Media-rich layout for video, photography, and content-driven creative work.",
    previewClass: "from-red-500 via-orange-500 to-amber-500",
    sortOrder: 12
  },
  {
    tmId: 558,
    slug: "klassy-cafe",
    name: "Klassy Cafe",
    category: "Food & Beverage",
    description: "Restaurant website template with menu tabs, booking form, and brand storytelling.",
    previewClass: "from-red-500 via-orange-500 to-amber-400",
    sortOrder: 13
  },
  {
    tmId: 539,
    slug: "simple-house",
    name: "Simple House",
    category: "Food & Beverage",
    description: "Clean cafe-style template with menu sections and simple contact flow.",
    previewClass: "from-green-500 via-lime-400 to-emerald-500",
    sortOrder: 14
  },
  {
    tmId: 584,
    slug: "pod-talk",
    name: "Pod Talk",
    category: "Food & Beverage",
    description: "Bold content-first layout that works for modern cafe and lifestyle brands.",
    previewClass: "from-sky-500 via-blue-600 to-indigo-700",
    sortOrder: 15
  },
  {
    tmId: 550,
    slug: "diagoona",
    name: "Diagoona",
    category: "Food & Beverage",
    description: "Minimal multi-page template with striking visuals for brand-led campaigns.",
    previewClass: "from-amber-500 via-orange-500 to-rose-500",
    sortOrder: 16
  },
  {
    tmId: 582,
    slug: "tale-seo-agency",
    name: "Tale SEO Agency",
    category: "Business",
    description: "Corporate digital agency template with polished sections for services and FAQs.",
    previewClass: "from-violet-500 via-purple-500 to-indigo-500",
    sortOrder: 17
  },
  {
    tmId: 565,
    slug: "onix-digital",
    name: "Onix Digital",
    category: "Business",
    description: "Conversion-focused business website with pricing tables and contact modules.",
    previewClass: "from-cyan-500 via-blue-500 to-indigo-600",
    sortOrder: 18
  },
  {
    tmId: 561,
    slug: "purple-buzz",
    name: "Purple Buzz",
    category: "Business",
    description: "Versatile corporate website design with portfolio and service-focused pages.",
    previewClass: "from-purple-400 via-violet-500 to-indigo-600",
    sortOrder: 19
  },
  {
    tmId: 549,
    slug: "business-oriented",
    name: "Business Oriented",
    category: "Business",
    description: "Professional corporate layout designed for agencies and SME service websites.",
    previewClass: "from-slate-600 via-blue-600 to-cyan-600",
    sortOrder: 20
  },
  {
    tmId: 573,
    slug: "eduwell",
    name: "Eduwell",
    category: "Education",
    description: "Structured educational website for institutions, courses, and online learning.",
    previewClass: "from-indigo-400 via-violet-500 to-purple-600",
    sortOrder: 21
  },
  {
    tmId: 569,
    slug: "edu-meeting",
    name: "Edu Meeting",
    category: "Education",
    description: "Academic platform style with events, courses, and information modules.",
    previewClass: "from-blue-500 via-indigo-500 to-violet-600",
    sortOrder: 22
  },
  {
    tmId: 557,
    slug: "grad-school",
    name: "Grad School",
    category: "Education",
    description: "Professional school-style template with course highlights and enrollment flow.",
    previewClass: "from-sky-500 via-cyan-500 to-indigo-500",
    sortOrder: 23
  },
  {
    tmId: 586,
    slug: "scholar",
    name: "Scholar",
    category: "Education",
    description: "Modern education landing page with rounded sections and conversion-ready layout.",
    previewClass: "from-violet-500 via-purple-600 to-fuchsia-600",
    sortOrder: 24
  },
  {
    tmId: 580,
    slug: "woox-travel",
    name: "Woox Travel",
    category: "Travel",
    description: "Travel agency template with destination modules and reservation form flow.",
    previewClass: "from-blue-500 via-cyan-500 to-teal-500",
    sortOrder: 25
  },
  {
    tmId: 564,
    slug: "plot-listing",
    name: "Plot Listing",
    category: "Travel",
    description: "Directory-style travel layout with searchable listings and multi-page structure.",
    previewClass: "from-emerald-500 via-teal-500 to-cyan-600",
    sortOrder: 26
  },
  {
    tmId: 511,
    slug: "journey",
    name: "Journey",
    category: "Travel",
    description: "Classic tour and destination template with booking-ready date form sections.",
    previewClass: "from-lime-500 via-emerald-500 to-cyan-500",
    sortOrder: 27
  },
  {
    tmId: 551,
    slug: "stand-blog",
    name: "Stand Blog",
    category: "Travel",
    description: "Story-driven magazine style layout suitable for destination and travel editorial pages.",
    previewClass: "from-indigo-500 via-blue-600 to-cyan-600",
    sortOrder: 28
  }
];

export const TEMPLATE_THEME_CATALOG = rawThemes.map(buildTemplateTheme);
