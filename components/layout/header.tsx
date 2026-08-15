"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { topNav } from "@/data/nav";
import { TopBar } from "@/components/layout/top-bar";
import { CategoryBar } from "@/components/layout/category-bar";
import { Logo } from "@/components/layout/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { SearchDialog } from "@/components/layout/search-dialog";
import { MobileTabBar } from "@/components/layout/mobile-tab-bar";
import { LinkButton } from "@/components/ui/button";
import { SearchIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className={cn(scrolled ? "hidden" : "block")}>
        <TopBar />
      </div>

      <div
        className={cn(
          "border-b border-brand-cream bg-white transition-shadow duration-200",
          scrolled && "shadow-sm"
        )}
      >
        <div className="container-page grid h-20 grid-cols-[auto_1fr_auto] items-center gap-6">
          <Logo />

          <nav className="hidden justify-center lg:flex" aria-label="Main navigation">
            <ul className="flex items-center gap-2">
              {topNav.map((item) => {
                const isActive =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={cn(
                        "relative px-4 py-2.5 text-sm font-semibold text-brand-black transition-colors hover:text-brand-green",
                        isActive && "text-brand-green"
                      )}
                    >
                      {item.label}
                      <span
                        className={cn(
                          "absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-brand-olive transition-opacity",
                          isActive ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden items-center justify-end gap-1.5 lg:flex">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search products"
              className="rounded-full p-2.5 text-brand-black hover:bg-brand-cream"
            >
              <SearchIcon className="h-5 w-5" />
            </button>
            <span className="mx-1 h-6 w-px bg-brand-cream" aria-hidden="true" />
            <LinkButton href="/contact" size="sm">
              Get in Touch
            </LinkButton>
          </div>
        </div>
      </div>

      <CategoryBar />

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
      <MobileTabBar onSearch={() => setSearchOpen(true)} onMenu={() => setMobileOpen(true)} />
    </header>
  );
}
