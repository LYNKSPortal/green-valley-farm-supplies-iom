import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { CategoryCard } from "@/components/shared/category-card";
import { CTABanner } from "@/components/shared/cta-banner";
import { SectionHeading } from "@/components/ui/section-heading";
import { getCategoryBySlug } from "@/data/categories";

export const metadata: Metadata = {
  title: "Garden & Landscaping",
  description:
    "Garden furniture and greenhouses stocked and supplied by Green Valley Supplies, available to view in our showroom.",
  alternates: { canonical: "/garden" },
};

export default function GardenPage() {
  const gardenFurniture = getCategoryBySlug("garden-furniture");
  const greenhouses = getCategoryBySlug("greenhouses");
  const categories = [gardenFurniture, greenhouses].filter(
    (c): c is NonNullable<typeof c> => Boolean(c)
  );

  return (
    <>
      <PageHero
        title="Garden & Landscaping"
        intro="Garden furniture and greenhouses for gardens and growing spaces of all sizes, available to view in our showroom."
      />
      <Breadcrumbs items={[{ name: "Garden & Landscaping", href: "/garden" }]} />

      <section className="section-y bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="Garden & Landscaping" title="Browse Garden Categories" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Want to see our range in person?"
        body="Visit our showroom to view garden furniture and discuss greenhouse sizes and options."
      />
    </>
  );
}
