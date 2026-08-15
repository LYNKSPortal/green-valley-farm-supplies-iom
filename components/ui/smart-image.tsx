import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ImageRef } from "@/types";

const PALETTE = [
  "#5F8447",
  "#81A333",
  "#9AC655",
  "#945897",
  "#2A2A2A",
];

function hashString(value: string) {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

/**
 * Tasteful, on-brand placeholder used until real product photography is
 * supplied. Deterministically picks a brand colour + icon treatment based on
 * the image's alt text so the same "product" always renders consistently.
 */
function PlaceholderGraphic({ alt, className }: { alt: string; className?: string }) {
  const hash = hashString(alt);
  const color = PALETTE[hash % PALETTE.length];
  const initials = alt
    .split(" ")
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden bg-brand-cream",
        className
      )}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.14]"
        viewBox="0 0 200 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <pattern id={`grid-${hash}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M0 20L20 0" stroke={color} strokeWidth="1.5" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill={`url(#grid-${hash})`} />
      </svg>
      <div
        className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl text-lg font-bold text-white shadow-sm sm:h-20 sm:w-20 sm:text-xl"
        style={{ backgroundColor: color }}
      >
        {initials || "GV"}
      </div>
    </div>
  );
}

export function SmartImage({
  image,
  className,
  sizes = "(min-width: 1024px) 400px, 100vw",
  priority = false,
}: {
  image: ImageRef;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (image.src) {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", className)}
      />
    );
  }

  return <PlaceholderGraphic alt={image.alt} className={className} />;
}
