import { BadgeCheck, Stethoscope, Sparkles, UserRound } from "lucide-react";
import { leadershipDoctors, medicalExperts } from "@/lib/siteData";
import { doctorImages } from "@/lib/images";

type DoctorCardData = {
  name: string;
  role?: string;
  qualification?: string;
  specialty: string;
};

function initials(name: string) {
  return name
    .replace(/^Dr\.\s*/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function DoctorAvatar({ doctor, large = false }: { doctor: DoctorCardData; large?: boolean }) {
  const image = doctorImages[doctor.name as keyof typeof doctorImages];
  const sizeClass = large ? "h-36 w-36 text-4xl" : "h-24 w-24 text-2xl";

  if (image) {
    return (
      <img
        src={image}
        alt={`${doctor.name} portrait`}
        className={`${sizeClass} rounded-[2rem] object-cover ring-4 ring-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition-transform duration-700 group-hover:scale-105`}
        loading="lazy"
      />
    );
  }

  return (
    <div className={`${sizeClass} flex items-center justify-center rounded-[2rem] bg-gradient-to-br from-primary to-accent font-display font-black text-white ring-4 ring-white shadow-[0_18px_45px_rgba(15,23,42,0.18)]`}>
      {initials(doctor.name)}
    </div>
  );
}

export function Leadership() {
  return (
    <section id="leadership" className="relative overflow-hidden bg-[#F8FCFB] py-20 md:py-28">
      <div className="pointer-events-none absolute left-10 top-10 h-72 w-72 rounded-full bg-emerald-100 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-80 w-80 rounded-full bg-sky-100 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm">
            <Sparkles className="h-3.5 w-3.5" /> Doctors & Leadership
          </span>
          <h2 className="mt-4 font-display text-3xl font-black leading-tight text-foreground md:text-5xl">Owners, leadership and specialist doctors.</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            Cards are ready for real images. If any image is missing, the card automatically shows the doctor’s initials instead.
          </p>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-2">
          {leadershipDoctors.map((doctor, index) => (
            <article key={doctor.name} className="group relative overflow-hidden rounded-[2.2rem] border border-white/80 bg-white shadow-[0_22px_80px_rgba(15,23,42,0.09)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_32px_110px_rgba(15,23,42,0.16)]">
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-br from-primary/14 via-accent/10 to-transparent" />
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/10 transition duration-700 group-hover:scale-125" />
              <div className="relative p-6">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-end">
                  <div className="relative shrink-0">
                    <DoctorAvatar doctor={doctor} large />
                    <span className="absolute -bottom-2 left-3 inline-flex items-center gap-1 rounded-full bg-slate-950 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-lg">
                      <BadgeCheck className="h-3 w-3 text-primary" /> {index < 2 ? "Owner" : "Lead"}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 pb-1">
                    <div className="font-display text-2xl font-black leading-tight text-foreground">{doctor.name}</div>
                    <div className="mt-3 inline-flex rounded-full border border-primary/15 bg-primary/8 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-primary">
                      {doctor.role}
                    </div>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      {doctor.qualification} · {doctor.specialty}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {medicalExperts.map((doctor) => (
            <article key={doctor.name} className="group relative overflow-hidden rounded-[1.9rem] border border-white/80 bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_90px_rgba(15,23,42,0.14)]">
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-br from-primary/10 to-accent/10" />
              <div className="relative flex flex-col items-center text-center">
                <DoctorAvatar doctor={doctor} />
                <div className="mt-5 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/10">
                  <Stethoscope className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-black leading-tight text-foreground">{doctor.name}</h3>
                <p className="mt-2 min-h-8 text-xs font-black uppercase tracking-wider text-accent">{doctor.specialty}</p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-[11px] font-bold text-muted-foreground">
                  <UserRound className="h-3.5 w-3.5" /> Consultant
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
