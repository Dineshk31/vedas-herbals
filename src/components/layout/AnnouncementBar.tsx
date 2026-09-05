import { SITE } from "@/config/site";

const MESSAGES = [
  "Your Daily Cup of Wellness",
  "100% Natural Ingredients · No Chemicals",
  `Order on WhatsApp — ${SITE.whatsapp.primaryDisplay}`,
  "Authentic Taste of Timeless Tradition",
];

export function AnnouncementBar() {
  const loop = [...MESSAGES, ...MESSAGES];
  return (
    <div className="fixed top-0 inset-x-0 z-[60] overflow-hidden bg-ink text-cream/80 h-8 flex items-center">
      <div className="flex animate-[marquee_28s_linear_infinite] whitespace-nowrap">
        {loop.map((msg, i) => (
          <span key={i} className="mx-6 text-[11px] tracking-[0.18em] uppercase font-medium">
            {msg}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
