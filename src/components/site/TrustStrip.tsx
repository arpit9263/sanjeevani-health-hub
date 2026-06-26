import { Ambulance, ShieldCheck, Clock, BadgeCheck } from "lucide-react";
import { hospitalInfo, telHref } from "@/lib/siteData";

const items = [
  { icon: Ambulance, eyebrow: "24×7 Emergency", title: `Call +91 ${hospitalInfo.emergency}`, href: telHref(hospitalInfo.emergency) },
  { icon: ShieldCheck, eyebrow: "ICU Support", title: "49+ beds with critical care", href: "#services" },
  { icon: BadgeCheck, eyebrow: "Insurance & TPA", title: "Cashless insurance support", href: "#insurance" },
  { icon: Clock, eyebrow: "Established", title: `Serving since ${hospitalInfo.established}`, href: "#about" },
];

export function TrustStrip() {
  return (
    <section className="relative z-10 -mt-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 rounded-3xl border border-border bg-card p-4 shadow-[var(--shadow-elevated)] md:grid-cols-4">
        {items.map(({ icon: Icon, eyebrow, title, href }) => (
          <a key={title} href={href} className="group relative overflow-hidden rounded-2xl p-5 transition-all hover:bg-secondary">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-primary-foreground" style={{ backgroundImage: "var(--gradient-brand)" }}>
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{eyebrow}</div>
                <div className="mt-1 font-display text-sm font-semibold text-foreground">{title}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
