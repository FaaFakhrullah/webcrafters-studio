"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { Reveal, StaggeredReveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type TemplateThemeItem = {
  id: number;
  slug: string;
  code: string;
  name: string;
  category: string;
  description: string;
  templateUrl: string;
  sourceUrl: string;
  previewImageUrl: string;
  previewClass: string;
};

type TemplateThemeShowcaseProps = {
  items: TemplateThemeItem[];
  mode?: "preview" | "full";
};

export function TemplateThemeShowcase({ items, mode = "full" }: TemplateThemeShowcaseProps) {
  const isPreviewMode = mode === "preview";
  const categories = useMemo(() => ["All", ...Array.from(new Set(items.map((item) => item.category)))], [items]);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredItems = useMemo(() => {
    if (isPreviewMode) return items.slice(0, 4);
    if (activeFilter === "All") return items;
    return items.filter((item) => item.category === activeFilter);
  }, [items, activeFilter, isPreviewMode]);

  return (
    <section className="page-section bg-slate-100">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold text-slate-900 md:text-5xl">Website Theme Options</h2>
          <p className="mt-3 text-lg text-slate-600">
            Explore curated website design references based on your business category and project goals.
          </p>
        </Reveal>

        {!isPreviewMode ? (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {categories.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "rounded-full border px-5 py-2 text-sm font-semibold transition",
                  activeFilter === filter
                    ? "border-blue-500 bg-blue-500 text-white"
                    : "border-slate-300 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-600"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        ) : null}

        <StaggeredReveal className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4" stagger={70}>
          {filteredItems.map((item) => (
            <Card key={item.id} className="motion-card overflow-hidden border-0 bg-white shadow-soft">
              <div className={cn("relative h-52 overflow-hidden bg-gradient-to-br", item.previewClass)}>
                <Image
                  src={item.previewImageUrl}
                  alt={`${item.name} website template preview`}
                  fill
                  className="object-cover transition duration-300 hover:scale-[1.02]"
                />
              </div>
              <CardHeader className="pb-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">{item.code}</p>
                <p className="font-display text-xl font-bold text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-500">{item.category}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">{item.description}</p>
              </CardContent>
              <CardFooter>
                <div className="w-full">
                  <Link href={`/template-live/${item.slug}`} className="block w-full">
                    <Button variant="outline" className="w-full">
                      View Template
                    </Button>
                  </Link>
                </div>
              </CardFooter>
            </Card>
          ))}
        </StaggeredReveal>

        <div className="mt-10 flex justify-center">
          <Link href="/website-themes" className="w-full max-w-5xl">
            <Button size="lg" className="h-14 w-full rounded-xl bg-blue-500 text-lg text-white hover:bg-blue-600">
              Browse All Templates
            </Button>
          </Link>
        </div>

        {!isPreviewMode ? (
          <p className="mt-5 text-center text-xs text-slate-500">
            Template references are sourced from the free TemplateMo collection.
          </p>
        ) : null}
      </div>
    </section>
  );
}
