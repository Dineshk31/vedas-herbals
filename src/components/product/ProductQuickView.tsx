import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, X } from "lucide-react";
import { useQuickView } from "@/context/QuickViewContext";
import { useCart } from "@/context/CartContext";
import { whatsappLinkForOrder } from "@/utils/whatsapp";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { PRODUCT_ART } from "@/components/graphics/ProductArt";
import { PRODUCT_IMAGES } from "@/data/productImages";

const COLOR_TEXT: Record<string, string> = {
  rust: "text-rust-700",
  moss: "text-moss-700",
  gold: "text-rust-700",
};

const COLOR_BG: Record<string, string> = {
  rust: "from-rust-100 via-rust-50 to-cream-light",
  moss: "from-[#DCE3C7] via-[#EEF1E0] to-cream-light",
  gold: "from-gold-soft/60 via-cream-deep to-cream-light",
};

export function ProductQuickView() {
  const { product, close } = useQuickView();
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  return (
    <AnimatePresence onExitComplete={() => setQty(1)}>
      {product && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-0 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            onClick={close}
          />

          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 grid w-full max-w-4xl grid-cols-1 sm:grid-cols-2 overflow-hidden rounded-t-[20px] sm:rounded-[4px] bg-cream-light max-h-[92vh] sm:max-h-[85vh]"
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-ink/10 hover:bg-ink/20 transition-colors"
            >
              <X size={16} />
            </button>

            <div className={`relative flex items-center justify-center bg-gradient-to-br ${COLOR_BG[product.color]} min-h-[220px] sm:min-h-full overflow-hidden`}>
              {(() => {
                const image = PRODUCT_IMAGES[product.slug];
                if (image) {
                  return <img src={image} alt={product.name} className="absolute inset-0 h-full w-full object-cover" />;
                }
                const Art = PRODUCT_ART[product.slug];
                return Art ? (
                  <Art className={`w-[52%] ${COLOR_TEXT[product.color]}`} style={{ opacity: 0.6 }} />
                ) : null;
              })()}
            </div>

            <div className="overflow-y-auto p-6 sm:p-9">
              <p className="text-[11px] tracking-[0.2em] uppercase text-rust-600 font-semibold">
                {product.collection}
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl text-ink">{product.name}</h2>
              <p className="mt-3 text-sm text-ink-soft/80 leading-relaxed">{product.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {product.wellnessProfile.map((w) => (
                  <span
                    key={w}
                    className="rounded-full border border-ink/15 px-3 py-1.5 text-[11px] text-ink-soft"
                  >
                    {w}
                  </span>
                ))}
              </div>

              <div className="mt-6 text-sm text-ink-soft/70">
                <span className="font-semibold text-ink">Ritual: </span>
                {product.ritual}
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex items-center gap-3 rounded-full border border-ink/15 px-3 py-2">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                    className="text-ink/60 hover:text-ink"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-5 text-center text-sm font-semibold">{qty}</span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    aria-label="Increase quantity"
                    className="text-ink/60 hover:text-ink"
                  >
                    <Plus size={14} />
                  </button>
                </div>
                <button
                  onClick={() => {
                    addItem(product, qty);
                    close();
                  }}
                  className="flex-1 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream hover:bg-ink-soft transition-colors"
                >
                  Add to Cart
                </button>
              </div>

              <div className="mt-3">
                <WhatsAppButton
                  href={whatsappLinkForOrder(product, qty)}
                  label="Buy on WhatsApp"
                  variant="outline"
                  className="w-full justify-center"
                />
              </div>

              <Link
                to={`/shop/${product.slug}`}
                onClick={close}
                className="mt-5 inline-block text-xs uppercase tracking-wide text-ink/50 hover:text-rust-600 underline underline-offset-4"
              >
                View full details →
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
