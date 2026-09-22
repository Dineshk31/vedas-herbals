import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { COLLECTIONS, MOOD_LABELS, PRODUCTS, type MoodTag } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const MOODS = Object.keys(MOOD_LABELS) as MoodTag[];

export function Shop() {
  const [params, setParams] = useSearchParams();
  const activeMood = params.get("mood") as MoodTag | null;
  const [collectionFilter, setCollectionFilter] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (activeMood && !p.moods.includes(activeMood)) return false;
      if (collectionFilter && p.collection !== collectionFilter) return false;
      return true;
    });
  }, [activeMood, collectionFilter]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-28 sm:pt-36 pb-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Shop"
          title={
            <>
              The Ourva <span className="italic text-rust-600">Collection</span>
            </>
          }
          description="Herbal infusions brewed from whole botanicals — no online payment, order directly on WhatsApp."
          className="mb-12"
        />

        <div className="flex flex-wrap items-center gap-2.5 mb-12">
          <button
            onClick={() => setCollectionFilter(null)}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide border transition-colors ${
              !collectionFilter ? "bg-ink text-cream border-ink" : "border-ink/20 text-ink-soft hover:border-ink/50"
            }`}
          >
            All
          </button>
          {COLLECTIONS.map((c) => (
            <button
              key={c.id}
              onClick={() => setCollectionFilter(c.name === collectionFilter ? null : c.name)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide border transition-colors ${
                collectionFilter === c.name ? "bg-ink text-cream border-ink" : "border-ink/20 text-ink-soft hover:border-ink/50"
              }`}
            >
              {c.name}
            </button>
          ))}
          <span className="mx-1 h-4 w-px bg-ink/15" />
          {MOODS.map((m) => (
            <button
              key={m}
              onClick={() => setParams(activeMood === m ? {} : { mood: m })}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide border transition-colors ${
                activeMood === m ? "bg-rust-600 text-cream-light border-rust-600" : "border-ink/20 text-ink-soft hover:border-rust-400"
              }`}
            >
              {MOOD_LABELS[m]}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-ink-soft/60 text-sm">No teas match this filter yet.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-12">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
