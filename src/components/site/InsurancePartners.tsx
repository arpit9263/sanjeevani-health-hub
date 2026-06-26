import { ShieldCheck, FileCheck2, Headphones, ArrowRight, BadgeCheck } from "lucide-react";
import { hospitalImages } from "@/lib/images";
import { insurancePartners } from "@/lib/siteData";

const features = [
  { icon: ShieldCheck, title: "Cashless Insurance", desc: "Support for empanelled insurance and TPA documentation." },
  { icon: FileCheck2, title: "TPA Assistance", desc: "Hospital team helps patients with claim and approval process." },
  { icon: Headphones, title: "Dedicated Helpdesk", desc: "Guidance for admission, billing and insurance-related queries." },
];

export function InsurancePartners() {
  return (
    <section id="insurance" className="relative overflow-hidden py-20 md:py-24">
      <img src={hospitalImages.pharmacy} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-accent/75" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-primary-foreground">
        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] backdrop-blur">
              <BadgeCheck className="h-3.5 w-3.5" /> Cashless &amp; TPA Support
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              Insurance partners for smoother hospital admission.
            </h2>
            <p className="mt-4 max-w-xl text-white/90">
              Sanjeevani ICU & Hospital supports cashless and TPA processes through listed insurance partners, helping families reduce billing stress during treatment.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-xl transition-transform hover:scale-[1.03]"
            >
              Check your insurer
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-3">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display font-semibold">{title}</div>
                  <div className="mt-1 text-sm text-white/85">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <div className="mb-5 flex items-end justify-between gap-4">
            <h3 className="font-display text-lg font-semibold">Insurance Partners</h3>
            <span className="text-xs uppercase tracking-[0.2em] text-white/70">Cashless / TPA support</span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {insurancePartners.map((p) => (
              <div key={p} className="flex min-h-16 items-center justify-center rounded-xl border border-white/25 bg-white/10 px-3 py-3 text-center text-xs font-semibold text-white backdrop-blur transition-all hover:scale-[1.03] hover:bg-white/20">
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
