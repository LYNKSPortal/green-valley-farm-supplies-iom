import Link from "next/link";
import { ChevronRightIcon } from "@/components/ui/icons";

export type Crumb = { name: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-brand-cream bg-brand-cream/30">
      <ol className="container-page flex items-center gap-1.5 overflow-x-auto whitespace-nowrap py-3 text-sm text-foreground-muted">
        <li>
          <Link href="/" className="hover:text-brand-green">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-1.5">
            <ChevronRightIcon className="h-3.5 w-3.5" />
            {index === items.length - 1 ? (
              <span aria-current="page" className="font-medium text-brand-black">
                {item.name}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-brand-green">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
