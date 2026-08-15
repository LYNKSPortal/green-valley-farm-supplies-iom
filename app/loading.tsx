import { CategoryCardSkeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container-page py-16">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <CategoryCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
