import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/shared/glass-card";
import { GridBackground } from "@/components/shared/grid-background";
import { Reveal } from "@/components/shared/reveal";

export function Cta() {
  return (
    <section className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <GlassCard className="relative overflow-hidden p-10 text-center sm:p-16">
            <GridBackground />
            <div className="relative flex flex-col items-center gap-6">
              <h2 className="text-gradient max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
                Ready to Scale Your Shopify Store?
              </h2>
              <p className="max-w-md text-balance text-base text-muted-foreground sm:text-lg">
                Join growing UAE brands that trust Globify to design, build,
                and optimize high-performing Shopify stores.
              </p>
              <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
                <Button size="lg" className="h-11 gap-2 rounded-full px-6 text-sm">
                  Book Free Shopify Consultation
                  <ArrowRight className="size-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-11 gap-2 rounded-full border-white/10 bg-white/[0.02] px-6 text-sm text-white hover:bg-white/[0.06]"
                >
                  Talk to Sales
                </Button>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
