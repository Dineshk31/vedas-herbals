import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LeafOutline } from "@/components/graphics/Botanicals";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { whatsappLinkGeneral } from "@/utils/whatsapp";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_50%_120%,_#F3E3C7_0%,_#F6EEDF_60%)] py-28 sm:py-40">
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: -12 }}
        whileInView={{ opacity: 1, y: 0, rotate: -6 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute left-[8%] top-[15%] w-24 sm:w-32 text-rust-400/30"
      >
        <LeafOutline className="w-full" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: 12 }}
        whileInView={{ opacity: 1, y: 0, rotate: 8 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.15 }}
        className="pointer-events-none absolute right-[10%] bottom-[18%] w-20 sm:w-28 text-moss-500/25"
      >
        <LeafOutline className="w-full" />
      </motion.div>

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-rust-600 font-semibold mb-6">
          Begin Your Ritual
        </p>
        <h2 className="font-display text-4xl sm:text-6xl leading-[1.08] text-ink">
          Your daily cup
          <br />
          is <span className="italic text-rust-600">waiting.</span>
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton
            as={Link}
            to="/shop"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-semibold tracking-wide text-cream hover:bg-ink-soft transition-colors"
          >
            Shop the Collection
          </MagneticButton>
          <WhatsAppButton href={whatsappLinkGeneral()} variant="outline" size="lg" />
        </div>
      </div>
    </section>
  );
}
