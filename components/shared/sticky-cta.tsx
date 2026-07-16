"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type StickyCtaProps = {
  visible: boolean;
  label?: string;
  ctaText?: string;
  href?: string;
};

export function StickyCta({
  visible,
  label = "Ready to go global?",
  ctaText = "Start for free",
  href,
}: StickyCtaProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-4 sm:inset-x-auto sm:right-24 sm:bottom-6 sm:px-0 sm:pb-0"
        >
          <div className="glass flex w-full max-w-sm items-center justify-between gap-4 rounded-2xl px-4 py-3 sm:w-auto">
            <span className="hidden text-sm text-white/80 sm:inline">
              {label}
            </span>
            {href ? (
              <Button
                asChild
                size="sm"
                className="w-full gap-1.5 rounded-full sm:w-auto"
              >
                <a href={href}>
                  {ctaText}
                  <ArrowRight className="size-3.5" />
                </a>
              </Button>
            ) : (
              <Button
                size="sm"
                className="w-full gap-1.5 rounded-full sm:w-auto"
              >
                {ctaText}
                <ArrowRight className="size-3.5" />
              </Button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
