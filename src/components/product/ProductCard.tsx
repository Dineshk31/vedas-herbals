import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Heart, MessageCircle } from "lucide-react";
import type { Product } from "@/data/products";
import { useQuickView } from "@/context/QuickViewContext";
import { useWishlist } from "@/context/WishlistContext";
import { whatsappLinkForProduct } from "@/utils/whatsapp";
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

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { open } = useQuickView();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const wishlisted = isWishlisted(product.id);
  const Art = PRODUCT_ART[product.slug];
  const image = PRODUCT_IMAGES[product.slug];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col"
    >
      <div
        className={`relative aspect-[4/5] overflow-hidden rounded-[4px] bg-gradient-to-br ${COLOR_BG[product.color]}`}
        data-cursor="view"
      >
        {image && (
          <img
            src={image}
            alt={product.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          />
        )}
        <button
          onClick={() => toggleWishlist(product.id)}
          aria-label="Toggle wishlist"
          className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-cream/80 backdrop-blur-sm transition-transform hover:scale-110"
        >
          <Heart
            size={15}
            className={wishlisted ? "fill-rust-600 text-rust-600" : "text-ink"}
          />
        </button>

        <Link to={`/shop/${product.slug}`} className="absolute inset-0 z-10 flex flex-col items-center justify-center">
          {!image && (
            <motion.div
              className={`w-[46%] transition-all duration-500 group-hover:scale-[1.06] ${COLOR_TEXT[product.color]}`}
              style={{ opacity: 0.55 }}
            >
              {Art && <Art className="w-full h-full" />}
            </motion.div>
          )}

          <motion.div
            initial={false}
            className="absolute inset-x-0 top-16 -translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out px-5 flex flex-wrap gap-1.5 justify-center"
          >
            {product.ingredients.slice(0, 2).map((ing) => (
              <span
                key={ing}
                className="rounded-full bg-ink/85 px-3 py-1 text-[10px] uppercase tracking-wide text-cream"
              >
                {ing}
              </span>
            ))}
          </motion.div>
        </Link>

        <button
          onClick={() => open(product)}
          className="absolute left-4 bottom-4 z-20 flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-cream opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
        >
          Quick View
        </button>

        <a
          href={whatsappLinkForProduct(product)}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute right-4 bottom-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-rust-600 text-cream opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75"
          aria-label="Enquire on WhatsApp"
        >
          <MessageCircle size={15} />
        </a>
      </div>

      <Link to={`/shop/${product.slug}`} className="mt-4 flex items-start justify-between gap-2">
        <div>
          <h3 className="font-display text-lg text-ink">{product.name}</h3>
          <p className="mt-1 text-xs text-ink-soft/60">{product.shortDescription}</p>
        </div>
        <ArrowUpRight
          size={18}
          className="mt-1 shrink-0 text-ink/40 transition-all duration-300 group-hover:text-rust-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </Link>
    </motion.div>
  );
}
