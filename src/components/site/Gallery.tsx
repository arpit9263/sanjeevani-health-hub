import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowUpRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  Film,
  Image as ImageIcon,
  Loader2,
  PlayCircle,
  Sparkles,
  Video,
  X,
} from "lucide-react";
import { galleryImages as photos } from "@/lib/images";

type GalleryProps = { mode?: "home" | "page" };
type MediaType = "all" | "images" | "videos" | "clips";
type MediaKind = "image" | "video" | "clip";
type MediaItem = {
  type: MediaKind;
  /** Fallback / poster image — shown while the real video loads or if no video link is set yet. */
  src: string;
  label: string;
  tag: string;
  span?: string;
  note?: string;
  /**
   * Real video/clip source. Leave undefined/empty until the real file or link is ready —
   * the card will gracefully show a "video coming soon" placeholder instead of breaking.
   * TODO: paste your real hospital video links here as they become available.
   */
  videoSrc?: string;
};

// -----------------------------------------------------------------------------
// Video & clip media. Duration is NEVER hard-coded — it is read from the actual
// video file at runtime (see useVideoDuration below), so it always matches the
// real timeline of whatever file is linked here.
// -----------------------------------------------------------------------------
const videoItems: MediaItem[] = [
  {
    type: "video",
    src: photos[0].src,
    label: "ICU facility walkthrough",
    tag: "Video",
    span: "lg:col-span-2",
    note: "Sample hospital walkthrough video. Replace videoSrc with the real hospital video anytime.",
    videoSrc: "https://dhcb4o02dnne8.cloudfront.net/sanjeevaniicuhospital/hospitalvideo.mp4",
  },
  {
    type: "video",
    src: photos[5].src,
    label: "Hospital front & reception tour",
    tag: "Video",
    note: "Sample front and reception tour. Replace videoSrc with the real hospital video anytime.",
    videoSrc: "https://dhcb4o02dnne8.cloudfront.net/sanjeevaniicuhospital/icuvideo",
  },
];

const clipItems: MediaItem[] = [
  {
    type: "clip",
    src: photos[1].src,
    label: "Operation theatre clip",
    tag: "Clip",
    note: "Short clip format for reels and quick hospital updates.",
    videoSrc: "https://dhcb4o02dnne8.cloudfront.net/sanjeevaniicuhospital/hospitalvideo.mp4",
  },
  {
    type: "clip",
    src: photos[4].src,
    label: "Nursing care moment",
    tag: "Clip",
    note: "Short care-team clip format for social media showcase.",
    videoSrc: "https://dhcb4o02dnne8.cloudfront.net/sanjeevaniicuhospital/reception",
  },
  {
    type: "clip",
    src: photos[7].src,
    label: "Diagnostics quick view",
    tag: "Clip",
    note: "Short diagnostics/pathology clip — link not added yet.",
    // TODO: no diagnostics clip file yet — add the videoSrc once it's ready.
    videoSrc: 'https://dhcb4o02dnne8.cloudfront.net/sanjeevaniicuhospital/waitingarea',
  },
];

// -----------------------------------------------------------------------------
// Reads the REAL duration off a video file (no dummy timelines) and caches it
// per-source so the same clip used on multiple cards isn't re-downloaded.
// -----------------------------------------------------------------------------
const durationCache = new Map<string, string>();

function formatDuration(totalSeconds: number) {
  if (!Number.isFinite(totalSeconds) || totalSeconds <= 0) return null;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.round(totalSeconds % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function useVideoDuration(src: string | undefined) {
  const [duration, setDuration] = useState<string | null>(src ? durationCache.get(src) ?? null : null);

  useEffect(() => {
    if (!src) {
      setDuration(null);
      return;
    }
    const cached = durationCache.get(src);
    if (cached) {
      setDuration(cached);
      return;
    }
    const probe = document.createElement("video");
    probe.preload = "metadata";
    probe.muted = true;
    probe.src = src;
    const onLoaded = () => {
      const formatted = formatDuration(probe.duration);
      if (formatted) {
        durationCache.set(src, formatted);
        setDuration(formatted);
      }
    };
    probe.addEventListener("loadedmetadata", onLoaded);
    return () => {
      probe.removeEventListener("loadedmetadata", onLoaded);
      probe.src = "";
    };
  }, [src]);

  return duration;
}

// -----------------------------------------------------------------------------
// Grid card thumbnail. For videos/clips the banner IS the actual video —
// muted, looping, auto-playing only while the card is on screen — instead of a
// static dummy poster image. Falls back to the poster image if no real
// videoSrc has been added yet.
// -----------------------------------------------------------------------------
function MediaThumb({ item, onDuration }: { item: MediaItem; onDuration: (d: string | null) => void }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const duration = useVideoDuration(item.videoSrc);

  useEffect(() => {
    onDuration(duration);
  }, [duration, onDuration]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !item.videoSrc) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [item.videoSrc]);

  if (item.type !== "image" && item.videoSrc) {
    return (
      <video
        ref={videoRef}
        src={item.videoSrc}
        poster={item.src}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={item.label}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
      />
    );
  }

  return (
    <img
      src={item.src}
      alt={item.label}
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
    />
  );
}

// -----------------------------------------------------------------------------
// Full-screen lightbox — rendered through a React portal straight onto
// document.body. This is the key fix: the gallery section (and every section
// on the site) gets an on-scroll reveal animation that leaves a `transform`
// on the element even at rest, which turns that section into a positioning
// container. A `position: fixed` modal living *inside* that section then gets
// trapped inside the section's box instead of covering the real viewport —
// which is exactly why the old popup looked like it was "inside the page"
// rather than a proper full-screen preview. Rendering through a portal
// removes the modal from that DOM subtree entirely, so it always covers the
// full viewport correctly no matter which section triggered it.
// -----------------------------------------------------------------------------
function Lightbox({
  item,
  index,
  total,
  onClose,
  onPrev,
  onNext,
}: {
  item: MediaItem;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const [loading, setLoading] = useState(item.type !== "image");
  const duration = useVideoDuration(item.videoSrc);

  useEffect(() => {
    setLoading(item.type !== "image");
  }, [item]);

  const modal = (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-slate-950/90 px-3 py-5 backdrop-blur-xl sm:px-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.label}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.28),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.22),transparent_32%)]" />

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-2 top-1/2 z-[101] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:scale-105 hover:bg-white/20 sm:left-5"
            aria-label="Previous media"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-2 top-1/2 z-[101] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:scale-105 hover:bg-white/20 sm:right-5"
            aria-label="Next media"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      <div
        key={`${item.type}-${item.label}`}
        className="relative flex max-h-[calc(100dvh-40px)] w-full max-w-5xl flex-col overflow-hidden rounded-[28px] border border-white/15 bg-white shadow-[0_35px_120px_rgba(0,0,0,0.55)] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-slate-200/80 bg-white/95 px-4 py-3 sm:px-5">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-primary">
              <span>{item.tag}</span>
              {duration && <span className="text-slate-400">· {duration}</span>}
              {total > 1 && <span className="text-slate-400">· {index + 1} / {total}</span>}
            </div>
            <h3 className="truncate font-display text-base font-black text-slate-950 sm:text-xl">{item.label}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white transition hover:scale-105 hover:bg-primary"
            aria-label="Close media"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="relative flex min-h-0 flex-1 items-center justify-center bg-slate-950 p-2 sm:p-4">
          {loading && item.type !== "image" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-white/70" />
            </div>
          )}

          {item.type === "image" ? (
            <img
              src={item.src}
              alt={item.label}
              className="max-h-[calc(100dvh-190px)] w-auto max-w-full rounded-2xl object-contain"
            />
          ) : item.videoSrc ? (
            <video
              key={item.videoSrc}
              controls
              autoPlay
              playsInline
              poster={item.src}
              onCanPlay={() => setLoading(false)}
              onLoadedData={() => setLoading(false)}
              className="max-h-[calc(100dvh-190px)] w-full rounded-2xl bg-black object-contain outline-none"
            >
              <source src={item.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="flex flex-col items-center gap-3 px-6 py-16 text-center text-white/80">
              <img src={item.src} alt={item.label} className="max-h-[45vh] w-auto rounded-2xl object-contain opacity-70" />
              <p className="text-sm font-medium">This video link hasn't been added yet — check back soon.</p>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3 bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <p className="text-sm leading-6 text-muted-foreground">{item.note ?? "Full preview of hospital media."}</p>
          <a href="/contact" className="inline-flex shrink-0 items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:bg-primary/90">
            Schedule a visit
          </a>
        </div>
      </div>
    </div>
  );

  if (typeof document === "undefined") return null;
  return createPortal(modal, document.body);
}

export function Gallery({ mode = "home" }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState<MediaType>("all");
  const [durations, setDurations] = useState<Record<string, string | null>>({});
  const isPage = mode === "page";

  const mediaItems = useMemo<MediaItem[]>(() => {
    const imageItems: MediaItem[] = photos.map((photo) => ({ ...photo, type: "image" }));
    return isPage ? [...imageItems, ...videoItems, ...clipItems] : imageItems.slice(0, 8);
  }, [isPage]);

  const visibleItems = useMemo(
    () =>
      mediaItems.filter((item) => {
        if (!isPage || filter === "all") return true;
        if (filter === "images") return item.type === "image";
        if (filter === "videos") return item.type === "video";
        return item.type === "clip";
      }),
    [mediaItems, filter, isPage],
  );

  const activeItem = activeIndex !== null ? visibleItems[activeIndex] : null;

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + visibleItems.length) % visibleItems.length)),
    [visibleItems.length],
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % visibleItems.length)),
    [visibleItems.length],
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, close, showPrev, showNext]);

  const setItemDuration = useCallback((key: string, d: string | null) => {
    setDurations((prev) => (prev[key] === d ? prev : { ...prev, [key]: d }));
  }, []);

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
            const itemKey = `${item.type}-${item.label}`;
            const sizeClass = item.span ?? (idx === 0 ? "lg:col-span-2 lg:row-span-2" : idx === 5 ? "lg:col-span-2" : "");
            const cardDuration = durations[itemKey] ?? null;
            const hasVideoLink = !isPlayable || Boolean(item.videoSrc);
            return (
              <button
                key={itemKey}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`group relative overflow-hidden rounded-[2rem] bg-slate-900 text-left shadow-[0_20px_70px_rgba(15,23,42,0.12)] ${sizeClass}`}
                aria-label={`Open ${item.label}`}
              >
                <MediaThumb item={item} onDuration={(d) => setItemDuration(itemKey, d)} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
                  {isPlayable ? <PlayCircle className="h-3.5 w-3.5" /> : <ImageIcon className="h-3.5 w-3.5" />}
                  {item.tag}
                </div>
                {isPlayable && cardDuration && (
                  <div className="absolute right-4 top-4 rounded-full bg-black/45 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                    {cardDuration}
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
                  <div className="mt-1 text-xs text-white/75">
                    {!hasVideoLink ? "Video coming soon" : isPlayable ? "Click to play preview" : "Click to view full image"}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {activeItem && (
        <Lightbox
          item={activeItem}
          index={activeIndex ?? 0}
          total={visibleItems.length}
          onClose={close}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </section>
  );
}
