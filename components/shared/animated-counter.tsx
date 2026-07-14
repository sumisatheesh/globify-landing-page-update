"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type AnimatedCounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

export function AnimatedCounter({
  value,
  prefix,
  suffix,
  duration = 2.4,
  className,
}: AnimatedCounterProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const decimals = value % 1 !== 0 ? 2 : 0;

  return (
    <span ref={ref} className={className}>
      {inView ? (
        <CountUp
          end={value}
          prefix={prefix}
          suffix={suffix}
          duration={duration}
          decimals={decimals}
          separator=","
        />
      ) : (
        `${prefix ?? ""}0${suffix ?? ""}`
      )}
    </span>
  );
}
