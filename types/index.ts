export type ImageRef = {
  /** Path under /public, e.g. /images/category/foo.jpg. Leave undefined to use the placeholder graphic. */
  src?: string;
  alt: string;
};

export type Availability = "in-stock" | "made-to-measure" | "order";

export type ProductItem = {
  slug: string;
  name: string;
  description: string;
  image?: ImageRef;
  availability?: Availability;
};

export type CategorySection = {
  heading: string;
  body: string;
};

export type BrandRef = {
  name: string;
  slug: string;
  url?: string;
  description?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ProductCategory = {
  slug: string;
  path: string;
  navGroup: "products" | "agricultural" | "equestrian" | "garden";
  title: string;
  shortDescription: string;
  intro: string;
  heroImage?: ImageRef;
  cardImage?: ImageRef;
  sections: CategorySection[];
  products: ProductItem[];
  gallery: ImageRef[];
  features: string[];
  brands?: BrandRef[];
  faqs?: FaqItem[];
  relatedSlugs: string[];
  ctaHeading?: string;
  ctaBody?: string;
};

export type NavChild = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};
