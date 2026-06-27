import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Contact } from "@/components/site/Contact";
import { hospitalInfo } from "@/lib/siteData";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Sanjeevani ICU & Hospital Jhansi | Appointment & Emergency" },
      { name: "description", content: `Contact ${hospitalInfo.name}, Jhansi for appointments, 24×7 emergency, ICU support, insurance queries and hospital location.` },
      { name: "keywords", content: "Sanjeevani hospital contact number, hospital in Jhansi contact, ICU hospital Jhansi appointment, emergency hospital Jhansi phone" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact & Appointment"
      title="Book appointment or reach emergency support."
      subtitle={`Call +91 ${hospitalInfo.emergency}, send WhatsApp details, or visit ${hospitalInfo.address}.`}
    >
      <Contact />
    </PageShell>
  );
}
