import { Phone, CalendarCheck, ClipboardList, HeartHandshake, Activity, Home } from "lucide-react";

const steps = [
  { icon: Phone, title: "Reach Out", desc: "Call our 24×7 helpline, book online or walk into any center." },
  { icon: CalendarCheck, title: "Appointment", desc: "Pick your specialist and slot with instant SMS confirmation." },
  { icon: ClipboardList, title: "Evaluation", desc: "Structured consultation, diagnostics & second opinion if needed." },
  { icon: HeartHandshake, title: "Treatment Plan", desc: "Transparent estimate, insurance approval and informed consent." },
  { icon: Activity, title: "Care Delivery", desc: "In-patient or day-care with daily progress reports to family." },
  { icon: Home, title: "Recovery & Follow-up", desc: "Discharge counseling, tele-follow-ups and home-care support." },
];

export function PatientJourney() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundImage: "var(--gradient-soft)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The Sanjeevani Patient Experience
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            A seamless, transparent journey — end to end
          </h2>
          <p className="mt-4 text-muted-foreground">
            From your first call to follow-up, every touchpoint is designed for
            clarity, dignity and outcome-focused care.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute inset-x-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="relative">
                <div
                  className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full text-primary-foreground"
                  style={{ backgroundImage: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mt-4 text-center">
                  <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                    Step {i + 1}
                  </div>
                  <h3 className="mt-1 font-display text-base font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
