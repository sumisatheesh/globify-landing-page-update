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

type Dot = {
  cx: number;
  cy: number;
  r: number;
  opacity: number;
  color: "primary" | "white";
};

// Rounded to 3dp so server (Node V8) and client (browser V8) trig results
// serialize identically — raw floats can differ in their last bit between
// engines, which otherwise trips a hydration mismatch on every dot.
function round(n: number) {
  return Math.round(n * 1000) / 1000;
}

function generateRingDots(count: number): Dot[] {
  const random = mulberry32(7);
  const cx = 400;
  const cy = 400;
  const startDeg = 195;
  const endDeg = 345;

  return Array.from({ length: count }, (_, i) => {
    const t = i / (count - 1);
    const deg = startDeg + t * (endDeg - startDeg);
    const rad = (deg * Math.PI) / 180;
    const rx = 400 + (random() - 0.5) * 30;
    const ry = 340 + (random() - 0.5) * 30;
    const falloff = Math.sin(t * Math.PI); // peaks at the crown, fades at both ends
    return {
      cx: round(cx + rx * Math.cos(rad)),
      cy: round(cy + ry * Math.sin(rad)),
      r: round(1 + falloff * (1.5 + random() * 1.5)),
      opacity: round(0.08 + falloff * (0.5 + random() * 0.35)),
      color: random() > 0.82 ? "white" : "primary",
    } satisfies Dot;
  });
}

const dots = generateRingDots(90);

export function ParticleRing({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 500"
      className={cn(
        "pointer-events-none absolute -top-[22%] left-1/2 -z-10 h-[135%] w-[135%] -translate-x-1/2",
        className
      )}
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
    >
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.cx}
          cy={d.cy}
          r={d.r}
          fill={d.color === "white" ? "#ffffff" : "var(--glow-primary)"}
          opacity={d.opacity}
        />
      ))}
    </svg>
  );
}
