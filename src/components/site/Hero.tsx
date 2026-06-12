import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hospital-hero.jpg";
import { ArrowRight, HeartPulse, Play, Pause } from "lucide-react";

const slides = [
  {
    video: "https://videos.pexels.com/video-files/4122849/4122849-uhd_2560_1440_25fps.mp4",
    eyebrow: "24×7 Critical Care & Emergency",
    title: "Compassionate care,",
    titleAccent: "when every second counts.",
    desc: "Sanjeevani ICU & Hospital combines experienced doctors, modern infrastructure and a warm human touch to deliver trusted multi-specialty healthcare for your family.",
  },
  {
    video: "https://videos.pexels.com/video-files/4173251/4173251-hd_1920_1080_25fps.mp4",
    eyebrow: "Advanced Diagnostics & Imaging",
    title: "Precision medicine,",
    titleAccent: "powered by modern technology.",
    desc: "From 3T MRI and 128-slice CT to molecular pathology — our diagnostic backbone gets you to the right answer, faster.",
  },
  {
    video: "https://videos.pexels.com/video-files/3936305/3936305-hd_1920_1080_24fps.mp4",
    eyebrow: "Centers of Excellence",
    title: "Specialist teams,",
    titleAccent: "for every stage of life.",
    desc: "Cardiology, neurosciences, oncology, mother & child and more — institute-grade clinical programs under one roof, in 32 cities.",
  },
];

export function Hero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setI((p) => (p + 1) % slides.length), 7500);
    return () => clearTimeout(t);
  }, [i, paused]);

  const s = slides[i];

  return (
    <section id="home" className="relative overflow-hidden pb-24">
      <div className="absolute inset-0">
        {slides.map((sl, idx) => (
          <video
            key={sl.video}
            ref={idx === i ? videoRef : null}
            src={sl.video}
            poster={heroImg}
            autoPlay
            muted
            loop
            playsInline
            preload={idx === 0 ? "auto" : "metadata"}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <img
          src={heroImg}
          alt=""
          aria-hidden
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-28 md:pb-40 text-primary-foreground">
        <div key={i} className="max-w-2xl animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur">
            <HeartPulse className="h-3.5 w-3.5" />
            {s.eyebrow}
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[68px]">
            {s.title} <br />
            <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
              {s.titleAccent}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-white/90">{s.desc}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-xl transition-transform hover:scale-[1.03]"
            >
              Book an Appointment
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Slide controls */}
        <div className="mt-12 flex items-center gap-4">
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-10 bg-white" : "w-5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Play" : "Pause"}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20"
          >
            {paused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
          </button>
          <span className="text-xs uppercase tracking-[0.2em] text-white/70">
            0{i + 1} / 0{slides.length}
          </span>
        </div>
      </div>
    </section>
  );
}
