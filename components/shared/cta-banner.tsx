import { LinkButton } from "@/components/ui/button";

export function CTABanner({
  heading,
  body,
  primary = { label: "Get in Touch", href: "/contact" },
  secondary = { label: "Visit Us", href: "/contact#find-us" },
  tone = "olive",
}: {
  heading: string;
  body: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string } | null;
  tone?: "olive" | "green" | "charcoal";
}) {
  const bg =
    tone === "olive"
      ? "bg-brand-olive"
      : tone === "green"
      ? "bg-brand-green"
      : "bg-brand-charcoal";

  return (
    <section className={`${bg} section-y`}>
      <div className="container-page flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-3xl font-bold text-white sm:text-4xl">
          {heading}
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
          {body}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <LinkButton
            href={primary.href}
            variant="secondary-dark"
            size="lg"
            className="border-white bg-white text-brand-black hover:bg-brand-cream"
          >
            {primary.label}
          </LinkButton>
          {secondary && (
            <LinkButton
              href={secondary.href}
              size="lg"
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-brand-black"
            >
              {secondary.label}
            </LinkButton>
          )}
        </div>
      </div>
    </section>
  );
}
