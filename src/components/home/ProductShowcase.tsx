import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import { SectionHeading } from "@/components/ui/SectionHeading";
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

function Frame({ product }: { product: (typeof PRODUCTS)[number] }) {
  const Art = PRODUCT_ART[product.slug];
  const image = PRODUCT_IMAGES[product.slug];
  return (
    <Link
      to={`/shop/${product.slug}`}
      className="group relative flex h-[62vh] sm:h-[68vh] w-[82vw] sm:w-[440px] shrink-0 flex-col overflow-hidden rounded-[4px] snap-center"
      data-cursor="view"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${COLOR_BG[product.color]}`} />
      {image ? (
        <img
          src={image}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-700 group-hover:scale-105 ${COLOR_TEXT[product.color]}`}
        >
          {Art && <Art className="w-[58%]" style={{ opacity: 0.5 }} />}
        </div>
      )}
      {image && (
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-cream-light via-cream-light/75 to-transparent" />
      )}

      <div className="relative mt-auto p-7 sm:p-9">
        <p className="text-[11px] tracking-[0.2em] uppercase text-rust-600 font-semibold mb-2">
          {product.collection}
        </p>
        <h3 className="font-display text-3xl sm:text-4xl text-ink">{product.name}</h3>
        <p className="mt-2 max-w-xs text-sm text-ink-soft/70">{product.shortDescription}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink group-hover:text-rust-600 transition-colors">
          Explore
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      </div>
    </Link>
  );
}

export function ProductShowcase() {
  const isDesktop = useIsDesktop();
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);

  useLayoutEffect(() => {
    function measure() {
      if (trackRef.current) setTrackWidth(trackRef.current.scrollWidth);
      setViewportWidth(window.innerWidth);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const distance = Math.max(trackWidth - viewportWidth + 80, 0);
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  if (!isDesktop) {
    return (
      <section className="py-24 sm:py-32 bg-cream">
        <div className="px-5 sm:px-8 mb-10">
          <SectionHeading
            eyebrow="Discover"
            title={
              <>
                The Vedas <span className="italic text-rust-600">Collection</span>
              </>
            }
            description="Swipe to explore each infusion."
          />
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory px-5 sm:px-8 pb-4">
          {PRODUCTS.map((product) => (
            <Frame key={product.id} product={product} />
          ))}
          <div className="shrink-0 w-1" />
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative bg-cream" style={{ height: `${PRODUCTS.length * 70}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        <div className="px-8 lg:px-16 mb-10">
          <SectionHeading
            eyebrow="Discover"
            title={
              <>
                The Vedas <span className="italic text-rust-600">Collection</span>
              </>
            }
            description="Scroll to move through each infusion, like turning the pages of a catalogue."
          />
        </div>
        <motion.div ref={trackRef} style={{ x }} className="flex gap-6 pl-8 lg:pl-16 w-max">
          {PRODUCTS.map((product) => (
            <Frame key={product.id} product={product} />
          ))}
          <div className="shrink-0 w-8" />
        </motion.div>
      </div>
    </section>
  );
}
