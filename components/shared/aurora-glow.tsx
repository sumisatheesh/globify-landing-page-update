import { cn } from "@/lib/utils";

export function AuroraGlow({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      <div className="aurora-glow" />
    </div>
  );
}
