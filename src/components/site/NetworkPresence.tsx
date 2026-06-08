import { MapPin, Building2, Users, Globe } from "lucide-react";

const regions = [
  { region: "North", cities: ["Delhi NCR", "Lucknow", "Chandigarh"], beds: 620 },
  { region: "West", cities: ["Mumbai", "Pune", "Ahmedabad"], beds: 540 },
  { region: "South", cities: ["Bengaluru", "Hyderabad", "Chennai"], beds: 480 },
  { region: "East", cities: ["Kolkata", "Bhubaneswar", "Guwahati"], beds: 310 },
];

export function NetworkPresence() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28 text-primary-foreground"
      style={{ backgroundImage: "var(--gradient-brand)" }}
    >
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, white 1px, transparent 1.5px), radial-gradient(circle at 75% 60%, white 1px, transparent 1.5px), radial-gradient(circle at 50% 80%, white 1px, transparent 1.5px)",
          backgroundSize: "120px 120px, 180px 180px, 220px 220px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            Pan-India Network
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            12 hospitals. 24 satellite clinics. One standard of care.
          </h2>
          <p className="mt-4 text-white/90">
            Our integrated network brings tertiary-grade healthcare to Tier-1
            metros and emerging Tier-2 cities — with unified clinical
            protocols, shared electronic medical records and central oversight.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Building2, k: "12+", v: "Hospitals" },
            { icon: MapPin, k: "32", v: "Cities served" },
            { icon: Users, k: "3,200+", v: "Clinical staff" },
            { icon: Globe, k: "40+", v: "Countries of patients served" },
          ].map(({ icon: Icon, k, v }) => (
            <div
              key={v}
              className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur"
            >
              <Icon className="h-6 w-6 opacity-90" />
              <div className="mt-4 font-display text-3xl font-bold">{k}</div>
              <div className="text-sm text-white/80">{v}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {regions.map((r) => (
            <div
              key={r.region}
              className="rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  {r.region} India
                </span>
                <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs">
                  {r.beds} beds
                </span>
              </div>
              <ul className="mt-4 space-y-1.5 text-sm text-white/90">
                {r.cities.map((c) => (
                  <li key={c} className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 opacity-70" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
