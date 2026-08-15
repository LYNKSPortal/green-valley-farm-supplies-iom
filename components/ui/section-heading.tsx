import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-sm font-semibold uppercase tracking-wider",
            tone === "dark" ? "text-brand-green-light" : "text-brand-green"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl font-bold sm:text-4xl",
          tone === "dark" ? "text-white" : "text-brand-black"
        )}
      >
        {title}
      </h2>
      {body && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-white/80" : "text-foreground-muted"
          )}
        >
          {body}
        </p>
      )}
    </div>
  );
}
