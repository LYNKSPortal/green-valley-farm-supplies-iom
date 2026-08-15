import { siteConfig } from "@/lib/site-config";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/gv-icon.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phone,
    contactType: "customer service",
    email: siteConfig.email,
  },
  sameAs: [siteConfig.social.facebook],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
    addressLocality: siteConfig.address.town,
    postalCode: siteConfig.address.postcode,
    addressCountry: "IM",
  },
  openingHoursSpecification: siteConfig.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.day,
    description: h.time,
  })),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.url}/products?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export function breadcrumbSchema(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };
}

export function categorySchema(category: {
  title: string;
  intro: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category.title,
    description: category.intro,
    url: `${siteConfig.url}${category.path}`,
  };
}
