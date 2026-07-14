import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PhoneMockupProps = {
  children: ReactNode;
  className?: string;
};

export function PhoneMockup({ children, className }: PhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative rounded-[2.2rem] border border-white/10 bg-[#141414] p-2 shadow-2xl",
        className
      )}
    >
      <div className="absolute top-2 left-1/2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-black/70" />
      <div className="overflow-hidden rounded-[1.7rem] bg-black pt-6">
        {children}
      </div>
    </div>
  );
}
