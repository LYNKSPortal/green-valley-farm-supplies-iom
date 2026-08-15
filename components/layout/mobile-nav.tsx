"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { mainNav } from "@/data/nav";
import { siteConfig } from "@/lib/site-config";
import { CloseIcon, ChevronDownIcon, PhoneIcon } from "@/components/ui/icons";
import { LinkButton } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";

export function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[95] lg:hidden" role="dialog" aria-modal="true" aria-label="Site menu">
      <div className="absolute inset-0 bg-brand-black/50" onClick={onClose} />
      <div className="absolute inset-y-0 right-0 flex h-full w-full max-w-sm flex-col bg-white shadow-2xl animate-slide-in-right">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <Logo />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-full p-2 text-brand-black hover:bg-brand-cream"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {mainNav.map((item) => {
              const hasChildren = !!item.children?.length;
              const isOpen = expanded === item.label;
              return (
                <li key={item.label} className="border-b border-border/70 last:border-0">
                  {hasChildren ? (
                    <button
                      onClick={() => setExpanded(isOpen ? null : item.label)}
                      className="flex w-full items-center justify-between px-3 py-3.5 text-left text-base font-semibold text-brand-black"
                      aria-expanded={isOpen}
                    >
                      {item.label}
                      <ChevronDownIcon
                        className={`h-5 w-5 text-brand-green transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block px-3 py-3.5 text-base font-semibold text-brand-black"
                    >
                      {item.label}
                    </Link>
                  )}
                  {hasChildren && isOpen && (
                    <ul className="mb-2 space-y-0.5 rounded-xl bg-brand-cream/40 p-2">
                      {item.children!.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={onClose}
                            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-brand-black hover:bg-white"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-brand-green hover:bg-white"
                        >
                          View all {item.label.toLowerCase()} →
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="space-y-3 border-t border-border p-5">
          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
            className="flex items-center justify-center gap-2 text-sm font-semibold text-brand-green"
          >
            <PhoneIcon className="h-4 w-4" />
            {siteConfig.phoneDisplay}
          </a>
          <LinkButton href="/contact" onClick={onClose} className="w-full">
            Get in Touch
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
