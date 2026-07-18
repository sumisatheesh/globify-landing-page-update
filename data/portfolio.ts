import type { LucideIcon } from "lucide-react";
import {
  TrendingUp,
  ShoppingCart,
  User,
  UserPlus,
  Repeat,
  Gauge,
} from "lucide-react";

export type PortfolioStat = {
  icon: LucideIcon;
  value: string;
  label: string;
};

export type PortfolioProject = {
  brand: string;
  heading: string[];
  description: string;
  stats: PortfolioStat[];
  tags: string[];
  image?: string;
  logo?: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    brand: "Wilson",
    heading: ["Turn Pressure.", "Into Performance."],
    description:
      "Delivered a competition-ready Shopify storefront for a global racket and gear leader, built to match the intensity of serious athletes.",
    stats: [
      { icon: Gauge, value: "+95%", label: "Speed Score" },
      { icon: ShoppingCart, value: "+77%", label: "Conversion Rate" },
      { icon: UserPlus, value: "+112%", label: "New Customer Growth" },
    ],
    tags: ["Shopify Development", "Performance Optimization"],
    image: "/portfolio/wilson-cover.png",
    logo: "/logos/wilson.svg",
  },
  {
    brand: "SALOMON",
    heading: ["Technical Innovation.", "Conceptual Design."],
    description:
      "Built a technical-performance Shopify store for a global outdoor brand, engineered for premium collab drops and immersive product storytelling.",
    stats: [
      { icon: Gauge, value: "+98%", label: "Speed Score" },
      { icon: ShoppingCart, value: "+80%", label: "Conversion Rate" },
      { icon: UserPlus, value: "+130%", label: "New Customer Growth" },
    ],
    tags: ["Shopify Development", "Performance Optimization"],
    image: "/portfolio/salomon-cover.png",
    logo: "/logos/salomon-trim.webp",
  },
  {
    brand: "Judith Leiber Couture",
    heading: ["Iconic Couture.", "Elevated Online."],
    description:
      "Crafted a couture-grade Shopify flagship for an icon of statement clutches, pairing jewel-box photography with a flawless checkout.",
    stats: [
      { icon: TrendingUp, value: "+168%", label: "Revenue Increase" },
      { icon: ShoppingCart, value: "+89%", label: "Conversion Rate" },
      { icon: User, value: "-41%", label: "Cart Abandonment" },
    ],
    tags: ["Shopify Development", "Luxury E-Commerce"],
    image: "/portfolio/judith-leiber-cover.png",
    logo: "/logos/judith-leiber-trim.avif",
  },
  {
    brand: "Kat Maconie",
    heading: ["Bold Style.", "Seamless Shopping."],
    description:
      "Launched a bold, color-forward Shopify storefront for a statement-heel footwear label, built for mobile-first shoppers.",
    stats: [
      { icon: TrendingUp, value: "+174%", label: "Revenue Increase" },
      { icon: ShoppingCart, value: "+91%", label: "Conversion Rate" },
      { icon: User, value: "-44%", label: "Cart Abandonment" },
    ],
    tags: ["Shopify Development", "Mobile Optimization"],
    image: "/portfolio/kat-maconie-cover.png",
    logo: "/logos/kat-maconie-trim.avif",
  },
  {
    brand: "InstaRunway",
    heading: ["Multi-Brand Luxury.", "One Seamless Store."],
    description:
      "Curated a multi-label luxury marketplace on Shopify, uniting top fashion houses under one seamless, elevated shopping experience.",
    stats: [
      { icon: TrendingUp, value: "+142%", label: "Revenue Increase" },
      { icon: ShoppingCart, value: "+74%", label: "Conversion Rate" },
      { icon: UserPlus, value: "+96%", label: "New Customer Growth" },
    ],
    tags: ["Shopify Development", "Multi-Brand Storefront"],
    image: "/portfolio/instarunway-cover.png",
    logo: "/logos/instarunway-trim.avif",
  },
  {
    brand: "Mr Start",
    heading: ["Luxury Redefined.", "Modern Tailoring."],
    description:
      "Crafted a refined Shopify flagship for a London made-to-measure tailor, built to carry bespoke suiting with the same precision as the craft itself.",
    stats: [
      { icon: TrendingUp, value: "+161%", label: "Revenue Increase" },
      { icon: ShoppingCart, value: "+85%", label: "Conversion Rate" },
      { icon: User, value: "-39%", label: "Cart Abandonment" },
    ],
    tags: ["Shopify Development", "Luxury E-Commerce"],
    image: "/portfolio/mr-start-cover.png",
    logo: "/logos/mr-start-trim.avif",
  },
  {
    brand: "Moher",
    heading: ["Fresh Fits.", "Lasting Impressions."],
    description:
      "Built a multi-category Shopify store for a lifestyle brand spanning apparel, bags, and home goods, with a warm, editorial storefront that turns browsing into shopping.",
    stats: [
      { icon: TrendingUp, value: "+149%", label: "Revenue Increase" },
      { icon: ShoppingCart, value: "+79%", label: "Conversion Rate" },
      { icon: UserPlus, value: "+103%", label: "New Customer Growth" },
    ],
    tags: ["Shopify Development", "UAE E-Commerce"],
    image: "/portfolio/moher-cover.png",
    logo: "/logos/moher-trim.avif",
  },
  {
    brand: "Moto Avenue",
    heading: ["Build Your Bike.", "Next Level."],
    description:
      "Built a rider-first Shopify catalog spanning hundreds of bike parts and accessories, with fast filtering built for speed.",
    stats: [
      { icon: TrendingUp, value: "+156%", label: "Revenue Increase" },
      { icon: ShoppingCart, value: "+68%", label: "AOV Growth" },
      { icon: User, value: "-38%", label: "Cart Abandonment" },
    ],
    tags: ["Shopify Development", "Catalog Management"],
    image: "/portfolio/moto-avenue-cover.png",
    logo: "/logos/moto-avenue-trim.webp",
  },
  {
    brand: "Creative Florist",
    heading: ["Fresh Blooms.", "Delivered Daily."],
    description:
      "Built a same-day delivery Shopify store for a Dubai florist, with occasion-based collections that turn one order into a repeat customer.",
    stats: [
      { icon: TrendingUp, value: "+188%", label: "Revenue Increase" },
      { icon: Repeat, value: "+66%", label: "Repeat Purchase Rate" },
      { icon: ShoppingCart, value: "+83%", label: "Conversion Rate" },
    ],
    tags: ["Shopify Development", "UAE E-Commerce"],
    image: "/portfolio/creative-florist-cover.png",
    logo: "/logos/creative-florist-trim.webp",
  },
];
