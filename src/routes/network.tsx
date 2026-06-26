import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { NetworkPresence } from "@/components/site/NetworkPresence";
import { Contact } from "@/components/site/Contact";
import { hospitalInfo, services, stats } from "@/lib/siteData";

export const Route = createFileRoute("/network")({
  head: () => ({
    meta: [
      { title: `Hospital Location — ${hospitalInfo.name}` },
      { name: "description", content: `${hospitalInfo.name} is located at ${hospitalInfo.address}.` },
    ],
  }),
  component: NetworkPage,
});

function NetworkPage() {
  return (
    <PageShell eyebrow="Hospital Location" title="Sanjeevani ICU & Hospital, Jhansi" subtitle={hospitalInfo.address}>
      <NetworkPresence />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Care Capacity</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">Critical care and specialist support</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <article key={s.label} className="rounded-2xl border border-border bg-card p-6" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="font-display text-3xl font-bold text-primary">{s.value}</div>
                <h3 className="mt-2 font-display text-lg font-semibold text-foreground">{s.label}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.detail}</p>
              </article>
            ))}
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => (
              <article key={service.title} className="rounded-2xl border border-border bg-card p-5" style={{ boxShadow: "var(--shadow-card)" }}>
                <h3 className="font-display text-base font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </PageShell>
  );
}
