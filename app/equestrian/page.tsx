import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryTemplate } from "@/components/shared/category-template";
import { getCategoryBySlug } from "@/data/categories";
import { categoryMetadata } from "@/lib/metadata";

const category = getCategoryBySlug("equestrian");

export const metadata: Metadata = category ? categoryMetadata(category) : {};

export default function EquestrianPage() {
  if (!category) notFound();
  return (
    <CategoryTemplate
      category={category}
      breadcrumbs={[{ name: category.title, href: category.path }]}
    />
  );
}
