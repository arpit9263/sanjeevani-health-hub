import {
  Ambulance,
  BedDouble,
  ClipboardCheck,
  HeartHandshake,
  Microscope,
  Pill,
  ShieldCheck,
  FileText,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { hospitalServices } from "@/lib/siteData";

const iconMap = [Ambulance, BedDouble, Microscope, Pill, ShieldCheck, ClipboardCheck, HeartHandshake, FileText];

const colorMap = ["#DC2626", "#0891B2", "#7C3AED", "#0E9F6E", "#2563EB", "#D97706", "#059669", "#DB2777"];

export function Services() {
  return (
    <section id="services" className="relative bg-white py-20 md:py-28">
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-emerald-100/70 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-10 h-80 w-80 rounded-full bg-cyan-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-24 lg:flex lg:min-h-[calc(100vh-6rem)] lg:items-center">
            <div className="w-full max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                Patient Services
              </div>

              <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-slate-950 md:text-5xl lg:text-[3.35rem]">
                Hospital facilities &
                <span className="block bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
                  patient support
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-base leading-7 text-slate-600 md:text-lg">
                Services page now covers hospital facilities, emergency support, diagnostics, pharmacy, insurance and appointment help. Clinical departments are kept separately under Speciality.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "24×7 emergency and ICU support",
                  "Diagnostics, pharmacy and insurance help",
                  "Simple appointment and family guidance",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-emerald-700"
              >
                Book Appointment
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {hospitalServices.map(({ title, desc, href }, idx) => {
              const Icon = iconMap[idx % iconMap.length];
              const color = colorMap[idx % colorMap.length];

              return (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 35, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: idx * 0.04 }}
                  className="group relative min-h-[250px] overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(15,23,42,0.13)]"
                >
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-10 blur-2xl transition group-hover:opacity-25" style={{ backgroundColor: color }} />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-15 w-15 items-center justify-center rounded-2xl text-white shadow-lg" style={{ backgroundColor: color }}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <span className="text-4xl font-black opacity-10" style={{ color }}>{String(idx + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="mt-5 font-display text-xl font-bold text-slate-950 md:text-2xl">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
                    <a href={href} className="mt-auto inline-flex w-fit items-center gap-2 pt-5 text-sm font-bold transition-all group-hover:gap-3" style={{ color }}>
                      View details <ArrowRight className="h-4 w-4" />
                    </a>
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
