import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Leadership } from "@/components/site/Leadership";
import { Target, Eye, Heart } from "lucide-react";
import { hospitalInfo, siteDetails, stats } from "@/lib/siteData";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About ${hospitalInfo.name} — Trusted Hospital in Jhansi` },
      { name: "description", content: `${hospitalInfo.name} was established in ${hospitalInfo.established} and provides ICU, emergency and multi-specialty care in Jhansi.` },
      { property: "og:title", content: `About ${hospitalInfo.name}` },
      { property: "og:description", content: `${stats[0].value} doctors · ${stats[1].value} beds · ${siteDetails.emergencyLabel}` },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell
      eyebrow="About Us"
      title="Healing hands. Trusted hearts."
      subtitle={`${hospitalInfo.name} has been serving families in Jhansi since ${hospitalInfo.established} with ICU support, emergency care and specialist consultations.`}
    >
      <section id="mission" className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            { icon: Target, t: "Mission", d: "Deliver safe, transparent and compassionate healthcare with strong ICU and emergency support for every patient." },
            { icon: Eye, t: "Vision", d: "To be one of Jhansi’s most trusted hospitals for critical care, specialist treatment and family-focused service." },
            { icon: Heart, t: "Values", d: "Patient first. Clinical honesty. Respect for every life. Clear communication with every family." },
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
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">Serving with dedication since {hospitalInfo.established}</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((m) => (
              <div key={m.label} className="rounded-2xl border border-border bg-card p-6">
                <div className="font-display text-3xl font-bold text-primary">{m.value}</div>
                <div className="mt-2 font-display text-base font-semibold text-foreground">{m.label}</div>
                <p className="mt-2 text-sm text-muted-foreground">{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Leadership />
    </PageShell>
  );
}
