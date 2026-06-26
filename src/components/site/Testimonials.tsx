import { Star, Quote } from "lucide-react";

const stories = [
  { name: "Anita R.", city: "Jhansi", role: "Daughter of patient", text: "From the ICU team to the discharge desk, every staff member made my father feel safe. The transparent billing and follow-up calls were a relief." },
  { name: "Mohammed K.", city: "Dubai", role: "International patient", text: "I came for a complex spine surgery. The international desk handled my visa, my mother's stay, and every translation. My surgeon was world-class." },
  { name: "Sneha & Rohit", city: "Jhansi", role: "Parents", text: "Our high-risk pregnancy was managed by an incredible team. The Level-III NICU saved our baby. Forever grateful to the Sanjeevani family." },
  { name: "Vikram S.", city: "Jaipur", role: "Cardiac patient", text: "Angioplasty done at 2 AM. The cath lab team moved like clockwork. Discharged in three days with a full rehab plan." },
  { name: "Lakshmi P.", city: "Chennai", role: "Oncology patient", text: "Two years of chemotherapy and not a single billing surprise. My oncologist still messages on my scan anniversaries." },
  { name: "Imran & Farah", city: "Lucknow", role: "Family", text: "Our grandmother's hip replacement and rehab went so smoothly. The physio team visited us at home for six weeks." },
];

function Card({ s }: { s: typeof stories[number] }) {
  return (
    <article
      className="flex w-[340px] shrink-0 flex-col rounded-3xl border border-border bg-card p-7 sm:w-[400px]"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <Quote className="h-7 w-7 text-primary/20" />
      <p className="mt-3 text-sm leading-relaxed text-foreground/85 line-clamp-5">{s.text}</p>
      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
        <div>
          <div className="font-display text-sm font-semibold text-foreground">{s.name}</div>
          <div className="text-xs text-muted-foreground">{s.role} · {s.city}</div>
        </div>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
          ))}
        </div>
      </div>
    </article>
  );
}

export function Testimonials() {
  const row = [...stories, ...stories];
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-secondary/40">
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
            <p className="mt-2 text-sm">Trusted by families across Jhansi and nearby areas.</p>
          </div>
        </div>
      </div>

      <div className="relative mt-12">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-secondary/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-secondary/80 to-transparent" />

        <div className="group flex overflow-hidden">
          <div className="flex shrink-0 gap-6 px-6 marquee-track">
            {row.map((s, i) => (
              <Card key={i} s={s} />
            ))}
          </div>
          <div className="flex shrink-0 gap-6 px-6 marquee-track" aria-hidden="true">
            {row.map((s, i) => (
              <Card key={`d-${i}`} s={s} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .marquee-track {
          animation: marquee 50s linear infinite;
        }
        .group:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
