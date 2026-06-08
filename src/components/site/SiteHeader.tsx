import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import {
  Menu,
  Phone,
  X,
  ChevronDown,
  Ambulance,
  CalendarCheck,
  Globe2,
  Search,
  Mail,
  MapPin,
} from "lucide-react";

const nav: { label: string; href: string; children?: { label: string; href: string; desc?: string }[] }[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about", desc: "Two decades of trusted care" },
      { label: "Vision & Mission", href: "/about#mission", desc: "Why we exist" },
      { label: "Accreditations", href: "/about#accreditations", desc: "NABH, NABL & ISO standards" },
      { label: "CSR & Community", href: "/about#csr", desc: "Health camps and outreach" },
    ],
  },
  {
    label: "Specialties",
    href: "/specialties",
    children: [
      { label: "Critical Care & ICU", href: "/specialties#icu" },
      { label: "Cardiology", href: "/specialties#cardiology" },
      { label: "Neurology & Neurosurgery", href: "/specialties#neuro" },
      { label: "Orthopedics & Spine", href: "/specialties#ortho" },
      { label: "Mother & Child", href: "/specialties#mch" },
      { label: "Oncology", href: "/specialties#onco" },
      { label: "Renal Sciences", href: "/specialties#renal" },
      { label: "Diagnostics & Imaging", href: "/specialties#diagnostics" },
    ],
  },
  { label: "Doctors", href: "/#doctors" },
  {
    label: "Network",
    href: "/network",
    children: [
      { label: "Hospitals & Centers", href: "/network", desc: "Our pan-India presence" },
      { label: "Franchise Opportunity", href: "/network#franchise", desc: "Partner with Sanjeevani" },
      { label: "International Patients", href: "/network#international", desc: "Visa, travel & care plans" },
    ],
  },
  { label: "Leadership", href: "/leadership" },
  { label: "Careers", href: "/careers" },
  { label: "Insights", href: "/#insights" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-md">
      {/* Utility bar */}
      <div className="hidden md:block border-b border-border/50 bg-foreground text-background/85">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 text-xs sm:px-6 lg:px-8">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3 w-3" /> 12 centers across India
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Mail className="h-3 w-3" /> care@sanjeevanihospital.in
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Globe2 className="h-3 w-3" /> International patients welcome
            </span>
          </div>
          <div className="flex items-center gap-5">
            <Link to="/careers" className="hover:text-white">Careers</Link>
            <a href="/#insights" className="hover:text-white">Newsroom</a>
            <a href="/network#franchise" className="hover:text-white">Investor Relations</a>
            <a href="tel:108" className="inline-flex items-center gap-1.5 font-semibold text-white">
              <Ambulance className="h-3.5 w-3.5" /> Ambulance: 108
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <Logo className="h-12 w-12 rounded-md object-contain" />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg font-bold text-primary">Sanjeevani</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              ICU &amp; Hospital Group
            </span>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {nav.map((n) => (
            <div
              key={n.label}
              className="relative"
              onMouseEnter={() => setHover(n.label)}
              onMouseLeave={() => setHover(null)}
            >
              <Link
                to={n.href.startsWith("/") && !n.href.includes("#") ? n.href : undefined as any}
                href={n.href.includes("#") ? n.href : undefined}
                className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
              >
                {n.label}
                {n.children && <ChevronDown className="h-3 w-3 opacity-60" />}
              </Link>

              {n.children && hover === n.label && (
                <div className="absolute left-0 top-full w-80 pt-2">
                  <div
                    className="rounded-2xl border border-border bg-card p-3"
                    style={{ boxShadow: "var(--shadow-card)" }}
                  >
                    {n.children.map((c) => (
                      <a
                        key={c.label}
                        href={c.href}
                        className="block rounded-lg px-3 py-2.5 text-sm text-foreground/85 transition-colors hover:bg-secondary"
                      >
                        <div className="font-medium">{c.label}</div>
                        {c.desc && (
                          <div className="text-xs text-muted-foreground">{c.desc}</div>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button className="hidden md:inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/70 hover:bg-secondary" aria-label="Search">
            <Search className="h-4 w-4" />
          </button>
          <a
            href="/#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/5"
          >
            <CalendarCheck className="h-4 w-4" />
            Book Appointment
          </a>
          <a
            href="tel:+911234567890"
            className="hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03]"
            style={{ backgroundImage: "var(--gradient-brand)" }}
          >
            <Phone className="h-4 w-4" />
            Emergency
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="xl:hidden rounded-md p-2 text-foreground hover:bg-secondary"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden border-t border-border bg-background">
          <div className="flex flex-col px-6 py-4 max-h-[70vh] overflow-y-auto">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-medium text-foreground/85 hover:text-primary"
              >
                {n.label}
              </a>
            ))}
            <a
              href="tel:+911234567890"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              <Phone className="h-4 w-4" /> Emergency Helpline
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
