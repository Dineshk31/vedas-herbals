import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BOTANICALS } from "@/data/botanicals";
import { PRODUCTS } from "@/data/products";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LeafOutline } from "@/components/graphics/Botanicals";
import { PRODUCT_IMAGES } from "@/data/productImages";

const COLOR_CLASSES: Record<string, { bg: string; text: string }> = {
  rust: { bg: "bg-rust-100", text: "text-rust-700" },
  moss: { bg: "bg-[#DCE3C7]", text: "text-moss-700" },
  gold: { bg: "bg-gold-soft/40", text: "text-rust-700" },
};

interface BotanicalLibraryProps {
  limit?: number;
  showCta?: boolean;
}

export function BotanicalLibrary({ limit, showCta = true }: BotanicalLibraryProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const items = limit ? BOTANICALS.slice(0, limit) : BOTANICALS;

  return (
    <section className="py-24 sm:py-32 bg-cream">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="The Wisdom Behind the Cup"
            title={
              <>
                Botanicals of <span className="italic text-rust-600">Vedas</span>
              </>
            }
            description="Each infusion begins with a single, recognisable botanical — explore the tradition behind every leaf."
          />
          {showCta && (
            <Link
              to="/ayurveda"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-rust-600 transition-colors shrink-0"
            >
              View full library <ArrowRight size={15} />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {items.map((b, i) => {
            const isActive = activeId === b.id;
            const colors = COLOR_CLASSES[b.color];
            const products = PRODUCTS.filter((p) => b.productSlugs.includes(p.slug));
            const image = PRODUCT_IMAGES[b.productSlugs[0]];
            return (
              <motion.button
                key={b.id}
                onClick={() => setActiveId(isActive ? null : b.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                layout
                className={`group relative overflow-hidden rounded-[4px] p-5 sm:p-6 text-left ${colors.bg} transition-all duration-300`}
              >
                {image ? (
                  <>
                    <img
                      src={image}
                      alt={b.name}
                      className="absolute inset-0 h-full w-full object-cover opacity-25 transition-opacity duration-300 group-hover:opacity-30"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, var(--color-cream) 20%, transparent 75%)" }}
                    />
                  </>
                ) : (
                  <LeafOutline
                    className={`absolute -right-4 -bottom-6 w-20 sm:w-24 opacity-15 ${colors.text} transition-transform duration-500 ${isActive ? "rotate-6 scale-110" : ""}`}
                  />
                )}
                <div className="relative z-10">
                  <h3 className="font-display text-lg sm:text-xl text-ink">{b.name}</h3>
                  {b.localName && (
                    <p className="text-[11px] uppercase tracking-wide text-ink-soft/50 mt-0.5">{b.localName}</p>
                  )}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 text-xs text-ink-soft/70 leading-relaxed">
                          {b.traditionalAssociation}
                        </p>
                        {b.benefits.length > 0 && (
                          <ul className="mt-3 space-y-1">
                            {b.benefits.map((benefit) => (
                              <li
                                key={benefit}
                                className="text-xs text-ink-soft/70 leading-relaxed flex items-start gap-1.5"
                              >
                                <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${colors.text}`} />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        )}
                        {products.length > 0 && (
                          <p className="mt-3 text-[11px] uppercase tracking-wide text-rust-600 font-semibold">
                            Found in: {products.map((p) => p.name).join(", ")}
                          </p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {!isActive && (
                    <span className="mt-3 inline-block text-[11px] uppercase tracking-wide text-ink-soft/40">
                      Tap to explore
                    </span>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>

        {showCta && (
          <Link
            to="/ayurveda"
            className="sm:hidden mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-ink"
          >
            View full library <ArrowRight size={15} />
          </Link>
        )}
      </div>
    </section>
  );
}
