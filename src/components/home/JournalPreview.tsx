import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { JOURNAL_ARTICLES } from "@/data/journal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function JournalPreview() {
  return (
    <section className="py-24 sm:py-32 bg-cream-light">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="Journal"
            title={
              <>
                Notes on the <span className="italic text-rust-600">daily cup</span>
              </>
            }
          />
          <Link
            to="/journal"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-rust-600 transition-colors shrink-0"
          >
            Visit the journal <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
          {JOURNAL_ARTICLES.slice(0, 3).map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to={`/journal/${article.slug}`} className="group block">
                <div className="aspect-[4/3] rounded-[4px] bg-gradient-to-br from-cream-deep to-cream-light flex items-center justify-center overflow-hidden">
                  <span className="font-display text-7xl text-rust-700/15 group-hover:scale-110 group-hover:text-rust-700/25 transition-all duration-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-4 text-[11px] uppercase tracking-wide text-ink-soft/40">
                  {article.readTime}
                </p>
                <h3 className="mt-1.5 font-display text-xl text-ink group-hover:text-rust-600 transition-colors">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-ink-soft/60 line-clamp-2">{article.excerpt}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
