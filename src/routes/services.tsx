import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Services } from "@/components/site/Services";
import { Contact } from "@/components/site/Contact";
import { hospitalInfo } from "@/lib/siteData";
import { PageShell } from "@/components/site/PageShell";
import { CentersOfExcellence } from "@/components/site/CentersOfExcellence";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Patient Services & Hospital Facilities Jhansi | Sanjeevani" },
      { name: "description", content: "Explore 24x7 emergency help, ICU admission support, diagnostics, pharmacy, insurance/TPA, OPD appointment booking and patient support at Sanjeevani ICU & Hospital, Jhansi." },
      { name: "keywords", content: "hospital services Jhansi, emergency hospital Jhansi, ICU admission Jhansi, pathology Jhansi, pharmacy hospital Jhansi, cashless insurance hospital Jhansi, Sanjeevani ICU Hospital" },
      { property: "og:title", content: "Patient Services & Hospital Facilities Jhansi | Sanjeevani" },
      { property: "og:description", content: "24×7 emergency, ICU, specialist consultations and multi-specialty care in Jhansi." },
    ],
  }),
  component: ServicesPage,
});


function ServicesPage() {
  return (
    <PageShell
      eyebrow="Our Services"
      title="Patient services and hospital facilities in Jhansi"
      subtitle={`${hospitalInfo.name} provides emergency help, ICU admission support, diagnostics, pharmacy, insurance guidance and appointment assistance for families.`}
    >
      <Services />
    </PageShell>
  );
}