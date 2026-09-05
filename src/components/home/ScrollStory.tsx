import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { LeafOutline, SteamWisp, TeaCupOutline } from "@/components/graphics/Botanicals";

const STEPS = [
  { key: "herb", label: "01 — The Herb", caption: "Every cup begins with a single whole botanical, chosen with intent." },
  { key: "gather", label: "02 — Gathered", caption: "Leaf, bark or grass — traditionally sourced, never over-processed." },
  { key: "steep", label: "03 — Steeped", caption: "A gentle boil, a few quiet minutes, nothing rushed." },
  { key: "pour", label: "04 — Poured", caption: "Strained warm, the infusion takes its true colour." },
  { key: "cup", label: "05 — The Cup", caption: "Your daily ritual, ready — from herb to cup." },
];

function useStepOpacity(progress: ReturnType<typeof useScroll>["scrollYProgress"], index: number, total: number) {
  const step = 1 / total;
  const start = index * step;
  const mid = start + step * 0.5;
  const end = start + step;
  return useTransform(progress, [start, start + step * 0.15, mid, end - step * 0.15, end], [0, 1, 1, 1, 0]);
}

function StepPanel({
  progress,
  index,
  total,
}: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  index: number;
  total: number;
}) {
  const opacity = useStepOpacity(progress, index, total);
  const y = useTransform(opacity, [0, 1], [24, 0]);
  const step = STEPS[index];

  const icon =
    step.key === "cup" ? (
      <TeaCupOutline className="h-full w-full text-rust-600/70" />
    ) : step.key === "pour" ? (
      <SteamWisp className="h-full w-full text-rust-500/60" />
    ) : (
      <LeafOutline className="h-full w-full text-moss-600/60" />
    );

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
      <div className="h-24 w-24 sm:h-32 sm:w-32 mb-6">{icon}</div>
      <p className="text-xs tracking-[0.28em] uppercase text-rust-600 font-semibold mb-3">{step.label}</p>
      <p className="max-w-sm font-display text-2xl sm:text-3xl text-ink leading-snug">{step.caption}</p>
    </motion.div>
  );
}

export function ScrollStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const ctaOpacity = useTransform(scrollYProgress, [0.92, 1], [0, 1]);

  return (
    <section ref={ref} className="relative bg-cream-deep" style={{ height: `${STEPS.length * 90}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="absolute top-16 sm:top-20 text-[11px] tracking-[0.3em] uppercase text-ink-soft/50 font-semibold">
            From Herb to Cup
          </p>
          {STEPS.map((_, i) => (
            <StepPanel key={STEPS[i].key} progress={scrollYProgress} index={i} total={STEPS.length} />
          ))}
        </div>
        <motion.div
          style={{ opacity: ctaOpacity }}
          className="absolute bottom-16 sm:bottom-20 inset-x-0 flex justify-center"
        >
          <Link
            to="/shop"
            className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream hover:bg-ink-soft transition-colors"
          >
            Explore the Collection
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
