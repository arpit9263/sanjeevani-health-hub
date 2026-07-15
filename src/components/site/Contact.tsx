import { MapPin, Phone, Mail, Clock, Ambulance, Building2, MessageCircle, AtSign } from "lucide-react";
import { contactCards, hospitalHours, hospitalInfo, mailHref, telHref, whatsappHref } from "@/lib/siteData";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

const iconMap = [Ambulance, Phone, MessageCircle, AtSign];
const formspreeContactId = import.meta.env.VITE_FORMSPREE_CONTACT_FORM_ID?.trim();
const formspreeContactUrl = formspreeContactId ? `https://formspree.io/f/${formspreeContactId}` : undefined;

const emptyForm = { name: "", phone: "", email: "", department: "", message: "" };
type FormState = typeof emptyForm;
type SubmissionState = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");

  const update = (key: keyof FormState) => (e: ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const updateMessage = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, message: e.target.value }));

  const resetForm = () => setForm(emptyForm);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = [
      `New appointment / callback request for ${hospitalInfo.name}`,
      "",
      `Name: ${form.name || "Not provided"}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Email: ${form.email || "Not provided"}`,
      `Department: ${form.department || "General"}`,
      `Message: ${form.message || "Not provided"}`,
      "",
      `Source: Website Contact Form`,
    ].join("\n");

    if (!formspreeContactUrl) {
      window.open(`https://wa.me/91${hospitalInfo.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
      setSubmissionState("success");
      resetForm();
      return;
    }

    setSubmissionState("submitting");

    try {
      const response = await fetch(formspreeContactUrl, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });

      if (response.ok) {
        setSubmissionState("success");
        resetForm();
      } else {
        setSubmissionState("error");
      }
    } catch {
      setSubmissionState("error");
    }
  };

  const buttonLabel = submissionState === "submitting" ? "Sending..." : formspreeContactUrl ? "Send message" : "Send on WhatsApp";

  return (
    <section id="contact" className="py-20 md:py-28" style={{ backgroundImage: "var(--gradient-soft)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Get in touch</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">We're here, around the clock.</h2>
          <p className="mt-4 text-muted-foreground">Reach Sanjeevani ICU & Hospital for appointments, emergency care, insurance support or general hospital queries.</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map(({ label, value, sub }, idx) => {
            const Icon = iconMap[idx % iconMap.length];
            const href = label === "Email" ? mailHref(value) : label === "WhatsApp" ? whatsappHref(value) : telHref(value);
            return (
              <a key={label} href={href} className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl text-primary-foreground transition-transform group-hover:scale-110" style={{ backgroundImage: "var(--gradient-brand)" }}><Icon className="h-5 w-5" /></div>
                <div className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
                <div className="mt-1 break-words font-display text-base font-semibold text-foreground">{label === "Email" ? value : `+91 ${value}`}</div>
                <div className="text-xs text-muted-foreground">{sub}</div>
              </a>
            );
          })}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_1fr]">
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-card p-8" style={{ boxShadow: "var(--shadow-card)" }}>
              <h3 className="font-display text-xl font-semibold text-foreground">Request a callback</h3>
              <p className="mt-1 text-sm text-muted-foreground">{formspreeContactUrl ? "Your request will be stored securely in Formspree once the form ID is configured." : "Submit करने पर WhatsApp खुलेगा और आपकी details auto-filled message में आ जाएंगी."}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Full name" type="text" placeholder="Your name" value={form.name} onChange={update("name")} name="name" />
                <Field label="Phone number" type="tel" placeholder="+91" value={form.phone} onChange={update("phone")} name="phone" />
                <Field label="Email" type="email" placeholder="you@example.com" value={form.email} onChange={update("email")} required={false} name="email" />
                <Field label="Department" type="text" placeholder="e.g. ICU, Cardiology" value={form.department} onChange={update("department")} required={false} name="department" />
                <label className="block sm:col-span-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</span>
                  <textarea rows={4} required value={form.message} onChange={updateMessage} name="message" placeholder="How can we help you?" className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </label>
                <input type="hidden" name="source" value="website-contact-form" />
                <input type="hidden" name="_subject" value={`New enquiry from ${hospitalInfo.name}`} />
                <button type="submit" disabled={submissionState === "submitting"} className="sm:col-span-2 mt-2 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70" style={{ backgroundImage: "var(--gradient-brand)" }}>{buttonLabel}</button>
                {submissionState === "success" && <p className="sm:col-span-2 text-sm font-medium text-emerald-600">Thanks! Your request was received successfully.</p>}
                {submissionState === "error" && <p className="sm:col-span-2 text-sm font-medium text-destructive">The request could not be delivered right now. Please call or use WhatsApp instead.</p>}
              </div>
            </form>

            <div className="overflow-hidden rounded-3xl border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <iframe title="Sanjeevani ICU & Hospital Map" src={hospitalInfo.mapEmbedUrl} className="h-72 w-full" loading="lazy" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-border bg-card p-7" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><Building2 className="h-5 w-5" /></div><h3 className="font-display text-lg font-semibold text-foreground">Hospital Address</h3></div>
              <div className="mt-5 space-y-4"><div className="flex items-start gap-3 text-sm text-muted-foreground"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>{hospitalInfo.address}</span></div><a href={hospitalInfo.mapLink} target="_blank" rel="noreferrer" className="inline-flex text-sm font-semibold text-primary hover:underline">Open in Google Maps →</a></div>
            </div>
            <div className="rounded-3xl border border-border bg-card p-7" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent"><Clock className="h-5 w-5" /></div><h3 className="font-display text-lg font-semibold text-foreground">Hours & Departments</h3></div>
              <dl className="mt-5 divide-y divide-border text-sm">{hospitalHours.map(([k, v]) => (<div key={k} className="flex items-center justify-between gap-4 py-2.5"><dt className="text-muted-foreground">{k}</dt><dd className="text-right font-medium text-foreground">{v}</dd></div>))}</dl>
              <a href={mailHref(hospitalInfo.email)} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"><Mail className="h-4 w-4" /> {hospitalInfo.email}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type, placeholder, value, onChange, required = true, name }: { label: string; type: string; placeholder: string; value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void; required?: boolean; name: string }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      <input type={type} required={required} value={value} onChange={onChange} name={name} placeholder={placeholder} className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
    </label>
  );
}
