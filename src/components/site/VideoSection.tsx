import { Play, ShieldCheck, HeartPulse, Users } from "lucide-react";
import { useState } from "react";

export function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const poster = "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=1600&q=70";

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
              Two decades of care, told by the people who lived it.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Watch how our doctors, nurses and patients describe the care
              philosophy that powers 12 hospitals across India — and meet a few
              families whose lives changed inside our walls.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: HeartPulse, k: "1.2M+", v: "lives touched" },
                { icon: Users, k: "3,200+", v: "clinicians" },
                { icon: ShieldCheck, k: "NABH", v: "accredited" },
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
                  src="https://www.youtube.com/embed/aXFSJTjVjw0?autoplay=1&rel=0"
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
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-foreground/30 to-accent/30" />
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
