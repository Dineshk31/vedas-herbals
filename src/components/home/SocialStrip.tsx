import { motion } from "framer-motion";
import { SITE } from "@/config/site";
import { InstagramIcon } from "@/components/graphics/InstagramIcon";

export function SocialStrip() {
  return (
    <section className="relative overflow-hidden bg-cream-deep py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-8">
        <div className="text-center sm:text-left">
          <p className="text-xs tracking-[0.28em] uppercase text-rust-600 font-semibold mb-2">
            Follow the Ritual
          </p>
          <h3 className="font-display text-3xl sm:text-4xl text-ink">@{SITE.instagramHandle}</h3>
        </div>
        <motion.a
          href={SITE.instagramUrl}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-cream hover:bg-ink-soft transition-colors"
        >
          <InstagramIcon size={16} /> Follow on Instagram
        </motion.a>
      </div>
    </section>
  );
}
