import { useEffect, useMemo, useRef, useState } from "react";
import { Activity, BedDouble, CalendarDays, Stethoscope } from "lucide-react";
import { stats } from "@/lib/siteData";

const statMeta = [
  { end: 15, suffix: "+", icon: Stethoscope },
  { end: 49, suffix: "+", icon: BedDouble },
  { end: 3, suffix: " Lakh+", icon: Activity },
  { end: 2019, suffix: "", icon: CalendarDays },
];

function useCountUp(end: number, start: boolean, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const startedAt = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [duration, end, start]);

  return value;
}

function StatCard({ stat, index, active }: { stat: (typeof stats)[number]; index: number; active: boolean }) {
  const meta = statMeta[index] ?? { end: Number.parseInt(stat.value, 10) || 0, suffix: "+", icon: Activity };
  const Icon = meta.icon;
  const value = useCountUp(meta.end, active, index === 3 ? 1800 : 1400);
  const display = `${active ? value : 0}${meta.suffix}`;

  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 p-6 text-left shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(15,23,42,0.14)]">
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 transition-transform duration-700 group-hover:scale-150" />
      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/10">
        <Icon className="h-6 w-6" />
      </div>
      <div className="relative mt-5 font-display text-4xl font-black tracking-tight text-foreground md:text-5xl">
        {display}
      </div>
      <div className="relative mt-2 text-sm font-bold text-foreground">{stat.label}</div>
      <div className="relative mt-2 max-w-[210px] text-xs leading-5 text-muted-foreground">{stat.detail}</div>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const intro = useMemo(() => "Trusted care numbers that animate from zero when visitors reach this section.", []);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#F7FBFA] py-18 md:py-24">
      <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 rounded-full bg-emerald-100 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-100 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-accent">Hospital Statistics</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">Numbers that build patient trust.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">{intro}</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
