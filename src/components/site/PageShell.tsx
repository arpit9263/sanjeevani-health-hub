import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

interface PageShellProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function PageShell({ eyebrow, title, subtitle, children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section
        className="relative overflow-hidden py-20 md:py-28 text-primary-foreground"
        style={{ backgroundImage: "var(--gradient-brand)" }}
      >
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, white 1px, transparent 1.5px), radial-gradient(circle at 75% 60%, white 1px, transparent 1.5px)",
            backgroundSize: "120px 120px, 180px 180px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {eyebrow && (
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">{title}</h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-white/90 md:text-lg">{subtitle}</p>
          )}
        </div>
      </section>
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
