import type { LucideIcon } from "lucide-react";
import {
  Globe2,
  ShieldCheck,
  Zap,
  Workflow,
  BarChart3,
  Lock,
} from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: Globe2,
    title: "Global by default",
    description:
      "Launch in 40+ markets with local entities, tax handling, and payment rails already wired in.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance built in",
    description:
      "SOC 2, GDPR, and regional data residency handled at the infrastructure layer, not bolted on.",
  },
  {
    icon: Zap,
    title: "Real-time settlement",
    description:
      "Move funds across currencies in seconds with transparent FX and zero hidden spreads.",
  },
  {
    icon: Workflow,
    title: "Programmable workflows",
    description:
      "Compose approval chains, payout schedules, and reconciliation rules with a visual builder or API.",
  },
  {
    icon: BarChart3,
    title: "Unified reporting",
    description:
      "One ledger across every market, currency, and entity, reconciled automatically, always audit-ready.",
  },
  {
    icon: Lock,
    title: "Enterprise-grade security",
    description:
      "End-to-end encryption, granular permissions, and full audit trails on every action taken.",
  },
];
