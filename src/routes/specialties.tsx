import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CentersOfExcellence } from "@/components/site/CentersOfExcellence";
import { Services } from "@/components/site/Services";

export const Route = createFileRoute("/specialties")({
  head: () => ({
    meta: [
      { title: "Specialties & Centers of Excellence — Sanjeevani Hospital" },
      { name: "description", content: "Explore institute-grade clinical programs across cardiology, neurosciences, critical care, orthopedics, mother & child, oncology and more." },
      { property: "og:title", content: "Sanjeevani Specialties" },
      { property: "og:description", content: "Eight Centers of Excellence and 30+ super-specialties under one roof." },
    ],
  }),
  component: SpecialtiesPage,
});

function SpecialtiesPage() {
  return (
    <PageShell
      eyebrow="Clinical Specialties"
      title="Eight Centers of Excellence. Thirty super-specialties."
      subtitle="From a routine consultation to the most complex multi-organ intervention — our integrated clinical programs deliver consistent, protocol-driven care."
    >
      <CentersOfExcellence />
      <Services />
    </PageShell>
  );
}
