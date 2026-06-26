import { Phone, HeartPulse } from "lucide-react";
import { hospitalInfo, telHref } from "@/lib/siteData";

export function EmergencyBanner() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl px-8 py-10 md:px-12 md:py-14" style={{ backgroundImage: "var(--gradient-brand)", boxShadow: "var(--shadow-elevated)" }}>
          <div className="relative z-10 flex flex-col gap-6 text-primary-foreground md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
                <HeartPulse className="h-3.5 w-3.5" /> 24×7 Emergency Response
              </div>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">Emergency care when every second matters.</h2>
              <p className="mt-2 max-w-2xl text-white/85">Call Sanjeevani ICU & Hospital directly for emergency and critical care support.</p>
            </div>
            <a href={telHref(hospitalInfo.emergency)} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-xl transition-transform hover:scale-[1.03]">
              <Phone className="h-4 w-4" /> +91 {hospitalInfo.emergency}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
