import Link from "next/link";
import { categoryBar } from "@/data/nav";

export function CategoryBar() {
  const items = categoryBar ?? [];

  return (
    <div className="hidden bg-brand-green lg:block">
      <div className="container-page">
        <ul className="flex flex-wrap items-center justify-center gap-x-1 gap-y-0.5 py-2.5">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center">
              <Link
                href={item.href}
                className="rounded-full px-3 py-1.5 text-[13px] font-semibold text-white/90 transition-colors hover:bg-white/15 hover:text-white"
              >
                {item.label}
              </Link>
              {index < items.length - 1 && (
                <span className="h-3 w-px bg-white/20" aria-hidden="true" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
