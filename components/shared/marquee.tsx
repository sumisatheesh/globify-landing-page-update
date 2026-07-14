"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
  speed?: number;
};

export function Marquee({ children, className, speed = 40 }: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!trackRef.current) return;
      const width = trackRef.current.scrollWidth / 2;

      gsap.to(trackRef.current, {
        x: -width,
        duration: width / speed,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: trackRef, dependencies: [speed] }
  );

  return (
    <div className={cn("overflow-hidden", className)}>
      <div ref={trackRef} className="flex w-max items-center gap-16">
        <div className="flex items-center gap-16">{children}</div>
        <div className="flex items-center gap-16" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
