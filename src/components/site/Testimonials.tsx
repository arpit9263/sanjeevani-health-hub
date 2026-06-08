import { Star, Quote } from "lucide-react";

const stories = [
  {
    name: "Anita R.",
    city: "Delhi",
    text: "From the ICU team to the discharge desk, every staff member made my father feel safe. The transparent billing and follow-up calls were a relief.",
    role: "Daughter of patient",
  },
  {
    name: "Mohammed K.",
    city: "Dubai",
    text: "I came for a complex spine surgery. The international desk handled my visa, my mother's stay, and every translation. My surgeon was world-class.",
    role: "International patient",
  },
  {
    name: "Sneha & Rohit",
    city: "Bengaluru",
    text: "Our high-risk pregnancy was managed by an incredible team. The Level-III NICU saved our baby. Forever grateful to the Sanjeevani family.",
    role: "Parents",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-6 md:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Patient Stories
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
              Real outcomes. Real families.
            </h2>
          </div>
          <div className="text-muted-foreground md:justify-self-end md:max-w-md">
            <div className="flex items-center gap-3">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">4.8/5 average rating</span>
            </div>
            <p className="mt-2 text-sm">From 12,400+ verified Google &amp; Practo reviews.</p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {stories.map((s) => (
            <article
              key={s.name}
              className="relative rounded-3xl border border-border bg-card p-8"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <Quote className="h-8 w-8 text-primary/20" />
              <p className="mt-4 text-sm leading-relaxed text-foreground/85">{s.text}</p>
              <div className="mt-6 border-t border-border pt-4">
                <div className="font-display text-sm font-semibold text-foreground">{s.name}</div>
                <div className="text-xs text-muted-foreground">{s.role} · {s.city}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
