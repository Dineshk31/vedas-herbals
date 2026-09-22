import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, RotateCcw } from "lucide-react";
import { MOOD_LABELS, PRODUCTS, type MoodTag } from "@/data/products";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { whatsappLinkForProduct } from "@/utils/whatsapp";
import { LeafOutline } from "@/components/graphics/Botanicals";

const MOODS: { key: MoodTag; sub: string }[] = [
  { key: "refresh", sub: "Something bright to lift the moment" },
  { key: "unwind", sub: "A slower cup, at the end of the day" },
  { key: "digest", sub: "Settle and steady, after a meal" },
  { key: "recharge", sub: "Energy and stamina for what's ahead" },
  { key: "cool-down", sub: "Relief from the heat of the day" },
  { key: "daily-wellness", sub: "A steady, everyday ritual" },
];

export function RitualFinder() {
  const [selected, setSelected] = useState<MoodTag | null>(null);
  const match = selected ? PRODUCTS.find((p) => p.moods.includes(selected)) : null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-[80vh] pt-28 sm:pt-36 pb-24"
    >
      <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-rust-600 font-semibold mb-5">
          Find Your Ourva Ritual
        </p>

        <AnimatePresence mode="wait">
          {!match ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="font-display text-3xl sm:text-5xl leading-tight text-ink">
                What does your cup need
                <br />
                to do for you <span className="italic text-rust-600">today?</span>
              </h1>
              <p className="mt-5 text-sm text-ink-soft/60 max-w-md mx-auto">
                A gentle recommendation, not a diagnosis — choose what fits your moment.
              </p>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {MOODS.map((m, i) => (
                  <motion.button
                    key={m.key}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    onClick={() => setSelected(m.key)}
                    className="group relative overflow-hidden rounded-[4px] border border-ink/12 px-6 py-7 text-left hover:border-rust-500 hover:bg-rust-50/40 transition-colors"
                  >
                    <LeafOutline className="absolute -right-3 -bottom-4 w-16 opacity-0 group-hover:opacity-15 transition-opacity duration-300 text-rust-600" />
                    <span className="font-display text-xl text-ink">{MOOD_LABELS[m.key]}</span>
                    <p className="mt-1 text-xs text-ink-soft/55">{m.sub}</p>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-sm text-ink-soft/55 mb-2">For {MOOD_LABELS[selected!]}, we suggest</p>
              <h1 className="font-display text-4xl sm:text-6xl text-ink">{match.name}</h1>
              <p className="mt-5 max-w-md mx-auto text-sm text-ink-soft/70 leading-relaxed">
                {match.description}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {match.wellnessProfile.map((w) => (
                  <span key={w} className="rounded-full border border-ink/15 px-3.5 py-1.5 text-xs text-ink-soft">
                    {w}
                  </span>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to={`/shop/${match.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-cream hover:bg-ink-soft transition-colors"
                >
                  Explore Your Tea <ArrowRight size={16} />
                </Link>
                <WhatsAppButton href={whatsappLinkForProduct(match)} variant="outline" size="lg" />
              </div>
              <button
                onClick={() => setSelected(null)}
                className="mt-8 inline-flex items-center gap-1.5 text-xs uppercase tracking-wide text-ink-soft/50 hover:text-rust-600"
              >
                <RotateCcw size={13} /> Start over
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
