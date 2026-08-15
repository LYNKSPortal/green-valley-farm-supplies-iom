"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@/components/ui/icons";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 480);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-20 right-4 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-brand-charcoal text-white shadow-card-hover transition-colors hover:bg-brand-olive lg:bottom-6 lg:right-6"
    >
      <ArrowUpIcon className="h-5 w-5" />
    </button>
  );
}
