import { Ambulance, ShieldCheck, HeartPulse, Stethoscope, ArrowRight } from "lucide-react";

const items = [
  {
    icon: Ambulance,
    eyebrow: "24×7 Emergency",
    title: "Call 108 — answered in 30 seconds",
    desc: "GPS-tracked ambulances, ACLS-trained paramedics and a dedicated trauma bay.",
    cta: "Call Now",
    href: "tel:108",
    tone: "primary" as const,
  },
  {
    icon: ShieldCheck,
    eyebrow: "Ayushman Bharat",
    title: "Empanelled under PM-JAY",
    desc: "Cashless treatment up to ₹5 lakh for eligible families across listed specialties.",
    cta: "Check Eligibility",
    href: "/#contact",
    tone: "accent" as const,
  },
  {
    icon: Stethoscope,
    eyebrow: "Insurance & TPA",
    title: "40+ cashless partners",
    desc: "Pre-authorisation desks at every centre — claim assistance from admission to discharge.",
    cta: "View Partners",
    href: "/#insurance",
    tone: "soft" as const,
  },
  {
    icon: HeartPulse,
    eyebrow: "Tele-Consult",
    title: "Talk to a doctor in 15 min",
    desc: "Video and audio consultations across 28 specialties, available 7 days a week.",
    cta: "Book Slot",
    href: "/#contact",
    tone: "soft" as const,
  },
];

export function TrustStrip() {
  return (
    <section className="relative -mt-14 z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 rounded-3xl border border-border bg-card/95 p-4 backdrop-blur md:grid-cols-2 md:p-6 lg:grid-cols-4"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          {items.map(({ icon: Icon, eyebrow, title, desc, cta, href, tone }) => {
            const isFilled = tone === "primary" || tone === "accent";
            return (
              <a
                key={title}
                href={href}
                className={`group relative flex flex-col gap-3 overflow-hidden rounded-2xl p-5 transition-all hover:-translate-y-1 ${
                  isFilled ? "text-primary-foreground" : "bg-secondary/60 text-foreground hover:bg-secondary"
                }`}
                style={
                  isFilled
                    ? {
                        backgroundImage:
                          tone === "primary"
                            ? "var(--gradient-brand)"
                            : "linear-gradient(135deg, var(--accent), var(--accent-glow))",
                        boxShadow: "var(--shadow-soft)",
                      }
                    : undefined
                }
              >
                {isFilled && (
                  <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/15 blur-2xl transition-transform group-hover:scale-125" />
                )}
                <div
                  className={`relative flex h-11 w-11 items-center justify-center rounded-xl ${
                    isFilled ? "bg-white/15 backdrop-blur" : "bg-primary/10 text-primary"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="relative">
                  <div
                    className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${
                      isFilled ? "text-white/80" : "text-accent"
                    }`}
                  >
                    {eyebrow}
                  </div>
                  <h3 className={`mt-1 font-display text-base font-semibold leading-snug ${isFilled ? "" : "text-foreground"}`}>
                    {title}
                  </h3>
                  <p className={`mt-1.5 text-xs leading-relaxed ${isFilled ? "text-white/85" : "text-muted-foreground"}`}>
                    {desc}
                  </p>
                </div>
                <span
                  className={`relative mt-auto inline-flex items-center gap-1.5 text-xs font-semibold ${
                    isFilled ? "text-white" : "text-primary"
                  }`}
                >
                  {cta}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
