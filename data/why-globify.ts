import type { LucideIcon } from "lucide-react";
import {
  Layers,
  Palette,
  Code2,
  BarChart3,
  Headphones,
  Users,
  Target,
  Rocket,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";

export type ComparisonRow = {
  icon: LucideIcon;
  label: string;
  typical: string;
  globify: string;
  globifyHighlight?: string;
};

export const comparisonRows: ComparisonRow[] = [
  {
    icon: Layers,
    label: "Approach",
    typical: "Just take requirements and build",
    globify: "We strategize, plan, and build for long-term growth",
  },
  {
    icon: Palette,
    label: "Design & Experience",
    typical: "Use basic templates with limited customization",
    globify: "Custom, conversion-focused designs that reflect your brand",
  },
  {
    icon: Code2,
    label: "Development Quality",
    typical: "Standard development with average quality",
    globify: "Clean, scalable, and high-performance code",
  },
  {
    icon: BarChart3,
    label: "Performance Focus",
    typical: "Focus on launch, not performance",
    globify: "Speed, SEO, and CRO built into everything we do",
  },
  {
    icon: Headphones,
    label: "Communication",
    typical: "Slow responses and unclear updates",
    globify: "Transparent, proactive, and timely communication",
  },
  {
    icon: Users,
    label: "After Launch",
    typical: "Launch and disappear",
    globify: "Ongoing support and continuous optimization",
  },
  {
    icon: Target,
    label: "Business Impact",
    typical: "Delivers a website, not business growth",
    globify: "Builds digital experiences that drive",
    globifyHighlight: "measurable results",
  },
];

export type ComparisonStat = {
  icon: LucideIcon;
  image?: string;
  value: string;
  suffix?: string;
  label: string;
};

export const comparisonStats: ComparisonStat[] = [
  { icon: Rocket, value: "10+", label: "Years of Experience" },
  {
    icon: ShoppingBag,
    image: "/logos/shopify-bag.svg",
    value: "100+",
    label: "Shopify Projects Delivered",
  },
  { icon: Users, value: "50+", label: "Happy Clients Worldwide" },
  { icon: TrendingUp, value: "4.9", suffix: "/5", label: "Average Client Rating" },
];
