export type MoodTag =
  | "refresh"
  | "unwind"
  | "digest"
  | "recharge"
  | "cool-down"
  | "daily-wellness";

export interface Product {
  id: string;
  slug: string;
  name: string;
  sanskritNote?: string;
  category: "herbal-tea" | "warm-cup";
  collection: string;
  shortDescription: string;
  description: string;
  wellnessProfile: string[];
  ingredients: string[];
  preparation: string[];
  ritual: string;
  moods: MoodTag[];
  color: string;
  featured: boolean;
  availability: "available" | "seasonal";
}

export const PRODUCTS: Product[] = [
  {
    id: "bilva",
    slug: "bilva-tea",
    name: "Bilva Tea",
    sanskritNote: "Bael Leaf",
    category: "herbal-tea",
    collection: "The Herbal Collection",
    shortDescription: "A grounding infusion for steady digestion and balance.",
    description:
      "Bilva Tea is drawn from the bael leaf, a botanical long held in Indian herbal tradition. Brewed as a warm, earthy infusion, it is a quiet daily ritual for those seeking steadiness from within.",
    wellnessProfile: [
      "Controls Blood Sugar",
      "Relieves Stomach Disorders",
      "Improves Digestion",
    ],
    ingredients: ["Bael (Bilva) leaf"],
    preparation: [
      "Bring water to a gentle boil",
      "Add Bilva tea and steep for 4–5 minutes",
      "Strain and serve warm, without milk",
    ],
    ritual: "A settling cup after meals, when the day needs grounding.",
    moods: ["digest", "daily-wellness"],
    color: "rust",
    featured: true,
    availability: "available",
  },
  {
    id: "arjuna",
    slug: "arjuna-tea",
    name: "Arjuna Tea",
    sanskritNote: "Arjuna Bark",
    category: "herbal-tea",
    collection: "The Herbal Collection",
    shortDescription: "A heart-steady brew for stamina and calm.",
    description:
      "Named for the Arjuna tree, this infusion has been part of traditional Indian wellness for generations. A deep, warming cup meant for those who want their ritual to support strength and stamina.",
    wellnessProfile: [
      "Supports Heart Health",
      "Reduces Stress",
      "Improves Stamina",
    ],
    ingredients: ["Arjuna bark"],
    preparation: [
      "Bring water to a gentle boil",
      "Add Arjuna tea and steep for 5 minutes",
      "Strain and serve warm",
    ],
    ritual: "A morning cup, before the day asks anything of you.",
    moods: ["recharge", "daily-wellness"],
    color: "rust",
    featured: true,
    availability: "available",
  },
  {
    id: "raavi",
    slug: "raavi-tea",
    name: "Raavi Tea",
    category: "herbal-tea",
    collection: "The Herbal Collection",
    shortDescription: "A cooling infusion for warm days and restless heat.",
    description:
      "Raavi Tea is a traditional herbal infusion reached for when the body runs warm. Light and cooling, it is brewed to bring relief on long, humid afternoons.",
    wellnessProfile: [
      "Helps Reduce Body Heat",
      "Controls Gas & Bloating",
      "Relieves Skin Issues",
    ],
    ingredients: ["Raavi leaf"],
    preparation: [
      "Bring water to a gentle boil",
      "Add Raavi tea and steep for 4 minutes",
      "Strain and serve warm or at room temperature",
    ],
    ritual: "An afternoon pause, when the heat of the day builds up.",
    moods: ["cool-down", "digest"],
    color: "moss",
    featured: true,
    availability: "available",
  },
  {
    id: "lemongrass",
    slug: "lemongrass-tea",
    name: "Lemongrass Tea",
    category: "herbal-tea",
    collection: "The Herbal Collection",
    shortDescription: "A bright, citrus-forward infusion to clear the mind.",
    description:
      "Lemongrass Tea brings a bright citrus note to the herbal collection. A natural detoxifier by tradition, it is the cup for clearing a cluttered mind and easing a stressed day.",
    wellnessProfile: [
      "Reduces Anxiety & Stress",
      "Natural Detoxifier",
      "Improves Blood Purification",
    ],
    ingredients: ["Fresh lemongrass"],
    preparation: [
      "Bring water to a gentle boil",
      "Add lemongrass and steep for 5 minutes",
      "Strain and serve warm",
    ],
    ritual: "A late-evening unwind, letting the day loosen its grip.",
    moods: ["unwind", "refresh"],
    color: "moss",
    featured: true,
    availability: "available",
  },
  {
    id: "pudina",
    slug: "pudina-tea",
    name: "Pudina Tea",
    sanskritNote: "Mint",
    category: "herbal-tea",
    collection: "The Herbal Collection",
    shortDescription: "A crisp mint infusion that sharpens and lightens.",
    description:
      "Pudina Tea is a crisp, cooling mint infusion — one of the most familiar herbal cups in Indian households, reached for to feel light and clear-headed.",
    wellnessProfile: [
      "Improves Memory Power",
      "Weight Loss",
      "Controls Breathing Issues",
    ],
    ingredients: ["Fresh pudina (mint) leaves"],
    preparation: [
      "Bring water to a gentle boil",
      "Add pudina leaves and steep for 3–4 minutes",
      "Strain and serve warm",
    ],
    ritual: "A brisk mid-morning cup to sharpen focus.",
    moods: ["refresh", "recharge"],
    color: "moss",
    featured: true,
    availability: "available",
  },
  {
    id: "thati-bellam-coffee",
    slug: "thati-bellam-coffee",
    name: "Thati Bellam Coffee",
    sanskritNote: "Palm Jaggery Coffee",
    category: "warm-cup",
    collection: "The Warm Cup",
    shortDescription: "Coffee sweetened the traditional way, with palm jaggery.",
    description:
      "Thati Bellam Coffee pairs coffee with thati bellam — traditional palm jaggery — in place of refined sugar. A warming, energising cup rooted in South Indian tradition.",
    wellnessProfile: [
      "Provides Natural Iron",
      "Reduces Weakness",
      "Reduces Fatigue",
    ],
    ingredients: ["Coffee", "Thati bellam (palm jaggery)"],
    preparation: [
      "Brew coffee as usual",
      "Stir in thati bellam while hot, to taste",
      "Serve warm",
    ],
    ritual: "The first cup of the morning, for real energy.",
    moods: ["recharge", "daily-wellness"],
    color: "gold",
    featured: true,
    availability: "available",
  },
];

export const COLLECTIONS = [
  {
    id: "herbal-collection",
    name: "The Herbal Collection",
    description:
      "Five infusions drawn from Indian herbal tradition — Bilva, Arjuna, Raavi, Lemongrass and Pudina.",
    productSlugs: PRODUCTS.filter((p) => p.collection === "The Herbal Collection").map((p) => p.slug),
  },
  {
    id: "warm-cup",
    name: "The Warm Cup",
    description: "Thati Bellam Coffee — traditional palm jaggery coffee.",
    productSlugs: PRODUCTS.filter((p) => p.collection === "The Warm Cup").map((p) => p.slug),
  },
];

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, count = 3) {
  return PRODUCTS.filter((p) => p.id !== product.id && p.collection === product.collection).slice(0, count);
}

export const MOOD_LABELS: Record<MoodTag, string> = {
  refresh: "Refresh",
  unwind: "Unwind",
  digest: "Digest",
  recharge: "Recharge",
  "cool-down": "Cool Down",
  "daily-wellness": "Daily Wellness",
};
