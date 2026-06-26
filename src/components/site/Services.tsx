import {
  HeartPulse,
  Stethoscope,
  Baby,
  Brain,
  Bone,
  Activity,
  Syringe,
  ShieldPlus,
  Scissors,
  Smile,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/lib/siteData";

const iconMap = [
  HeartPulse,
  Syringe,
  Bone,
  Activity,
  ShieldPlus,
  Brain,
  Stethoscope,
  Scissors,
  Baby,
  Smile,
];

const colorMap = [
  "#0E9F6E",
  "#2563EB",
  "#7C3AED",
  "#0891B2",
  "#DB2777",
  "#D97706",
  "#059669",
  "#6D28D9",
  "#0EA5E9",
  "#16A34A",
];

export function Services() {
  return (
    <section id="services" className="relative bg-white py-20 md:py-28">
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-emerald-100/70 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-10 h-80 w-80 rounded-full bg-cyan-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="lg:sticky lg:top-24 lg:flex lg:min-h-[calc(100vh-6rem)] lg:items-center">
            <div className="w-full max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                Our Services
              </div>

              <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-slate-950 md:text-5xl lg:text-[3.35rem]">
                Specialist care under
                <span className="block bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
                  one trusted roof
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-base leading-7 text-slate-600 md:text-lg">
                From ICU and emergency support to specialist consultations,
                Sanjeevani brings experienced doctors and compassionate care for
                families in Jhansi.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Emergency-ready medical support",
                  "Experienced doctors and trained staff",
                  "Family-focused patient care",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="/services"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-emerald-700"
              >
                View All Services
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="space-y-8">
            {services.map(({ title, desc }, idx) => {
              const Icon = iconMap[idx % iconMap.length];
              const color = colorMap[idx % colorMap.length];
              const isRight = idx % 2 !== 0;

              return (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 60, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.55,
                    delay: idx * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`group relative w-full overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_30px_90px_rgba(15,23,42,0.13)] md:p-7 ${
                    isRight ? "lg:ml-auto lg:max-w-[88%]" : "lg:mr-auto lg:max-w-[88%]"
                  }`}
                >
                  <div
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-10 blur-2xl transition group-hover:opacity-25"
                    style={{ backgroundColor: color }}
                  />

                  <div className="relative flex items-start gap-5">
                    <div
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg transition duration-300 group-hover:scale-105"
                      style={{ backgroundColor: color }}
                    >
                      <Icon className="h-8 w-8" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-display text-xl font-bold leading-tight text-slate-950 md:text-2xl">
                          {title}
                        </h3>

                        <span
                          className="hidden shrink-0 text-4xl font-black opacity-10 sm:block"
                          style={{ color }}
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 md:text-base">
                        {desc}
                      </p>

                      <div
                        className="mt-5 inline-flex items-center gap-2 text-sm font-bold transition-all group-hover:gap-3"
                        style={{ color }}
                      >
                        Learn more
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}