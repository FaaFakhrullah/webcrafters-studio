"use client";

import { useMemo, useState } from "react";

import { PortfolioCard } from "@/components/marketing/portfolio-card";
import { Button } from "@/components/ui/button";

type Item = {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  technologies: string[];
};

const filters = ["All", "Business Website", "E-commerce", "Government", "Web Application", "Dashboard", "Landing Page"];

export function PortfolioGrid({ items }: { items: Item[] }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = useMemo(() => {
    if (activeFilter === "All") return items;
    return items.filter((item) => item.category === activeFilter);
  }, [items, activeFilter]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Button key={filter} variant={activeFilter === filter ? "default" : "outline"} size="sm" onClick={() => setActiveFilter(filter)}>
            {filter}
          </Button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project) => (
          <PortfolioCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}