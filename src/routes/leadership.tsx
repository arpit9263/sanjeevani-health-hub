import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Leadership } from "@/components/site/Leadership";
import { leadershipDoctors, medicalExperts, siteDetails } from "@/lib/siteData";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: `Leadership & Doctors — ${siteDetails.copyrightName}` },
      { name: "description", content: "Meet Sanjeevani ICU & Hospital leadership doctors and specialist consultants in Jhansi." },
    ],
  }),
  component: LeadershipPage,
});

function LeadershipPage() {
  return (
    <PageShell
      eyebrow="Leadership & Doctors"
      title="Experienced doctors guiding critical care in Jhansi."
      subtitle="Meet the leadership team and medical experts associated with Sanjeevani ICU & Hospital."
    >
      <Leadership />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Leadership Team</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">Hospital leadership doctors</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {leadershipDoctors.map((person) => (
              <article key={person.name} className="rounded-3xl border border-border bg-card p-6" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 font-display text-base font-bold text-primary">
                  {person.name.split(" ").slice(-2).map((part) => part[0]).join("")}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{person.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent">{person.role}</p>
                <p className="mt-3 text-sm font-medium text-foreground">{person.qualification}</p>
                <p className="mt-1 text-sm text-muted-foreground">{person.specialty}</p>
              </article>
            ))}
          </div>

          <div className="mt-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Medical Experts</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">Specialist consultants</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {medicalExperts.map((doctor) => (
                <article key={doctor.name} className="rounded-2xl border border-border bg-card p-5" style={{ boxShadow: "var(--shadow-card)" }}>
                  <h3 className="font-display text-base font-semibold text-foreground">{doctor.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{doctor.specialty}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
