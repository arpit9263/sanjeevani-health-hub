import { HandHeart, Sprout, Users, Activity } from "lucide-react";

const programs = [
  { icon: HandHeart, k: "1.2L+", v: "Free screenings done" },
  { icon: Sprout, k: "78", v: "Rural health camps / year" },
  { icon: Users, k: "12,400", v: "Patients on subsidy plans" },
  { icon: Activity, k: "8", v: "District ICUs supported" },
];

export function CSR() {
  return (
    <section id="csr" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-3xl border border-border p-10 md:p-14"
          style={{ backgroundImage: "var(--gradient-soft)", boxShadow: "var(--shadow-card)" }}
        >
          <div
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-25 blur-3xl"
            style={{ backgroundImage: "var(--gradient-brand)" }}
          />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Sanjeevani Foundation
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
                Healthcare beyond hospital walls
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Our CSR arm runs preventive screening programs, rural ICU
                support and treatment subsidies — because access to quality
                care is a right, not a privilege.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {programs.map(({ icon: Icon, k, v }) => (
                <div key={v} className="rounded-2xl border border-border bg-card p-5">
                  <Icon className="h-5 w-5 text-accent" />
                  <div className="mt-3 font-display text-2xl font-bold text-primary">{k}</div>
                  <div className="text-xs text-muted-foreground">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
