import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, Menu, X, Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const NAV_LINKS = [
  { label: "Shop", to: "/shop" },
  { label: "Collections", to: "/shop#collections" },
  { label: "Rituals", to: "/rituals" },
  { label: "Ayurveda", to: "/ayurveda" },
  { label: "Our Story", to: "/our-story" },
  { label: "Journal", to: "/journal" },
];

interface HeaderProps {
  onSearchOpen: () => void;
  transparentOnTop?: boolean;
}

export function Header({ onSearchOpen, transparentOnTop = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(!transparentOnTop);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();
  const { ids } = useWishlist();
  const location = useLocation();

  useEffect(() => {
    if (!transparentOnTop) return;
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparentOnTop]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isTransparent = transparentOnTop && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-8 inset-x-0 z-50 transition-all duration-500 ${
          isTransparent
            ? "bg-transparent py-6"
            : "bg-cream/90 backdrop-blur-md py-3 shadow-[0_1px_0_0_rgba(36,26,18,0.08)]"
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 flex items-center justify-between">
          <Link
            to="/"
            className="font-display text-xl sm:text-2xl tracking-[0.08em] text-ink transition-colors"
            data-cursor="home"
          >
            VEDAS
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="group relative text-[13px] tracking-[0.14em] uppercase font-semibold text-ink/80 hover:text-rust-600 transition-colors"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1.5 h-px w-0 group-hover:w-full bg-rust-600 transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 sm:gap-5">
            <button
              aria-label="Search"
              onClick={onSearchOpen}
              className="text-ink hover:text-rust-600 transition-colors"
              data-cursor="pointer"
            >
              <Search size={19} strokeWidth={1.75} />
            </button>
            <Link
              to="/wishlist"
              aria-label="Wishlist"
              className="relative hidden sm:block text-ink hover:text-rust-600 transition-colors"
            >
              <Heart size={19} strokeWidth={1.75} />
              {ids.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-rust-600 text-[9px] font-bold text-cream-light">
                  {ids.length}
                </span>
              )}
            </Link>
            <button
              aria-label="Cart"
              onClick={openCart}
              className="relative text-ink hover:text-rust-600 transition-colors"
              data-cursor="pointer"
            >
              <ShoppingBag size={19} strokeWidth={1.75} />
              {count > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-rust-600 text-[9px] font-bold text-cream-light">
                  {count}
                </span>
              )}
            </button>
            <button
              aria-label="Menu"
              onClick={() => setMobileOpen((o) => !o)}
              className="lg:hidden text-ink transition-colors"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[65] bg-ink"
          >
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="flex h-full flex-col justify-center gap-2 px-8"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.05, duration: 0.4 }}
                >
                  <Link
                    to={link.to}
                    className="block py-3 text-4xl font-display text-cream"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-8 flex gap-6 text-cream/60 text-sm tracking-widest uppercase">
                <Link to="/wishlist">Wishlist</Link>
                <a href="https://instagram.com/vedasherbaltea" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
