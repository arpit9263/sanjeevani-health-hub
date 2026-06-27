import { Plane, Languages, FileCheck, HeartHandshake, Hotel, Stethoscope } from "lucide-react";

const services = [
  { icon: FileCheck, t: "Medical Visa Assistance", d: "Invitation letters, embassy coordination & extensions." },
  { icon: Plane, t: "Airport Concierge", d: "Pickup, drop and inter-city travel arrangements." },
  { icon: Languages, t: "Multilingual Coordinators", d: "Arabic, French, Russian, Bengali, Swahili and more." },
  { icon: Stethoscope, t: "Pre-arrival Consultation", d: "Video consults and treatment estimate before you travel." },
  { icon: Hotel, t: "Accommodation Desk", d: "Curated hotels and serviced apartments near the hospital." },
  { icon: HeartHandshake, t: "Post-treatment Care", d: "Tele follow-ups and medication delivery to your country." },
];

export function InternationalPatients() {
  return (
    <section id="international" className="py-20 md:py-28" style={{ backgroundImage: "var(--gradient-soft)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              International Patients
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
              Trusted by patients from 40+ countries
            </h2>
            <p className="mt-4 text-muted-foreground">
              A dedicated International Patient Services desk handles every
              detail — so you can focus on healing.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)]"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              Request Treatment Estimate
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map(({ icon: Icon, t, d }) => (
              <div
                key={t}
                className="rounded-2xl border border-border bg-card p-6"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <Icon className="h-6 w-6 text-accent" />
                <div className="mt-3 font-display text-base font-semibold text-foreground">
                  {t}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
