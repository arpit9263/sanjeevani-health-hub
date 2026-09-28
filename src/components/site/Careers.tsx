import { Briefcase, GraduationCap, HeartPulse, Users, ArrowRight } from "lucide-react";

const openings = [
  { role: "ICU Nurse", city: "Jhansi", type: "Full-time" },
  { role: "Reception / Front Desk", city: "Jhansi", type: "Full-time" },
  { role: "Insurance Desk Executive", city: "Jhansi", type: "Full-time" },
  { role: "Hospital Support Staff", city: "Jhansi", type: "Full-time" },
];

export function CareersTeaser() {
  return (
    <section id="careers" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Careers at Sanjeevani
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
              Join a team that puts patients — and people — first
            </h2>
            <p className="mt-4 text-muted-foreground">
              We invest in clinical excellence, structured training and a
              respectful workplace where doctors, nurses and support teams can
              do the best work of their careers.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: GraduationCap, t: "Training and patient-care protocols" },
                { icon: HeartPulse, t: "Supportive healthcare workplace" },
                { icon: Users, t: "Work with experienced doctors" },
                { icon: Briefcase, t: "Growth opportunities in Jhansi" },
              ].map(({ icon: Icon, t }) => (
                <div key={t} className="flex items-start gap-3 text-sm text-foreground/85">
                  <span
                    className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-primary-foreground"
                    style={{ backgroundImage: "var(--gradient-brand)" }}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-3xl border border-border bg-card p-6 md:p-8"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold text-foreground">
                Current openings
              </h3>
              <a href="/careers" className="text-xs font-semibold uppercase tracking-wider text-primary hover:underline">
                See all
              </a>
            </div>
            <ul className="mt-6 divide-y divide-border">
              {openings.map((o) => (
                <li
                  key={o.role}
                  className="group flex items-center justify-between gap-4 py-4"
                >
                  <div>
                    <div className="font-medium text-foreground">{o.role}</div>
                    <div className="text-xs text-muted-foreground">
                      {o.city} · {o.type}
                    </div>
                  </div>
                  <a
                    href="/careers"
                    className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary"
                  >
                    Apply <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
