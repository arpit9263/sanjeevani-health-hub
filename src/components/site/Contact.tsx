import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28" style={{ backgroundImage: "var(--gradient-soft)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Get in touch
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
              Book an appointment or visit us
            </h2>
            <p className="mt-4 text-muted-foreground">
              Reach out for consultations, second opinions, or emergency support.
              Our front desk responds within minutes.
            </p>

            <div className="mt-8 space-y-5">
              {[
                { icon: MapPin, label: "Address", value: "123 Health Avenue, City Center, India" },
                { icon: Phone, label: "Call us", value: "+91 12345 67890" },
                { icon: Mail, label: "Email", value: "care@sanjeevanihospital.in" },
                { icon: Clock, label: "Hours", value: "Emergency 24×7 · OPD 9 AM – 8 PM" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-primary-foreground"
                    style={{ backgroundImage: "var(--gradient-brand)" }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {label}
                    </div>
                    <div className="text-sm font-medium text-foreground">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! Our team will reach out shortly.");
            }}
            className="rounded-3xl border border-border bg-card p-8"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <h3 className="font-display text-xl font-semibold text-foreground">
              Request a callback
            </h3>
            <div className="mt-6 grid gap-4">
              <Field label="Full name" type="text" placeholder="Your name" />
              <Field label="Phone number" type="tel" placeholder="+91" />
              <Field label="Department" type="text" placeholder="e.g. Cardiology" />
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Message
                </span>
                <textarea
                  rows={4}
                  required
                  placeholder="How can we help you?"
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.02]"
                style={{ backgroundImage: "var(--gradient-brand)" }}
              >
                Send Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <input
        type={type}
        required
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </label>
  );
}
