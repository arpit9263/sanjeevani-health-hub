import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Accreditations } from "@/components/site/Accreditations";
import { Leadership } from "@/components/site/Leadership";
import { CSR } from "@/components/site/CSR";
import { Target, Eye, Heart, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sanjeevani — Two Decades of Trusted Care" },
      { name: "description", content: "Sanjeevani ICU & Hospital Group is a pan-India multi-specialty healthcare network committed to accredited, accessible and compassionate care." },
      { property: "og:title", content: "About Sanjeevani Hospital Group" },
      { property: "og:description", content: "Pan-India network · 12 hospitals · 3,200+ clinical staff · NABH accredited." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell
      eyebrow="About Us"
      title="Healing hands. Trusted hearts. Built to last."
      subtitle="From a single 30-bed ICU in 2005 to a pan-India healthcare network — our journey has been defined by clinical rigor, transparent care and an unwavering focus on patient outcomes."
    >
      <section id="mission" className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            { icon: Target, t: "Mission", d: "Deliver world-class critical and multi-specialty healthcare with empathy, integrity and clinical excellence to every patient who walks through our doors." },
            { icon: Eye, t: "Vision", d: "To be India's most trusted healthcare network — recognised globally for outcomes, innovation and the human warmth of our care." },
            { icon: Heart, t: "Values", d: "Patient first. Clinical truth. Transparency in everything. Respect for every life and every team member who touches it." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-3xl border border-border bg-card p-8" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground" style={{ backgroundImage: "var(--gradient-brand)" }}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Our Journey</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">Two decades. One commitment.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { y: "2005", t: "Founded", d: "30-bed ICU opens in Delhi with a focus on critical care." },
              { y: "2011", t: "NABH Accreditation", d: "Among the earliest mid-sized hospitals to be accredited." },
              { y: "2017", t: "Pan-India Expansion", d: "Crossed 6 cities and launched DNB residency programs." },
              { y: "2024", t: "Network of 12", d: "12 hospitals · 24 clinics · 3,200+ clinicians across 32 cities." },
            ].map((m) => (
              <div key={m.y} className="rounded-2xl border border-border bg-card p-6">
                <div className="font-display text-3xl font-bold text-primary">{m.y}</div>
                <div className="mt-2 font-display text-base font-semibold text-foreground">{m.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Accreditations />
      <Leadership />
      <CSR />
    </PageShell>
  );
}
