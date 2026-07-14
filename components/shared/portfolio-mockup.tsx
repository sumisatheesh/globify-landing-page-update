import Image from "next/image";
import { Menu, ShoppingBag, User } from "lucide-react";

type PortfolioMockupProps = {
  brand: string;
  heading: string[];
  image?: string;
};

export function PortfolioMockup({ brand, heading, image }: PortfolioMockupProps) {
  if (image) {
    return (
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black">
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={image}
            alt={`${brand} Shopify store project`}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-t-xl border border-white/10 bg-black">
        <div className="flex items-center justify-between border-b border-white/5 px-3 py-2">
          <span className="text-[10px] font-bold tracking-wide text-white">
            {brand}
          </span>
          <span className="flex items-center gap-1.5 text-white/40">
            <Menu className="size-2.5" />
            <ShoppingBag className="size-2.5" />
            <User className="size-2.5" />
          </span>
        </div>
        <div className="relative aspect-[16/10] w-full bg-gradient-to-br from-white/[0.07] to-black/60">
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-3">
            <div className="flex flex-col leading-tight">
              {heading.map((line) => (
                <span
                  key={line}
                  className="text-xs font-semibold text-white sm:text-sm"
                >
                  {line}
                </span>
              ))}
            </div>
            <span className="inline-block w-fit rounded-sm bg-primary px-2 py-1 text-[8px] font-semibold tracking-wide text-primary-foreground">
              SHOP NOW
            </span>
          </div>
        </div>
      </div>
      <div className="mx-auto h-1 w-[92%] rounded-b-md bg-white/10" />
    </div>
  );
}
