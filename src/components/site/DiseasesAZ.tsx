import { useMemo, useState } from "react";
import {
  Search, Brain, HeartPulse, Bone, Baby, Eye, Stethoscope,
  Activity, Pill, ArrowUpRight, Sparkles,
} from "lucide-react";

const diseases: Record<string, string[]> = {
  A: ["Asthma", "Arthritis", "Anaemia", "Appendicitis", "Allergies"],
  B: ["Brain Stroke", "Breast Cancer", "Back Pain", "Bronchitis"],
  C: ["Cardiac Arrest", "Cataract", "Cervical Spondylosis", "COPD", "Crohn's Disease"],
  D: ["Diabetes", "Dengue", "Depression", "Dialysis Care"],
  E: ["Epilepsy", "Endometriosis", "Eczema"],
  F: ["Fatty Liver", "Fibroids", "Fertility Issues"],
  G: ["Gallstones", "Gastritis", "Glaucoma"],
  H: ["Hypertension", "Heart Failure", "Hepatitis", "Hernia"],
  I: ["IBS", "Infertility", "Ischemic Stroke"],
  J: ["Joint Pain", "Jaundice"],
  K: ["Kidney Stones", "Knee Replacement"],
  L: ["Lung Cancer", "Liver Cirrhosis", "Leukemia"],
  M: ["Migraine", "Menopause", "Malaria"],
  N: ["Neuropathy", "Nephritis"],
  O: ["Osteoporosis", "Obesity", "Ovarian Cyst"],
  P: ["Parkinson's", "Pneumonia", "PCOS", "Psoriasis"],
  Q: ["Q Fever"],
  R: ["Rheumatoid Arthritis", "Renal Failure"],
  S: ["Sciatica", "Sinusitis", "Sleep Apnea", "Stroke"],
  T: ["Thyroid Disorders", "Tuberculosis", "Tonsillitis"],
  U: ["Ulcers", "Urinary Infections"],
  V: ["Varicose Veins", "Vertigo"],
  W: ["Wilson's Disease"],
  X: ["Xerostomia"],
  Y: ["Yellow Fever"],
  Z: ["Zika Virus"],
};

const categories = [
  { icon: HeartPulse, label: "Cardiology", count: 84, color: "from-rose-500/15 to-rose-500/5", text: "text-rose-600" },
  { icon: Brain, label: "Neurology", count: 62, color: "from-violet-500/15 to-violet-500/5", text: "text-violet-600" },
  { icon: Bone, label: "Orthopaedics", count: 71, color: "from-amber-500/15 to-amber-500/5", text: "text-amber-600" },
  { icon: Baby, label: "Mother & Child", count: 45, color: "from-pink-500/15 to-pink-500/5", text: "text-pink-600" },
  { icon: Eye, label: "Ophthalmology", count: 38, color: "from-sky-500/15 to-sky-500/5", text: "text-sky-600" },
  { icon: Stethoscope, label: "Internal Med.", count: 93, color: "from-emerald-500/15 to-emerald-500/5", text: "text-emerald-600" },
  { icon: Activity, label: "Pulmonology", count: 41, color: "from-cyan-500/15 to-cyan-500/5", text: "text-cyan-600" },
  { icon: Pill, label: "Oncology", count: 57, color: "from-indigo-500/15 to-indigo-500/5", text: "text-indigo-600" },
];

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export function DiseasesAZ() {
  const [active, setActive] = useState("A");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    if (!q.trim()) return diseases[active] ?? [];
    const term = q.toLowerCase();
    return Object.values(diseases).flat().filter((d) => d.toLowerCase().includes(term));
  }, [active, q]);

  return (
    <section id="diseases" className="relative overflow-hidden py-24 md:py-28">
      {/* Decorative mesh background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ backgroundImage: "var(--gradient-mesh)" }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-background/80" />
      {/* Floating blobs */}
      <div aria-hidden className="absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div aria-hidden className="absolute -right-24 bottom-24 -z-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Health Library
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Explore <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">1,200+ conditions</span><br className="hidden sm:block"/> our specialists treat every day.
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Browse by body system or jump alphabetically — every entry links to
            specialists, diagnostics and treatment programs.
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mt-10 flex max-w-2xl items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3 shadow-[var(--shadow-card)] transition-all focus-within:border-primary/50 focus-within:shadow-[var(--shadow-glow)]">
          <Search className="h-5 w-5 text-primary" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search a condition e.g. Diabetes, Stroke, PCOS…"
            className="flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
          />
          <kbd className="hidden rounded-md border border-border bg-secondary px-2 py-0.5 text-[10px] font-semibold text-muted-foreground sm:inline">
            1,200+
          </kbd>
        </div>

        {/* Category grid */}
        <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {categories.map(({ icon: Icon, label, count, color, text }) => (
            <button
              key={label}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${color} p-5 text-left transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]`}
            >
              <div className={`mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-card ${text} shadow-sm transition-transform group-hover:scale-110`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="font-display text-base font-semibold text-foreground">{label}</div>
              <div className="mt-1 text-xs text-muted-foreground">{count} conditions</div>
              <ArrowUpRight className="absolute right-4 top-4 h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
            </button>
          ))}
        </div>

        {/* Alphabet */}
        <div className="mt-14 rounded-3xl border border-border bg-card/60 p-5 backdrop-blur md:p-8">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">A–Z Index</div>
              <div className="font-display text-lg font-semibold text-foreground">
                Conditions starting with <span className="text-primary">{q ? "matching " + q : active}</span>
              </div>
            </div>
            {q && (
              <button onClick={() => setQ("")} className="text-xs font-semibold text-primary hover:underline">
                Clear search
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {letters.map((l) => {
              const has = !!diseases[l];
              const isActive = l === active && !q;
              return (
                <button
                  key={l}
                  onClick={() => { setQ(""); setActive(l); }}
                  disabled={!has}
                  className={`h-9 w-9 rounded-lg text-sm font-bold transition-all ${
                    isActive
                      ? "scale-110 text-primary-foreground shadow-[var(--shadow-glow)]"
                      : has
                        ? "bg-secondary text-foreground hover:bg-primary/10 hover:text-primary"
                        : "cursor-not-allowed text-muted-foreground/30"
                  }`}
                  style={isActive ? { backgroundImage: "var(--gradient-brand)" } : undefined}
                >
                  {l}
                </button>
              );
            })}
          </div>

          {/* Results */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filtered.length === 0 && (
              <div className="col-span-full rounded-2xl border border-dashed border-border bg-background p-10 text-center text-sm text-muted-foreground">
                No conditions match "{q}". Try a different term.
              </div>
            )}
            {filtered.map((name, idx) => (
              <a
                key={name}
                href="#contact"
                className="group relative overflow-hidden rounded-xl border border-border bg-background p-4 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[var(--shadow-card)] animate-rise-in"
                style={{ animationDelay: `${idx * 30}ms` }}
              >
                <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-primary to-accent transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex items-start justify-between gap-2">
                  <div className="text-sm font-semibold text-foreground group-hover:text-primary">{name}</div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <div className="mt-1 text-xs text-muted-foreground">View specialists & treatment</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
