import { cn } from "@/lib/utils";

type BadgeTone = "olive" | "green" | "purple" | "charcoal" | "cream";

const tones: Record<BadgeTone, string> = {
  olive: "bg-brand-olive/10 text-brand-green border-brand-olive/30",
  green: "bg-brand-green/10 text-brand-green border-brand-green/30",
  purple: "bg-brand-purple/10 text-brand-purple border-brand-purple/30",
  charcoal: "bg-brand-charcoal text-white border-brand-charcoal",
  cream: "bg-brand-cream text-brand-black border-brand-cream",
};

export function Badge({
  tone = "olive",
  className,
  children,
}: {
  tone?: BadgeTone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}

export function AvailabilityBadge({
  availability,
}: {
  availability?: "in-stock" | "made-to-measure" | "order";
}) {
  if (!availability) return null;
  if (availability === "in-stock") {
    return <Badge tone="green">Usually Held in Stock</Badge>;
  }
  if (availability === "made-to-measure") {
    return <Badge tone="purple">Made to Measure</Badge>;
  }
  return <Badge tone="cream">Available to Order</Badge>;
}
