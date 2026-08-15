import Link from "next/link";
import { SmartImage } from "@/components/ui/smart-image";
import { ArrowRightIcon } from "@/components/ui/icons";
import type { ProductCategory } from "@/types";

export function CategoryCard({ category }: { category: ProductCategory }) {
  return (
    <Link
      href={category.path}
      className="group flex flex-col overflow-hidden rounded-2xl border border-brand-cream bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-olive hover:shadow-card-hover"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <SmartImage
          image={category.cardImage ?? { alt: category.title }}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-brand-black">{category.title}</h3>
        <p className="mt-1.5 flex-1 text-sm text-foreground-muted">
          {category.shortDescription}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green group-hover:text-brand-olive">
          View Range
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
