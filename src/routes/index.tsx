import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Stats } from "@/components/site/Stats";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CentersOfExcellence } from "@/components/site/CentersOfExcellence";
import { PatientJourney } from "@/components/site/PatientJourney";
import { InsurancePartners } from "@/components/site/InsurancePartners";
import { Leadership } from "@/components/site/Leadership";
import { Testimonials } from "@/components/site/Testimonials";
import { Insights } from "@/components/site/Insights";
import { CareersTeaser } from "@/components/site/Careers";
import { FAQ } from "@/components/site/FAQ";
import { EmergencyBanner } from "@/components/site/EmergencyBanner";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Gallery } from "@/components/site/Gallery";
import { VideoSection } from "@/components/site/VideoSection";
import { CallToCare } from "@/components/site/CallToCare";
import { FloatingActions } from "@/components/site/FloatingActions";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import { hospitalInfo, siteDetails, stats } from "@/lib/siteData";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sanjeevani ICU & Hospital — Critical Care & Multi-Specialty Hospital in Jhansi" },
      {
        name: "description",
        content:
          "Sanjeevani ICU & Hospital in Jhansi provides 24×7 emergency care, ICU support, specialist doctors, cashless insurance and multi-specialty treatment.",
      },
      { property: "og:title", content: "Sanjeevani ICU & Hospital" },
      {
        property: "og:description",
        content:
          "15+ doctors · 49+ beds · 3 Lakh+ patients treated · 24×7 emergency and ICU care.",
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

           {/* 7. About / leadership */}
        <About />

        {/* 2. Proof / scale */}
        <Stats />

        {/* 3. What we treat */}
        <CentersOfExcellence />
        <Services />

        {/* 4. Story + emotional cta */}
        <VideoSection />
        <CallToCare />

        {/* 5. Patient journey */}
        <PatientJourney />

        {/* 6. Trust + payments */}
        <InsurancePartners />

     

        {/* 8. Visual / social proof */}
        <Gallery />
        <Testimonials />

        {/* 9. Urgent banner before secondary content */}
        <EmergencyBanner />

        {/* 10. Wider organisation */}
        <Insights />
        <CareersTeaser />

        {/* 11. FAQ + contact */}
        <FAQ />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingActions />
    </div>
  );
}

