import { Briefcase, GraduationCap, HeartPulse, Users, ArrowRight } from "lucide-react";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

const openings = [
  { role: "ICU Nurse", city: "Jhansi", type: "Full-time" },
  { role: "Reception / Front Desk", city: "Jhansi", type: "Full-time" },
  { role: "Insurance Desk Executive", city: "Jhansi", type: "Full-time" },
  { role: "Hospital Support Staff", city: "Jhansi", type: "Full-time" },
];

const careersFormId = import.meta.env.VITE_FORMSPREE_CAREERS_FORM_ID?.trim();
const careersFormUrl = careersFormId ? `https://formspree.io/f/${careersFormId}` : undefined;

const emptyCareerForm = { name: "", email: "", role: "", message: "" };
type CareerFormState = typeof emptyCareerForm;
type CareerSubmissionState = "idle" | "submitting" | "success" | "error";

export function CareersTeaser() {
  const [careerForm, setCareerForm] = useState<CareerFormState>(emptyCareerForm);
  const [submissionState, setSubmissionState] = useState<CareerSubmissionState>("idle");

  const update = (key: keyof CareerFormState) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setCareerForm((prev) => ({ ...prev, [key]: e.target.value }));

  const resetForm = () => setCareerForm(emptyCareerForm);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = [
      `New careers enquiry for ${"Sanjeevani ICU & Hospital"}`,
      "",
      `Name: ${careerForm.name || "Not provided"}`,
      `Email: ${careerForm.email || "Not provided"}`,
      `Role / Department: ${careerForm.role || "Not provided"}`,
      `Message: ${careerForm.message || "Not provided"}`,
      "",
      `Source: Website Careers Form`,
    ].join("\n");

    if (!careersFormUrl) {
      window.open(`https://wa.me/91${"7000000000"}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
      setSubmissionState("success");
      resetForm();
      return;
    }

    setSubmissionState("submitting");

    try {
      const response = await fetch(careersFormUrl, {
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

  return (
    <section id="careers" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Careers at Sanjeevani
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
              Join a team that puts patients — and people — first
            </h2>
            <p className="mt-4 text-muted-foreground">
              We invest in clinical excellence, structured training and a
              respectful workplace where doctors, nurses and support teams can
              do the best work of their careers.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: GraduationCap, t: "Training and patient-care protocols" },
                { icon: HeartPulse, t: "Supportive healthcare workplace" },
                { icon: Users, t: "Work with experienced doctors" },
                { icon: Briefcase, t: "Growth opportunities in Jhansi" },
              ].map(({ icon: Icon, t }) => (
                <div key={t} className="flex items-start gap-3 text-sm text-foreground/85">
                  <span
                    className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-primary-foreground"
                    style={{ backgroundImage: "var(--gradient-brand)" }}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div
              className="rounded-3xl border border-border bg-card p-6 md:p-8"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Current openings
                </h3>
                <a href="/careers" className="text-xs font-semibold uppercase tracking-wider text-primary hover:underline">
                  See all
                </a>
              </div>
              <ul className="mt-6 divide-y divide-border">
                {openings.map((o) => (
                  <li
                    key={o.role}
                    className="group flex items-center justify-between gap-4 py-4"
                  >
                    <div>
                      <div className="font-medium text-foreground">{o.role}</div>
                      <div className="text-xs text-muted-foreground">
                        {o.city} · {o.type}
                      </div>
                    </div>
                    <a
                      href="/careers"
                      className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary"
                    >
                      Apply <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 md:p-8" style={{ boxShadow: "var(--shadow-card)" }}>
              <h3 className="font-display text-lg font-semibold text-foreground">Express interest in a role</h3>
              <p className="mt-2 text-sm text-muted-foreground">Share your details below and we&apos;ll follow up with the relevant opening.</p>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <input type="text" required name="name" value={careerForm.name} onChange={update("name")} placeholder="Your name" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                <input type="email" required name="email" value={careerForm.email} onChange={update("email")} placeholder="you@example.com" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                <input type="text" required name="role" value={careerForm.role} onChange={update("role")} placeholder="Role / department" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                <textarea rows={4} required name="message" value={careerForm.message} onChange={update("message")} placeholder="Tell us about your background" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                <input type="hidden" name="source" value="careers-form" />
                <button type="submit" disabled={submissionState === "submitting"} className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70">{submissionState === "submitting" ? "Submitting..." : careersFormUrl ? "Submit interest" : "Send via WhatsApp"}</button>
                {submissionState === "success" && <p className="text-sm font-medium text-emerald-600">Thanks! We&apos;ll be in touch.</p>}
                {submissionState === "error" && <p className="text-sm font-medium text-destructive">Your enquiry could not be posted right now. Please contact the hospital directly.</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
