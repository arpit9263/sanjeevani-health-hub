import { Logo } from "./Logo";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube, Twitter, Ambulance } from "lucide-react";

const cols = [
  {
    title: "Specialties",
    links: ["Cardiology", "Neurosciences", "Critical Care", "Orthopedics", "Mother & Child", "Oncology", "Renal Sciences", "Diagnostics"],
  },
  {
    title: "Patient Care",
    links: ["Book Appointment", "International Patients", "Insurance & TPA", "Health Packages", "Second Opinion", "Tele-consultation", "Home Care", "Pharmacy"],
  },
  {
    title: "Corporate",
    links: ["About Us", "Leadership", "Careers", "Newsroom", "Investor Relations", "Franchise Opportunity", "Sanjeevani Foundation", "Awards"],
  },
  {
    title: "Resources",
    links: ["Health Insights", "Patient Rights", "Privacy Policy", "Terms of Use", "Sitemap", "Grievance Redressal", "Contact Us", "Feedback"],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground text-background/85">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 md:grid-cols-[1.5fr_1fr] md:items-center lg:px-8">
          <div>
            <div className="font-display text-2xl font-bold text-white">
              Stay informed with Sanjeevani Health Insights
            </div>
            <p className="mt-2 text-sm text-background/70 max-w-xl">
              Monthly newsletter from our clinicians — preventive tips, latest
              treatments and stories from across our network.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              placeholder="you@example.com"
              required
              className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-white/40"
            />
            <button
              type="submit"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:scale-[1.03] transition-transform"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_3fr]">
          <div>
            <div className="flex items-center gap-3">
              <Logo className="h-14 w-14 rounded-md bg-white p-1 object-contain" />
              <div>
                <div className="font-display text-xl font-bold text-white">Sanjeevani</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-background/60">
                  ICU &amp; Hospital Group
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm text-background/70 max-w-sm">
              A pan-India multi-specialty hospital network — delivering
              compassionate, accredited and accessible healthcare across 32
              cities.
            </p>

            <div className="mt-6 space-y-3 text-sm text-background/80">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-white/60" />
                Corporate Office, 123 Health Avenue, City Center, India
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-white/60" /> +91 12345 67890
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-white/60" /> care@sanjeevanihospital.in
              </div>
              <div className="flex items-center gap-3 text-white">
                <Ambulance className="h-4 w-4" />
                <span className="font-semibold">Ambulance: 108 · Emergency: 24×7</span>
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              {[Facebook, Instagram, Linkedin, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-background/80 hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="font-display text-sm font-semibold text-white">{c.title}</h4>
                <ul className="mt-4 space-y-2.5 text-sm text-background/70">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="hover:text-white">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-background/60 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Sanjeevani ICU &amp; Hospital Group. All rights reserved. CIN: U85100DL2005PLC123456</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
