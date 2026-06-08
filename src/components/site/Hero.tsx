import heroImg from "@/assets/hospital-hero.jpg";
import { ArrowRight, ShieldCheck, HeartPulse, Clock } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Sanjeevani Hospital building"
          className="h-full w-full object-cover"
          width={1600}
          height={1100}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-primary-foreground">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur">
            <HeartPulse className="h-3.5 w-3.5" />
            24×7 Critical Care &amp; Emergency
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Compassionate care, <br />
            <span className="text-white/95">when every second counts.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-white/90">
            Sanjeevani ICU &amp; Hospital combines experienced doctors, modern
            infrastructure and a warm human touch to deliver trusted multi-specialty
            healthcare for your family.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg transition-transform hover:scale-[1.03]"
            >
              Book an Appointment
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
            >
              Our Services
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
            {[
              { icon: ShieldCheck, label: "NABH Standards" },
              { icon: Clock, label: "24×7 Emergency" },
              { icon: HeartPulse, label: "Critical ICU" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-start gap-2 rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur"
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
