"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { industries } from "@/data/industries";

export function Industries() {
  return (
    <section className="relative px-4 py-24 sm:py-32">
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
            Industries We Empower
            <span className="h-px w-8 bg-primary/40" />
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="max-w-3xl text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            E-commerce Solutions for{" "}
            <span className="text-gradient-primary">Every Industry</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-xl text-balance text-muted-foreground"
          >
            We build high-performing e-commerce stores tailored to the unique
            needs of your industry, helping you sell more, serve better, and
            scale faster.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.title}
              variants={fadeUp}
              className="glass glass-hover flex flex-col gap-3 rounded-2xl p-4 transition-colors sm:p-5"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/25 to-black/40 text-primary">
                <industry.icon className="size-5" />
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-sm leading-tight font-semibold text-white">
                  {industry.title}
                </h3>
                <span className="h-px w-6 bg-primary/50" />
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
