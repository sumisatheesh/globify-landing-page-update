import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type Particle = {
  left: number;
  size: number;
  duration: number;
  delay: number;
  driftX: number;
  opacity: number;
  color: "primary" | "white";
};

// Deterministic pseudo-random so server and client render the same particle
// field — avoids a hydration mismatch without needing a client-only mount effect.
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function round(n: number) {
  return Math.round(n * 1000) / 1000;
}

function generateParticles(count: number): Particle[] {
  const random = mulberry32(42);
  return Array.from({ length: count }, () => ({
    left: round(random() * 100),
    size: round(1.5 + random() * 2.5),
    duration: round(9 + random() * 10),
    delay: round(random() * 12),
    driftX: round((random() - 0.5) * 60),
    opacity: round(0.3 + random() * 0.4),
    color: random() > 0.75 ? "white" : "primary",
  }));
}

const particles = generateParticles(36);

export function ParticleField({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle-dot bottom-0 hidden sm:block"
          style={
            {
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              "--particle-duration": `${p.duration}s`,
              "--particle-delay": `${p.delay}s`,
              "--particle-drift-x": `${p.driftX}px`,
              "--particle-opacity": p.opacity,
              "--particle-color":
                p.color === "white" ? "#ffffff" : "var(--glow-primary)",
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
