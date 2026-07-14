import type { LucideIcon } from "lucide-react";
import {
  Shirt,
  SprayCan,
  Sofa,
  ShoppingBasket,
  HeartPulse,
  Smartphone,
  Gem,
  Dumbbell,
  Baby,
  Car,
  BookOpen,
  MoreHorizontal,
} from "lucide-react";

export type Industry = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const industries: Industry[] = [
  {
    icon: Shirt,
    title: "Fashion & Apparel",
    description: "Trendy online stores that attract shoppers and drive repeat sales.",
  },
  {
    icon: SprayCan,
    title: "Beauty & Cosmetics",
    description:
      "Elegant e-commerce experiences that showcase your brand and build loyalty.",
  },
  {
    icon: Sofa,
    title: "Home Decor & Furniture",
    description:
      "Beautifully designed stores that bring your products to life online.",
  },
  {
    icon: ShoppingBasket,
    title: "Grocery & Supermarket",
    description:
      "Seamless online grocery experiences that make everyday shopping easy.",
  },
  {
    icon: HeartPulse,
    title: "Health & Supplements",
    description:
      "Secure, trustworthy stores that promote wellness and build customer confidence.",
  },
  {
    icon: Smartphone,
    title: "Electronics & Gadgets",
    description:
      "Feature-rich stores for the latest tech products and better conversions.",
  },
  {
    icon: Gem,
    title: "Jewelry & Accessories",
    description:
      "Premium shopping experiences that reflect the value of your brand.",
  },
  {
    icon: Dumbbell,
    title: "Sports & Fitness",
    description:
      "Stores built for performance brands that inspire and convert athletes.",
  },
  {
    icon: Baby,
    title: "Baby & Kids",
    description: "Kid-friendly e-commerce stores that parents love and trust.",
  },
  {
    icon: Car,
    title: "Automotive & Parts",
    description:
      "Powerful stores for automotive brands and aftermarket businesses.",
  },
  {
    icon: BookOpen,
    title: "Books & Stationery",
    description:
      "Organized, engaging stores that make discovery and purchasing effortless.",
  },
  {
    icon: MoreHorizontal,
    title: "And Many More",
    description:
      "From niche to enterprise, we build e-commerce stores for every business.",
  },
];
