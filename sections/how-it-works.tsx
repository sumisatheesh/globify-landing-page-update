"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { steps } from "@/data/steps";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <SectionHeading
          eyebrow="How it works"
          title="From signup to global in four steps"
          description="No integrations team required. Most customers are fully live within a month."
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-px overflow-hidden rounded-[20px] border border-white/[0.06] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              className="glass-hover flex flex-col gap-4 bg-background p-6"
            >
              <span className="text-gradient-primary text-sm font-mono font-medium">
                {step.number}
              </span>
              <h3 className="text-lg font-medium text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
