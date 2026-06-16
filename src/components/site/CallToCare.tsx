import { ArrowRight, CalendarCheck, Phone } from "lucide-react";
import bg from "@/assets/cta-care.jpg";

export function CallToCare() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <img src={bg} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover animate-ken-burns" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/55 to-transparent" />


      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] backdrop-blur">
            Care that travels with you
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            One call. One care plan. <br /> The right doctor, every time.
          </h2>
          <p className="mt-4 text-white/90">
            Our care coordinators help you choose the right specialist, book your
            appointment, arrange diagnostics and follow up after discharge — all
            in one conversation.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-xl transition-transform hover:scale-[1.03]"
            >
              <CalendarCheck className="h-4 w-4" /> Book Appointment
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:+911234567890"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
            >
              <Phone className="h-4 w-4" /> +91 12345 67890
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
