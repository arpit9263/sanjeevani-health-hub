import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import bg from "@/assets/diseases-bg.jpg";

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
    <section id="diseases" className="relative overflow-hidden py-20 md:py-24">
      <img src={bg} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-[0.08]" />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-background to-background" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Health Library
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            Find diseases &amp; conditions by first letter
          </h2>
          <p className="mt-4 text-muted-foreground">
            Search 1,200+ conditions across our specialties, or jump alphabetically.
          </p>
        </div>

        <div className="mx-auto mt-8 flex max-w-xl items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-[var(--shadow-soft)]">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search a condition e.g. Diabetes, Stroke…"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {letters.map((l) => {
            const has = !!diseases[l];
            const isActive = l === active && !q;
            return (
              <button
                key={l}
                onClick={() => {
                  setQ("");
                  setActive(l);
                }}
                disabled={!has}
                className={`h-10 w-10 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? "scale-110 text-primary-foreground shadow-[var(--shadow-soft)]"
                    : has
                      ? "bg-card text-foreground hover:bg-secondary"
                      : "cursor-not-allowed text-muted-foreground/40"
                }`}
                style={isActive ? { backgroundImage: "var(--gradient-brand)" } : undefined}
              >
                {l}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.length === 0 && (
            <div className="col-span-full rounded-2xl border border-dashed border-border bg-card p-10 text-center text-sm text-muted-foreground">
              No conditions match "{q}". Try a different term.
            </div>
          )}
          {filtered.map((name) => (
            <a
              key={name}
              href="#contact"
              className="group rounded-xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="text-sm font-semibold text-foreground group-hover:text-primary">{name}</div>
              <div className="text-xs text-muted-foreground">View specialists & treatment</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
