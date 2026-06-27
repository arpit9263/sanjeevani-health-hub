import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CentersOfExcellence } from "@/components/site/CentersOfExcellence";

export const Route = createFileRoute("/specialties")({
  head: () => ({
    meta: [
      { title: "Specialties & Centers of Excellence — Sanjeevani Hospital" },
      { name: "description", content: "Explore ICU, emergency, anaesthesia, orthopedics, cardiology, urology, neurosurgery, gynecology and surgical care at Sanjeevani ICU & Hospital, Jhansi." },
      { property: "og:title", content: "Sanjeevani Specialties" },
      { property: "og:description", content: "Clinical specialities and doctor-led departments at Sanjeevani ICU & Hospital, Jhansi." },
    ],
  }),
  component: SpecialtiesPage,
});

function SpecialtiesPage() {
  return (
    <PageShell
      eyebrow="Clinical Specialties"
      title="Core clinical specialities for Jhansi families."
      subtitle="From emergency ICU support to specialist consultation and surgical guidance, our clinical programs are built around safe, family-focused care."
    >
      <CentersOfExcellence />
    </PageShell>
  );
}
