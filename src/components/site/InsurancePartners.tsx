const partners = [
  "Star Health", "HDFC ERGO", "ICICI Lombard", "Bajaj Allianz", "Niva Bupa",
  "Tata AIG", "Care Health", "Aditya Birla", "New India", "Oriental",
  "United India", "National Insurance", "CGHS", "ECHS", "Ayushman Bharat",
];

export function InsurancePartners() {
  return (
    <section className="border-y border-border bg-secondary/40 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_2fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Cashless & TPA Network
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold text-foreground md:text-3xl">
              Empanelled with 80+ insurers & corporates
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Dedicated TPA desk for pre-authorisation, claim processing and
              corporate health programs.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5">
            {partners.map((p) => (
              <div
                key={p}
                className="flex h-16 items-center justify-center rounded-xl border border-border bg-card px-3 text-center text-xs font-semibold text-foreground/80 transition-colors hover:border-primary/40 hover:text-primary"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
