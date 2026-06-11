import { Camera, ArrowUpRight } from "lucide-react";

// Curated hospital imagery (Unsplash). All royalty-free.
const photos = [
  { src: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=70", label: "Critical Care ICU", tag: "Infrastructure", span: "lg:col-span-2 lg:row-span-2" },
  { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=70", label: "Modern Operating Theatre", tag: "Surgery" },
  { src: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=700&q=70", label: "Patient-first Wards", tag: "Comfort" },
  { src: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=700&q=70", label: "Advanced Diagnostics", tag: "Imaging" },
  { src: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=900&q=70", label: "Cath Lab", tag: "Cardiology", span: "lg:col-span-2" },
  { src: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=700&q=70", label: "Pharmacy & TPA", tag: "Service" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <Camera className="h-3.5 w-3.5" /> Inside Sanjeevani
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
              A look inside our hospitals
            </h2>
            <p className="mt-3 text-muted-foreground">
              From critical care to comfort wards — engineered for healing,
              designed for families.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary/5"
          >
            Schedule a visit <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:auto-rows-[220px]">
          {photos.map((p) => (
            <figure
              key={p.label}
              className={`group relative overflow-hidden rounded-2xl ${p.span ?? ""}`}
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <img
                src={p.src}
                alt={p.label}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent opacity-80 transition-opacity group-hover:opacity-95" />
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ backgroundImage: "var(--gradient-hero)" }}
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-between gap-3 p-4 text-background transition-transform duration-500 group-hover:translate-y-0">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75">
                    {p.tag}
                  </div>
                  <div className="font-display text-sm font-semibold text-white sm:text-base">
                    {p.label}
                  </div>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur transition-all duration-500 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
