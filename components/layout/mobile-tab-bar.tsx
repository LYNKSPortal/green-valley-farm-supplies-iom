"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  GridIcon,
  SearchIcon,
  PhoneIcon,
  MenuIcon,
} from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export function MobileTabBar({
  onSearch,
  onMenu,
}: {
  onSearch: () => void;
  onMenu: () => void;
}) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkClass = (active: boolean) =>
    cn(
      "flex flex-1 flex-col items-center justify-center gap-1 py-2 text-[11px] font-semibold",
      active ? "text-brand-green" : "text-foreground-muted"
    );

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-[80] flex items-stretch border-t border-brand-cream bg-white pb-[env(safe-area-inset-bottom)] shadow-[0_-2px_10px_rgba(15,15,15,0.06)] lg:hidden"
      aria-label="Mobile navigation"
    >
      <Link href="/" className={linkClass(isActive("/"))}>
        <HomeIcon className="h-6 w-6" />
        Home
      </Link>
      <Link href="/products" className={linkClass(isActive("/products"))}>
        <GridIcon className="h-6 w-6" />
        Products
      </Link>
      <button
        type="button"
        onClick={onSearch}
        className={linkClass(false)}
        aria-label="Search products"
      >
        <SearchIcon className="h-6 w-6" />
        Search
      </button>
      <Link href="/contact" className={linkClass(isActive("/contact"))}>
        <PhoneIcon className="h-6 w-6" />
        Contact
      </Link>
      <button
        type="button"
        onClick={onMenu}
        className={linkClass(false)}
        aria-label="Open menu"
      >
        <MenuIcon className="h-6 w-6" />
        Menu
      </button>
    </nav>
  );
}
