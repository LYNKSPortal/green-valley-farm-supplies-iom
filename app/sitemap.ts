import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/products",
    "/agricultural",
    "/garden",
    "/about",
    "/contact",
  ];

  const legalRoutes = ["/privacy-policy", "/cookie-policy", "/terms"];

  const categoryRoutes = categories.map((c) => c.path);

  const now = new Date();

  const priorityFor = (path: string) => {
    if (path === "") return 1;
    if (legalRoutes.includes(path)) return 0.3;
    return 0.7;
  };

  return [...staticRoutes, ...categoryRoutes, ...legalRoutes].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: priorityFor(path),
  }));
}
