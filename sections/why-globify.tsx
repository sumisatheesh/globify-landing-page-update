"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, XCircle } from "lucide-react";
import { GlassCard } from "@/components/shared/glass-card";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { comparisonRows, comparisonStats } from "@/data/why-globify";

function GlowLine() {
  return (
    <div
      className="absolute -bottom-px left-1/2 h-px w-1/3 -translate-x-1/2"
      style={{
        background:
          "linear-gradient(90deg, transparent, color-mix(in oklab, var(--glow-primary) 80%, white 10%) 50%, transparent)",
        boxShadow:
          "0 0 16px 2px color-mix(in oklab, var(--glow-primary) 60%, transparent)",
      }}
    />
  );
}

function GlobifyText({
  text,
  highlight,
}: {
  text: string;
  highlight?: string;
}) {
  return (
    <span>
      {text}
      {highlight && <> <span className="text-primary">{highlight}</span></>}
    </span>
  );
}

export function WhyGlobify() {
  return (
    <section id="why-globify" className="relative px-4 py-24 sm:py-32">
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
            Why Globify
            <span className="h-px w-8 bg-primary/40" />
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="max-w-2xl text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            Not Just Another Agency.
            <br />
            <span className="text-gradient-primary">Your Growth Partner.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-xl text-balance text-muted-foreground"
          >
            We go beyond development. We focus on results, relationships,
            and long-term growth.
          </motion.p>
        </motion.div>

        {/* Desktop: label | typical-agencies | globify table */}
        <motion.div
          variants={staggerContainer(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="hidden gap-4 lg:grid lg:grid-cols-[1.6fr_1fr]"
        >
          <GlassCard className="flex flex-col p-0">
            <div className="grid grid-cols-[1fr_1.5fr] gap-4 px-6 pt-5 pb-3">
              <span />
              <span className="text-center text-xs font-medium tracking-wide text-muted-foreground uppercase">
                Typical Agencies
              </span>
            </div>
            {comparisonRows.map((row) => (
              <motion.div
                key={row.label}
                variants={fadeUp}
                className="grid grid-cols-[1fr_1.5fr] items-center gap-4 border-t border-white/[0.06] px-6 py-4"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-primary">
                    <row.icon className="size-4" />
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {row.label}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm text-muted-foreground">
                    {row.typical}
                  </span>
                  <XCircle className="size-5 shrink-0 text-white/25" />
                </div>
              </motion.div>
            ))}
          </GlassCard>

          <GlassCard className="relative flex flex-col border-primary/40 p-0">
            <GlowLine />
            <div className="px-6 pt-5 pb-3 text-center">
              <span className="text-sm font-bold tracking-wide text-primary uppercase">
                Globify
              </span>
            </div>
            {comparisonRows.map((row) => (
              <motion.div
                key={row.label}
                variants={fadeUp}
                className="flex items-start gap-3 border-t border-white/[0.06] px-6 py-4"
              >
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-white">
                  <GlobifyText
                    text={row.globify}
                    highlight={row.globifyHighlight}
                  />
                </p>
              </motion.div>
            ))}
          </GlassCard>
        </motion.div>

        {/* Mobile / tablet: stacked cards */}
        <motion.div
          variants={staggerContainer(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-6 lg:hidden"
        >
          <GlassCard className="flex flex-col p-0">
            <span className="px-6 pt-5 pb-3 text-center text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Typical Agencies
            </span>
            {comparisonRows.map((row) => (
              <motion.div
                key={row.label}
                variants={fadeUp}
                className="flex items-center gap-3 border-t border-white/[0.06] px-5 py-3.5"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-primary">
                  <row.icon className="size-4" />
                </span>
                <span className="flex-1 text-sm text-muted-foreground">
                  {row.typical}
                </span>
                <XCircle className="size-5 shrink-0 text-white/25" />
              </motion.div>
            ))}
          </GlassCard>

          <GlassCard className="relative flex flex-col border-primary/40 p-0">
            <GlowLine />
            <span className="px-6 pt-5 pb-3 text-center text-sm font-bold tracking-wide text-primary uppercase">
              Globify
            </span>
            {comparisonRows.map((row) => (
              <motion.div
                key={row.label}
                variants={fadeUp}
                className="flex items-start gap-3 border-t border-white/[0.06] px-5 py-3.5"
              >
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-white">
                  <GlobifyText
                    text={row.globify}
                    highlight={row.globifyHighlight}
                  />
                </p>
              </motion.div>
            ))}
          </GlassCard>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="rounded-[20px] border border-white/10 bg-white/[0.02] p-6 sm:p-8"
        >
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {comparisonStats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                {stat.image ? (
                  <Image
                    src={stat.image}
                    alt="Shopify"
                    width={28}
                    height={28}
                    className="size-7 shrink-0"
                  />
                ) : (
                  <stat.icon className="size-7 shrink-0 text-primary" />
                )}
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">
                    {stat.value}
                    {stat.suffix && (
                      <span className="text-base text-muted-foreground">
                        {stat.suffix}
                      </span>
                    )}
                  </span>
                  <span className="text-xs leading-tight text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
