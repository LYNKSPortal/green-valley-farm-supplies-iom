import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" intro="How we collect, use and protect your information." />
      <Breadcrumbs items={[{ name: "Privacy Policy", href: "/privacy-policy" }]} />
      <section className="section-y bg-white">
        <div className="container-page max-w-2xl space-y-4 text-sm leading-relaxed text-foreground-muted">
          <p className="font-semibold text-brand-black">
            Placeholder content — replace with confirmed privacy policy wording before launch.
          </p>
          <p>
            Green Valley Supplies will only use the personal information you
            provide (such as your name, email address and phone number) to
            respond to enquiries and provide quotations. We do not sell or
            share your details with third parties for marketing purposes.
          </p>
          <p>
            For any questions about how your data is handled, please contact
            us directly.
          </p>
        </div>
      </section>
    </>
  );
}
