import { Link } from "react-router-dom";
import { MapPin, MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/graphics/InstagramIcon";
import { SITE } from "@/config/site";
import { whatsappLinkGeneral } from "@/utils/whatsapp";

const FOOTER_LINKS = [
  {
    heading: "Shop",
    links: [
      { label: "All Teas", to: "/shop" },
      { label: "The Herbal Collection", to: "/shop#herbal-collection" },
      { label: "The Warm Cup", to: "/shop#warm-cup" },
      { label: "Wishlist", to: "/wishlist" },
    ],
  },
  {
    heading: "Discover",
    links: [
      { label: "Find Your Ritual", to: "/rituals" },
      { label: "The Wisdom Behind the Cup", to: "/ayurveda" },
      { label: "Our Story", to: "/our-story" },
      { label: "Journal", to: "/journal" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: SITE.whatsapp.primaryDisplay, href: whatsappLinkGeneral(SITE.whatsapp.primary) },
      { label: SITE.whatsapp.secondaryDisplay, href: whatsappLinkGeneral(SITE.whatsapp.secondary) },
      { label: `@${SITE.instagramHandle}`, href: SITE.instagramUrl },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-bark-deep text-cream overflow-hidden">
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-[420px] w-[420px] rounded-full bg-rust-700/20 blur-3xl" />
      <div className="pointer-events-none absolute -top-32 -left-16 h-[320px] w-[320px] rounded-full bg-moss-700/15 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 pt-20 sm:pt-28 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-14 lg:gap-8 pb-16 border-b border-cream/10">
          <div>
            <h2 className="font-display text-5xl sm:text-6xl leading-[0.95]">OURVA</h2>
            <p className="mt-4 text-cream/60 max-w-xs text-sm leading-relaxed">
              {SITE.tagline}. {SITE.subTagline}.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href={whatsappLinkGeneral()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-rust-600 hover:bg-rust-500 transition-colors px-5 py-3 text-sm font-semibold"
              >
                <MessageCircle size={16} /> Order on WhatsApp
              </a>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 hover:border-cream/60 transition-colors"
              >
                <InstagramIcon size={17} />
              </a>
            </div>
          </div>

          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs tracking-[0.22em] uppercase text-cream/40 font-semibold mb-5">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {"to" in link ? (
                      <Link to={link.to} className="text-cream/80 hover:text-gold-soft transition-colors text-sm">
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-cream/80 hover:text-gold-soft transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8">
          <div className="flex items-start gap-2 text-cream/50 text-xs leading-relaxed max-w-md">
            <MapPin size={15} className="mt-0.5 shrink-0" />
            <span>
              {SITE.address.full}
              <br />
              {SITE.hours.map((h) => `${h.label}: ${h.time}`).join(" · ")}
            </span>
          </div>
          <p className="text-cream/30 text-xs">
            © {new Date().getFullYear()} Ourva Herbal Teas. Crafted with tradition.
          </p>
        </div>
      </div>
    </footer>
  );
}
