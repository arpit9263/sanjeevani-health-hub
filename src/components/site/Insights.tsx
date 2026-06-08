import { ArrowRight } from "lucide-react";

const posts = [
  {
    tag: "Cardiology",
    date: "May 28, 2026",
    title: "Why women shouldn't ignore early heart attack symptoms",
    excerpt: "Atypical signs in women are often missed. Our cardiology chief explains what to watch for and when to seek help.",
  },
  {
    tag: "Critical Care",
    date: "May 14, 2026",
    title: "Inside a modern ICU: what 'level-3 care' really means",
    excerpt: "A walk-through of ventilators, monitors and the multidisciplinary team that keeps the sickest patients alive.",
  },
  {
    tag: "Mother & Child",
    date: "Apr 30, 2026",
    title: "Planning a healthy pregnancy after 35",
    excerpt: "A practical guide on pre-conception health, screening and the role of fetal medicine.",
  },
  {
    tag: "Policy",
    date: "Apr 18, 2026",
    title: "Sanjeevani signs MoU with state government for rural ICU rollout",
    excerpt: "Public-private partnership to deploy 8 critical-care units in district hospitals across the region.",
  },
];

export function Insights() {
  return (
    <section id="insights" className="py-20 md:py-28" style={{ backgroundImage: "var(--gradient-soft)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-6 md:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Health Insights & Newsroom
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
              Evidence-based perspectives from our clinicians
            </h2>
          </div>
          <a
            href="/#insights"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline md:justify-self-end"
          >
            View all articles <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {posts.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-center gap-2 text-xs">
                <span className="rounded-full bg-primary/10 px-2.5 py-1 font-semibold text-primary">
                  {p.tag}
                </span>
                <span className="text-muted-foreground">{p.date}</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-foreground">
                {p.title}
              </h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                Read article <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
