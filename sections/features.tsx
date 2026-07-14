"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { GlassCard } from "@/components/shared/glass-card";
import { features } from "@/data/features";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Features() {
  return (
    <section id="features" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <SectionHeading
          eyebrow="Platform"
          title="Everything you need to operate globally"
          description="A single platform that replaces a patchwork of banking partners, spreadsheets, and compliance vendors."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={fadeUp}>
              <GlassCard className="h-full">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <feature.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-medium text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
