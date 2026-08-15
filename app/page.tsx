import type { Metadata } from "next";
import { Hero } from "@/components/shared/hero";
import { WhySection } from "@/components/shared/why-section";
import { ShowcaseSection } from "@/components/shared/showcase-section";
import { BrandStrip } from "@/components/shared/brand-strip";
import { CTABanner } from "@/components/shared/cta-banner";
import { CategoryCard } from "@/components/shared/category-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { categories, getCategoryBySlug } from "@/data/categories";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Agricultural, Building & Garden Supplies, Isle of Man",
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section-y bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="Product Categories"
            title="Browse by Category"
            body="From drainage and roofing through to gates, equestrian and garden products — explore our full range below."
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      <WhySection />

      <ShowcaseSection
        eyebrow="Agricultural"
        title="Equipment & Supplies for Every Farm"
        body="From Ritchie and LM Bateman handling equipment to grass seed, field gates and water troughs, we supply the everyday essentials and specialist equipment farms rely on."
        href="/agricultural/supplies"
        image={getCategoryBySlug("supplies")?.cardImage}
      />

      <ShowcaseSection
        eyebrow="Timber & Fencing"
        title="A Timber Yard Built for Bigger Projects"
        body="We stock a comprehensive range of timber products, including fence panels, chestnut fencing, railway sleepers, decking and slatted fencing for gardens, farms and commercial projects."
        href="/products/timber-fencing"
        image={getCategoryBySlug("timber-fencing")?.cardImage}
        reverse
        tone="cream"
      />

      <ShowcaseSection
        eyebrow="Garden & Landscaping"
        title="Furniture, Greenhouses & Landscaping Materials"
        body="Our showroom displays garden furniture ready to view and try, alongside greenhouses, composite decking and landscaping materials to suit gardens of every size."
        href="/garden"
      />

      <ShowcaseSection
        eyebrow="Roofing & Drainage"
        title="Roofing, Guttering & Drainage for Every Building"
        body="We stock box profile and fibre cement roofing, guttering systems, twinwall pipe and land drainage — suitable for agricultural, commercial and domestic projects."
        href="/products/roofing-guttering"
        image={getCategoryBySlug("roofing-guttering")?.cardImage}
        reverse
        tone="cream"
      />

      <BrandStrip />

      <CTABanner
        heading="Need help finding the right product?"
        body="Our team can help with availability, specifications, quantities and quotations."
        primary={{ label: "Get in Touch", href: "/contact" }}
        secondary={{ label: "Visit Us", href: "/contact#find-us" }}
      />
    </>
  );
}
