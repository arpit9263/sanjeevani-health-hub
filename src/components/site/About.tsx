import { Check } from "lucide-react";
import { hospitalInfo, stats } from "@/lib/siteData";
import { hospitalImages } from "@/lib/images";

const points = [
  "Experienced consultants across critical specialties",
  "Modern ICU with oxygen, monitors and emergency support",
  "Cashless insurance / TPA support and clear family guidance",
];

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28" style={{ backgroundImage: "var(--gradient-soft)" }}>
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">About Sanjeevani</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            Real hospital care in the heart of Jhansi.
          </h2>
          <p className="mt-4 text-muted-foreground">
            {hospitalInfo.name} was established in {hospitalInfo.established} to make dependable ICU, emergency and multi-specialty care accessible for families in Jhansi. The hospital combines specialist doctors, trained nursing care, ICU infrastructure and family-first communication.
          </p>

          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-foreground/85">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-primary-foreground" style={{ backgroundImage: "var(--gradient-brand)" }}>
                  <Check className="h-3 w-3" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl opacity-25 blur-3xl" style={{ backgroundImage: "var(--gradient-brand)" }} />
          <div className="relative grid grid-cols-2 gap-4">
            <figure className="col-span-2 overflow-hidden rounded-3xl border border-white/60 bg-card shadow-xl">
              <img src={hospitalImages.headOffice} alt="Sanjeevani ICU & Hospital building" className="h-64 w-full object-cover" loading="lazy" />
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-white/60 bg-card shadow-lg">
              <img src={hospitalImages.frontBuilding} alt="Hospital consultation office" className="h-full w-full object-cover" loading="lazy" />
            </figure>
            <div className="grid gap-3">
              {stats.slice(0, 3).map(({ value: v, label: l }) => (
                <div key={l} className="rounded-2xl border border-border bg-card/95 p-4 shadow-sm backdrop-blur">
                  <div className="font-display text-2xl font-bold text-accent">{v}</div>
                  <div className="mt-1 text-xs font-semibold text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
