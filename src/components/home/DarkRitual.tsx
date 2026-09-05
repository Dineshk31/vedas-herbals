import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LeafOutline, MandalaRing } from "@/components/graphics/Botanicals";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function DarkRitual() {
  return (
    <section className="relative overflow-hidden bg-bark py-32 sm:py-44 text-cream">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 text-gold-soft/10">
        <MandalaRing className="h-full w-full" />
      </div>
      <motion.div
        initial={{ opacity: 0, rotate: -8 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute left-[6%] top-[18%] w-24 sm:w-32 text-moss-400/30"
      >
        <LeafOutline className="w-full" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, rotate: 10 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.15 }}
        className="pointer-events-none absolute right-[8%] bottom-[16%] w-20 sm:w-28 text-rust-300/25"
      >
        <LeafOutline className="w-full" />
      </motion.div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.3em] uppercase text-gold-soft font-semibold mb-6"
        >
          A Moment, Not a Task
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl leading-[1.08]"
        >
          Some rituals deserve
          <br />
          to <span className="italic text-gold-soft">slow down.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-7 text-cream/65 text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
        >
          Not every cup needs to be quick. Vedas Lemongrass Tea is brewed for
          the evenings that ask you to pause — a bright, calming infusion to
          let the day loosen its grip.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10"
        >
          <MagneticButton
            as={Link}
            to="/shop/lemongrass-tea"
            className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-8 py-4 text-sm font-semibold tracking-wide hover:bg-cream hover:text-ink transition-colors duration-300"
          >
            Discover Lemongrass Tea
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
