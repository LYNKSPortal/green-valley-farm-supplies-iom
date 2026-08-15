import Link from "next/link";
import { productMegaMenu } from "@/data/nav";
import { SmartImage } from "@/components/ui/smart-image";
import { ArrowRightIcon } from "@/components/ui/icons";

const FEATURED = {
  label: "Gates",
  href: "/products/gates",
  tag: "Made to Measure",
  title: "Bespoke Timber & Composite Gates",
  body: "Every gate is built to your exact opening — from field gates to driveway entrances.",
};

export function MegaMenu({ onNavigate }: { onNavigate?: () => void }) {
  const items = productMegaMenu ?? [];

  return (
    <div className="grid grid-cols-[1.4fr_1fr] gap-0">
      <ul className="grid grid-cols-2 gap-1 p-6">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className="group flex items-start gap-3 rounded-xl px-3 py-3 text-brand-black hover:bg-brand-cream/60"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-olive/40 transition-colors group-hover:bg-brand-olive" />
              <span>
                <span className="block text-sm font-semibold group-hover:text-brand-green">
                  {item.label}
                </span>
                {item.description && (
                  <span className="mt-0.5 block text-xs leading-relaxed text-foreground-muted">
                    {item.description}
                  </span>
                )}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href={FEATURED.href}
        onClick={onNavigate}
        className="group relative flex flex-col justify-end overflow-hidden rounded-r-2xl border-l border-brand-cream"
      >
        <SmartImage
          image={{ alt: FEATURED.title }}
          sizes="280px"
          className="transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-transparent" />
        <div className="relative z-10 p-5">
          <span className="mb-2 inline-flex rounded-full bg-brand-olive px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
            {FEATURED.tag}
          </span>
          <h3 className="text-base font-bold text-white">{FEATURED.title}</h3>
          <p className="mt-1 text-xs leading-relaxed text-white/80">{FEATURED.body}</p>
          <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-green-light">
            Explore Gates
            <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </div>
  );
}
