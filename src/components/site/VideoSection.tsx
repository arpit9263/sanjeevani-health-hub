import { Play, ShieldCheck, HeartPulse, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { hospitalImages } from "@/lib/images";

// TODO: replace with the real "A day at Sanjeevani" brand film once it's ready.
// Everything below (banner preview + duration badge) is driven off this one
// file, so swapping this link is the only change needed.
const storyVideoSrc = "https://dhcb4o02dnne8.cloudfront.net/sanjeevaniicuhospital/hospitalvideo.mp4";

function formatDuration(totalSeconds: number) {
  if (!Number.isFinite(totalSeconds) || totalSeconds <= 0) return null;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.round(totalSeconds % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState<string | null>(null);
  const previewRef = useRef<HTMLVideoElement | null>(null);
  const poster = hospitalImages.icuRound;

  // Read the video's real timeline instead of showing a hard-coded duration.
  useEffect(() => {
    const el = previewRef.current;
    if (!el) return;
    const onLoaded = () => setDuration(formatDuration(el.duration));
    el.addEventListener("loadedmetadata", onLoaded);
    return () => el.removeEventListener("loadedmetadata", onLoaded);
  }, []);

  // Pause the muted preview loop once the full video takes over, and vice versa.
  useEffect(() => {
    const el = previewRef.current;
    if (!el) return;
    if (playing) el.pause();
    else el.play().catch(() => {});
  }, [playing]);

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10" style={{ backgroundImage: "var(--gradient-soft)" }} />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-border" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              The Sanjeevani Story
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Sanjeevani care, told through trust and recovery.
            </h2>
            <p className="mt-4 text-muted-foreground">
              See how our doctors, nurses and care team support families through emergency, ICU and specialist treatment in Jhansi.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: HeartPulse, k: "99 K+", v: "patients treated" },
                { icon: Users, k: "15+", v: "doctors" },
                { icon: ShieldCheck, k: "49+", v: "beds" },
              ].map(({ icon: Icon, k, v }) => (
                <div key={k} className="rounded-2xl border border-border bg-card p-4">
                  <Icon className="h-5 w-5 text-primary" />
                  <div className="mt-2 font-display text-xl font-bold text-foreground">{k}</div>
                  <div className="text-xs text-muted-foreground">{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] opacity-30 blur-2xl"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            />
            <div
              className="relative aspect-video overflow-hidden rounded-3xl border border-border"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              {/*
                The banner itself is the real video — muted, looping, always
                playing underneath — instead of a static dummy image. It stays
                mounted even after play starts so we don't reload the file.
              */}
              <video
                ref={previewRef}
                src={storyVideoSrc}
                poster={poster}
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                  playing ? "opacity-0" : "opacity-100"
                }`}
              />

              {playing ? (
                <video
                  key={storyVideoSrc}
                  src={storyVideoSrc}
                  controls
                  autoPlay
                  playsInline
                  poster={poster}
                  className="absolute inset-0 h-full w-full rounded-3xl bg-black object-contain outline-none"
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="group absolute inset-0 h-full w-full"
                  aria-label="Play video"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-foreground/40 via-transparent to-transparent" />

                  <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-2xl transition-transform group-hover:scale-110">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/60 opacity-60" />
                    <Play className="relative h-7 w-7 translate-x-0.5 fill-primary" />
                  </span>
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white">
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">
                        Featured film{duration ? ` · ${duration}` : ""}
                      </div>
                      <div className="mt-1 font-display text-lg font-semibold">A day at Sanjeevani</div>
                    </div>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
