export type Step = {
  number: string;
  title: string;
  description: string;
};

export const steps: Step[] = [
  {
    number: "01",
    title: "Connect your stack",
    description:
      "Integrate Globify with your existing billing, ERP, and banking providers in a single afternoon.",
  },
  {
    number: "02",
    title: "Configure your markets",
    description:
      "Pick the regions you're expanding into: entities, tax registration, and compliance are provisioned automatically.",
  },
  {
    number: "03",
    title: "Automate the workflow",
    description:
      "Set payout rules, approval chains, and reconciliation logic once. Globify runs it on autopilot.",
  },
  {
    number: "04",
    title: "Scale with confidence",
    description:
      "Get a unified, real-time view of money movement across every market as you grow.",
  },
];
