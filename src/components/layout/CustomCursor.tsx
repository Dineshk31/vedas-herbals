import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import { usePrefersReducedMotion } from "@/hooks/useReducedMotion";

export function CustomCursor() {
  const isDesktop = useIsDesktop();
  const reducedMotion = usePrefersReducedMotion();
  const [label, setLabel] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  const active = isDesktop && !reducedMotion;

  useEffect(() => {
    if (!active) return;

    document.documentElement.classList.add("vedas-cursor-active");

    function handleMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const target = (e.target as HTMLElement)?.closest("[data-cursor]") as HTMLElement | null;
      setLabel(target?.dataset.cursor === "pointer" ? null : target?.dataset.cursor ?? null);
    }
    function handleLeave() {
      setVisible(false);
    }

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      document.documentElement.classList.remove("vedas-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [active, x, y]);

  if (!active) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[999] mix-blend-difference"
      style={{ x: springX, y: springY, opacity: visible ? 1 : 0 }}
    >
      <motion.div
        animate={{
          width: label ? 88 : 14,
          height: label ? 88 : 14,
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-center rounded-full bg-cream -translate-x-1/2 -translate-y-1/2"
      >
        {label && (
          <span className="text-[11px] font-semibold uppercase tracking-wide text-ink">
            {label}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
