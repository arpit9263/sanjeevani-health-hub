import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Stats } from "@/components/site/Stats";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CentersOfExcellence } from "@/components/site/CentersOfExcellence";
import { NetworkPresence } from "@/components/site/NetworkPresence";
import { PatientJourney } from "@/components/site/PatientJourney";
import { Accreditations } from "@/components/site/Accreditations";
import { InsurancePartners } from "@/components/site/InsurancePartners";
import { Leadership } from "@/components/site/Leadership";
import { Investors } from "@/components/site/Investors";
import { InternationalPatients } from "@/components/site/InternationalPatients";
import { Testimonials } from "@/components/site/Testimonials";
import { Insights } from "@/components/site/Insights";
import { CareersTeaser } from "@/components/site/Careers";
import { CSR } from "@/components/site/CSR";
import { FAQ } from "@/components/site/FAQ";
import { EmergencyBanner } from "@/components/site/EmergencyBanner";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Gallery } from "@/components/site/Gallery";
import { VideoSection } from "@/components/site/VideoSection";
import { DiseasesAZ } from "@/components/site/DiseasesAZ";
import { CallToCare } from "@/components/site/CallToCare";
import { FloatingActions } from "@/components/site/FloatingActions";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sanjeevani ICU & Hospital Group — Pan-India Multi-Specialty Care" },
      {
        name: "description",
        content:
          "Sanjeevani ICU & Hospital Group operates 12 hospitals across India delivering NABH-accredited critical care, multi-specialty treatment and emergency services backed by 3,200+ clinicians.",
      },
      { property: "og:title", content: "Sanjeevani ICU & Hospital Group" },
      {
        property: "og:description",
        content:
          "12 hospitals · 32 cities · 8 Centers of Excellence · 24×7 emergency and ICU care.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* 1. Hook & emergency utility */}
        <Hero />
        <TrustStrip />

        {/* 2. Proof / scale */}
        <Stats />

        {/* 3. What we treat */}
        <CentersOfExcellence />
        <DiseasesAZ />
        <Services />

        {/* 4. Story + emotional cta */}
        <VideoSection />
        <CallToCare />

        {/* 5. Network & journey */}
        <NetworkPresence />
        <PatientJourney />

        {/* 6. Trust + payments */}
        <Accreditations />
        <InsurancePartners />

        {/* 7. About / leadership */}
        <About />
        <Leadership />

        {/* 8. Visual / social proof */}
        <Gallery />
        <Testimonials />

        {/* 9. Urgent banner before secondary content */}
        <EmergencyBanner />

        {/* 10. Wider organisation */}
        <InternationalPatients />
        <Investors />
        <Insights />
        <CareersTeaser />
        <CSR />

        {/* 11. FAQ + contact */}
        <FAQ />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingActions />
    </div>
  );
}

