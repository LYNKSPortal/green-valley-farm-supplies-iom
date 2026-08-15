import { categories } from "@/data/categories";

export type SearchResult = {
  id: string;
  name: string;
  category: string;
  categoryHref: string;
  description: string;
  href: string;
};

function buildIndex(): SearchResult[] {
  const results: SearchResult[] = [];

  for (const category of categories) {
    results.push({
      id: `category-${category.slug}`,
      name: category.title,
      category: category.title,
      categoryHref: category.path,
      description: category.shortDescription,
      href: category.path,
    });

    for (const product of category.products) {
      results.push({
        id: `product-${category.slug}-${product.slug}`,
        name: product.name,
        category: category.title,
        categoryHref: category.path,
        description: product.description,
        href: `${category.path}#${product.slug}`,
      });
    }
  }

  return results;
}

export const searchIndex = buildIndex();

export function search(query: string, limit = 8): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const scored = searchIndex
    .map((item) => {
      const haystack = `${item.name} ${item.category} ${item.description}`.toLowerCase();
      let score = 0;
      if (item.name.toLowerCase().startsWith(q)) score += 5;
      if (item.name.toLowerCase().includes(q)) score += 3;
      if (haystack.includes(q)) score += 1;
      return { item, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.item);

  return scored;
}
