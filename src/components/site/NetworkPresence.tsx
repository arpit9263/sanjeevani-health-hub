import { Building2, MapPin, Users, BedDouble } from "lucide-react";
import { hospitalInfo, stats } from "@/lib/siteData";

export function NetworkPresence() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 text-primary-foreground" style={{ backgroundImage: "var(--gradient-brand)" }}>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] backdrop-blur">
            Hospital Presence
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl lg:text-5xl">Trusted hospital care in Jhansi.</h2>
          <p className="mt-4 text-white/85">{hospitalInfo.name} is located at {hospitalInfo.address} and serves families across Jhansi and nearby areas.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Building2, k: hospitalInfo.established, v: "Established" },
            { icon: MapPin, k: "Jhansi", v: "Hospital Location" },
            { icon: Users, k: stats[0].value, v: stats[0].label },
            { icon: BedDouble, k: stats[1].value, v: stats[1].label },
          ].map(({ icon: Icon, k, v }) => (
            <div key={v} className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">
              <Icon className="h-5 w-5 text-white/80" />
              <div className="mt-4 font-display text-3xl font-bold text-white">{k}</div>
              <div className="mt-1 text-sm text-white/75">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
