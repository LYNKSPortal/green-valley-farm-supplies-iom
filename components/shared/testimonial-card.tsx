export function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role?: string;
}) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl border border-brand-cream bg-white p-6 shadow-card">
      <blockquote className="text-base leading-relaxed text-brand-black">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5 border-t border-brand-cream pt-4">
        <p className="text-sm font-semibold text-brand-black">{name}</p>
        {role && <p className="text-xs text-foreground-muted">{role}</p>}
      </figcaption>
    </figure>
  );
}
