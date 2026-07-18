"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingCard } from "@/components/shared/floating-card";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { StickyCta } from "@/components/shared/sticky-cta";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/motion";
import { cn } from "@/lib/utils";
import {
  heroHighlights,
  heroStatCards,
  heroClientLogos,
  heroCertifications,
} from "@/data/shopify-hero";

export function Hero() {
  const { ref, inView } = useInView({ threshold: 0 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-4 pt-40 pb-24 sm:pt-48 sm:pb-32"
    >
      <Image
        src="/hero-bg-mobile.png"
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
        className="-z-10 object-contain object-top opacity-90 lg:hidden"
      />
      <Image
        src="/hero-bg-desktop.png"
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
        className="-z-10 hidden object-cover opacity-90 lg:block"
      />

      <div className="mx-auto max-w-7xl">
        {/* Copy column */}
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6 text-left"
        >
          <motion.span
            variants={fadeUp}
            className="glass flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 uppercase"
          >
            <span className="size-1.5 rounded-full bg-primary" />
            Trusted Shopify development agency in UAE
          </motion.span>

          <motion.div variants={fadeUp} className="flex flex-col gap-2">
            <span className="text-2xl font-bold text-white sm:text-3xl">
              Shopify Development Company in Dubai
            </span>
            <h1 className="leading-[1.05]">
              <span className="block text-3xl font-light text-white/90 sm:text-4xl">
                Building Shopify Stores That
              </span>
              <span className="text-gradient-primary block text-4xl font-extrabold sm:text-5xl lg:text-6xl">
                Sell, Scale &amp; Grow
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="max-w-lg text-balance text-muted-foreground"
          >
            <span className="hidden lg:inline">
              High-performance Shopify stores. Built for growth. Backed by
              experts.
            </span>
            <span className="lg:hidden">
              Launch high-performing Shopify stores trusted by brands
              across the UAE.
            </span>
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <MagneticButton>
              <Button
                asChild
                className="h-12 gap-2 rounded-full px-6 text-sm font-semibold"
              >
                <a href="#enquiry">
                  Book Free Shopify Consultation
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </MagneticButton>
            <Button
              asChild
              variant="outline"
              className="h-12 gap-2 rounded-full border-white/10 bg-white/[0.02] px-6 text-sm font-semibold text-white hover:bg-white/[0.06]"
            >
              <a href="#work">
                View Shopify Portfolio
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-x-8 gap-y-4 pt-2"
          >
            {heroHighlights.map((item) => (
              <div key={item.label} className="flex items-center gap-2.5">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt="Shopify"
                    width={28}
                    height={28}
                    className="size-7 shrink-0"
                  />
                ) : (
                  <item.icon
                    className="size-7 shrink-0 text-primary"
                    strokeWidth={1.5}
                  />
                )}
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-semibold text-white">
                    {item.value}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Device mockup */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="mx-auto mt-14 w-full max-w-3xl lg:mt-20"
        >
          <Image
            src="/hero-devices.png"
            alt="Globify-built Shopify storefront shown on a laptop and phone"
            width={1536}
            height={1024}
            priority
            className="h-auto w-full"
          />
        </motion.div>

        {/* Trust / client logos */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="mt-16 flex flex-col items-center gap-4 border-t border-white/[0.06] pt-10 text-center"
        >
          <span className="text-xs tracking-wide text-primary uppercase">
            Trusted by growing brands across UAE &amp; beyond
          </span>
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Brands That Trust Us.{" "}
            <span className="text-primary">Results</span> That Speak.
          </h3>
          <div className="glass mt-4 grid w-full max-w-3xl grid-cols-2 place-items-center gap-x-6 gap-y-8 rounded-[20px] px-6 py-8 sm:grid-cols-3 sm:gap-x-8 sm:px-10 sm:py-10">
            {heroClientLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex h-14 w-full items-center justify-center sm:h-16"
              >
                {logo.image ? (
                  logo.needsLightBg ? (
                    <span className="flex h-full items-center rounded-lg bg-white px-3.5 py-2.5 opacity-95 transition-opacity hover:opacity-100">
                      <Image
                        src={logo.image}
                        alt={logo.name}
                        width={260}
                        height={80}
                        className="h-full w-auto max-w-[150px] object-contain"
                      />
                    </span>
                  ) : (
                    <Image
                      src={logo.image}
                      alt={logo.name}
                      width={260}
                      height={80}
                      className="h-11 w-auto max-w-[150px] object-contain opacity-90 brightness-0 invert transition-opacity hover:opacity-100 sm:h-12"
                    />
                  )
                ) : (
                  <span className="text-base font-medium text-white/50 sm:text-lg">
                    {logo.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Happy clients banner */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
          className="glass glass-hover mx-auto mt-6 flex w-full max-w-3xl items-center justify-center gap-4 rounded-2xl px-6 py-5 sm:px-8"
        >
          <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
            <Users className="size-7" />
          </span>
          <span className="text-3xl font-bold text-white sm:text-4xl">
            100+
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide text-white uppercase sm:text-base">
              Happy Clients
            </span>
            <span className="text-sm text-muted-foreground">
              Trusted by global brands
            </span>
          </div>
        </motion.div>

        {/* Stat tile grid */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
        >
          {heroStatCards.map((card, i) => (
            <FloatingCard
              key={card.label}
              className="static w-full"
              layout="column"
              floatDelay={i * 0.4}
            >
              <div className="flex aspect-[6/5] w-full flex-col justify-between sm:aspect-square">
                <span
                  className={cn(
                    "flex size-10 shrink-0 items-center justify-center rounded-xl",
                    card.accent === "shopify"
                      ? "bg-[#95BF47]/15 text-[#95BF47]"
                      : "bg-primary/15 text-primary"
                  )}
                >
                  {card.image ? (
                    <Image
                      src={card.image}
                      alt="Shopify"
                      width={20}
                      height={20}
                      className="size-5"
                    />
                  ) : (
                    <card.icon className="size-5" />
                  )}
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-2xl font-bold text-white sm:text-3xl">
                    {card.value}
                  </span>
                  <span className="text-xs leading-tight text-muted-foreground sm:text-sm">
                    {card.label}
                  </span>
                </div>
              </div>
            </FloatingCard>
          ))}
        </motion.div>

        {/* Certification badges */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
          className="mt-14 flex flex-col items-center gap-4 text-center"
        >
          <span className="text-xs tracking-wide text-muted-foreground uppercase">
            Trusted by Shopify &amp; industry leaders
          </span>
          <div className="grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {heroCertifications.map((cert) => (
              <div
                key={cert.title}
                className="relative aspect-[503/218] w-full overflow-hidden rounded-xl transition-opacity hover:opacity-90"
              >
                <Image
                  src={cert.image}
                  alt={`${cert.title} Partner`}
                  fill
                  sizes="(min-width: 1024px) 220px, (min-width: 640px) 200px, 45vw"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <StickyCta
        visible={!inView}
        label="Ready to grow your store?"
        ctaText="Book consultation"
        href="#enquiry"
      />
    </section>
  );
}
