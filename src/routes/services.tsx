import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Services } from "@/components/site/Services";
import { Contact } from "@/components/site/Contact";
import { hospitalInfo } from "@/lib/siteData";

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
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/75">Sanjeevani ICU & Hospital</span>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold md:text-6xl">Patient services and hospital facilities in Jhansi</h1>
            <p className="mt-5 max-w-2xl text-primary-foreground/80">{hospitalInfo.name} provides emergency help, ICU admission support, diagnostics, pharmacy, insurance guidance and appointment assistance for families.</p>
          </div>
        </section>
        <Services />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingActions />
    </div>
  );
}
