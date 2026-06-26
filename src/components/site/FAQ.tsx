import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { hospitalInfo, insurancePartners } from "@/lib/siteData";

const faqs = [
  { q: "Do you offer cashless treatment under insurance?", a: `Yes. ${hospitalInfo.shortName} supports cashless / TPA process with partners like ${insurancePartners.slice(0, 3).join(", ")} and others listed on the site.` },
  { q: "How do I book an appointment with a specialist?", a: `You can use the contact form, call +91 ${hospitalInfo.reception}, WhatsApp +91 ${hospitalInfo.whatsapp}, or visit the hospital at ${hospitalInfo.address}.` },
  { q: "Are emergency services available 24×7?", a: `Yes. Emergency and ICU support is available 24×7. Call +91 ${hospitalInfo.emergency} for urgent support.` },
  { q: "Which specialties are available?", a: "The hospital supports ICU & Critical Care, Anaesthesia, Orthopedics, Cardiology, Urology, Neurosurgery, Gastro & Hepatobiliary Surgery, General Surgery, OBS & Gynecology and Dentistry / Orthodontics." },
  { q: "Where is the hospital located?", a: hospitalInfo.address },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Frequently Asked Questions</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">Everything you need to know</h2>
        </div>
        <div className="mt-12 divide-y divide-border rounded-3xl border border-border bg-card" style={{ boxShadow: "var(--shadow-card)" }}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left">
                  <span className="font-display text-base font-semibold text-foreground">{f.q}</span>
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-primary-foreground" style={{ backgroundImage: "var(--gradient-brand)" }}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
