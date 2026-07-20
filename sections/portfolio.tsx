"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GlassCard } from "@/components/shared/glass-card";
import { PortfolioMockup } from "@/components/shared/portfolio-mockup";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { portfolioProjects, type PortfolioProject } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const SLIDE_INTERVAL_MS = 3000;
const SLIDE_TRANSITION_MS = 700;
const MAX_VISIBLE = 3;

function useVisibleCount() {
  const [count, setCount] = useState(MAX_VISIBLE);

  useEffect(() => {
    const mqSm = window.matchMedia("(min-width: 640px)");
    const mqLg = window.matchMedia("(min-width: 1024px)");

    function update() {
      setCount(mqLg.matches ? 3 : mqSm.matches ? 2 : 1);
    }

    update();
    mqSm.addEventListener("change", update);
    mqLg.addEventListener("change", update);
    return () => {
      mqSm.removeEventListener("change", update);
      mqLg.removeEventListener("change", update);
    };
  }, []);

  return count;
}

function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <GlassCard className="flex h-full flex-col gap-5 p-5">
      <div className="flex items-center justify-between gap-3">
        <span
          className={cn(
            "flex h-14 w-44 shrink-0 items-center justify-center rounded-2xl",
            project.logo
              ? "bg-white px-4 py-2.5"
              : "border border-primary/40 px-3.5 text-xs font-semibold tracking-wide text-primary"
          )}
        >
          {project.logo ? (
            <Image
              src={project.logo}
              alt={project.brand}
              width={320}
              height={80}
              className="h-full w-auto max-w-full object-contain"
            />
          ) : (
            <span className="truncate">{project.brand}</span>
          )}
        </span>
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-primary">
          <ArrowUpRight className="size-4" />
        </span>
      </div>

      <div className="relative">
        <PortfolioMockup
          brand={project.brand}
          heading={project.heading}
          image={project.image}
        />
        <div
          className="absolute -bottom-1 left-1/2 h-px w-4/5 -translate-x-1/2"
          style={{
            background:
              "linear-gradient(90deg, transparent, color-mix(in oklab, var(--glow-primary) 80%, white 10%) 50%, transparent)",
            boxShadow:
              "0 0 16px 2px color-mix(in oklab, var(--glow-primary) 60%, transparent)",
          }}
        />
      </div>

      <div className="mt-1 grid grid-cols-3 gap-2">
        {project.stats.map((stat) => (
          <div key={stat.label} className="flex items-start gap-1.5">
            <stat.icon className="mt-0.5 size-3.5 shrink-0 text-primary" />
            <div className="flex min-w-0 flex-col">
              <span className="text-sm font-bold text-white">
                {stat.value}
              </span>
              <span className="text-[10px] leading-tight text-muted-foreground">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-auto flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70"
          >
            {tag}
          </span>
        ))}
      </div>
    </GlassCard>
  );
}

export function Portfolio() {
  const total = portfolioProjects.length;
  const visibleCount = useVisibleCount();
  const isMobile = visibleCount === 1;
  const loopable = total > visibleCount && !isMobile;
  const slides = loopable
    ? [...portfolioProjects, ...portfolioProjects.slice(0, MAX_VISIBLE)]
    : portfolioProjects;

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || !loopable) return;
    const id = setInterval(
      () => setIndex((i) => (i >= total ? i : i + 1)),
      SLIDE_INTERVAL_MS
    );
    return () => clearInterval(id);
  }, [paused, loopable, total]);

  useEffect(() => {
    if (index < total) return;
    const id = setTimeout(() => {
      setAnimate(false);
      setIndex(0);
    }, SLIDE_TRANSITION_MS);
    return () => clearTimeout(id);
  }, [index, total]);

  useEffect(() => {
    if (animate) return;
    const id = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(id);
  }, [animate]);

  return (
    <section id="work" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center gap-4 text-center"
        >
          <span className="flex items-center gap-3 text-sm font-medium tracking-wide text-primary uppercase">
            <span className="h-px w-8 bg-primary/40" />
            Our Work
            <span className="h-px w-8 bg-primary/40" />
          </span>
          <h2 className="max-w-3xl text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Shopify Success Stories
            <br />
            <span className="text-gradient-primary">
              That Drive Real Results
            </span>
          </h2>
          <p className="max-w-xl text-balance text-muted-foreground">
            We partner with ambitious UAE brands to build, optimize, and
            scale Shopify stores that create impact.
          </p>
        </motion.div>

        {isMobile ? (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-6"
          >
            {portfolioProjects.map((project) => (
              <ProjectCard key={project.brand} project={project} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className={cn(
                "flex",
                animate && `transition-transform duration-700 ease-in-out`
              )}
              style={{
                transform: `translateX(-${index * (100 / visibleCount)}%)`,
              }}
            >
              {slides.map((project, i) => (
                <div
                  key={`${project.brand}-${i}`}
                  className="shrink-0 px-2"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
