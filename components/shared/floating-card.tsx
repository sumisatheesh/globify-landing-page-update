"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/motion";

type FloatingCardProps = {
  children: ReactNode;
  className?: string;
  floatDuration?: number;
  floatDelay?: number;
  layout?: "row" | "column";
};

export function FloatingCard({
  children,
  className,
  floatDuration = 4,
  floatDelay = 0,
  layout = "row",
}: FloatingCardProps) {
  return (
    <motion.div variants={fadeUp} className={cn("absolute", className)}>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay,
        }}
        className={cn(
          "glass glass-hover gap-2.5 rounded-2xl px-5 py-4 shadow-2xl transition-colors",
          layout === "row"
            ? "flex items-center"
            : "flex flex-col items-start"
        )}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
