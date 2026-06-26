import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hospital-hero.jpg";

import { ArrowRight, HeartPulse, Play, Pause, ShieldCheck, Stethoscope, Activity } from "lucide-react";

const slides = [
  {
    video: 'https://res.cloudinary.com/dusq7ltk1/video/upload/v1782391996/reception_u3flo0.mp4',
    fallback: 'https://res.cloudinary.com/dusq7ltk1/video/upload/v1782391996/reception_u3flo0.mp4',
    eyebrow: "24×7 Critical Care & Emergency",
    title: "Care that arrives",
    titleAccent: "the moment you need it.",
    desc: "A multidisciplinary team of intensivists, surgeons and nurses — ready around the clock to deliver life‑saving, compassionate care for your family.",
    chip: { icon: HeartPulse, label: "Ambulance in 12 min" },
  },
  {
    video: 'https://res.cloudinary.com/dusq7ltk1/video/upload/v1782392237/entrance_ssqyso.mp4',
    fallback: 'https://res.cloudinary.com/dusq7ltk1/video/upload/v1782392237/entrance_ssqyso.mp4;',
    title: "Precise answers,",
    titleAccent: "delivered by modern medicine.",
    desc: "3T MRI, 128‑slice CT, robotic surgery and molecular pathology — the right technology, in the right hands, at the right time.",
    chip: { icon: Activity, label: "3T MRI · 128 slice CT" },
  },
  {
    video: 'https://res.cloudinary.com/dusq7ltk1/video/upload/v1782451221/0626_otpw4z.mp4',
    fallback: 'https://res.cloudinary.com/dusq7ltk1/video/upload/v1782392747/office_bws8qc.mp4',
    eyebrow: "Centers of Excellence",
    title: "Specialist programs",
    titleAccent: "for every stage of life.",
    desc: "Cardiology, neurosciences, oncology, mother & child and more — institute‑grade clinical depth, across 32 cities.",
    chip: { icon: Stethoscope, label: "8 Centres of Excellence" },
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
  const Chip = s.chip.icon;

  return (
    <section id="home" className="relative overflow-hidden pb-24">
      {/* Videos */}
      <div className="absolute inset-0">
        {slides.map((sl, idx) => (
          <video
            key={sl.video}
            ref={idx === i ? videoRef : null}
            poster={heroImg}
            autoPlay
            muted
            loop
            playsInline
            preload={idx === 0 ? "auto" : "metadata"}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${idx === i ? "opacity-100 scale-105" : "opacity-0"
              }`}
            style={{ transition: "opacity 1s ease-in-out" }}
          >
            <source src={sl.video} type="video/mp4" />
            <source src={sl.fallback} type="video/mp4" />
          </video>
        ))}
        <img
          src={heroImg}
          alt=""
          aria-hidden
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        {/* Cinematic dark scrim — keeps video visible, ensures text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />
        {/* Subtle brand tint */}
        <div className="absolute inset-0 opacity-60" style={{ backgroundImage: "var(--gradient-hero)" }} />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-28 md:pb-40 text-primary-foreground">
        <div key={i} className="max-w-2xl animate-rise-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur-md">
            <Chip className="h-3.5 w-3.5" />
            {s.eyebrow}
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[68px]">
            {s.title} <br />
            <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
              {s.titleAccent}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-white/90">{s.desc}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-xl transition-all hover:scale-[1.03] hover:shadow-2xl"
            >
              Book an Appointment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/20"
            >
              Explore Specialties
            </a>
            <a
              href="tel:108"
              className="inline-flex items-center gap-2 rounded-full bg-destructive/90 px-6 py-3 text-sm font-semibold text-white shadow-xl backdrop-blur hover:bg-destructive"
            >
              <HeartPulse className="h-4 w-4 animate-slow-pulse" /> Emergency · 108
            </a>
          </div>

          {/* live chip */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/85 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <ShieldCheck className="h-3.5 w-3.5" /> NABH · NABL accredited · 12 hospitals live
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
                className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-white" : "w-5 bg-white/40 hover:bg-white/70"
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
