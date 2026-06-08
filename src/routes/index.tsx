import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Doctors } from "@/components/site/Doctors";
import { Stats } from "@/components/site/Stats";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sanjeevani ICU & Hospital — Compassionate Critical Care" },
      {
        name: "description",
        content:
          "Sanjeevani ICU & Hospital delivers 24x7 critical care, multi-specialty treatment and emergency services with experienced doctors and modern facilities.",
      },
      { property: "og:title", content: "Sanjeevani ICU & Hospital" },
      {
        property: "og:description",
        content:
          "24x7 ICU, emergency and multi-specialty care led by trusted doctors.",
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
        <Hero />
        <Stats />
        <Services />
        <About />
        <Doctors />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
