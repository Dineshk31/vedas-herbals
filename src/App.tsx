import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { QuickViewProvider } from "@/context/QuickViewContext";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { ProductQuickView } from "@/components/product/ProductQuickView";
import { SearchOverlay } from "@/components/search/SearchOverlay";
import { Home } from "@/pages/Home";
import { Shop } from "@/pages/Shop";
import { ProductPage } from "@/pages/ProductPage";
import { RitualFinder } from "@/pages/RitualFinder";
import { Ayurveda } from "@/pages/Ayurveda";
import { OurStory } from "@/pages/OurStory";
import { Journal } from "@/pages/Journal";
import { JournalArticlePage } from "@/pages/JournalArticlePage";
import { Wishlist } from "@/pages/Wishlist";
import { NotFound } from "@/pages/NotFound";

function AppShell() {
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <CustomCursor />
      <AnnouncementBar />
      <Header onSearchOpen={() => setSearchOpen(true)} transparentOnTop={isHome} />
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <CartDrawer />
      <ProductQuickView />

      <main className="flex-1 pt-8">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:slug" element={<ProductPage />} />
            <Route path="/rituals" element={<RitualFinder />} />
            <Route path="/ayurveda" element={<Ayurveda />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/journal/:slug" element={<JournalArticlePage />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <QuickViewProvider>
          <AppShell />
        </QuickViewProvider>
      </WishlistProvider>
    </CartProvider>
  );
}
