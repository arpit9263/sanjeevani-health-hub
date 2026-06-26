import {
  Heart,
  Brain,
  Bone,
  Baby,
  Activity,
  Microscope,
  Stethoscope,
  Eye,
  ArrowRight,
  ShieldCheck,
  Users,
  Award,
  Clock,
} from "lucide-react";

const centers = [
  { icon: Activity, title: "ICU & Critical Care", points: ["24×7 ICU support", "Ventilator & oxygen support", "Continuous monitoring"], color: "#0891B2", bg: "from-cyan-50 via-white to-white" },
  { icon: Stethoscope, title: "Anaesthesia", points: ["Pre-operative assessment", "Safe procedure support", "Critical care expertise"], color: "#0E9F6E", bg: "from-emerald-50 via-white to-white" },
  { icon: Bone, title: "Orthopedics", points: ["Fracture & joint care", "Injury management", "Specialist consultation"], color: "#2563EB", bg: "from-blue-50 via-white to-white" },
  { icon: Heart, title: "Cardiology", points: ["Heart consultation", "Emergency support", "Monitoring & referral guidance"], color: "#DB2777", bg: "from-pink-50 via-white to-white" },
  { icon: Brain, title: "Neurosurgery", points: ["Neuro & spine care", "Specialist surgical guidance", "Emergency evaluation"], color: "#7C3AED", bg: "from-violet-50 via-white to-white" },
  { icon: Microscope, title: "Diagnostics", points: ["Pathology support", "X-ray facility", "Faster clinical decisions"], color: "#D97706", bg: "from-amber-50 via-white to-white" },
  { icon: Baby, title: "OBS & Gynecology", points: ["Women’s health", "Pregnancy consultation", "Specialist support"], color: "#0EA5E9", bg: "from-sky-50 via-white to-white" },
  { icon: Eye, title: "Pharmacy & Insurance", points: ["In-house medicines", "Ayushman support", "Cashless/TPA guidance"], color: "#059669", bg: "from-teal-50 via-white to-white" },
];

const trustItems = [
  {
    icon: ShieldCheck,
    title: "World-class Infrastructure",
    text: "Advanced technology and patient-first safety.",
  },
  {
    icon: Users,
    title: "Expert Medical Teams",
    text: "Collaborative care from experienced specialists.",
  },
  {
    icon: Award,
    title: "Evidence-based Care",
    text: "Protocols aligned with modern clinical standards.",
  },
  {
    icon: Clock,
    title: "24×7 Emergency Support",
    text: "Critical care support whenever you need us.",
  },
];

export function CentersOfExcellence() {
  return (
    <section className="relative overflow-hidden bg-[#F7FBFA] py-20 md:py-28">
      <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-emerald-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Core Hospital Services
          </div>

          <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-slate-950 md:text-6xl">
            Advanced clinical care,
            <span className="block bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
              designed around patients
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            Real hospital services supported by experienced doctors, ICU infrastructure, diagnostics, pharmacy and emergency readiness.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {centers.map(({ icon: Icon, title, points, color, bg }, index) => (
            <article
              key={title}
              className={`group relative flex min-h-[280px] flex-col overflow-hidden rounded-[1.75rem] border border-white bg-gradient-to-br ${bg} p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,0.14)]`}
            >
              <div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-20 blur-2xl transition group-hover:opacity-40"
                style={{ backgroundColor: color }}
              />

              <div
                className="absolute right-5 top-5 text-3xl font-black opacity-10"
                style={{ color }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              <div
                className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg"
                style={{ backgroundColor: color }}
              >
                <Icon className="h-7 w-7" />
              </div>

              <h3 className="relative font-display text-xl font-bold text-slate-950">
                {title}
              </h3>

              <ul className="relative mt-4 space-y-2 text-sm leading-6 text-slate-600">
                {points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/specialties"
                className="relative mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-bold transition-all group-hover:gap-3"
                style={{ color }}
              >
                Explore Center
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 rounded-[2rem] border border-white bg-white/80 p-4 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur md:grid-cols-2 lg:grid-cols-4">
          {trustItems.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex gap-4 rounded-3xl p-4 transition hover:bg-emerald-50/60"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                <Icon className="h-6 w-6" />
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-950">{title}</h4>
                <p className="mt-1 text-xs leading-5 text-slate-500">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}