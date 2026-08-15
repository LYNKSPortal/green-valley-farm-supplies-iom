import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";

export const metadata: Metadata = {
  title: "Cookie Policy",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero title="Cookie Policy" intro="How cookies are used on this website." />
      <Breadcrumbs items={[{ name: "Cookie Policy", href: "/cookie-policy" }]} />
      <section className="section-y bg-white">
        <div className="container-page max-w-2xl space-y-4 text-sm leading-relaxed text-foreground-muted">
          <p className="font-semibold text-brand-black">
            Placeholder content — replace with confirmed cookie policy wording before launch.
          </p>
          <p>
            This website uses essential cookies required for core
            functionality. If analytics or marketing cookies are added in
            future, this policy will be updated to reflect their use and
            purpose.
          </p>
        </div>
      </section>
    </>
  );
}
