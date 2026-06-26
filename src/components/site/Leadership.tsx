import { Quote } from "lucide-react";
import { leadershipDoctors } from "@/lib/siteData";

export function Leadership() {
  return (
    <section className="py-20 md:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Clinical Guidance</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">Focused on safe, transparent and compassionate care</h2>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {leadershipDoctors.slice(0, 2).map((l) => (
            <article key={l.name} className="relative overflow-hidden rounded-3xl border border-border bg-card p-8" style={{ boxShadow: "var(--shadow-card)" }}>
              <Quote className="absolute right-6 top-6 h-10 w-10 text-primary/10" />
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-lg font-bold text-primary">
                  {l.name.split(" ").slice(-2).map((part) => part[0]).join("")}
                </div>
                <div>
                  <div className="font-display text-lg font-semibold text-foreground">{l.name}</div>
                  <div className="text-xs uppercase tracking-wider text-accent">{l.role}</div>
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{l.qualification} · {l.specialty}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
