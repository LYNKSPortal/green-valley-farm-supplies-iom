import type { Metadata } from "next";
import type { ProductCategory } from "@/types";

export function categoryMetadata(category: ProductCategory): Metadata {
  return {
    title: category.title,
    description: category.shortDescription,
    alternates: { canonical: category.path },
    openGraph: {
      title: category.title,
      description: category.shortDescription,
      url: category.path,
      type: "website",
      images: [{ url: "/gv-icon.png", width: 512, height: 512, alt: category.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: category.title,
      description: category.shortDescription,
      images: ["/gv-icon.png"],
    },
  };
}
