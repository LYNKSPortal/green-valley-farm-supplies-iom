import { SmartImage } from "@/components/ui/smart-image";
import { LinkButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ImageRef } from "@/types";

export function ShowcaseSection({
  eyebrow,
  title,
  body,
  href,
  cta,
  image,
  reverse = false,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  body: string;
  href: string;
  cta?: string;
  image?: ImageRef;
  reverse?: boolean;
  tone?: "light" | "cream";
}) {
  return (
    <section className={cn("section-y", tone === "cream" ? "bg-brand-cream/30" : "bg-white")}>
      <div className="container-page">
        <div
          className={cn(
            "grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16",
            reverse && "lg:[&>*:first-child]:order-2"
          )}
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-brand-cream">
            <SmartImage
              image={image ?? { alt: title }}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-green">
              {eyebrow}
            </p>
            <h2 className="text-3xl font-bold text-brand-black sm:text-4xl">{title}</h2>
            <p className="mt-4 text-base leading-relaxed text-foreground-muted sm:text-lg">
              {body}
            </p>
            <LinkButton href={href} className="mt-6">
              {cta ?? "View Range"}
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
