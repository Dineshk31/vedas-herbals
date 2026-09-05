import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { COLLECTIONS, PRODUCTS } from "@/data/products";
import { LeafOutline } from "@/components/graphics/Botanicals";

const THEMES = [
  { bg: "bg-rust-600", accent: "text-gold-soft", leaf: "text-rust-300/30" },
  { bg: "bg-moss-700", accent: "text-gold-soft", leaf: "text-moss-400/30" },
];

export function Collections() {
  return (
    <section id="collections" className="flex flex-col">
      {COLLECTIONS.map((collection, i) => {
        const products = PRODUCTS.filter((p) => collection.productSlugs.includes(p.slug));
        const theme = THEMES[i % THEMES.length];
        return (
          <div
            key={collection.id}
            id={collection.id}
            className={`relative min-h-[85vh] ${theme.bg} text-cream flex items-center overflow-hidden`}
          >
            <motion.div
              initial={{ opacity: 0, rotate: i % 2 === 0 ? -10 : 10 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className={`pointer-events-none absolute ${i % 2 === 0 ? "right-[6%]" : "left-[6%]"} top-1/2 -translate-y-1/2 w-64 sm:w-96 ${theme.leaf}`}
            >
              <LeafOutline className="w-full" />
            </motion.div>

            <div className="relative mx-auto max-w-[1200px] w-full px-5 sm:px-8 py-20">
              <p className={`text-xs tracking-[0.3em] uppercase font-semibold mb-5 ${theme.accent}`}>
                Collection {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="font-display text-4xl sm:text-6xl leading-[1.05] max-w-xl">
                {collection.name}
              </h2>
              <p className="mt-5 max-w-md text-cream/65 leading-relaxed">{collection.description}</p>

              <div className="mt-10 flex flex-wrap gap-2.5">
                {products.map((p) => (
                  <Link
                    key={p.id}
                    to={`/shop/${p.slug}`}
                    className="rounded-full border border-cream/25 px-4 py-2 text-xs sm:text-sm hover:bg-cream hover:text-ink transition-colors"
                  >
                    {p.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/shop"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all"
              >
                Shop {collection.name} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}
