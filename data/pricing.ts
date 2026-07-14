export type PricingPlan = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter Store",
    price: "$1,499",
    cadence: "one-time project",
    description: "For new brands launching their first Shopify store.",
    features: [
      "Custom Shopify theme setup",
      "Up to 20 product listings",
      "Mobile-responsive design",
      "Basic on-page SEO setup",
      "2 weeks post-launch support",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth Store",
    price: "$3,999",
    cadence: "one-time project",
    description: "For scaling brands that need custom design and optimization.",
    features: [
      "Fully custom Shopify design",
      "Unlimited product listings",
      "App & third-party integrations",
      "Conversion rate optimization",
      "Advanced SEO & speed optimization",
      "30 days priority support",
    ],
    highlighted: true,
    cta: "Start Your Project",
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "tailored pricing",
    description:
      "For large brands needing multi-store, headless, or ongoing growth support.",
    features: [
      "Multi-store or headless Shopify setup",
      "Dedicated development team",
      "Ongoing optimization & A/B testing",
      "Custom ERP & CRM integrations",
      "Dedicated account manager",
      "Priority SLA & support",
    ],
    cta: "Talk to Sales",
  },
];
