import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { CategoryCard } from "@/components/shared/category-card";
import { CTABanner } from "@/components/shared/cta-banner";
import { SectionHeading } from "@/components/ui/section-heading";
import { categories } from "@/data/categories";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse the full range of agricultural, building, drainage, equestrian and garden products stocked and supplied by Green Valley Supplies.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Products"
        intro="Browse our full range of agricultural, building, drainage, equestrian and garden products, stocked and supplied to customers across the Isle of Man."
      />
      <Breadcrumbs items={[{ name: "Products", href: "/products" }]} />

      <section className="section-y bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="Full Range"
            title="Browse All Categories"
            body={`${siteConfig.shortName} stocks and supplies products across the following categories. Select a category to view the full range, imagery and stock availability.`}
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Can't find what you're looking for?"
        body="Get in touch with our team — we hold a wide range of stock and can also source specialist items."
      />
    </>
  );
}
