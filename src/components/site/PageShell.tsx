import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import heroBg from "@/assets/hospital-hero.jpg";

interface PageShellProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  children: ReactNode;
}

export function PageShell({ eyebrow, title, subtitle, image, children }: PageShellProps) {
  const bg = image ?? heroBg;
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="relative overflow-hidden py-24 md:py-32 text-primary-foreground">
        <img
          src={bg}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-hero)" }} />
        <div
          className="absolute inset-0 opacity-25 mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, white 1px, transparent 1.5px), radial-gradient(circle at 75% 60%, white 1px, transparent 1.5px)",
            backgroundSize: "120px 120px, 180px 180px",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 animate-fade-in">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">{title}</h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-white/90 md:text-lg">{subtitle}</p>
          )}
        </div>
      </section>
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
