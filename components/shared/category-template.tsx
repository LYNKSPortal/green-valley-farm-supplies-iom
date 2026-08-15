import { Breadcrumbs, type Crumb } from "@/components/shared/breadcrumbs";
import { PageHero } from "@/components/shared/page-hero";
import { ProductCard } from "@/components/shared/product-card";
import { Gallery } from "@/components/shared/gallery";
import { FeatureGrid } from "@/components/shared/feature-grid";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { RelatedCategories } from "@/components/shared/related-categories";
import { CTABanner } from "@/components/shared/cta-banner";
import { SectionHeading } from "@/components/ui/section-heading";
import { breadcrumbSchema, categorySchema } from "@/lib/schema";
import { getRelatedCategories } from "@/data/categories";
import type { ProductCategory } from "@/types";

export function CategoryTemplate({
  category,
  breadcrumbs,
}: {
  category: ProductCategory;
  breadcrumbs: Crumb[];
}) {
  const related = getRelatedCategories(category);
  const schema = [
    breadcrumbSchema([{ name: "Products", href: "/products" }, ...breadcrumbs]),
    categorySchema(category),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHero title={category.title} intro={category.intro} image={category.heroImage} />
      <Breadcrumbs items={breadcrumbs} />

      <section className="section-y bg-white">
        <div className="container-page space-y-10">
          {category.sections.map((section) => (
            <div key={section.heading} className="max-w-3xl">
              <h2 className="text-2xl font-bold text-brand-black">{section.heading}</h2>
              <p className="mt-3 text-base leading-relaxed text-foreground-muted">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {category.products.length > 0 && (
        <section className="section-y bg-brand-cream/30">
          <div className="container-page">
            <SectionHeading eyebrow="Product Range" title={`${category.title} Products`} />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {category.products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {category.gallery.length > 0 && (
        <section className="section-y bg-white">
          <div className="container-page">
            <SectionHeading eyebrow="Gallery" title="See It In Place" />
            <div className="mt-8">
              <Gallery images={category.gallery} />
            </div>
          </div>
        </section>
      )}

      <section className="section-y bg-brand-cream/30">
        <div className="container-page">
          <SectionHeading eyebrow="Key Features" title="Why Choose This Range" />
          <div className="mt-8">
            <FeatureGrid features={category.features} columns={2} />
          </div>
        </div>
      </section>

      {category.brands && category.brands.length > 0 && (
        <section className="section-y bg-white">
          <div className="container-page">
            <SectionHeading eyebrow="Authorised Dealer & Agent" title="Brands We Supply" />
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {category.brands.map((brand) => (
                <a
                  key={brand.slug}
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-brand-cream bg-brand-cream/30 p-6 transition-colors hover:border-brand-olive hover:bg-white"
                >
                  <span className="text-lg font-bold text-brand-black group-hover:text-brand-green">
                    {brand.name}
                  </span>
                  {brand.description && (
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                      {brand.description}
                    </p>
                  )}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {category.faqs && category.faqs.length > 0 && (
        <section className="section-y bg-white">
          <div className="container-page max-w-2xl">
            <SectionHeading eyebrow="FAQs" title="Common Questions" />
            <div className="mt-8">
              <FaqAccordion items={category.faqs} />
            </div>
          </div>
        </section>
      )}

      <RelatedCategories categories={related} />

      <CTABanner
        heading={category.ctaHeading ?? "Need help with your project?"}
        body={
          category.ctaBody ??
          "Contact our team for availability, specifications and quotations."
        }
      />
    </>
  );
}
