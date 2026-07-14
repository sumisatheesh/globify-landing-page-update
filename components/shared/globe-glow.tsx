import { cn } from "@/lib/utils";

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

type Dot = {
  cx: number;
  cy: number;
  r: number;
  opacity: number;
};

function generateGlobeDots(count: number): Dot[] {
  const random = mulberry32(19);
  const cx = 200;
  const cy = 200;

  return Array.from({ length: count }, () => {
    const angle = random() * Math.PI * 2;
    const radius = 40 + random() * 160;
    const falloff = 1 - radius / 200;
    return {
      cx: round(cx + radius * Math.cos(angle)),
      cy: round(cy + radius * Math.sin(angle) * 0.55),
      r: round(0.6 + falloff * 1.8),
      opacity: round(0.15 + falloff * 0.55),
    } satisfies Dot;
  });
}

const dots = generateGlobeDots(140);

export function GlobeGlow({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none relative", className)}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--glow-primary) 70%, transparent), transparent 70%)",
          filter: "blur(20px)",
        }}
      />
      <svg viewBox="0 0 400 400" className="relative size-full">
        {dots.map((d, i) => (
          <circle
            key={i}
            cx={d.cx}
            cy={d.cy}
            r={d.r}
            fill="var(--glow-primary)"
            opacity={d.opacity}
          />
        ))}
      </svg>
    </div>
  );
}
