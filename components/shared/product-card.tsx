import { SmartImage } from "@/components/ui/smart-image";
import { AvailabilityBadge } from "@/components/ui/badge";
import type { ProductItem } from "@/types";

export function ProductCard({ product }: { product: ProductItem }) {
  return (
    <div
      id={product.slug}
      className="group flex flex-col overflow-hidden rounded-2xl border border-brand-cream bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-olive hover:shadow-card-hover"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <SmartImage
          image={product.image ?? { alt: product.name }}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="transition-transform duration-500 group-hover:scale-105"
        />
        {product.availability && (
          <div className="absolute left-3 top-3">
            <AvailabilityBadge availability={product.availability} />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold text-brand-black">{product.name}</h3>
        <p className="mt-1.5 flex-1 text-sm text-foreground-muted">
          {product.description}
        </p>
        <a
          href="/contact"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green hover:text-brand-olive"
        >
          Ask About This Product
        </a>
      </div>
    </div>
  );
}
