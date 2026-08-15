import { cn } from "@/lib/utils";

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn("animate-pulse rounded-xl bg-brand-cream/70", className)}
      aria-hidden="true"
    />
  );
}

export function CategoryCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-brand-cream bg-white">
      <Skeleton className="aspect-[4/3] rounded-none" />
      <div className="space-y-3 p-5">
        <Skeleton className="h-5 w-2/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-1/3" />
      </div>
    </div>
  );
}
