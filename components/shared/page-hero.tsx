import { SmartImage } from "@/components/ui/smart-image";
import type { ImageRef } from "@/types";

export function PageHero({
  title,
  intro,
  image,
}: {
  title: string;
  intro: string;
  image?: ImageRef;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-charcoal">
      <div className="relative h-[320px] w-full sm:h-[380px] lg:h-[420px]">
        <SmartImage
          image={image ?? { alt: title }}
          priority
          sizes="100vw"
          className="opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/85 via-brand-black/45 to-brand-black/15" />
        <div className="container-page relative flex h-full flex-col items-start justify-center">
          <h1 className="max-w-2xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            {intro}
          </p>
        </div>
      </div>
    </section>
  );
}
