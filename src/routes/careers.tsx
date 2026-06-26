import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CareersTeaser } from "@/components/site/Careers";
import { GraduationCap, Heart, Users, Sparkles } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at Sanjeevani — Do the best work of your career" },
      { name: "description", content: "Explore clinical, nursing, allied health and hospital support roles at Sanjeevani ICU & Hospital, Jhansi." },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <PageShell
      eyebrow="Careers"
      title="Build a career that matters"
      subtitle="Whether you are a clinician, a nurse, an allied health professional or a corporate specialist — find a role that lets you do meaningful work, with the support to grow."
    >
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Why Sanjeevani</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">A workplace built around purpose</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: GraduationCap, t: "Learn relentlessly", d: "Structured residency, fellowships and continuing education stipends." },
              { icon: Heart, t: "Patient-first culture", d: "Clinical decisions led by clinicians, never by short-term targets." },
              { icon: Users, t: "Genuine respect", d: "Anti-harassment, mental health support and a transparent grievance process." },
              { icon: Sparkles, t: "Grow with the network", d: "Clear training, patient-care protocols and growth opportunities in Jhansi." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-6" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-primary-foreground" style={{ backgroundImage: "var(--gradient-brand)" }}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CareersTeaser />
    </PageShell>
  );
}
