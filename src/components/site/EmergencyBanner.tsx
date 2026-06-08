import { Ambulance, Phone } from "lucide-react";

export function EmergencyBanner() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-10 md:px-12 md:py-14"
          style={{ backgroundImage: "var(--gradient-brand)" }}
        >
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 text-primary-foreground md:flex-row md:items-center">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                <Ambulance className="h-7 w-7" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                  24×7 Emergency Response
                </div>
                <h3 className="mt-1 font-display text-2xl font-bold md:text-3xl">
                  Every second counts. We answer in under 30 seconds.
                </h3>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:108"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg hover:scale-[1.03] transition-transform"
              >
                <Ambulance className="h-4 w-4" /> Ambulance: 108
              </a>
              <a
                href="tel:+911234567890"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur hover:bg-white/20"
              >
                <Phone className="h-4 w-4" /> +91 12345 67890
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
