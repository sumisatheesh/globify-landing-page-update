import Image from "next/image";
import { Marquee } from "@/components/shared/marquee";
import { clientLogos } from "@/data/logos";

export function LogoCloud() {
  return (
    <section className="relative border-y border-white/[0.06] py-10">
      <div className="mx-auto max-w-6xl px-4">
        <p className="mb-8 text-center text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Trusted by growing brands across the UAE
        </p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <Marquee speed={30}>
          {clientLogos.map((logo) => {
            if (!logo.image) {
              return (
                <span
                  key={logo.name}
                  className="text-xl font-semibold whitespace-nowrap text-white/25 transition-colors hover:text-white/50"
                >
                  {logo.name}
                </span>
              );
            }
            if (logo.needsLightBg) {
              return (
                <span
                  key={logo.name}
                  className="flex h-8 shrink-0 items-center rounded-md bg-white px-2.5 py-1 opacity-60 transition-opacity hover:opacity-90"
                >
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    width={160}
                    height={48}
                    className="h-full w-auto object-contain"
                  />
                </span>
              );
            }
            return (
              <span
                key={logo.name}
                className="flex h-6 w-28 shrink-0 items-center opacity-40 brightness-0 invert transition-opacity hover:opacity-70"
              >
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={160}
                  height={40}
                  className="h-full w-auto object-contain object-left"
                />
              </span>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
}
