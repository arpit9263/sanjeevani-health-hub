import { useEffect, useState } from "react";
import { ArrowUp, Facebook, Instagram, Linkedin, Youtube, MessageCircle, Plus, X } from "lucide-react";

export function FloatingActions() {
  const [open, setOpen] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const socials = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook", bg: "bg-[#1877F2]" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram", bg: "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", bg: "bg-[#0A66C2]" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube", bg: "bg-[#FF0000]" },
    { icon: MessageCircle, href: "https://wa.me/911234567890", label: "WhatsApp", bg: "bg-[#25D366]" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <div className="flex flex-col items-end gap-2">
        {socials.map(({ icon: Icon, href, label, bg }, idx) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`group relative h-11 w-11 ${bg} flex items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 ${
              open
                ? "translate-y-0 scale-100 opacity-100"
                : "pointer-events-none translate-y-3 scale-75 opacity-0"
            }`}
            style={{ transitionDelay: open ? `${idx * 40}ms` : "0ms" }}
          >
            <Icon className="h-5 w-5" />
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-[11px] font-semibold text-background opacity-0 transition-opacity group-hover:opacity-100">
              {label}
            </span>
          </a>
        ))}
      </div>

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle social menu"
        className="flex h-12 w-12 items-center justify-center rounded-full text-primary-foreground shadow-xl transition-transform hover:scale-110"
        style={{ backgroundImage: "var(--gradient-brand)" }}
      >
        {open ? <X className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
      </button>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-primary shadow-lg transition-all hover:bg-secondary ${
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}
