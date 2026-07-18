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
      "Globify transformed our digital presence completely. The team delivered an e-commerce platform that increased our conversion rate by 340% within the first quarter.",
    name: "Rajesh Mehta",
    role: "CEO",
    company: "InstaRunway",
    brand: "R",
  },
  {
    quote:
      "Their AI-powered automation solutions saved us over 200 hours per month in manual processes. The ROI was visible from day one.",
    name: "Sarah Chen",
    role: "CTO",
    company: "American Knit",
    brand: "S",
  },
  {
    quote:
      "Working with Globify felt like having an in-house tech team. They understood our vision and delivered beyond expectations, on time and on budget.",
    name: "Vikram Singh",
    role: "Founder",
    company: "Moher Fashion",
    brand: "V",
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
