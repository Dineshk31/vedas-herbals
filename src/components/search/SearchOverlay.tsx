import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { PRODUCTS } from "@/data/products";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!isOpen) setQuery("");
  }, [isOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.ingredients.some((i) => i.toLowerCase().includes(q)) ||
        p.wellnessProfile.some((w) => w.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[95] bg-cream"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mx-auto max-w-3xl px-6 pt-24 sm:pt-32">
            <div className="flex items-center justify-between">
              <div className="flex flex-1 items-center gap-4 border-b-2 border-ink/20 pb-4">
                <Search size={22} className="text-ink/40" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search teas, ingredients, wellness..."
                  className="w-full bg-transparent font-display text-2xl sm:text-3xl text-ink placeholder:text-ink/30 outline-none"
                />
              </div>
              <button
                onClick={onClose}
                aria-label="Close search"
                className="ml-4 flex h-11 w-11 items-center justify-center rounded-full hover:bg-ink/5"
              >
                <X size={22} />
              </button>
            </div>

            <div className="mt-8 max-h-[60vh] overflow-y-auto pb-16">
              {query && results.length === 0 && (
                <p className="text-ink-soft/50 text-sm">No teas found for "{query}".</p>
              )}
              <ul className="space-y-1">
                {results.map((p) => (
                  <li key={p.id}>
                    <Link
                      to={`/shop/${p.slug}`}
                      onClick={onClose}
                      className="flex items-center justify-between gap-4 rounded-lg px-3 py-4 hover:bg-ink/5 transition-colors"
                    >
                      <div>
                        <p className="font-display text-lg text-ink">{p.name}</p>
                        <p className="text-xs text-ink-soft/50">{p.shortDescription}</p>
                      </div>
                      <span className="text-[10px] uppercase tracking-wide text-rust-600 shrink-0">
                        {p.collection}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              {!query && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {PRODUCTS.slice(0, 6).map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setQuery(p.name)}
                      className="rounded-full border border-ink/15 px-4 py-2 text-xs text-ink-soft hover:border-rust-600 hover:text-rust-600 transition-colors"
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
