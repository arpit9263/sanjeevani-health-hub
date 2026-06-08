import { useState } from "react";
import { Logo } from "./Logo";
import { Menu, Phone, X } from "lucide-react";

const nav = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Doctors", href: "#doctors" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <Logo className="h-12 w-12 rounded-md object-contain" />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-lg font-bold text-primary">Sanjeevani</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              ICU &amp; Hospital
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+911234567890"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[var(--gradient-brand)] px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03]"
            style={{ backgroundImage: "var(--gradient-brand)" }}
          >
            <Phone className="h-4 w-4" />
            Emergency
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden rounded-md p-2 text-foreground hover:bg-secondary"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col px-6 py-4">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-foreground/80 hover:text-primary"
              >
                {n.label}
              </a>
            ))}
            <a
              href="tel:+911234567890"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              <Phone className="h-4 w-4" /> Emergency
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
