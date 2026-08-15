"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/ui/icons";
import type { FaqItem } from "@/types";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-brand-cream rounded-2xl border border-brand-cream bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-sm font-semibold text-brand-black sm:text-base">
                {item.question}
              </span>
              <ChevronDownIcon
                className={`h-5 w-5 shrink-0 text-brand-green transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <p className="px-5 pb-5 text-sm leading-relaxed text-foreground-muted">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
