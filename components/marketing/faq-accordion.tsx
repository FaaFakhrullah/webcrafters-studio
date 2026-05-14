"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<number | null>(items[0]?.id || null);

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const open = openId === item.id;
        return (
          <div key={item.id} className="motion-card rounded-xl border border-border bg-white shadow-soft">
            <button
              type="button"
              className={cn("w-full px-4 py-4 text-left text-sm font-semibold md:text-base", open ? "text-primary" : "text-slate-800")}
              onClick={() => setOpenId(open ? null : item.id)}
              aria-expanded={open}
              aria-controls={`faq-answer-${item.id}`}
            >
              {item.question}
            </button>
            {open && (
              <p id={`faq-answer-${item.id}`} className="motion-reveal motion-reveal-fade is-visible px-4 pb-4 text-sm text-slate-600">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
