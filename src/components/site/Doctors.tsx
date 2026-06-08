import d1 from "@/assets/doctor-1.jpg";
import d2 from "@/assets/doctor-2.jpg";
import d3 from "@/assets/doctor-3.jpg";

const doctors = [
  { img: d1, name: "Dr. Priya Sharma", role: "Critical Care & ICU", exp: "12+ yrs" },
  { img: d2, name: "Dr. Arjun Verma", role: "General Medicine", exp: "9+ yrs" },
  { img: d3, name: "Dr. Rakesh Mehta", role: "Cardiology", exp: "18+ yrs" },
];

export function Doctors() {
  return (
    <section id="doctors" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Meet Our Doctors
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
              Experienced specialists you can trust
            </h2>
          </div>
          <p className="text-muted-foreground md:max-w-sm">
            Our consultants bring years of experience across critical and
            multi-specialty care, supported by a dedicated nursing team.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((d) => (
            <article
              key={d.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                  {d.exp}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {d.name}
                </h3>
                <p className="text-sm text-accent">{d.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
