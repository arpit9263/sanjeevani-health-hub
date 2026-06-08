import {
  HeartPulse,
  Stethoscope,
  Baby,
  Brain,
  Bone,
  Activity,
  Syringe,
  Ambulance,
} from "lucide-react";

const services = [
  { icon: HeartPulse, title: "Intensive Care Unit", desc: "Advanced multi-bed ICU with round-the-clock monitoring and ventilator support." },
  { icon: Ambulance, title: "24×7 Emergency", desc: "Rapid response trauma and emergency team available every hour of the day." },
  { icon: Stethoscope, title: "General Medicine", desc: "Comprehensive primary care and chronic disease management for all ages." },
  { icon: Brain, title: "Neurology", desc: "Specialist care for stroke, epilepsy and neurological disorders." },
  { icon: Baby, title: "Pediatrics", desc: "Gentle, child-friendly care from newborn to adolescents." },
  { icon: Bone, title: "Orthopedics", desc: "Bone, joint and spine care including surgery and rehabilitation." },
  { icon: Activity, title: "Cardiology", desc: "Heart screenings, diagnostics and advanced cardiac treatments." },
  { icon: Syringe, title: "Diagnostics & Lab", desc: "In-house pathology, imaging and radiology for fast results." },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Our Services
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            Multi-specialty care under one roof
          </h2>
          <p className="mt-4 text-muted-foreground">
            From critical ICU support to everyday consultations, our team delivers
            evidence-based treatment with empathy.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div
                className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground"
                style={{ backgroundImage: "var(--gradient-brand)" }}
              >
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
