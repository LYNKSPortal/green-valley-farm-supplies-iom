import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { FeatureGrid } from "@/components/shared/feature-grid";
import { BrandStrip } from "@/components/shared/brand-strip";
import { CTABanner } from "@/components/shared/cta-banner";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  BoxIcon,
  UsersIcon,
  BadgeCheckIcon,
  RulerIcon,
} from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Green Valley Supplies provides a broad range of agricultural, fencing, landscaping, drainage, roofing, equestrian and garden products to customers across the Isle of Man.",
  alternates: { canonical: "/about" },
};

const pillars = [
  {
    icon: BoxIcon,
    title: "Extensive Local Stock",
    body: "We hold high levels of stock across agricultural, building, landscaping and garden products, so customers can get what they need without delay.",
  },
  {
    icon: BadgeCheckIcon,
    title: "Trusted Supplier Relationships",
    body: "We work closely with established manufacturers and are authorised dealers and agents for selected leading agricultural brands.",
  },
  {
    icon: UsersIcon,
    title: "Trade & Public Customers",
    body: "We supply trade professionals and members of the public alike, with straightforward, knowledgeable service for projects of every size.",
  },
  {
    icon: RulerIcon,
    title: "Bespoke & Made-to-Measure",
    body: "From gates and stable blocks to livestock handling systems, many of our products can be tailored to your exact requirements.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Green Valley Supplies"
        intro="Local Knowledge. Extensive Stock. Practical Solutions."
      />
      <Breadcrumbs items={[{ name: "About", href: "/about" }]} />

      <section className="section-y bg-white">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="Who We Are" title="A Trusted Local Supplier" />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground-muted">
            <p>
              Green Valley Supplies provides a broad range of agricultural,
              fencing, landscaping, drainage, roofing, equestrian and garden
              products to customers across the Isle of Man.
            </p>
            <p>
              From everyday essentials held in stock to specialist and
              bespoke products, our aim is to provide practical solutions
              backed by knowledgeable, straightforward service.
            </p>
            <p>
              Whether you&apos;re a trade professional working on a large
              agricultural project or a homeowner tackling a garden upgrade,
              our team can help you choose the right products for the job —
              and many of our ranges can be made to measure to suit your
              exact requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y bg-brand-cream/30">
        <div className="container-page">
          <SectionHeading eyebrow="What Sets Us Apart" title="How We Work" align="center" className="mx-auto" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-brand-cream bg-white p-6 shadow-card"
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-olive/10 text-brand-green">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-bold text-brand-black">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="Our Approach" title="Practical Solutions, Straightforward Service" />
          <div className="mt-6">
            <FeatureGrid
              columns={2}
              features={[
                "Extensive product knowledge across agricultural and trade supplies",
                "Large local stockholding for fast availability",
                "Agricultural and rural expertise built up over years of trading",
                "Serving both trade and public customers",
                "Trusted relationships with established suppliers and manufacturers",
                "Bespoke and made-to-measure solutions where needed",
              ]}
            />
          </div>
        </div>
      </section>

      <BrandStrip />

      <CTABanner
        heading="Want to know more about what we stock?"
        body="Get in touch with our team — we're happy to help with availability, specifications and quotations."
      />
    </>
  );
}
