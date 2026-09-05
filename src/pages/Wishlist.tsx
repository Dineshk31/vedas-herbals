import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useWishlist } from "@/context/WishlistContext";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";

export function Wishlist() {
  const { ids } = useWishlist();
  const products = PRODUCTS.filter((p) => ids.includes(p.id));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-28 sm:pt-36 pb-24 min-h-[60vh]"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <p className="text-xs tracking-[0.3em] uppercase text-rust-600 font-semibold mb-5">Saved</p>
        <h1 className="font-display text-4xl sm:text-5xl text-ink mb-14">Your Wishlist</h1>

        {products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-ink-soft/60 text-sm mb-4">You haven't saved any teas yet.</p>
            <Link to="/shop" className="text-sm font-semibold text-rust-600 underline underline-offset-4">
              Browse the collection
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-12">
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
