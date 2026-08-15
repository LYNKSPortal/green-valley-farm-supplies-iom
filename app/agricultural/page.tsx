import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { CategoryCard } from "@/components/shared/category-card";
import { CTABanner } from "@/components/shared/cta-banner";
import { SectionHeading } from "@/components/ui/section-heading";
import { BrandStrip } from "@/components/shared/brand-strip";
import { getCategoryBySlug } from "@/data/categories";

export const metadata: Metadata = {
  title: "Agricultural",
  description:
    "Livestock housing, handling and feeding equipment plus everyday agricultural essentials, stocked and supplied by Green Valley Supplies.",
  alternates: { canonical: "/agricultural" },
};

export default function AgriculturalPage() {
  const animalHousing = getCategoryBySlug("animal-housing");
  const supplies = getCategoryBySlug("supplies");
  const categories = [animalHousing, supplies].filter(
    (c): c is NonNullable<typeof c> => Boolean(c)
  );

  return (
    <>
      <PageHero
        title="Agricultural"
        intro="A comprehensive range of livestock housing, handling, feeding and everyday agricultural supplies for farms across the Isle of Man."
      />
      <Breadcrumbs items={[{ name: "Agricultural", href: "/agricultural" }]} />

      <section className="section-y bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="Agricultural" title="Browse Agricultural Categories" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      <BrandStrip />

      <CTABanner
        heading="Need advice on livestock equipment or supplies?"
        body="Speak to our team about availability, specifications and quotations for your farm."
      />
    </>
  );
}
