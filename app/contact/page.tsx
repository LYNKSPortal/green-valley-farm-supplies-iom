import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ContactForm } from "@/components/forms/contact-form";
import { MapBlock } from "@/components/shared/map-block";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaqAccordion } from "@/components/shared/faq-accordion";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Green Valley Supplies for availability, specifications, quotations or general enquiries about our agricultural, building and garden products.",
  alternates: { canonical: "/contact" },
};

const faqs = [
  {
    question: "Can I request a quote?",
    answer:
      "Yes — use the form below and select the relevant product category, or call our team directly. Please include as much detail as possible, including quantities and sizes.",
  },
  {
    question: "Do you deliver across the Isle of Man?",
    answer:
      "Island delivery is available for many of our products. Contact us to confirm delivery options and costs for your order.",
  },
  {
    question: "Can I visit to see products in person?",
    answer:
      "Yes, our showroom and yard are open during our advertised opening hours. Garden furniture in particular is available to view and try before you buy.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        intro="Get in touch for availability, specifications, quantities and quotations — our team is happy to help."
      />
      <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />

      <section className="section-y bg-white">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Get in Touch"
              title="Send Us a Message"
              body="Fill in the form and we'll get back to you as soon as possible. For urgent enquiries, please call us directly."
            />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-8">
            <MapBlock />
          </div>
        </div>
      </section>

      <section className="section-y bg-brand-cream/30">
        <div className="container-page max-w-2xl">
          <SectionHeading eyebrow="FAQs" title="Common Questions" />
          <div className="mt-8">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
