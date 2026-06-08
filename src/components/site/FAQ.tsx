import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Do you offer cashless treatment under my insurance?",
    a: "Yes. Sanjeevani is empanelled with 80+ insurers, TPAs and corporates including CGHS, ECHS and Ayushman Bharat. Our TPA desk handles pre-authorisation and discharge claims end-to-end.",
  },
  {
    q: "How do I book an appointment with a specialist?",
    a: "You can book online via the appointment form, call our 24×7 helpline, WhatsApp us, or walk into any of our 12 centers. Confirmations are sent by SMS and email.",
  },
  {
    q: "Can I get a second opinion before deciding on treatment?",
    a: "Absolutely. We encourage second opinions and offer in-person as well as video consultations with our senior consultants for review of prior reports.",
  },
  {
    q: "What support is available for international patients?",
    a: "Our International Patient Services desk assists with medical visa, airport concierge, multilingual coordinators, accommodation and post-treatment follow-up.",
  },
  {
    q: "Are emergency services available 24×7?",
    a: "Yes. Every Sanjeevani center has a 24×7 emergency department with trained trauma teams, an ambulance fleet and direct admission to ICU when required.",
  },
  {
    q: "How are franchise & investment opportunities structured?",
    a: "We offer an asset-light franchise model for Tier-2 and Tier-3 cities with central clinical governance, brand and platform support. Reach out via Investor Relations for a detailed proposal.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Frequently Asked Questions
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            Everything you need to know
          </h2>
        </div>

        <div className="mt-12 divide-y divide-border rounded-3xl border border-border bg-card"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-semibold text-foreground">
                    {f.q}
                  </span>
                  <span
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-primary-foreground"
                    style={{ backgroundImage: "var(--gradient-brand)" }}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
