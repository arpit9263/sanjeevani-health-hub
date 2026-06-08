import { TrendingUp, Building, Handshake, FileText, ArrowRight } from "lucide-react";

const kpis = [
  { k: "₹ 1,240 Cr", v: "Group revenue FY25" },
  { k: "32%", v: "YoY EBITDA growth" },
  { k: "78%", v: "Bed occupancy" },
  { k: "AA−", v: "Long-term credit rating" },
];

export function Investors() {
  return (
    <section
      id="investors"
      className="relative overflow-hidden py-20 md:py-28 text-primary-foreground"
      style={{ backgroundColor: "oklch(0.18 0.04 200)" }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              Investor Relations & Franchise
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
              Partner in building the next chapter of Indian healthcare
            </h2>
            <p className="mt-4 max-w-xl text-white/85">
              We are actively expanding through greenfield hospitals, brownfield
              acquisitions and our flagship asset-light franchise program for
              Tier-2 and Tier-3 cities — backed by central clinical governance,
              brand, training and tech platforms.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Building, t: "Franchise Hospital" },
                { icon: Handshake, t: "Strategic Investment" },
                { icon: FileText, t: "Annual Reports" },
              ].map(({ icon: Icon, t }) => (
                <a
                  key={t}
                  href="/network#franchise"
                  className="group flex items-center justify-between rounded-2xl border border-white/20 bg-white/5 p-4 backdrop-blur transition hover:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5" />
                    <span className="text-sm font-semibold">{t}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {kpis.map((k) => (
              <div
                key={k.v}
                className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur"
              >
                <TrendingUp className="h-5 w-5 text-white/70" />
                <div className="mt-3 font-display text-3xl font-bold">{k.k}</div>
                <div className="mt-1 text-sm text-white/75">{k.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
