import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Minus, Plus } from "lucide-react";
import { getProductBySlug, getRelatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { whatsappLinkForOrder } from "@/utils/whatsapp";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ProductCard } from "@/components/product/ProductCard";
import { LeafOutline, SteamWisp } from "@/components/graphics/Botanicals";
import { PRODUCT_ART } from "@/components/graphics/ProductArt";
import { PRODUCT_IMAGES } from "@/data/productImages";

const COLOR_BG: Record<string, string> = {
  rust: "from-rust-100 via-rust-50 to-cream-light",
  moss: "from-[#DCE3C7] via-[#EEF1E0] to-cream-light",
  gold: "from-gold-soft/60 via-cream-deep to-cream-light",
};

const COLOR_TEXT: Record<string, string> = {
  rust: "text-rust-700",
  moss: "text-moss-700",
  gold: "text-rust-700",
};

export function ProductPage() {
  const { slug } = useParams();
  const product = slug ? getProductBySlug(slug) : undefined;
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();

  if (!product) return <Navigate to="/shop" replace />;

  const related = getRelatedProducts(product);
  const Art = PRODUCT_ART[product.slug];
  const image = PRODUCT_IMAGES[product.slug];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div
          className={`sticky top-0 h-[55vh] lg:h-screen flex items-center justify-center bg-gradient-to-br ${COLOR_BG[product.color]} overflow-hidden`}
        >
          {image ? (
            <>
              <img src={image} alt={product.name} className="absolute inset-0 h-full w-full object-cover" />
              <LeafOutline className="absolute left-[8%] top-[15%] w-16 opacity-40 text-cream-light drop-shadow -rotate-12" />
            </>
          ) : (
            <>
              <LeafOutline className="absolute left-[8%] top-[15%] w-20 opacity-15 text-rust-700 -rotate-12" />
              <SteamWisp className="absolute right-[15%] top-[20%] w-8 h-24 opacity-25 text-rust-500" />
              {Art && <Art className={`w-[62%] max-w-md ${COLOR_TEXT[product.color]}`} style={{ opacity: 0.6 }} />}
            </>
          )}
        </div>

        <div className="px-5 sm:px-10 lg:px-16 pt-28 sm:pt-36 lg:pt-32 pb-20">
          <nav className="text-xs text-ink-soft/50 mb-6">
            <Link to="/shop" className="hover:text-rust-600">Shop</Link> / {product.collection} / {product.name}
          </nav>

          <p className="text-[11px] tracking-[0.24em] uppercase text-rust-600 font-semibold">
            {product.collection}
          </p>
          <div className="flex items-start justify-between gap-4 mt-2">
            <h1 className="font-display text-4xl sm:text-5xl text-ink">{product.name}</h1>
            <button
              onClick={() => toggleWishlist(product.id)}
              aria-label="Toggle wishlist"
              className="mt-2 shrink-0 flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 hover:border-rust-400"
            >
              <Heart size={17} className={isWishlisted(product.id) ? "fill-rust-600 text-rust-600" : "text-ink"} />
            </button>
          </div>

          <p className="mt-5 text-base text-ink-soft/80 leading-relaxed max-w-lg">{product.description}</p>

          <div className="mt-7 flex flex-wrap gap-2">
            {product.wellnessProfile.map((w) => (
              <span key={w} className="rounded-full border border-ink/15 px-3.5 py-1.5 text-xs text-ink-soft">
                {w}
              </span>
            ))}
          </div>

          <div className="mt-9 flex items-center gap-4">
            <div className="flex items-center gap-3 rounded-full border border-ink/15 px-4 py-2.5">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity" className="text-ink/60 hover:text-ink">
                <Minus size={15} />
              </button>
              <span className="w-5 text-center text-sm font-semibold">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity" className="text-ink/60 hover:text-ink">
                <Plus size={15} />
              </button>
            </div>
            <button
              onClick={() => addItem(product, qty)}
              className="flex-1 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-cream hover:bg-ink-soft transition-colors"
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
          <p className="mt-3 text-xs text-ink-soft/45">Pricing and delivery shared directly on WhatsApp.</p>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-10 border-t border-ink/10 pt-10">
            <div>
              <h2 className="font-display text-lg text-ink mb-3">Ingredients</h2>
              <ul className="space-y-1.5 text-sm text-ink-soft/70">
                {product.ingredients.map((ing) => (
                  <li key={ing}>{ing}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-lg text-ink mb-3">Preparation</h2>
              <ol className="space-y-1.5 text-sm text-ink-soft/70 list-decimal list-inside">
                {product.preparation.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-10 border-t border-ink/10 pt-10">
            <h2 className="font-display text-lg text-ink mb-3">The Ritual</h2>
            <p className="text-sm text-ink-soft/70 leading-relaxed max-w-lg">{product.ritual}</p>
          </div>

          <div className="mt-10 border-t border-ink/10 pt-10">
            <h2 className="font-display text-lg text-ink mb-4">Good to Know</h2>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-ink">Is this a medical treatment?</p>
                <p className="text-ink-soft/65 mt-1">
                  No — Vedas teas are traditional herbal infusions for daily wellness, not a substitute for medical advice.
                </p>
              </div>
              <div>
                <p className="font-semibold text-ink">How do I order?</p>
                <p className="text-ink-soft/65 mt-1">
                  Add to cart or tap Buy on WhatsApp — our team will confirm pricing and delivery there.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="border-t border-ink/10 py-20 sm:py-28">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <h2 className="font-display text-3xl text-ink mb-10">You may also like</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-5 gap-y-10">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
