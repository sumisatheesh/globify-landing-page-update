import type { LucideIcon } from "lucide-react";
import { Star, MessageCircle, ThumbsUp, Repeat } from "lucide-react";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  brand: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Globify transformed our idea into a high-performing Shopify store that exceeded our expectations. Their attention to detail and communication were outstanding.",
    name: "John Carter",
    role: "Founder",
    company: "Luxora Fashion",
    brand: "LUXORA",
  },
  {
    quote:
      "From design to development and launch, the Globify team was professional, proactive, and results-driven. Our store speed and conversions improved drastically.",
    name: "Sarah Johnson",
    role: "Marketing Head",
    company: "Fitfuel",
    brand: "FITFUEL",
  },
  {
    quote:
      "The team understood our requirements perfectly and delivered a store that our customers love. Sales grew by 210% within the first three months!",
    name: "Michael Brown",
    role: "Co-Founder",
    company: "Paws & Play",
    brand: "P&P",
  },
  {
    quote:
      "A seamless experience from start to finish. Their strategic approach and technical expertise helped us scale our brand to a whole new level.",
    name: "Lisa Thompson",
    role: "Director",
    company: "Urban Home",
    brand: "UH",
  },
];

export type TrustedBrand = {
  name: string;
  tagline: string;
};

export const trustedBrands: TrustedBrand[] = [
  { name: "LUXORA", tagline: "New York" },
  { name: "FITFUEL", tagline: "Fuel Your Body" },
  { name: "PAWS & PLAY", tagline: "Happy Pets, Happy Life" },
  { name: "URBAN HOME", tagline: "Live Beautifully" },
  { name: "MODERNIK", tagline: "Collective" },
  { name: "VELOCE", tagline: "Performance" },
];

export type TestimonialStat = {
  icon: LucideIcon;
  value: string;
  label: string;
};

export const testimonialStats: TestimonialStat[] = [
  { icon: Star, value: "4.9/5", label: "Average Rating Across Platforms" },
  { icon: MessageCircle, value: "100+", label: "Happy Clients Worldwide" },
  { icon: ThumbsUp, value: "98%", label: "Client Satisfaction Rate" },
  { icon: Repeat, value: "80%", label: "Clients Come Back For More Projects" },
];
