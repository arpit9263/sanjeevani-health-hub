import { Check } from "lucide-react";
import { Logo } from "./Logo";

const points = [
  "NABH-aligned care protocols and patient safety",
  "Experienced consultants across critical specialties",
  "Modern ICU with ventilators and cardiac monitors",
  "Transparent pricing and cashless insurance support",
];

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28" style={{ backgroundImage: "var(--gradient-soft)" }}>
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            About Sanjeevani
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            Healing hands. Trusted hearts.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Sanjeevani ICU &amp; Hospital was founded with one mission — to make
            high-quality critical and multi-specialty care accessible and
            affordable. Our doctors, nurses and support staff stand by you and
            your family through every step of recovery.
          </p>

          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-foreground/85">
                <span
                  className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-primary-foreground"
                  style={{ backgroundImage: "var(--gradient-brand)" }}
                >
                  <Check className="h-3 w-3" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div
            className="absolute -inset-6 rounded-3xl opacity-30 blur-3xl"
            style={{ backgroundImage: "var(--gradient-brand)" }}
          />
          <div
            className="relative grid grid-cols-2 gap-4 rounded-3xl border border-border bg-card p-8"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="col-span-2 flex items-center gap-4">
              <Logo className="h-16 w-16 rounded-lg object-contain" />
              <div>
                <div className="font-display text-xl font-bold text-primary">Sanjeevani</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  ICU &amp; Hospital
                </div>
              </div>
            </div>
            {[
              ["98%", "Patient satisfaction"],
              ["15 min", "Avg. ER response"],
              ["1000+", "Surgeries done"],
              ["100%", "Cashless support"],
            ].map(([v, l]) => (
              <div key={l} className="rounded-xl bg-secondary/60 p-4">
                <div className="font-display text-2xl font-bold text-accent">{v}</div>
                <div className="mt-1 text-xs text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
