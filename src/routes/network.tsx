import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { NetworkPresence } from "@/components/site/NetworkPresence";
import { InternationalPatients } from "@/components/site/InternationalPatients";
import { MapPin } from "lucide-react";

const hospitals = [
  { city: "Delhi NCR", name: "Sanjeevani Super-specialty, Saket", beds: 280, services: "Cardiology · Neuro · Oncology · ICU" },
  { city: "Mumbai", name: "Sanjeevani Heart Institute, Andheri", beds: 220, services: "Cardiology · Cardiac Surgery · ICU" },
  { city: "Bengaluru", name: "Sanjeevani Hospital, Whitefield", beds: 200, services: "Multi-specialty · Mother & Child" },
  { city: "Pune", name: "Sanjeevani Orthopedic Center, Kharadi", beds: 140, services: "Ortho · Spine · Sports Medicine" },
  { city: "Hyderabad", name: "Sanjeevani Cancer Center, Gachibowli", beds: 180, services: "Oncology · Radiation · Surgery" },
  { city: "Chennai", name: "Sanjeevani Hospital, OMR", beds: 160, services: "Multi-specialty · Renal · ICU" },
  { city: "Kolkata", name: "Sanjeevani Neuro Center, Salt Lake", beds: 150, services: "Neurology · Neurosurgery · Stroke" },
  { city: "Ahmedabad", name: "Sanjeevani Hospital, SG Highway", beds: 170, services: "Multi-specialty · Mother & Child" },
  { city: "Lucknow", name: "Sanjeevani ICU & Hospital, Gomti Nagar", beds: 130, services: "Critical Care · General Medicine" },
];

export const Route = createFileRoute("/network")({
  head: () => ({
    meta: [
      { title: "Our Network — 12 Hospitals across India · Sanjeevani" },
      { name: "description", content: "Sanjeevani's pan-India network spans 12 hospitals, 24 clinics and 32 cities — bound by shared clinical protocols and a single standard of care." },
    ],
  }),
  component: NetworkPage,
});

function NetworkPage() {
  return (
    <PageShell
      eyebrow="Our Network"
      title="A pan-India network. One standard of care."
      subtitle="Find a Sanjeevani center near you, partner with us through the franchise program, or plan your treatment as an international patient."
    >
      <NetworkPresence />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Hospitals & Centers
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            Find Sanjeevani near you
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hospitals.map((h) => (
              <article key={h.name} className="rounded-2xl border border-border bg-card p-6" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
                  <MapPin className="h-3.5 w-3.5" /> {h.city}
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold text-foreground">{h.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{h.services}</p>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                  <span>{h.beds} beds</span>
                  <a href="/#contact" className="font-semibold text-primary hover:underline">Book →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>



      <InternationalPatients />
    </PageShell>
  );
}
