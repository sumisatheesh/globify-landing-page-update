"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { GlassCard } from "@/components/shared/glass-card";
import { Button } from "@/components/ui/button";
import { pricingPlans } from "@/data/pricing";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing that scales with you"
          description="Transparent packages for every stage of your Shopify journey, from first launch to enterprise scale."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-6 lg:grid-cols-3"
        >
          {pricingPlans.map((plan) => (
            <motion.div key={plan.name} variants={fadeUp}>
              <GlassCard
                className={cn(
                  "flex h-full flex-col gap-6",
                  plan.highlighted && "ring-1 ring-primary/50"
                )}
              >
                {plan.highlighted && (
                  <span className="w-fit rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
                    Most popular
                  </span>
                )}
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-medium text-white">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-semibold text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {plan.cadence}
                  </span>
                </div>

                <Button
                  className={cn(
                    "w-full rounded-full",
                    !plan.highlighted &&
                      "bg-white/[0.06] text-white hover:bg-white/[0.1]"
                  )}
                >
                  {plan.cta}
                </Button>

                <ul className="flex flex-col gap-3 border-t border-white/[0.06] pt-6">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-white/80"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
