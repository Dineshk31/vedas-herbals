import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MOOD_LABELS, type MoodTag } from "@/data/products";
import { MandalaRing } from "@/components/graphics/Botanicals";

const PREVIEW: MoodTag[] = ["refresh", "unwind", "digest", "recharge"];

export function RitualFinderTeaser() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 sm:py-36 text-cream">
      <motion.div
        initial={{ opacity: 0, rotate: -10 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] text-gold-soft/10"
      >
        <MandalaRing className="h-full w-full" />
      </motion.div>

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-gold-soft font-semibold mb-5">
            Find Your Ourva Ritual
          </p>
          <h2 className="font-display text-4xl sm:text-5xl leading-[1.08]">
            What does your cup need
            <br />
            to do for you <span className="italic text-gold-soft">today?</span>
          </h2>
          <p className="mt-6 text-cream/60 max-w-md leading-relaxed">
            Answer one question. Discover the infusion that fits your moment
            — not a diagnosis, just a gentle recommendation.
          </p>
          <Link
            to="/rituals"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-cream px-8 py-4 text-sm font-semibold text-ink hover:bg-cream-light transition-colors"
          >
            Start the Ritual Finder <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {PREVIEW.map((mood, i) => (
            <motion.div
              key={mood}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-[4px] border border-cream/15 px-5 py-8 text-center hover:border-gold-soft/60 hover:bg-cream/5 transition-colors"
            >
              <span className="font-display text-xl">{MOOD_LABELS[mood]}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
