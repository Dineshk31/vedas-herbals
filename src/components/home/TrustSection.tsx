import { motion } from "framer-motion";
import { BranchDivider } from "@/components/graphics/Botanicals";

const PILLARS = [
  { title: "100% Natural Ingredients", desc: "No chemicals — every cup starts with a whole botanical." },
  { title: "Traditional Ayurvedic Taste", desc: "Recipes rooted in Indian herbal tradition, not shortcuts." },
  { title: "Authentic Taste", desc: "Brewed the way it has always been — simply, and without additives." },
  { title: "Health is Wealth", desc: "A daily ritual built around wellness, not novelty." },
];

export function TrustSection() {
  return (
    <section className="py-24 sm:py-28 bg-cream">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="text-center mb-4">
          <BranchDivider className="w-40 sm:w-56 mx-auto text-rust-400" />
        </div>
        <p className="text-center text-xs tracking-[0.28em] uppercase text-rust-600 font-semibold mb-14">
          Why Choose Ourva
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center sm:text-left"
            >
              <h3 className="font-display text-lg text-ink">{p.title}</h3>
              <p className="mt-2 text-xs text-ink-soft/60 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
