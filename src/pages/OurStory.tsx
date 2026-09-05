import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import { SITE } from "@/config/site";
import { DailyRitualTimeline } from "@/components/home/DailyRitualTimeline";
import { LeafOutline } from "@/components/graphics/Botanicals";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { whatsappLinkGeneral } from "@/utils/whatsapp";

export function OurStory() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className="relative overflow-hidden pt-32 sm:pt-44 pb-20 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, rotate: -8 }}
          animate={{ opacity: 1, rotate: -4 }}
          transition={{ duration: 1 }}
          className="pointer-events-none absolute left-[4%] top-[20%] w-24 sm:w-36 text-rust-400/25"
        >
          <LeafOutline className="w-full" />
        </motion.div>
        <div className="relative mx-auto max-w-2xl px-5 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-rust-600 font-semibold mb-5">Our Story</p>
          <h1 className="font-display text-4xl sm:text-6xl leading-[1.08] text-ink">
            A cup carried forward,
            <br />
            not <span className="italic text-rust-600">reinvented.</span>
          </h1>
        </div>
      </section>

      <section className="py-6 sm:py-10">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 space-y-8 text-center">
          <p className="text-base sm:text-lg text-ink-soft/75 leading-relaxed">
            Long before wellness became a trend, Indian households were
            steeping bael leaf, arjuna bark, lemongrass and mint into daily
            infusions — not for ceremony, but for the ordinary business of
            feeling well.
          </p>
          <p className="text-base sm:text-lg text-ink-soft/75 leading-relaxed">
            Vedas Herbal Tea continues that practice from Visakhapatnam:
            whole botanicals, brewed simply, without shortcuts or
            extracts. Six infusions, each carrying a single tradition —
            {" "}Bilva, Arjuna, Raavi, Lemongrass, Pudina, and Thati Bellam
            Coffee.
          </p>
          <p className="text-base sm:text-lg text-ink-soft/75 leading-relaxed">
            The idea is a small one: that a daily cup, chosen with intent,
            is enough to build a ritual worth keeping.
          </p>
        </div>
      </section>

      <DailyRitualTimeline />

      <section className="py-20 sm:py-28 bg-bark text-cream">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl">Visit Us</h2>
          <div className="mt-6 flex items-start justify-center gap-2 text-cream/70 text-sm max-w-md mx-auto">
            <MapPin size={16} className="mt-0.5 shrink-0" />
            <span>{SITE.address.full}</span>
          </div>
          <div className="mt-3 flex items-center justify-center gap-2 text-cream/70 text-sm">
            <Clock size={16} className="shrink-0" />
            <span>{SITE.hours.map((h) => `${h.label}: ${h.time}`).join(" · ")}</span>
          </div>
          <div className="mt-8">
            <WhatsAppButton href={whatsappLinkGeneral()} variant="light" size="lg" />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
