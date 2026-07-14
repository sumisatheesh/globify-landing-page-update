import type { LucideIcon } from "lucide-react";
import {
  Search,
  Target,
  PenTool,
  Code2,
  Gauge,
  Rocket,
  ShieldCheck,
  Users,
  Zap,
  BarChart3,
} from "lucide-react";

export type ProcessStep = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description:
      "We understand your business, audience, and goals to define the right direction.",
  },
  {
    number: "02",
    icon: Target,
    title: "Strategize",
    description:
      "We craft a data-driven strategy and roadmap tailored to your business objectives.",
  },
  {
    number: "03",
    icon: PenTool,
    title: "Design",
    description:
      "We create stunning, conversion-focused designs that elevate your brand.",
  },
  {
    number: "04",
    icon: Code2,
    title: "Develop",
    description:
      "We build high-performing Shopify stores with clean code, powerful features, and integrations.",
  },
  {
    number: "05",
    icon: Gauge,
    title: "Optimize",
    description:
      "We test, optimize, and refine every element for speed, SEO, and maximum conversions.",
  },
  {
    number: "06",
    icon: Rocket,
    title: "Launch & Grow",
    description:
      "We launch your store and support your growth with data insights and ongoing optimization.",
  },
];

export type ProcessFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const processFeatures: ProcessFeature[] = [
  {
    icon: ShieldCheck,
    title: "Transparent Process",
    description: "Clear communication at every step.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled Shopify experts dedicated to your success.",
  },
  {
    icon: Zap,
    title: "Agile Approach",
    description: "Flexible, fast, and focused on delivering impact.",
  },
  {
    icon: BarChart3,
    title: "Results Driven",
    description: "Every decision is made to drive measurable growth.",
  },
];
