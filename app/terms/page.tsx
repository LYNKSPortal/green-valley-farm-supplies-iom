import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms & Conditions" intro="Terms of use for this website." />
      <Breadcrumbs items={[{ name: "Terms", href: "/terms" }]} />
      <section className="section-y bg-white">
        <div className="container-page max-w-2xl space-y-4 text-sm leading-relaxed text-foreground-muted">
          <p className="font-semibold text-brand-black">
            Placeholder content — replace with confirmed terms and conditions before launch.
          </p>
          <p>
            This website is provided for general information about Green
            Valley Supplies&apos; products and services. Product
            availability, pricing and specifications are subject to
            confirmation at the time of enquiry.
          </p>
        </div>
      </section>
    </>
  );
}
