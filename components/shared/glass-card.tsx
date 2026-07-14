import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function GlassCard({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "glass glass-hover rounded-[20px] p-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
