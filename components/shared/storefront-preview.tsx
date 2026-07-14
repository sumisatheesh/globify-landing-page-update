import { Search, User, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = ["NEW IN", "WOMEN", "MEN", "ACCESSORIES", "COLLECTIONS", "SALE"];

function ProductBlock({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-lg bg-gradient-to-br from-white/[0.08] to-black/40",
        className
      )}
    />
  );
}

export function StorefrontPreviewDesktop() {
  return (
    <div className="bg-black text-white">
      <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
        <span className="text-sm font-semibold tracking-widest">LUXORA</span>
        <nav className="hidden gap-4 text-[10px] tracking-wide text-white/60 md:flex">
          {NAV_LINKS.map((link) => (
            <span key={link}>{link}</span>
          ))}
        </nav>
        <div className="flex items-center gap-3 text-white/60">
          <Search className="size-3.5" />
          <User className="size-3.5" />
          <ShoppingBag className="size-3.5" />
        </div>
      </div>

      <div className="relative grid grid-cols-2 gap-4 p-5">
        <div className="flex flex-col justify-center gap-2">
          <span className="text-[10px] tracking-widest text-primary">
            NEW COLLECTION
          </span>
          <span className="text-2xl leading-tight font-semibold sm:text-3xl">
            Elevated Essentials
          </span>
          <span className="text-xs text-white/50">
            Timeless style. Modern performance.
          </span>
          <span className="mt-2 w-fit rounded-sm bg-white px-3 py-1.5 text-[10px] font-semibold tracking-wide text-black">
            SHOP NOW
          </span>
        </div>
        <ProductBlock className="aspect-4/5 w-full" />
      </div>

      <div className="grid grid-cols-4 gap-3 px-5 pb-5">
        {Array.from({ length: 4 }).map((_, i) => (
          <ProductBlock key={i} className="aspect-square w-full" />
        ))}
      </div>
    </div>
  );
}

export function StorefrontPreviewMobile() {
  return (
    <div className="bg-black text-white">
      <div className="flex items-center justify-between px-4 py-2">
        <span className="text-xs font-semibold tracking-widest">LUXORA</span>
        <div className="flex items-center gap-2 text-white/60">
          <Search className="size-3" />
          <ShoppingBag className="size-3" />
        </div>
      </div>

      <div className="px-4 pb-3">
        <ProductBlock className="aspect-4/3 w-full" />
        <div className="mt-2 flex items-center justify-between">
          <div className="flex min-w-0 flex-col">
            <span className="truncate text-[10px] tracking-wide text-white/60">
              PREMIUM LEATHER BAG
            </span>
            <span className="text-sm font-semibold">$320.00</span>
          </div>
          <span className="shrink-0 rounded-sm bg-primary px-2.5 py-1 text-[9px] font-semibold tracking-wide whitespace-nowrap text-primary-foreground">
            SHOP NOW
          </span>
        </div>
      </div>

      <div className="px-4 pb-4">
        <span className="text-[10px] tracking-wide text-white/50">
          Best Sellers
        </span>
        <div className="mt-1.5 grid grid-cols-3 gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <ProductBlock key={i} className="aspect-square w-full" />
          ))}
        </div>
      </div>
    </div>
  );
}
