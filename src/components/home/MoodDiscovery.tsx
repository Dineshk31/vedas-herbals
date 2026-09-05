import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MOOD_LABELS, PRODUCTS, type MoodTag } from "@/data/products";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LeafOutline } from "@/components/graphics/Botanicals";

const MOOD_ORDER: MoodTag[] = ["refresh", "unwind", "digest", "recharge", "cool-down", "daily-wellness"];

const MOOD_STYLE: Record<MoodTag, string> = {
  refresh: "bg-moss-400/15 text-moss-700",
  unwind: "bg-rust-100 text-rust-700",
  digest: "bg-gold-soft/30 text-rust-700",
  recharge: "bg-rust-100 text-rust-700",
  "cool-down": "bg-moss-400/15 text-moss-700",
  "daily-wellness": "bg-cream-deep text-ink",
};

export function MoodDiscovery() {
  return (
    <section className="relative py-24 sm:py-32 bg-cream-light">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Discover by Mood"
          align="center"
          title={
            <>
              What are you <span className="italic text-rust-600">in the mood</span> for?
            </>
          }
          description="Let how you want to feel guide your next cup."
          className="mb-14"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {MOOD_ORDER.map((mood, i) => {
            const matches = PRODUCTS.filter((p) => p.moods.includes(mood));
            return (
              <motion.div
                key={mood}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Link
                  to={`/shop?mood=${mood}`}
                  className={`group relative flex h-40 sm:h-48 flex-col justify-between overflow-hidden rounded-[4px] p-5 sm:p-6 transition-transform duration-400 hover:-translate-y-1 ${MOOD_STYLE[mood]}`}
                >
                  <LeafOutline className="absolute -right-3 -bottom-4 w-16 sm:w-20 opacity-20 group-hover:opacity-30 group-hover:rotate-6 transition-all duration-500" />
                  <span className="text-lg sm:text-xl font-display">{MOOD_LABELS[mood]}</span>
                  <div className="relative z-10">
                    <p className="text-[11px] uppercase tracking-wide opacity-70 line-clamp-1">
                      {matches.map((m) => m.name).join(", ")}
                    </p>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      Discover <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
