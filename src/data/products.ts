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
    id: "aswattha",
    slug: "aswattha-tea",
    name: "Aswattha Tea",
    sanskritNote: "Peepal Leaf",
    category: "herbal-tea",
    collection: "The Herbal Collection",
    shortDescription: "A cooling infusion for warm days and restless heat.",
    description:
      "Aswattha Tea is a traditional herbal infusion reached for when the body runs warm. Light and cooling, it is brewed to bring relief on long, humid afternoons.",
    wellnessProfile: [
      "Helps Reduce Body Heat",
      "Controls Gas & Bloating",
      "Relieves Skin Issues",
    ],
    ingredients: ["Aswattha (Peepal) leaf"],
    preparation: [
      "Bring water to a gentle boil",
      "Add Aswattha tea and steep for 4 minutes",
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
    id: "amrood",
    slug: "amrood-tea",
    name: "Amrood Tea (Guava Tea)",
    sanskritNote: "Guava Leaf",
    category: "herbal-tea",
    collection: "The Herbal Collection",
    shortDescription: "A gently sweet infusion for blood sugar balance and digestion.",
    description:
      "Amrood Tea is brewed from guava leaves, a traditional infusion valued for its calming, gently sweet character and its place in everyday Indian wellness.",
    wellnessProfile: [
      "Controls Blood Sugar",
      "Supports Digestion",
      "Rich in Antioxidants",
    ],
    ingredients: ["Guava (Amrood) leaf"],
    preparation: [
      "Bring water to a gentle boil",
      "Add Amrood tea and steep for 5 minutes",
      "Strain and serve warm",
    ],
    ritual: "An after-meal cup, to settle the stomach and steady blood sugar.",
    moods: ["digest", "daily-wellness"],
    color: "moss",
    featured: true,
    availability: "available",
  },
];

export const COLLECTIONS = [
  {
    id: "herbal-collection",
    name: "The Herbal Collection",
    description:
      "Six infusions drawn from Indian herbal tradition — Bilva, Arjuna, Aswattha, Lemongrass, Pudina and Amrood.",
    productSlugs: PRODUCTS.filter((p) => p.collection === "The Herbal Collection").map((p) => p.slug),
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
