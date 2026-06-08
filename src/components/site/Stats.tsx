const stats = [
  { value: "20+", label: "Years of Trust" },
  { value: "50K+", label: "Patients Treated" },
  { value: "40+", label: "Expert Doctors" },
  { value: "24/7", label: "Emergency Care" },
];

export function Stats() {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-3xl font-bold text-primary md:text-4xl">
              {s.value}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
