import { Award, ShieldCheck, BadgeCheck, FlaskConical, GraduationCap, Trophy } from "lucide-react";

const badges = [
  { icon: ShieldCheck, name: "NABH Accredited", note: "Full hospital accreditation" },
  { icon: FlaskConical, name: "NABL Certified Labs", note: "ISO 15189 standards" },
  { icon: BadgeCheck, name: "ISO 9001:2015", note: "Quality management" },
  { icon: Award, name: "JCI Aligned", note: "International protocols" },
  { icon: GraduationCap, name: "DNB Teaching Hospital", note: "Recognized for PG training" },
  { icon: Trophy, name: "FICCI Healthcare Excellence", note: "2023 Patient Safety Award" },
];

export function Accreditations() {
  return (
    <section id="accreditations" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-6 md:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Quality, Safety & Recognition
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
              Built on independently audited standards
            </h2>
          </div>
          <p className="text-muted-foreground md:justify-self-end md:max-w-md">
            Our quality framework is benchmarked against national and global
            accreditation bodies — with continuous internal audits, incident
            reporting and patient-safety dashboards.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {badges.map(({ icon: Icon, name, note }) => (
            <div
              key={name}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/40"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-primary-foreground"
                style={{ backgroundImage: "var(--gradient-brand)" }}
              >
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <div className="font-display text-base font-semibold text-foreground">{name}</div>
                <div className="text-xs text-muted-foreground">{note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
