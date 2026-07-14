import { cn } from "@/lib/utils";

export function GradientMesh({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-20 overflow-hidden",
        className
      )}
    >
      <div
        className="mesh-blob mesh-blob-1 top-[-10%] left-[-10%] size-[55vw] max-w-[560px]"
        style={{ background: "color-mix(in oklab, var(--glow-primary) 30%, transparent)" }}
      />
      <div
        className="mesh-blob mesh-blob-2 top-[5%] right-[-15%] size-[50vw] max-w-[520px]"
        style={{ background: "color-mix(in oklab, var(--glow-primary) 22%, transparent)" }}
      />
      <div
        className="mesh-blob mesh-blob-3 bottom-[-15%] left-[20%] size-[45vw] max-w-[480px]"
        style={{ background: "color-mix(in oklab, #ffffff 8%, transparent)" }}
      />
    </div>
  );
}
