import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const STEPS = [
  { label: "Wake", desc: "The day begins, quiet and unhurried." },
  { label: "Choose", desc: "A cup for how you want to feel." },
  { label: "Brew", desc: "A few minutes, nothing rushed." },
  { label: "Pause", desc: "Step away from the day, briefly." },
  { label: "Enjoy", desc: "Your daily cup of wellness." },
];

export function DailyRitualTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-cream">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Your Daily Ritual"
          align="center"
          title="A cup, and five small steps"
          className="mb-16 sm:mb-20"
        />

        <div className="relative">
          <div className="hidden sm:block absolute top-6 left-0 right-0 h-px bg-ink/10" />
          <motion.div
            style={{ scaleX: lineScale }}
            className="hidden sm:block absolute top-6 left-0 right-0 h-px bg-rust-600 origin-left"
          />

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-10 sm:gap-4">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex sm:flex-col items-center sm:items-start gap-4 sm:gap-5"
              >
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream border border-ink/15 font-display text-lg text-rust-600">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl text-ink">{step.label}</h3>
                  <p className="mt-1 text-sm text-ink-soft/60 max-w-[180px]">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
