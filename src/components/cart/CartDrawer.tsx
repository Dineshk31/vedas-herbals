import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { whatsappLinkForCart } from "@/utils/whatsapp";
import { Link } from "react-router-dom";
import { PRODUCT_ART } from "@/components/graphics/ProductArt";
import { PRODUCT_IMAGES } from "@/data/productImages";

const COLOR_BG: Record<string, string> = {
  rust: "bg-rust-100",
  moss: "bg-[#DCE3C7]",
  gold: "bg-gold-soft/50",
};

const COLOR_TEXT: Record<string, string> = {
  rust: "text-rust-700",
  moss: "text-moss-700",
  gold: "text-rust-700",
};

export function CartDrawer() {
  const { isOpen, closeCart, lines, count, setQuantity, removeItem } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[90]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
            onClick={closeCart}
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-cream-light flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-ink/10">
              <h2 className="font-display text-2xl text-ink flex items-center gap-2">
                <ShoppingBag size={18} /> Your Cart
              </h2>
              <button onClick={closeCart} aria-label="Close cart" className="text-ink/60 hover:text-ink">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {lines.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center gap-3">
                  <p className="text-ink-soft/60 text-sm">Your cart is empty.</p>
                  <Link
                    to="/shop"
                    onClick={closeCart}
                    className="text-sm font-semibold text-rust-600 underline underline-offset-4"
                  >
                    Explore the collection
                  </Link>
                </div>
              ) : (
                <ul className="space-y-6">
                  {lines.map(({ product, quantity }) => (
                    <li key={product.id} className="flex gap-4">
                      <div
                        className={`relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-[3px] ${COLOR_BG[product.color]}`}
                      >
                        {(() => {
                          const image = PRODUCT_IMAGES[product.slug];
                          if (image) {
                            return <img src={image} alt={product.name} className="h-full w-full object-cover" />;
                          }
                          const Art = PRODUCT_ART[product.slug];
                          return Art ? (
                            <Art className={`w-10 h-10 ${COLOR_TEXT[product.color]}`} style={{ opacity: 0.65 }} />
                          ) : null;
                        })()}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-display text-base text-ink">{product.name}</h3>
                          <button
                            onClick={() => removeItem(product.id)}
                            aria-label="Remove item"
                            className="text-ink/30 hover:text-rust-600"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                        <p className="mt-1 text-xs text-ink-soft/50">{product.collection}</p>
                        <div className="mt-3 flex items-center gap-3 rounded-full border border-ink/15 px-2.5 py-1.5 w-fit">
                          <button
                            onClick={() => setQuantity(product.id, quantity - 1)}
                            className="text-ink/60 hover:text-ink"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-4 text-center text-xs font-semibold">{quantity}</span>
                          <button
                            onClick={() => setQuantity(product.id, quantity + 1)}
                            className="text-ink/60 hover:text-ink"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {lines.length > 0 && (
              <div className="border-t border-ink/10 px-6 py-6 space-y-3">
                <p className="text-xs text-ink-soft/50">
                  {count} item{count !== 1 ? "s" : ""} · Pricing shared on WhatsApp
                </p>
                <a
                  href={whatsappLinkForCart(lines)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-rust-600 hover:bg-rust-700 transition-colors px-6 py-4 text-sm font-semibold text-cream-light"
                >
                  Order via WhatsApp
                </a>
              </div>
            )}
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
