export interface JournalArticle {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  readTime: string;
}

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    slug: "art-of-herbal-tea",
    title: "The Art of Herbal Tea",
    excerpt:
      "Herbal tea is less a recipe than a practice — a small, repeatable act that turns a handful of leaves into a daily ritual.",
    readTime: "4 min read",
    body: [
      "Long before tea became a global commodity, Indian households were steeping leaves, bark and grass into daily infusions — not for ceremony, but for the ordinary business of feeling well.",
      "Vedas Herbal Tea continues that practice: whole botanicals, simply brewed, without shortcuts.",
      "This space will grow with more writing on brewing, botanicals and the daily cup — check back as it develops.",
    ],
  },
  {
    slug: "the-vedas-ritual",
    title: "The Vedas Ritual",
    excerpt:
      "A ritual doesn't need to be elaborate. It needs to be repeated — the same cup, the same pause, on most days.",
    readTime: "3 min read",
    body: [
      "Wake, choose, brew, pause, enjoy — five small steps that turn a cup of tea into a ritual rather than a task.",
      "The choosing matters most: which cup for which moment. A grounding Bilva after a meal, a bright Pudina to sharpen a slow morning.",
      "More on building a personal ritual will be added here over time.",
    ],
  },
  {
    slug: "traditional-indian-botanicals",
    title: "Traditional Indian Botanicals",
    excerpt:
      "Bael, Arjuna, lemongrass, mint — a short introduction to the botanicals behind the Vedas collection.",
    readTime: "5 min read",
    body: [
      "Each infusion in the Vedas collection is built from a single, recognisable botanical rather than a blend of extracts.",
      "Explore the Botanicals library to see how each one is traditionally used, and which cup it belongs to.",
      "Detailed botanical profiles will continue to be added here.",
    ],
  },
  {
    slug: "building-a-daily-tea-ritual",
    title: "Building a Daily Tea Ritual",
    excerpt:
      "A guide to fitting a herbal cup into an ordinary day — no overhaul required, just one repeated pause.",
    readTime: "4 min read",
    body: [
      "Most wellness habits fail because they ask for too much change at once. A tea ritual asks for very little: a kettle, a few minutes, one cup.",
      "Start with one time of day — morning, after lunch, or before bed — and let the tea mark that pause.",
      "Further guidance on ritual-building will be published here.",
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return JOURNAL_ARTICLES.find((a) => a.slug === slug);
}
