import { cn } from "@/lib/utils";

type GridBackgroundProps = {
  className?: string;
  glow?: boolean;
};

export function GridBackground({ className, glow = true }: GridBackgroundProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      <div className="bg-grid bg-grid-fade absolute inset-0" />
      {glow && <div className="radial-glow absolute inset-0" />}
    </div>
  );
}
