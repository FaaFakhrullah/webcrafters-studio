export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { TEMPLATE_THEME_CATALOG } from "@/lib/template-theme-catalog";

type TemplateLivePageProps = {
  params: Promise<{ slug: string }>;
};

const getThemeBySlug = async (slug: string) => {
  try {
    const row = await db.templateTheme.findUnique({ where: { slug } });
    if (row) return row;
  } catch {
    // Fallback below if database is not ready.
  }

  return (
    TEMPLATE_THEME_CATALOG.find((item) => item.slug === slug) ?? null
  );
};

export async function generateMetadata({ params }: TemplateLivePageProps): Promise<Metadata> {
  const { slug } = await params;
  const theme = await getThemeBySlug(slug);

  if (!theme) {
    return {
      title: "Template Preview | WebCrafters Studio",
      robots: { index: false, follow: false }
    };
  }

  return {
    title: `${theme.name} Template Preview | WebCrafters Studio`,
    description: `Live template preview for ${theme.name}.`,
    robots: { index: false, follow: false }
  };
}

export default async function TemplateLivePage({ params }: TemplateLivePageProps) {
  const { slug } = await params;
  const theme = await getThemeBySlug(slug);

  if (!theme) notFound();

  return (
    <main className="container-shell page-section">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary">{theme.code}</p>
          <h1 className="font-display text-3xl font-bold text-slate-900 md:text-4xl">{theme.name} Preview</h1>
          <p className="mt-2 text-sm text-slate-600">
            This preview page is served on your domain. Source template credit remains with TemplateMo.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a href={theme.templateUrl} target="_blank" rel="noreferrer">
            <Button>Open official live page</Button>
          </a>
          <Link href="/">
            <Button variant="outline">Back to homepage</Button>
          </Link>
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-slate-100 shadow-soft">
        <iframe
          src={theme.templateUrl}
          title={`${theme.name} live preview`}
          className="h-[78vh] w-full bg-white"
          loading="lazy"
          referrerPolicy="no-referrer"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        />
      </div>
    </main>
  );
}
