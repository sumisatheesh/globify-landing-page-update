import { ShoppingBag, ShoppingCart, Search, User, Menu, Puzzle, BarChart3, ArrowUp } from "lucide-react";

function IconBadge({ icon: Icon }: { icon: typeof ShoppingBag }) {
  return (
    <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#c2470a] text-white shadow-[0_0_20px_4px_rgba(255,107,0,0.35)] sm:size-16">
      <Icon className="size-6 sm:size-7" />
    </span>
  );
}

export function StoreDevIllustration() {
  return (
    <div className="flex items-center gap-3">
      <IconBadge icon={ShoppingBag} />
      <div className="flex-1 rounded-xl border border-white/[0.06] bg-white/[0.03] p-3">
        <div className="flex items-center justify-end gap-1.5 text-white/40">
          <ShoppingCart className="size-3" />
          <Search className="size-3" />
          <User className="size-3" />
          <Menu className="size-3" />
        </div>
        <div className="mt-3 flex gap-2.5">
          <div className="size-14 shrink-0 rounded-lg bg-gradient-to-br from-white/10 to-black/40" />
          <div className="flex flex-1 flex-col justify-center gap-1.5">
            <div className="h-1.5 w-full rounded-full bg-white/10" />
            <div className="h-1.5 w-4/5 rounded-full bg-white/10" />
            <div className="h-1.5 w-2/5 rounded-full bg-white/10" />
            <div className="mt-1 h-2 w-1/2 rounded-full bg-primary shadow-[0_0_10px_1px_rgba(255,107,0,0.5)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

const connectorChips = [
  { label: "klaviyo", className: "bg-black text-white text-[8px] font-semibold" },
  { label: "S", className: "bg-[#95BF47] text-white" },
  { label: "S", className: "bg-[#635BFF] text-white" },
  { label: "G", className: "bg-white text-[#4285F4] font-bold" },
];

const connectorPosition = ["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"];

export function IntegrationIllustration() {
  return (
    <div className="flex items-center gap-3">
      <IconBadge icon={Puzzle} />
      <div className="relative h-24 flex-1">
        <svg className="absolute inset-0 size-full" viewBox="0 0 120 96" preserveAspectRatio="none">
          <line x1="14" y1="14" x2="60" y2="48" stroke="var(--glow-primary)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="3 4" />
          <line x1="106" y1="14" x2="60" y2="48" stroke="var(--glow-primary)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="3 4" />
          <line x1="14" y1="82" x2="60" y2="48" stroke="var(--glow-primary)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="3 4" />
          <line x1="106" y1="82" x2="60" y2="48" stroke="var(--glow-primary)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="3 4" />
        </svg>
        <span className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_8px_2px_rgba(255,107,0,0.6)]" />
        {connectorChips.map((chip, i) => (
          <span
            key={i}
            className={`absolute ${connectorPosition[i]} flex size-9 items-center justify-center rounded-lg text-xs shadow-lg ${chip.className}`}
          >
            {chip.label === "klaviyo" ? (
              <span className="text-[7px] font-semibold tracking-tight">klaviyo</span>
            ) : (
              chip.label
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

export function OptimizationIllustration() {
  return (
    <div className="flex items-center gap-3">
      <IconBadge icon={BarChart3} />
      <div className="flex-1 rounded-xl border border-white/[0.06] bg-white/[0.03] p-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-white/50">Total Revenue</span>
          <span className="flex items-center gap-0.5 text-xs font-bold text-primary">
            <ArrowUp className="size-3" />
            45%
          </span>
        </div>
        <svg viewBox="0 0 100 32" className="mt-2 h-8 w-full" preserveAspectRatio="none">
          <polyline
            points="0,26 15,22 30,24 45,14 60,17 75,6 100,8"
            fill="none"
            stroke="var(--glow-primary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
