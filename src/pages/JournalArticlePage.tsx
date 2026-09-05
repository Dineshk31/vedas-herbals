import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { getArticleBySlug, JOURNAL_ARTICLES } from "@/data/journal";

export function JournalArticlePage() {
  const { slug } = useParams();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) return <Navigate to="/journal" replace />;

  const more = JOURNAL_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-28 sm:pt-36 pb-24"
    >
      <div className="mx-auto max-w-[700px] px-5 sm:px-8">
        <Link to="/journal" className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wide text-ink-soft/50 hover:text-rust-600 mb-10">
          <ArrowLeft size={13} /> Journal
        </Link>

        <p className="text-xs tracking-[0.3em] uppercase text-rust-600 font-semibold mb-4">
          {article.readTime}
        </p>
        <h1 className="font-display text-3xl sm:text-5xl leading-[1.1] text-ink">{article.title}</h1>

        <div className="mt-10 aspect-[16/9] rounded-[4px] bg-gradient-to-br from-cream-deep to-cream-light flex items-center justify-center">
          <span className="font-display text-6xl text-rust-700/15">Vedas</span>
        </div>

        <div className="mt-10 space-y-6">
          {article.body.map((para, i) => (
            <p key={i} className="text-base text-ink-soft/80 leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {more.length > 0 && (
          <div className="mt-20 border-t border-ink/10 pt-10">
            <h2 className="font-display text-xl text-ink mb-6">Continue reading</h2>
            <div className="space-y-4">
              {more.map((a) => (
                <Link key={a.slug} to={`/journal/${a.slug}`} className="block group">
                  <h3 className="font-display text-lg text-ink group-hover:text-rust-600 transition-colors">
                    {a.title}
                  </h3>
                  <p className="text-xs text-ink-soft/50">{a.readTime}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
