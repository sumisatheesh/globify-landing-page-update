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
      "Globify has been a trusted partner in the development and growth of our InstaRunway and Judith Leiber online stores. Their team consistently delivered premium storefronts, seamless functionality, and strategic support that helped strengthen our digital presence and customer experience across both brands.",
    name: "Christopher Reed",
    role: "Executive",
    company: "JSK Fashion International",
    brand: "J",
  },
  {
    quote:
      "Working with Globify has been instrumental to our regional growth. Their team built high-performing Wilson and Solomon stores and provided invaluable support for our UAE and KSA expansion. Their professionalism, expertise, and commitment to results exceeded our expectations.",
    name: "David",
    role: "Marketing executive",
    company: "Timeless Group",
    brand: "w",
  },

  {
    quote:
      "Globify delivered an outstanding e-commerce experience for our Creative Florist brand. Their team understood our requirements from day one and created a store that is visually appealing, easy to manage, and built for growth.",
    name: "Mr. Najeeb",
    role: "Founder",
    company: "Creative Florist UAE",
    brand: "c",
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
