import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { About } from "@/components/site/About";
import { Leadership } from "@/components/site/Leadership";
import { Target, Eye, Heart, ShieldCheck, Users, Building2 } from "lucide-react";
import { hospitalInfo, siteDetails, stats } from "@/lib/siteData";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About & Doctors — ${hospitalInfo.name}, Jhansi` },
      { name: "description", content: `${hospitalInfo.name} about page with hospital story, mission, leadership doctors, owners and specialist consultants in Jhansi.` },
      { name: "keywords", content: "Sanjeevani hospital doctors, Sanjeevani ICU Hospital owner, doctors in Jhansi, ICU doctors Jhansi, about Sanjeevani Hospital Jhansi" },
      { property: "og:title", content: `About & Doctors — ${hospitalInfo.name}` },
      { property: "og:description", content: `${stats[0].value} doctors · ${stats[1].value} beds · ${siteDetails.emergencyLabel}` },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell
      eyebrow="About Hospital"
      title="Hospital story, doctors and leadership in one place."
      subtitle={`${hospitalInfo.name} has been serving families in Jhansi since ${hospitalInfo.established} with ICU, emergency and specialist care.`}
    >
      <About />

      <section id="mission" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Target, t: "Mission", d: "Deliver safe, transparent and compassionate healthcare with strong ICU and emergency support for every patient." },
              { icon: Eye, t: "Vision", d: "To be one of Jhansi’s most trusted hospitals for critical care, specialist treatment and family-focused service." },
              { icon: Heart, t: "Values", d: "Patient first. Clinical honesty. Respect for every life. Clear communication with every family." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="polished-card group rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_90px_rgba(15,23,42,0.14)]">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/10 transition-transform duration-500 group-hover:scale-110"><Icon className="h-6 w-6" /></div>
                <h2 className="relative mt-5 font-display text-xl font-black text-foreground">{t}</h2>
                <p className="relative mt-3 text-sm leading-7 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { icon: ShieldCheck, t: "ICU-ready care", d: "Oxygen, monitors, trained staff and critical care guidance for serious patients." },
              { icon: Users, t: "Family communication", d: "Clear updates, practical counselling and transparent treatment guidance." },
              { icon: Building2, t: "Jhansi location", d: hospitalInfo.address },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="group rounded-[1.6rem] border border-white/70 bg-white/80 p-6 shadow-[0_14px_50px_rgba(15,23,42,0.07)] backdrop-blur transition-all duration-500 hover:-translate-y-1">
                <Icon className="h-7 w-7 text-accent transition-transform duration-500 group-hover:scale-110" />
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{t}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Leadership />
    </PageShell>
  );
}
