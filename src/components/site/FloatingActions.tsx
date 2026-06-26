import { Phone, MessageCircle, ArrowUp,Instagram } from "lucide-react";
import { hospitalInfo, telHref, whatsappHref } from "@/lib/siteData";

const actions = [
  { icon: Instagram, href: hospitalInfo.instagram, label: "Instagram",  bg: "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]" },
  { icon: Phone, href: telHref(hospitalInfo.emergency), label: "Emergency", bg: "bg-destructive" },
  { icon: MessageCircle, href: whatsappHref(hospitalInfo.whatsapp), label: "WhatsApp", bg: "bg-[#25D366]" },
];

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {actions.map(({ icon: Icon, href, label, bg }) => (
        <a key={label} href={href} aria-label={label} className={`group relative flex h-11 w-11 items-center justify-center rounded-full ${bg} text-white shadow-lg transition-transform hover:scale-110`}>
          <Icon className="h-5 w-5" />
          <span className="absolute right-14 whitespace-nowrap rounded-full bg-foreground px-3 py-1 text-xs font-semibold text-background opacity-0 shadow transition-opacity group-hover:opacity-100">{label}</span>
        </a>
      ))}
      <a href="#home" aria-label="Back to top" className="flex h-12 w-12 items-center justify-center rounded-full text-primary-foreground shadow-xl transition-transform hover:scale-110" style={{ backgroundImage: "var(--gradient-brand)" }}>
        <ArrowUp className="h-5 w-5" />
      </a>
    </div>
  );
}
