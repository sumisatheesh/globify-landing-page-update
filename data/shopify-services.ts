import type { LucideIcon } from "lucide-react";
import {
  ShoppingBag,
  Puzzle,
  BarChart3,
  Palette,
  LayoutTemplate,
  Settings,
  Workflow,
  Code2,
  Gauge,
  TrendingUp,
  Settings2,
  Megaphone,
  Headphones,
  ShoppingCart,
  Globe,
} from "lucide-react";

export type ServiceFeature = {
  icon: LucideIcon;
  label: string;
};

export type MainService = {
  number: string;
  popular?: boolean;
  icon: LucideIcon;
  title: string;
  description: string;
  features: ServiceFeature[];
  illustration: "store-dev" | "integration" | "optimization";
};

export const mainServices: MainService[] = [
  {
    number: "01",
    icon: ShoppingBag,
    title: "Shopify Store Development",
    description:
      "Custom Shopify stores that reflect your brand, deliver seamless experiences, and convert visitors into loyal customers.",
    features: [
      { icon: Palette, label: "Custom Design" },
      { icon: LayoutTemplate, label: "Theme Development" },
      { icon: Settings, label: "Store Setup & Configuration" },
    ],
    illustration: "store-dev",
  },
  {
    number: "02",
    popular: true,
    icon: Puzzle,
    title: "Shopify Integration",
    description:
      "Seamless integration with apps, tools, ERPs, CRMs, and payment gateways to streamline operations and scale effortlessly.",
    features: [
      { icon: Puzzle, label: "App & Third-party Integration" },
      { icon: Workflow, label: "ERP / CRM Integration" },
      { icon: Code2, label: "Custom Functionality" },
    ],
    illustration: "integration",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Shopify Optimization",
    description:
      "Speed, performance, and conversion optimization to ensure your store runs smoothly and drives more sales.",
    features: [
      { icon: Gauge, label: "Speed Optimization" },
      { icon: TrendingUp, label: "Conversion Rate Optimization" },
      { icon: Settings2, label: "UX / UI Enhancements" },
    ],
    illustration: "optimization",
  },
];

export type OtherService = {
  icon: LucideIcon;
  title: string;
};

export const otherServices: OtherService[] = [
  { icon: Megaphone, title: "Shopify Growth & Marketing" },
  { icon: Headphones, title: "Shopify Support & Maintenance" },
  { icon: ShoppingCart, title: "Shopify Migration" },
  { icon: Globe, title: "Headless Commerce" },
  { icon: Settings2, title: "Custom Shopify Solutions" },
];
