import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LeafOutline } from "@/components/graphics/Botanicals";

export function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-[70vh] flex flex-col items-center justify-center px-5 text-center"
    >
      <LeafOutline className="w-16 text-rust-400/50 mb-6" />
      <p className="font-display text-6xl text-ink">404</p>
      <p className="mt-3 text-ink-soft/60 text-sm">This cup hasn't been brewed yet.</p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream hover:bg-ink-soft transition-colors"
      >
        Back to Home
      </Link>
    </motion.div>
  );
}
