import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/useReducedMotion";

const SEEN_KEY = "ourva-intro-seen";

export function BrandIntro() {
  const reducedMotion = usePrefersReducedMotion();
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return !window.sessionStorage.getItem(SEEN_KEY);
  });

  useEffect(() => {
    if (!visible) return;
    if (reducedMotion) {
      setVisible(false);
      return;
    }
    window.sessionStorage.setItem(SEEN_KEY, "1");
    const timer = setTimeout(() => setVisible(false), 1150);
    return () => clearTimeout(timer);
  }, [visible, reducedMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-cream"
          exit={{ opacity: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
        >
          <div className="flex flex-col items-center">
            <svg width="64" height="64" viewBox="0 0 100 100" fill="none">
              <motion.path
                d="M50 8C25 28 15 60 25 88"
                stroke="var(--color-rust-600)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.path
                d="M50 8C75 28 85 60 75 88"
                stroke="var(--color-moss-500)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              />
            </svg>
            <motion.h1
              initial={{ opacity: 0, y: 8, letterSpacing: "0.4em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "0.15em" }}
              transition={{ duration: 0.5, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 font-display text-2xl text-ink"
            >
              OURVA
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
