import { CategoryCard } from "@/components/shared/category-card";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ProductCategory } from "@/types";

export function RelatedCategories({ categories }: { categories: ProductCategory[] }) {
  if (!categories.length) return null;

  return (
    <section className="section-y bg-brand-cream/30">
      <div className="container-page">
        <SectionHeading eyebrow="Explore More" title="Related Categories" />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
