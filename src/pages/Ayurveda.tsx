import { motion } from "framer-motion";
import { BotanicalLibrary } from "@/components/home/BotanicalLibrary";
import { MandalaRing } from "@/components/graphics/Botanicals";

export function Ayurveda() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className="relative overflow-hidden pt-32 sm:pt-44 pb-16 sm:pb-24 text-center">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 text-rust-500/10">
          <MandalaRing className="h-full w-full" />
        </div>
        <div className="relative mx-auto max-w-2xl px-5">
          <p className="text-xs tracking-[0.3em] uppercase text-rust-600 font-semibold mb-5">
            Ayurveda &amp; Tradition
          </p>
          <h1 className="font-display text-4xl sm:text-6xl leading-[1.08] text-ink">
            The wisdom
            <br />
            behind the <span className="italic text-rust-600">cup</span>
          </h1>
          <p className="mt-6 text-sm sm:text-base text-ink-soft/70 leading-relaxed max-w-lg mx-auto">
            Ourva Herbal Teas draws on Indian herbal tradition — whole
            botanicals, brewed simply, the way they have been for
            generations. Each cup carries a single, recognisable ingredient
            rather than a blend of extracts.
          </p>
        </div>
      </section>

      <BotanicalLibrary showCta={false} />

      <section className="py-20 sm:py-28 bg-cream-light">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl text-ink">A note on tradition</h2>
          <p className="mt-4 text-sm text-ink-soft/65 leading-relaxed">
            The associations shared here reflect traditional Indian herbal
            practice, passed down through generations rather than
            manufactured claims. Ourva Herbal Teas is a daily wellness
            ritual, not a medical treatment — if you have a specific health
            condition, please consult a qualified professional.
          </p>
        </div>
      </section>
    </motion.div>
  );
}
