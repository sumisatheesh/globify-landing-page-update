import { cn } from "@/lib/utils";

export function ArcGlow({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-0 -z-10 overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      <div
        className="absolute left-1/2 aspect-square w-[140%] max-w-[1400px] -translate-x-1/2 rounded-full"
        style={{
          top: "0%",
          background:
            "radial-gradient(circle at 50% 0%, color-mix(in oklab, var(--glow-primary) 90%, transparent) 0%, color-mix(in oklab, var(--glow-primary) 40%, transparent) 28%, transparent 62%)",
          filter: "blur(50px)",
        }}
      />
      <div
        className="absolute left-1/2 h-px w-[70%] max-w-[900px] -translate-x-1/2"
        style={{
          top: "1%",
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklab, var(--glow-primary) 85%, white 15%) 50%, transparent)",
          boxShadow: "0 0 24px 4px color-mix(in oklab, var(--glow-primary) 70%, transparent)",
        }}
      />
    </div>
  );
}
