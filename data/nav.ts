import { NavItem } from "@/types";

export const productMegaMenu: NavItem["children"] = [
  {
    label: "Drainage & Water",
    href: "/products/drainage-water",
    description: "Twinwall pipe, land drainage and MDPE water main.",
  },
  {
    label: "Roofing & Guttering",
    href: "/products/roofing-guttering",
    description: "Box profile, fibre cement roofing and guttering systems.",
  },
  {
    label: "Timber & Fencing",
    href: "/products/timber-fencing",
    description: "Fence panels, sleepers, decking and chestnut fencing.",
  },
  {
    label: "Composite Products",
    href: "/products/composite",
    description: "Low-maintenance decking, cladding, fencing and balustrade.",
  },
  {
    label: "Gates",
    href: "/products/gates",
    description: "Made-to-measure timber, aluminium and composite gates.",
  },
  {
    label: "Animal Housing & Feeding Equipment",
    href: "/agricultural/animal-housing",
    description: "Cattle and sheep handling, feeding and housing equipment.",
  },
  {
    label: "Agricultural Supplies",
    href: "/agricultural/supplies",
    description: "Grass seed, field gates, troughs and agricultural fencing.",
  },
  {
    label: "Equestrian",
    href: "/equestrian",
    description: "Stables, field shelters, fencing and bedding.",
  },
  {
    label: "Garden Furniture",
    href: "/garden/garden-furniture",
    description: "Picnic tables, companion sets and relaxer seating.",
  },
  {
    label: "Greenhouses",
    href: "/garden/greenhouses",
    description: "Greenhouses from 4ft to 24ft, made to your requirements.",
  },
];

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products", children: productMegaMenu },
  {
    label: "Agricultural",
    href: "/agricultural",
    children: [
      {
        label: "Animal Housing & Feeding Equipment",
        href: "/agricultural/animal-housing",
      },
      { label: "Agricultural Supplies", href: "/agricultural/supplies" },
    ],
  },
  { label: "Equestrian", href: "/equestrian" },
  {
    label: "Garden & Landscaping",
    href: "/garden",
    children: [
      { label: "Garden Furniture", href: "/garden/garden-furniture" },
      { label: "Greenhouses", href: "/garden/greenhouses" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const topNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const categoryBar: NavItem["children"] = [
  { label: "Drainage & Water", href: "/products/drainage-water" },
  { label: "Roofing & Guttering", href: "/products/roofing-guttering" },
  { label: "Timber & Fencing", href: "/products/timber-fencing" },
  { label: "Composite Products", href: "/products/composite" },
  { label: "Gates", href: "/products/gates" },
  { label: "Animal Housing", href: "/agricultural/animal-housing" },
  { label: "Agricultural Supplies", href: "/agricultural/supplies" },
  { label: "Equestrian", href: "/equestrian" },
  { label: "Garden Furniture", href: "/garden/garden-furniture" },
  { label: "Greenhouses", href: "/garden/greenhouses" },
];

export const footerProductLinks: NavItem["children"] = [
  { label: "Drainage & Water", href: "/products/drainage-water" },
  { label: "Roofing & Guttering", href: "/products/roofing-guttering" },
  { label: "Timber & Fencing", href: "/products/timber-fencing" },
  { label: "Composite Products", href: "/products/composite" },
  { label: "Gates", href: "/products/gates" },
];

export const footerAgriculturalLinks: NavItem["children"] = [
  { label: "Animal Housing", href: "/agricultural/animal-housing" },
  { label: "Agricultural Supplies", href: "/agricultural/supplies" },
  { label: "Equestrian", href: "/equestrian" },
  { label: "Garden Furniture", href: "/garden/garden-furniture" },
  { label: "Greenhouses", href: "/garden/greenhouses" },
];
