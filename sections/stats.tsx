import { AnimatedCounter } from "@/components/shared/animated-counter";
import { Reveal } from "@/components/shared/reveal";
import { GridBackground } from "@/components/shared/grid-background";
import { stats } from "@/data/stats";

export function Stats() {
  return (
    <section className="relative overflow-hidden px-4 py-24">
      <GridBackground glow={false} />
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08}>
            <div className="flex flex-col items-center gap-2 text-center">
              <span className="text-gradient-primary text-4xl font-semibold tracking-tight sm:text-5xl">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </span>
              <span className="text-sm text-muted-foreground">
                {stat.label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
