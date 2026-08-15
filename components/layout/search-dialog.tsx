"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { search, type SearchResult } from "@/lib/search";
import { SearchIcon, CloseIcon } from "@/components/ui/icons";

export function SearchDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      setResults([]);
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    setResults(search(query));
  }, [query]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-start justify-center bg-brand-black/60 px-4 pt-24 sm:pt-32"
      role="dialog"
      aria-modal="true"
      aria-label="Site search"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-2xl bg-white p-4 shadow-2xl sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <SearchIcon className="h-5 w-5 text-brand-green" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="search"
            placeholder="Search products, e.g. twinwall, decking, gates…"
            className="w-full bg-transparent text-base text-brand-black placeholder:text-foreground-muted focus:outline-none"
            aria-label="Search products"
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            className="rounded-full p-1.5 text-foreground-muted hover:bg-brand-cream hover:text-brand-black"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 max-h-[60vh] space-y-1 overflow-y-auto">
          {query && results.length === 0 && (
            <p className="px-2 py-6 text-center text-sm text-foreground-muted">
              No results for &ldquo;{query}&rdquo;. Try drainage, decking, gates or Ritchie.
            </p>
          )}
          {results.map((result) => (
            <Link
              key={result.id}
              href={result.href}
              onClick={onClose}
              className="flex items-start gap-3 rounded-xl p-3 hover:bg-brand-cream/60"
            >
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-green/10 text-xs font-bold text-brand-green">
                {result.name.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-black">{result.name}</p>
                <p className="text-xs text-foreground-muted">{result.category}</p>
                <p className="mt-0.5 text-sm text-foreground-muted">{result.description}</p>
              </div>
            </Link>
          ))}
          {!query && (
            <p className="px-2 py-6 text-center text-sm text-foreground-muted">
              Try searching twinwall, decking, gates, Ritchie, grass seed…
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
