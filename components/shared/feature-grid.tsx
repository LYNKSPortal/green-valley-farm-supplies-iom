import { CheckIcon } from "@/components/ui/icons";

export function FeatureGrid({
  title,
  features,
  columns = 2,
}: {
  title?: string;
  features: string[];
  columns?: 2 | 3;
}) {
  return (
    <div>
      {title && <h3 className="mb-4 text-xl font-bold text-brand-black">{title}</h3>}
      <ul
        className={`grid gap-3 ${columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}
      >
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 rounded-xl border border-brand-cream bg-white px-4 py-3.5"
          >
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-olive/15 text-brand-green">
              <CheckIcon className="h-3.5 w-3.5" />
            </span>
            <span className="text-sm text-brand-black">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
