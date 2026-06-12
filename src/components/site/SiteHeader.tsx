import { useState, useEffect, useMemo, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { searchIndex } from "@/lib/searchIndex";
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
  ArrowRight,
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
  { label: "Conditions A–Z", href: "/#diseases" },
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
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (searchOpen) setTimeout(() => inputRef.current?.focus(), 50);
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (e.key === "/" && document.activeElement?.tagName === "INPUT") return;
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [searchOpen]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return searchIndex.slice(0, 8);
    return searchIndex
      .filter((s) => s.title.toLowerCase().includes(term) || s.desc.toLowerCase().includes(term) || s.category.toLowerCase().includes(term))
      .slice(0, 12);
  }, [q]);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Utility bar — subtle, low contrast so it never fights the main bar */}
      <div className="hidden md:block bg-primary text-primary-foreground/90">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 text-[11px] sm:px-6 lg:px-8">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3 w-3 opacity-80" /> 12 centers across India
            </span>
            <span className="hidden lg:inline-flex items-center gap-1.5">
              <Mail className="h-3 w-3 opacity-80" /> care@sanjeevanihospital.in
            </span>
            <span className="hidden xl:inline-flex items-center gap-1.5">
              <Globe2 className="h-3 w-3 opacity-80" /> International patients welcome
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
      <div
        className={`w-full border-b transition-all ${
          scrolled
            ? "border-border/60 bg-background/95 backdrop-blur-md shadow-[var(--shadow-soft)]"
            : "border-transparent bg-background/85 backdrop-blur"
        }`}
      >
        <div className="mx-auto flex h-[84px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="group flex items-center gap-3 min-w-0">
            <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-[var(--shadow-soft)] ring-1 ring-border transition-transform group-hover:scale-105">
              <Logo className="h-12 w-12 object-contain" />
            </div>
            <div className="flex min-w-0 flex-col leading-tight">
              <span className="font-display text-xl font-bold text-primary truncate">
                Sanjeevani
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground truncate">
                ICU &amp; Hospital Group
              </span>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-0.5">
            {nav.map((n) => (
              <div
                key={n.label}
                className="relative"
                onMouseEnter={() => setHover(n.label)}
                onMouseLeave={() => setHover(null)}
              >
                <a
                  href={n.href}
                  className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                >
                  {n.label}
                  {n.children && <ChevronDown className="h-3 w-3 opacity-60" />}
                </a>

                {n.children && hover === n.label && (
                  <div className="absolute left-0 top-full w-80 pt-2 animate-fade-in">
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

          <div className="flex shrink-0 items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="hidden md:inline-flex h-9 items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 text-xs font-medium text-foreground/70 hover:bg-secondary"
              aria-label="Search"
            >
              <Search className="h-3.5 w-3.5" />
              <span className="hidden lg:inline">Search…</span>
              <kbd className="hidden lg:inline rounded bg-background px-1.5 py-0.5 text-[10px] text-muted-foreground">⌘K</kbd>
            </button>
            <a
              href="/#contact"
              className="hidden lg:inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/5"
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
      </div>

      {searchOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center bg-foreground/60 px-4 pt-24 backdrop-blur-sm animate-fade-in"
          onClick={() => setSearchOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl animate-scale-in"
          >
            <div className="flex items-center gap-3 border-b border-border px-4 py-3">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search specialties, doctors, conditions, pages…"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
              <kbd className="rounded bg-secondary px-1.5 py-0.5 text-[10px] text-muted-foreground">ESC</kbd>
            </div>
            <div className="max-h-[60vh] overflow-y-auto p-2">
              {results.length === 0 ? (
                <div className="p-6 text-center text-sm text-muted-foreground">
                  No matches for "{q}".
                </div>
              ) : (
                results.map((r) => (
                  <a
                    key={r.title + r.href}
                    href={r.href}
                    onClick={() => setSearchOpen(false)}
                    className="flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 hover:bg-secondary"
                  >
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold text-foreground">{r.title}</div>
                      <div className="truncate text-xs text-muted-foreground">{r.desc}</div>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                        {r.category}
                      </span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </a>
                ))
              )}
            </div>
            <div className="border-t border-border bg-secondary/40 px-4 py-2 text-[11px] text-muted-foreground">
              Tip: press <kbd className="rounded bg-background px-1">⌘K</kbd> or <kbd className="rounded bg-background px-1">/</kbd> any time.
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
