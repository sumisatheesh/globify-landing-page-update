"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { GlassCard } from "@/components/shared/glass-card";
import {
  StoreDevIllustration,
  OptimizationIllustration,
  IntegrationIllustration,
} from "@/components/shared/service-illustrations";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { mainServices, otherServices } from "@/data/shopify-services";

const illustrations = {
  "store-dev": StoreDevIllustration,
  optimization: OptimizationIllustration,
  integration: IntegrationIllustration,
};

export function ShopifyServices() {
  return (
    <section id="platform" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center gap-8 lg:flex-row lg:justify-center lg:gap-14"
        >
          <motion.div
            variants={fadeUp}
            className="relative flex shrink-0 items-center justify-center"
          >
            <div
              className="absolute -bottom-3 h-7 w-36 rounded-full bg-black/70 blur-lg"
              aria-hidden="true"
            />
            <div
              className="absolute size-40 rounded-full opacity-30 blur-3xl"
              style={{ background: "var(--glow-primary)" }}
              aria-hidden="true"
            />
            <div className="relative flex size-28 items-center justify-center sm:size-32">
              <Image
                src="/logos/shopify-bag.svg"
                alt="Shopify"
                width={89}
                height={101}
                className="h-full w-auto drop-shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
              />
            </div>
          </motion.div>

          <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
            <motion.span
              variants={fadeUp}
              className="flex items-center gap-3 text-sm font-medium tracking-wide text-primary uppercase"
            >
              <span className="h-px w-8 bg-primary/40" />
              Shopify Services
              <span className="h-px w-8 bg-primary/40" />
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="max-w-2xl text-3xl font-bold text-white sm:text-4xl md:text-5xl"
            >
              End-to-End Shopify Solutions
              <br />
              <span className="text-gradient-primary">
                To Build, Scale &amp; Succeed
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="max-w-xl text-balance text-muted-foreground"
            >
              From strategy to store launch and beyond, we build
              high-performing Shopify solutions for ambitious UAE brands.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-4 lg:grid-cols-3"
        >
          {mainServices.map((service) => {
            const Illustration = illustrations[service.illustration];
            return (
              <motion.div key={service.title} variants={fadeUp}>
                <GlassCard
                  className={cn(
                    "relative flex h-full flex-col gap-5 p-5",
                    service.popular && "border-primary/50"
                  )}
                >
                  {service.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[10px] font-bold tracking-wide text-primary-foreground uppercase">
                      Popular
                    </span>
                  )}

                  <span className="flex size-8 items-center justify-center rounded-full border border-primary/40 text-xs font-bold text-primary">
                    {service.number}
                  </span>

                  <Illustration />

                  <div className="flex flex-1 flex-col gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {service.title}
                      </h3>
                      <span className="mt-1.5 block h-px w-6 bg-primary/50" />
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>

                    <div className="mt-1 flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature.label}
                          className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.02] px-2.5 py-1.5 text-xs text-white/70"
                        >
                          <feature.icon className="size-3.5 shrink-0 text-primary" />
                          {feature.label}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex justify-end pt-2">
                      <span className="flex size-9 items-center justify-center rounded-full border border-white/10 text-primary transition-colors group-hover:bg-primary/10">
                        <ArrowRight className="size-4" />
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-10"
        >
          <div className="flex items-center gap-4">
            <span className="h-px flex-1 bg-white/[0.06]" />
            <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Other Services
            </span>
            <span className="h-px flex-1 bg-white/[0.06]" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-6 sm:gap-x-0">
            {otherServices.map((service, i) => (
              <div
                key={service.title}
                className={cn(
                  "flex items-center gap-3 px-4 py-1 sm:px-6",
                  i !== 0 && "sm:border-l sm:border-white/[0.08]"
                )}
              >
                <service.icon className="size-5 shrink-0 text-primary" />
                <span className="text-sm font-medium text-white/80">
                  {service.title}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
