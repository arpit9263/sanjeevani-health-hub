import d1 from "@/assets/doctor-1.jpg";
import d2 from "@/assets/doctor-2.jpg";
import d3 from "@/assets/doctor-3.jpg";
import { Quote } from "lucide-react";

const leaders = [
  {
    img: d3,
    name: "Dr. Rakesh Mehta",
    role: "Chairman & Managing Director",
    quote:
      "Our purpose is simple — deliver world-class clinical outcomes with the warmth of an Indian household.",
  },
  {
    img: d1,
    name: "Dr. Priya Sharma",
    role: "Group Medical Director",
    quote:
      "Standardised protocols across our network mean a patient in Lucknow receives the same quality of care as one in Mumbai.",
  },
  {
    img: d2,
    name: "Mr. Arjun Verma",
    role: "Group Chief Executive Officer",
    quote:
      "We invest aggressively in technology, training and infrastructure so our clinicians can focus on what they do best — care.",
  },
];

export function Leadership() {
  return (
    <section id="leadership" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Leadership Insights
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            Guided by clinicians, run with rigor
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {leaders.map((l) => (
            <article
              key={l.name}
              className="relative overflow-hidden rounded-3xl border border-border bg-card p-8"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-primary/10" />
              <div className="flex items-center gap-4">
                <img
                  src={l.img}
                  alt={l.name}
                  className="h-16 w-16 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="font-display text-lg font-semibold text-foreground">{l.name}</div>
                  <div className="text-xs uppercase tracking-wider text-accent">{l.role}</div>
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                “{l.quote}”
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
