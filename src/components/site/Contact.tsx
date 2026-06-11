import { MapPin, Phone, Mail, Clock, Ambulance, Building2, MessageCircle, Globe2 } from "lucide-react";

const branches = [
  { city: "Delhi NCR", addr: "Plot 12, Health Avenue, Dwarka, New Delhi 110075", phone: "+91 11 4567 8900" },
  { city: "Mumbai", addr: "Wellness Park, Andheri West, Mumbai 400053", phone: "+91 22 6677 8899" },
  { city: "Bengaluru", addr: "Care Tower, Whitefield, Bengaluru 560066", phone: "+91 80 4123 5678" },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28" style={{ backgroundImage: "var(--gradient-soft)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Get in touch
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            We're here, around the clock.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Reach us for appointments, second opinions, insurance pre-authorisation
            or emergency support. Our front desk responds within minutes.
          </p>
        </div>

        {/* Quick contact tiles */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Ambulance, label: "Ambulance", value: "108", sub: "24×7 GPS-tracked" },
            { icon: Phone, label: "Helpline", value: "+91 12345 67890", sub: "OPD & appointments" },
            { icon: MessageCircle, label: "WhatsApp", value: "+91 98765 43210", sub: "Reports & queries" },
            { icon: Globe2, label: "International", value: "intl@sanjeevani.in", sub: "Visa & travel desk" },
          ].map(({ icon: Icon, label, value, sub }) => (
            <div key={label} className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl text-primary-foreground transition-transform group-hover:scale-110" style={{ backgroundImage: "var(--gradient-brand)" }}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
              <div className="mt-1 font-display text-base font-semibold text-foreground">{value}</div>
              <div className="text-xs text-muted-foreground">{sub}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_1fr]">
          {/* Form + map */}
          <div className="space-y-6">
            <form
              onSubmit={(e) => { e.preventDefault(); alert("Thank you! Our team will reach out shortly."); }}
              className="rounded-3xl border border-border bg-card p-8"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <h3 className="font-display text-xl font-semibold text-foreground">Request a callback</h3>
              <p className="mt-1 text-sm text-muted-foreground">Average response time: under 10 minutes.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Full name" type="text" placeholder="Your name" />
                <Field label="Phone number" type="tel" placeholder="+91" />
                <Field label="Email" type="email" placeholder="you@example.com" />
                <Field label="Department" type="text" placeholder="e.g. Cardiology" />
                <label className="block sm:col-span-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</span>
                  <textarea rows={4} required placeholder="How can we help you?" className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </label>
                <button
                  type="submit"
                  className="sm:col-span-2 mt-2 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.02]"
                  style={{ backgroundImage: "var(--gradient-brand)" }}
                >
                  Send Request
                </button>
              </div>
            </form>

            <div className="overflow-hidden rounded-3xl border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <iframe
                title="Sanjeevani Corporate Office Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.05%2C28.55%2C77.15%2C28.62&amp;layer=mapnik"
                className="h-72 w-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Branches & hours */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-border bg-card p-7" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">Flagship Centres</h3>
              </div>
              <ul className="mt-5 space-y-5">
                {branches.map((b) => (
                  <li key={b.city} className="border-l-2 border-primary/30 pl-4">
                    <div className="font-display text-sm font-semibold text-foreground">{b.city}</div>
                    <div className="mt-0.5 flex items-start gap-2 text-xs text-muted-foreground">
                      <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" /> {b.addr}
                    </div>
                    <div className="mt-1 flex items-center gap-2 text-xs text-foreground">
                      <Phone className="h-3.5 w-3.5 text-primary" /> {b.phone}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-card p-7" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Clock className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">Hours & Departments</h3>
              </div>
              <dl className="mt-5 divide-y divide-border text-sm">
                {[
                  ["Emergency & ICU", "24 × 7"],
                  ["OPD Consultations", "9:00 AM – 8:00 PM"],
                  ["Diagnostics & Labs", "7:00 AM – 10:00 PM"],
                  ["Pharmacy", "24 × 7"],
                  ["Insurance Desk", "8:00 AM – 9:00 PM"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between py-2.5">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="font-medium text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
              <a
                href="mailto:care@sanjeevanihospital.in"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                <Mail className="h-4 w-4" /> care@sanjeevanihospital.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      <input
        type={type}
        required
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </label>
  );
}
