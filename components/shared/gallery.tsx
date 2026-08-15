import { SmartImage } from "@/components/ui/smart-image";
import type { ImageRef } from "@/types";

export function Gallery({ images }: { images: ImageRef[] }) {
  if (!images.length) return null;

  return (
    <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-[3/2] w-[75%] shrink-0 snap-start overflow-hidden rounded-2xl border border-brand-cream sm:w-auto sm:shrink"
        >
          <SmartImage
            image={image}
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 75vw"
          />
        </div>
      ))}
    </div>
  );
}
