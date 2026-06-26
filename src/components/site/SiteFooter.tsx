import { Logo } from "./Logo";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube, Twitter, Ambulance } from "lucide-react";
import { hospitalInfo, services, siteDetails, telHref } from "@/lib/siteData";

const cols = [
  { title: "Specialties", links: services.slice(0, 8).map((s) => s.title) },
  { title: "Patient Care", links: ["Book Appointment", "Emergency Care", "Insurance & TPA", "ICU Support", "OPD Consultation", "Critical Care"] },
  { title: "Hospital", links: ["About Us", "Leadership", "Careers", "Gallery", "Contact Us", "Patient Support"] },
  { title: "Resources", links: ["Health Insights", "Patient Rights", "Privacy Policy", "Terms of Use", "Sitemap", "Feedback"] },
];

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-border bg-foreground text-background/85">
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[600px] w-[1200px] -translate-x-1/2 rounded-full opacity-25 blur-3xl footer-aurora" style={{ backgroundImage: "var(--gradient-brand)" }} />

      <div className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 md:grid-cols-[1.5fr_1fr] md:items-center lg:px-8">
          <div>
            <div className="font-display text-2xl font-bold text-white">Stay connected with {hospitalInfo.shortName}</div>
            <p className="mt-2 max-w-xl text-sm text-background/70">
              For appointments, emergency support and insurance queries, contact our reception team directly.
            </p>
          </div>
          <a href={telHref(hospitalInfo.reception)} className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:scale-[1.03] transition-transform">
            Call Reception: +91 {hospitalInfo.reception}
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_3fr]">
          <div>
            <div className="flex items-center gap-3">
              <Logo className="h-14 w-14 rounded-md bg-white p-1 object-contain" />
              <div>
                <div className="font-display text-xl font-bold text-white">{hospitalInfo.name}</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-background/60">{hospitalInfo.tagline}</div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm text-background/70">
              {hospitalInfo.name} is a Jhansi-based ICU and multi-specialty hospital serving patients with emergency care, specialist doctors, insurance support and compassionate treatment.
            </p>

            <div className="mt-6 space-y-3 text-sm text-background/80">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/60" />
                {hospitalInfo.address}
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-white/60" /> +91 {hospitalInfo.reception}
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-white/60" /> {hospitalInfo.email}
              </div>
              <div className="flex items-center gap-3 text-white">
                <Ambulance className="h-4 w-4" />
                <span className="font-semibold">Emergency: +91 {hospitalInfo.emergency} · 24×7</span>
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              {[Facebook, Instagram, Linkedin, Youtube, Twitter].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social media" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-background/80 hover:bg-white/10 hover:text-white">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="font-display text-sm font-semibold text-white">{c.title}</h4>
                <ul className="mt-4 space-y-2.5 text-sm text-background/70">
                  {c.links.map((l) => (
                    <li key={l}><a href="/#contact" className="hover:text-white">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-background/60 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} {siteDetails.copyrightName}. All rights reserved.</span>
          <span>Designed &amp; Developed by <a href={siteDetails.developedByUrl} target="_blank" rel="noreferrer" className="font-semibold text-white hover:underline">{siteDetails.developedBy}</a></span>
        </div>
      </div>

      <style>{`
        @keyframes auroraDrift {
          0%, 100% { transform: translate(-50%, 0) scale(1); opacity: 0.25; }
          50% { transform: translate(-48%, 10px) scale(1.05); opacity: 0.35; }
        }
        .footer-aurora { animation: auroraDrift 14s ease-in-out infinite; }
      `}</style>
    </footer>
  );
}
