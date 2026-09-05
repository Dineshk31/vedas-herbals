import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { JOURNAL_ARTICLES } from "@/data/journal";

export function Journal() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-28 sm:pt-36 pb-24"
    >
      <div className="mx-auto max-w-[1000px] px-5 sm:px-8">
        <p className="text-xs tracking-[0.3em] uppercase text-rust-600 font-semibold mb-5">Journal</p>
        <h1 className="font-display text-4xl sm:text-6xl text-ink mb-16">
          Notes on the <span className="italic text-rust-600">daily cup</span>
        </h1>

        <div className="divide-y divide-ink/10">
          {JOURNAL_ARTICLES.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link
                to={`/journal/${article.slug}`}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 py-10"
              >
                <span className="font-display text-4xl text-rust-700/20 shrink-0 w-16">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h2 className="font-display text-2xl sm:text-3xl text-ink group-hover:text-rust-600 transition-colors">
                    {article.title}
                  </h2>
                  <p className="mt-2 text-sm text-ink-soft/60 max-w-lg">{article.excerpt}</p>
                </div>
                <span className="shrink-0 text-xs uppercase tracking-wide text-ink-soft/40">
                  {article.readTime}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
