import { brands } from "@/data/brands";
import { SectionHeading } from "@/components/ui/section-heading";

export function BrandStrip() {
  return (
    <section className="section-y bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Trusted Suppliers"
          title="Brands & Suppliers We Work With"
          align="center"
          className="mx-auto"
        />
        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {brands.map((brand) => (
            <a
              key={brand.slug}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center gap-2 rounded-2xl border border-brand-cream bg-brand-cream/30 px-4 py-8 text-center transition-colors hover:border-brand-olive hover:bg-white"
            >
              <span className="text-lg font-bold text-brand-black group-hover:text-brand-green">
                {brand.name}
              </span>
              {brand.description && (
                <span className="text-xs leading-relaxed text-foreground-muted">
                  {brand.description}
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
