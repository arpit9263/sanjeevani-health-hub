import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  Camera,
  Film,
  Image as ImageIcon,
  PlayCircle,
  Sparkles,
  Video,
  X,
} from "lucide-react";
import { galleryImages as photos } from "@/lib/images";

type GalleryProps = { mode?: "home" | "page" };
type MediaType = "all" | "images" | "videos" | "clips";
type MediaItem = {
  type: "image" | "video" | "clip";
  src: string;
  label: string;
  tag: string;
  span?: string;
  duration?: string;
  note?: string;
  videoSrc?: string;
};

const videoItems: MediaItem[] = [
  {
    type: "video",
    src: photos[0].src,
    label: "ICU facility walkthrough",
    tag: "Video",
    duration: "00:30",
    span: "lg:col-span-2",
    note: "Sample hospital walkthrough video. Replace with the real hospital video anytime.",
    videoSrc: "/media/icu-walkthrough.mp4",
  },
  {
    type: "video",
    src: photos[5].src,
    label: "Hospital front & reception tour",
    tag: "Video",
    duration: "00:25",
    note: "Sample front and reception tour. Replace with the real hospital video anytime.",
    videoSrc: "/media/front-tour.mp4",
  },
];

const clipItems: MediaItem[] = [
  {
    type: "clip",
    src: photos[1].src,
    label: "Operation theatre clip",
    tag: "Clip",
    duration: "00:12",
    note: "Short clip format for reels and quick hospital updates.",
    videoSrc: "/media/ot-clip.mp4",
  },
  {
    type: "clip",
    src: photos[4].src,
    label: "Nursing care moment",
    tag: "Clip",
    duration: "00:10",
    note: "Short care-team clip format for social media showcase.",
    videoSrc: "/media/care-clip.mp4",
  },
  {
    type: "clip",
    src: photos[7].src,
    label: "Diagnostics quick view",
    tag: "Clip",
    duration: "00:15",
    note: "Short diagnostics/pathology clip placeholder.",
    videoSrc: "/media/care-clip.mp4",
  },
];

export function Gallery({ mode = "home" }: GalleryProps) {
  const [active, setActive] = useState<MediaItem | null>(null);
  const [filter, setFilter] = useState<MediaType>("all");
  const isPage = mode === "page";

  useEffect(() => {
    if (!active) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [active]);

  const mediaItems = useMemo<MediaItem[]>(() => {
    const imageItems: MediaItem[] = photos.map((photo) => ({ ...photo, type: "image" }));
    return isPage ? [...imageItems, ...videoItems, ...clipItems] : imageItems.slice(0, 8);
  }, [isPage]);

  const visibleItems = mediaItems.filter((item) => {
    if (!isPage || filter === "all") return true;
    if (filter === "images") return item.type === "image";
    if (filter === "videos") return item.type === "video";
    return item.type === "clip";
  });

  const filters: { key: MediaType; label: string; icon: typeof ImageIcon }[] = [
    { key: "all", label: "All Media", icon: Sparkles },
    { key: "images", label: "Images", icon: ImageIcon },
    { key: "videos", label: "Videos", icon: Video },
    { key: "clips", label: "Clips", icon: Film },
  ];

  return (
    <section id="gallery" className="relative overflow-hidden bg-[#F7FBFA] py-20 md:py-28">
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-emerald-100/80 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-cyan-100/80 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 shadow-sm">
              <Camera className="h-3.5 w-3.5" /> Gallery & Media
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-5xl">
              Images, videos & care clips
            </h2>
            <p className="mt-4 text-muted-foreground">
              Hospital photos, facility walkthrough videos and short clips in a clean, functional media gallery.
            </p>
          </div>

          {isPage ? (
            <div className="flex w-full flex-wrap gap-2 rounded-2xl border border-white/70 bg-white/75 p-2 shadow-sm backdrop-blur md:w-auto">
              {filters.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setFilter(key)}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition ${
                    filter === key ? "bg-primary text-primary-foreground shadow-sm" : "text-primary hover:bg-emerald-50"
                  }`}
                >
                  <Icon className="h-4 w-4" /> {label}
                </button>
              ))}
            </div>
          ) : (
            <a href="/gallery" className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary/5">
              View full gallery <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>

        <div className="mt-12 grid auto-rows-[230px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visibleItems.map((item, idx) => {
            const isPlayable = item.type !== "image";
            const sizeClass = item.span ?? (idx === 0 ? "lg:col-span-2 lg:row-span-2" : idx === 5 ? "lg:col-span-2" : "");
            return (
              <button
                key={`${item.type}-${item.label}`}
                type="button"
                onClick={() => setActive(item)}
                className={`group relative overflow-hidden rounded-[2rem] bg-slate-900 text-left shadow-[0_20px_70px_rgba(15,23,42,0.12)] ${sizeClass}`}
                aria-label={`Open ${item.label}`}
              >
                <img src={item.src} alt={item.label} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
                  {isPlayable ? <PlayCircle className="h-3.5 w-3.5" /> : <ImageIcon className="h-3.5 w-3.5" />}
                  {item.tag}
                </div>
                {item.duration && (
                  <div className="absolute right-4 top-4 rounded-full bg-black/45 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                    {item.duration}
                  </div>
                )}
                {isPlayable && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition group-hover:scale-110">
                      <PlayCircle className="h-9 w-9" />
                    </div>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <div className="font-display text-lg font-semibold md:text-xl">{item.label}</div>
                  <div className="mt-1 text-xs text-white/75">{isPlayable ? "Click to play preview" : "Click to view full image"}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-slate-950/90 px-3 py-5 backdrop-blur-xl sm:px-6"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.28),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.22),transparent_32%)]" />
          <div
            className="relative flex max-h-[calc(100dvh-40px)] w-full max-w-5xl flex-col overflow-hidden rounded-[28px] border border-white/15 bg-white shadow-[0_35px_120px_rgba(0,0,0,0.55)] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-slate-200/80 bg-white/95 px-4 py-3 sm:px-5">
              <div className="min-w-0">
                <div className="text-[10px] font-black uppercase tracking-[0.22em] text-primary">{active.tag}</div>
                <h3 className="truncate font-display text-base font-black text-slate-950 sm:text-xl">{active.label}</h3>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white transition hover:scale-105 hover:bg-primary"
                aria-label="Close media"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex min-h-0 flex-1 items-center justify-center bg-slate-950 p-2 sm:p-4">
              {active.type === "image" ? (
                <img src={active.src} alt={active.label} className="max-h-[calc(100dvh-190px)] w-auto max-w-full rounded-2xl object-contain" />
              ) : (
                <video
                  key={active.videoSrc}
                  controls
                  autoPlay
                  playsInline
                  poster={active.src}
                  className="max-h-[calc(100dvh-190px)] w-full rounded-2xl bg-black object-contain outline-none"
                >
                  <source src={active.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            <div className="flex flex-col gap-3 bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <p className="text-sm leading-6 text-muted-foreground">{active.note ?? "Full preview of hospital media."}</p>
              <a href="/contact" className="inline-flex shrink-0 items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:bg-primary/90">
                Schedule a visit
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
