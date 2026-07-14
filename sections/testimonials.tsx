"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/shared/glass-card";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { testimonials, testimonialStats } from "@/data/testimonials";

export function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 16 : el.clientWidth * 0.85;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  return (
    <section id="testimonials" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-16">
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
            What Our Clients Say
            <span className="h-px w-8 bg-primary/40" />
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="max-w-2xl text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            Trusted by Brands.
            <br />
            <span className="text-gradient-primary">Proven by Results.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-xl text-balance text-muted-foreground"
          >
            We don&rsquo;t just build Shopify stores. We build long-term
            partnerships that drive growth, performance, and lasting impact.
          </motion.p>
        </motion.div>

        <div className="relative">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => scrollByCard(-1)}
            className="glass absolute top-1/2 left-0 z-10 hidden size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-white/70 transition-colors hover:text-primary lg:-left-6 lg:flex"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => scrollByCard(1)}
            className="glass absolute top-1/2 right-0 z-10 hidden size-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-white/70 transition-colors hover:text-primary lg:-right-6 lg:flex"
          >
            <ArrowRight className="size-4" />
          </button>

          <motion.div
            ref={scrollerRef}
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.name}
                data-card
                variants={fadeUp}
                className="w-[85%] shrink-0 snap-start sm:w-[47%] lg:w-[calc(25%-12px)]"
              >
                <GlassCard className="flex h-full flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <Quote className="size-7 fill-primary text-primary" />
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="size-3.5 fill-primary text-primary"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-white/85">
                    {testimonial.quote}
                  </p>
                  <span className="h-px w-8 bg-primary/50" />
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-[10px] font-bold tracking-wide text-primary">
                      {testimonial.brand}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-white">
                        {testimonial.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative rounded-[20px] border border-primary/30 bg-white/[0.02] p-6 sm:p-8"
        >
          <div
            className="absolute -bottom-px left-1/2 h-px w-1/3 -translate-x-1/2"
            style={{
              background:
                "linear-gradient(90deg, transparent, color-mix(in oklab, var(--glow-primary) 80%, white 10%) 50%, transparent)",
              boxShadow:
                "0 0 16px 2px color-mix(in oklab, var(--glow-primary) 60%, transparent)",
            }}
          />
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {testimonialStats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <stat.icon className="size-7 shrink-0 text-primary" />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">
                    {stat.value}
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
