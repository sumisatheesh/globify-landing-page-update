"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type MacbookMockupProps = {
  children: ReactNode;
  className?: string;
};

const TILT_RANGE = 6;

export function MacbookMockup({ children, className }: MacbookMockupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    const px = (e.clientX - bounds.left) / bounds.width - 0.5;
    const py = (e.clientY - bounds.top) / bounds.height - 0.5;
    rotateY.set(px * TILT_RANGE * 2);
    rotateX.set(-py * TILT_RANGE);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <div style={{ perspective: 1600 }} className={className}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative mx-auto w-full"
      >
        {/* Screen */}
        <div className="relative rounded-t-2xl border border-white/10 bg-[#141414] p-2.5 shadow-2xl sm:p-3.5">
          <div className="absolute top-1.5 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-white/10 sm:top-2" />
          <div className="overflow-hidden rounded-lg bg-black">{children}</div>
        </div>

        {/* Hinge */}
        <div className="h-1.5 border-x border-white/10 bg-[#0c0c0c]" />

        {/* Base */}
        <div
          className="relative -mx-[3%] h-3.5 rounded-b-2xl border border-t-0 border-white/10 bg-[#161616] sm:h-4"
          style={{ clipPath: "polygon(2% 0, 98% 0, 100% 100%, 0 100%)" }}
        >
          <div className="absolute top-0 left-1/2 h-1.5 w-16 -translate-x-1/2 rounded-b-md bg-black/40 sm:w-20" />
        </div>
      </motion.div>
    </div>
  );
}
