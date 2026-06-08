import { Heart, Brain, Bone, Baby, Activity, Microscope, Stethoscope, Eye } from "lucide-react";

const centers = [
  { icon: Heart, title: "Heart Institute", points: ["Cath Lab 24×7", "CABG & Angioplasty", "Heart Failure Clinic"], hue: "var(--primary)" },
  { icon: Brain, title: "Neurosciences", points: ["Stroke Unit", "Epilepsy Program", "Spine Surgery"], hue: "var(--accent)" },
  { icon: Bone, title: "Bone & Joint", points: ["Robotic Knee Replacement", "Sports Medicine", "Arthroscopy"], hue: "var(--primary)" },
  { icon: Baby, title: "Mother & Child", points: ["Level-III NICU", "High-risk Pregnancy", "Fetal Medicine"], hue: "var(--accent)" },
  { icon: Activity, title: "Critical Care", points: ["28-bed Adult ICU", "ECMO Support", "Trauma Resuscitation"], hue: "var(--primary)" },
  { icon: Microscope, title: "Oncology", points: ["Medical & Surgical Oncology", "Linear Accelerator", "Tumor Board"], hue: "var(--accent)" },
  { icon: Stethoscope, title: "Renal Sciences", points: ["Dialysis Unit", "Kidney Transplant", "Urology"], hue: "var(--primary)" },
  { icon: Eye, title: "Eye Institute", points: ["LASIK & Cataract", "Retina Clinic", "Pediatric Ophthalmology"], hue: "var(--accent)" },
];

export function CentersOfExcellence() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-6 md:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Centers of Excellence
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
              Eight institute-grade clinical programs
            </h2>
          </div>
          <p className="text-muted-foreground md:justify-self-end md:max-w-md">
            Each Center of Excellence is led by a tenured chief, supported by
            multidisciplinary teams, dedicated infrastructure and structured
            clinical pathways aligned with international guidelines.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {centers.map(({ icon: Icon, title, points }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-10 blur-2xl transition-opacity group-hover:opacity-25"
                style={{ backgroundImage: "var(--gradient-brand)" }}
              />
              <div
                className="relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground"
                style={{ backgroundImage: "var(--gradient-brand)" }}
              >
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="relative font-display text-lg font-semibold text-foreground">
                {title}
              </h3>
              <ul className="relative mt-3 space-y-1.5 text-sm text-muted-foreground">
                {points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="/specialties"
                className="relative mt-4 inline-block text-xs font-semibold uppercase tracking-wider text-primary hover:underline"
              >
                Explore →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
