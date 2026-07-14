export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 42, suffix: "+", label: "Markets supported" },
  { value: 2.4, prefix: "$", suffix: "B", label: "Processed annually" },
  { value: 99.99, suffix: "%", label: "Platform uptime" },
  { value: 180, suffix: "ms", label: "Median settlement latency" },
];
