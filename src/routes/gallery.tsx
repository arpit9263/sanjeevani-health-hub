import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Gallery } from "@/components/site/Gallery";
import { hospitalInfo } from "@/lib/siteData";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Hospital Gallery Jhansi | Sanjeevani ICU & Hospital" },
      { name: "description", content: `View ${hospitalInfo.name} gallery: ICU, OT, pharmacy, pathology, waiting area, doctors and hospital facilities in Jhansi.` },
      { name: "keywords", content: "Sanjeevani hospital gallery, hospital images Jhansi, ICU images Jhansi, hospital facilities Jhansi" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <PageShell
      eyebrow="Gallery & Media"
      title="Hospital spaces, facilities and care moments."
      subtitle="A creative media gallery for hospital images, video slots and short clips. Use filters to view images, videos or clips, and click any card for a full preview."
    >
      <Gallery mode="page" />
    </PageShell>
  );
}
