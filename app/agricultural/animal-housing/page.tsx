import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryTemplate } from "@/components/shared/category-template";
import { getCategoryBySlug } from "@/data/categories";
import { categoryMetadata } from "@/lib/metadata";

const category = getCategoryBySlug("animal-housing");

export const metadata: Metadata = category ? categoryMetadata(category) : {};

export default function AnimalHousingPage() {
  if (!category) notFound();
  return (
    <CategoryTemplate
      category={category}
      breadcrumbs={[{ name: "Agricultural", href: "/agricultural" }, { name: category.title, href: category.path }]}
    />
  );
}
