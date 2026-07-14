"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { GlassCard } from "@/components/shared/glass-card";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { processSteps, processFeatures } from "@/data/process";

const DOT_POSITIONS = [1, 2, 3, 4, 5];

export function Process() {
  return (
    <section id="how-it-works" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center gap-4 text-center"
        >
          <motion.span
            variants={fadeUp}
            className="flex items-center gap-3 text-sm font-medium tracking-wide text-primary uppercase"
          >
            <span className="h-px w-8 bg-primary/40" />
            Our Process
            <span className="h-px w-8 bg-primary/40" />
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="max-w-2xl text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            A Proven Process.
            <br />
            <span className="text-gradient-primary">
              Built for Your Success.
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-xl text-balance text-muted-foreground"
          >
            A clear, strategic approach to build high-performing Shopify
            stores that drive growth.
          </motion.p>
        </motion.div>

        {/* Desktop / tablet-landscape: horizontal timeline */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="hidden lg:block"
        >
          <div className="relative grid grid-cols-6">
            <div className="absolute top-10 right-[8.33%] left-[8.33%] border-t border-dashed border-primary/25" />
            {DOT_POSITIONS.map((i) => (
              <span
                key={i}
                className="absolute top-10 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_8px_2px_rgba(255,107,0,0.5)]"
                style={{ left: `${i * (100 / 6)}%` }}
              />
            ))}

            {processSteps.map((step) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className="flex flex-col items-center px-2"
              >
                <span className="relative z-10 flex size-20 items-center justify-center rounded-full border border-primary/40 bg-background">
                  <step.icon className="size-7 text-primary" />
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-6 gap-3">
            {processSteps.map((step) => (
              <motion.div key={step.number} variants={fadeUp}>
                <GlassCard className="flex h-full flex-col gap-2 px-4 py-5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-primary">
                      {step.number}
                    </span>
                    <span className="h-4 w-px bg-white/10" />
                    <h3 className="text-base font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                  <span className="mx-auto mt-1 h-px w-6 bg-primary/50" />
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile / tablet-portrait: vertical timeline */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col lg:hidden"
        >
          {processSteps.map((step, i) => (
            <motion.div key={step.number} variants={fadeUp} className="flex gap-3 sm:gap-4">
              <div className="flex flex-col items-center">
                <span className="flex size-16 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-background sm:size-20">
                  <step.icon className="size-5 text-primary sm:size-7" />
                </span>
                {i < processSteps.length - 1 && (
                  <span className="w-px flex-1 bg-white/10" />
                )}
              </div>

              <div className="flex flex-1 items-start gap-2 pb-6 sm:gap-3 sm:pb-8">
                <span className="mt-8 size-1.5 shrink-0 rounded-full bg-primary sm:mt-9" />
                <GlassCard className="flex flex-1 items-center justify-between gap-3 p-4 sm:p-5">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-bold text-primary sm:text-xl">
                        {step.number}
                      </span>
                      <h3 className="text-base font-semibold text-white sm:text-lg">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                  <ChevronRight className="size-5 shrink-0 text-primary" />
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative rounded-[20px] border border-white/10 bg-white/[0.02] p-6 sm:p-8"
        >
          <div
            className="absolute -top-px left-1/2 h-px w-1/3 -translate-x-1/2"
            style={{
              background:
                "linear-gradient(90deg, transparent, color-mix(in oklab, var(--glow-primary) 80%, white 10%) 50%, transparent)",
              boxShadow:
                "0 0 16px 2px color-mix(in oklab, var(--glow-primary) 60%, transparent)",
            }}
          />
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:divide-x sm:divide-white/10">
            {processFeatures.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-center gap-2 text-center sm:px-4"
              >
                <feature.icon className="size-6 text-primary" />
                <h4 className="text-sm font-semibold text-white">
                  {feature.title}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
