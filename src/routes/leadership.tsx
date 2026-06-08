import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Leadership } from "@/components/site/Leadership";
import d1 from "@/assets/doctor-1.jpg";
import d2 from "@/assets/doctor-2.jpg";
import d3 from "@/assets/doctor-3.jpg";

const board = [
  { img: d3, name: "Dr. Rakesh Mehta", role: "Chairman & MD", bio: "Cardiologist · 28 yrs · Founder, Sanjeevani Group" },
  { img: d2, name: "Mr. Arjun Verma", role: "Group CEO", bio: "Ex-McKinsey · 20 yrs in healthcare strategy" },
  { img: d1, name: "Dr. Priya Sharma", role: "Group Medical Director", bio: "Intensivist · 15 yrs · MD AIIMS Delhi" },
  { img: d2, name: "Ms. Kavita Nair", role: "Chief Financial Officer", bio: "Chartered Accountant · ex-Big Four" },
  { img: d3, name: "Dr. Sameer Khan", role: "Chief of Surgery", bio: "Surgical oncologist · 22 yrs" },
  { img: d1, name: "Ms. Nandini Iyer", role: "Chief People Officer", bio: "20 yrs in healthcare HR & culture" },
];

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership & Governance — Sanjeevani Hospital Group" },
      { name: "description", content: "Meet the board and management team guiding Sanjeevani's clinical and corporate journey." },
    ],
  }),
  component: LeadershipPage,
});

function LeadershipPage() {
  return (
    <PageShell
      eyebrow="Leadership & Governance"
      title="Clinicians at the helm. Professionals running the operation."
      subtitle="Our leadership team blends decades of clinical experience with disciplined corporate governance — independent directors, a clinical advisory board and structured risk oversight."
    >
      <Leadership />

      <section className="py-20 md:py-28" style={{ backgroundImage: "var(--gradient-soft)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Board & Management</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">Leaders shaping Sanjeevani</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {board.map((b) => (
              <article key={b.name} className="overflow-hidden rounded-2xl border border-border bg-card" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={b.img} alt={b.name} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-foreground">{b.name}</h3>
                  <div className="text-xs uppercase tracking-wider text-accent">{b.role}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{b.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
