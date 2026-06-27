import { Play, ShieldCheck, HeartPulse, Users } from "lucide-react";
import { useState } from "react";
import { hospitalImages } from "@/lib/images";

export function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const poster = hospitalImages.icuRound;

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
                { icon: HeartPulse, k: "3 Lakh+", v: "patients treated" },
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
              {playing ? (
                <iframe
                  className="h-full w-full"
                  src="https://res.cloudinary.com/dusq7ltk1/video/upload/v1782581044/0627_2_gnqv3n.mp4"
                  title="Sanjeevani Hospital Story"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="group relative h-full w-full"
                  aria-label="Play video"
                >
                  <img src={poster} alt="Sanjeevani hospital story" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-foreground/40 via-transparent to-transparent" />

                  <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-2xl transition-transform group-hover:scale-110">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/60 opacity-60" />
                    <Play className="relative h-7 w-7 translate-x-0.5 fill-primary" />
                  </span>
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white">
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">Featured film · 2:14</div>
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
