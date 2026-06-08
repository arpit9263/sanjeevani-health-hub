import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground text-background/90">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Logo className="h-12 w-12 rounded-md bg-white p-1 object-contain" />
              <div>
                <div className="font-display text-lg font-bold text-white">Sanjeevani</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-background/60">
                  ICU &amp; Hospital
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-background/70 max-w-xs">
              Compassionate critical and multi-specialty care, available 24×7
              for your family.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-background/70">
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#doctors" className="hover:text-white">Our Doctors</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-background/70">
              <li>123 Health Avenue, City Center</li>
              <li>+91 12345 67890</li>
              <li>care@sanjeevanihospital.in</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-background/60 sm:flex-row">
          <span>© {new Date().getFullYear()} Sanjeevani ICU &amp; Hospital. All rights reserved.</span>
          <span>Made with care for our community</span>
        </div>
      </div>
    </footer>
  );
}
