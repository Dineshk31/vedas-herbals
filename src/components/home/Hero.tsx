import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { LeafOutline, SteamWisp, TeaCupOutline } from "@/components/graphics/Botanicals";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { whatsappLinkGeneral } from "@/utils/whatsapp";
import { useIsDesktop } from "@/hooks/useIsDesktop";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scrollScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  function handleMouseMove(e: React.MouseEvent) {
    if (!isDesktop || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    my.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  }

  const leafLeftX = useTransform(sx, (v) => v * -24);
  const leafLeftY = useTransform(sy, (v) => v * -16);
  const leafRightX = useTransform(sx, (v) => v * 28);
  const leafRightY = useTransform(sy, (v) => v * 18);
  const cupX = useTransform(sx, (v) => v * -10);
  const cupY = useTransform(sy, (v) => v * -8);
  const ringRotate = useTransform(sx, (v) => v * 6);

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100svh] w-full overflow-hidden bg-[radial-gradient(ellipse_at_50%_20%,_#FDF8EC_0%,_#F6EEDF_55%,_#EFE3C8_100%)]"
    >
      <div className="bg-noise absolute inset-0" />

      {/* soft warm light glow */}
      <div className="pointer-events-none absolute left-1/2 top-[18%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gold-soft/30 blur-[100px]" />
      <div className="pointer-events-none absolute right-[6%] bottom-[10%] h-[360px] w-[360px] rounded-full bg-rust-300/20 blur-[90px]" />

      {/* floating botanicals, parallax */}
      <motion.div
        style={{ x: leafLeftX, y: leafLeftY, rotate: -18 }}
        className="pointer-events-none absolute left-[4%] sm:left-[8%] top-[16%] w-16 sm:w-24 text-rust-500/40"
      >
        <LeafOutline className="w-full" />
      </motion.div>
      <motion.div
        style={{ x: leafRightX, y: leafRightY, rotate: 24 }}
        className="pointer-events-none absolute right-[6%] sm:right-[12%] top-[26%] w-14 sm:w-20 text-moss-500/40"
      >
        <LeafOutline className="w-full" />
      </motion.div>
      <motion.div
        style={{ x: leafLeftX, y: leafRightY, rotate: 8 }}
        className="pointer-events-none absolute left-[10%] bottom-[18%] w-12 sm:w-16 text-moss-500/30 hidden sm:block"
      >
        <LeafOutline className="w-full" />
      </motion.div>

      <motion.div
        style={{ scale: scrollScale, opacity: scrollOpacity, y: scrollY }}
        className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-5 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-[11px] sm:text-xs tracking-[0.32em] uppercase text-rust-600 font-semibold mb-5"
        >
          Rooted in Tradition. Crafted for Wellness.
        </motion.p>

        <div className="relative">
          <motion.div
            style={{ x: cupX, y: cupY, rotate: ringRotate }}
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 text-rust-600/10"
          >
            <TeaCupOutline className="h-full w-full" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2.75rem,10vw,8.5rem)] leading-[0.95] text-ink"
          >
            YOUR DAILY
            <br />
            <span className="italic text-rust-600">CUP</span> OF WELLNESS
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 max-w-md text-sm sm:text-base text-ink-soft/75 leading-relaxed"
        >
          Herbal wisdom, brewed for the modern ritual. Six infusions rooted in
          Indian tradition — Bilva, Arjuna, Raavi, Lemongrass, Pudina and Thati
          Bellam Coffee.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            as={Link}
            to="/shop"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-semibold tracking-wide text-cream hover:bg-ink-soft transition-colors"
            data-cursor="pointer"
          >
            Explore the Collection
          </MagneticButton>
          <WhatsAppButton href={whatsappLinkGeneral()} variant="outline" size="lg" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 flex flex-col items-center gap-2 text-ink/40"
        >
          <span className="relative flex h-10 w-10 items-center justify-center text-rust-500/60">
            <SteamWisp className="h-10 w-6" />
          </span>
          <ArrowDown size={14} className="animate-bounce" />
        </motion.div>
      </motion.div>
    </section>
  );
}
