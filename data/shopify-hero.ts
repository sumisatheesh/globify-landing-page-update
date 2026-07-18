import type { LucideIcon } from "lucide-react";
import {
  Award,
  Rocket,
  MapPin,
  ShoppingBag,
  Users,
  BarChart3,
  Zap,
} from "lucide-react";

export type HeroHighlight = {
  icon: LucideIcon;
  image?: string;
  value: string;
  label: string;
};

export const heroHighlights: HeroHighlight[] = [
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Rocket, value: "500+", label: "Projects Delivered" },
  { icon: MapPin, value: "UAE", label: "Market Expertise" },
  {
    icon: ShoppingBag,
    image: "/logos/shopify-bag.svg",
    value: "Shopify",
    label: "Specialists",
  },
];

export type HeroStatCard = {
  icon: LucideIcon;
  image?: string;
  value: string;
  label: string;
  accent?: "primary" | "shopify";
};

export const heroStatCards: HeroStatCard[] = [
  { icon: Users, value: "95%", label: "Client Retention" },
  { icon: BarChart3, value: "3.2x", label: "Avg. Conversion Lift" },
  {
    icon: ShoppingBag,
    image: "/logos/shopify-bag.svg",
    value: "100%",
    label: "Shopify-Focused",
    accent: "shopify",
  },
  { icon: Zap, value: "<2s", label: "Avg. Store Load Time" },
];

export type HeroClientLogo = {
  name: string;
  image?: string;
  /** Logo has no alpha channel (opaque background) — needs a light chip instead of an invert filter. */
  needsLightBg?: boolean;
};

export const heroClientLogos: HeroClientLogo[] = [
  { name: "Wilson", image: "/logos/wilson.svg" },
  { name: "SALOMON", image: "/logos/salomon-trim.webp" },
  { name: "Judith Leiber", image: "/logos/judith-leiber-trim.avif" },
  { name: "Kat Maconie", image: "/logos/kat-maconie-trim.avif" },
  { name: "instaRUNWAY", image: "/logos/instarunway-trim.avif" },
  { name: "MR-START", image: "/logos/mr-start-trim.avif" },
  { name: "Moher", image: "/logos/moher-trim.avif" },
  { name: "Moto Avenue", image: "/logos/moto-avenue-trim.webp" },
  {
    name: "Creative Florist",
    image: "/logos/creative-florist-trim.webp",
    needsLightBg: true,
  },
];

export type HeroCertification = {
  title: string;
  image: string;
};

export const heroCertifications: HeroCertification[] = [
  { title: "Shopify", image: "/certifications/partner-shopify.png" },
  { title: "Klaviyo", image: "/certifications/partner-klaviyo.png" },
  { title: "Meta", image: "/certifications/partner-meta.png" },
  { title: "CloudQ", image: "/certifications/partner-cloudq.png" },
  { title: "Mailchimp", image: "/certifications/partner-mailchimp.png" },
  { title: "AWS", image: "/certifications/partner-aws.png" },
  { title: "Google", image: "/certifications/partner-google.png" },
  { title: "HubSpot", image: "/certifications/partner-hubspot.png" },
  { title: "Make", image: "/certifications/partner-make.png" },
  { title: "Microsoft", image: "/certifications/partner-microsoft.png" },
  { title: "Cloudflare", image: "/certifications/partner-cloudflare.png" },
  { title: "Stripe", image: "/certifications/partner-stripe.png" },
];
