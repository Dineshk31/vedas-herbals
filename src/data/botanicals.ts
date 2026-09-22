export interface Botanical {
  id: string;
  name: string;
  localName?: string;
  traditionalAssociation: string;
  benefits: string[];
  productSlugs: string[];
  color: "rust" | "moss" | "gold";
}

export const BOTANICALS: Botanical[] = [
  {
    id: "bael",
    name: "Bael Leaf",
    localName: "Bilva",
    traditionalAssociation:
      "A leaf long used in Indian herbal tradition, associated with digestion and daily balance.",
    benefits: ["Controls Blood Sugar", "Relieves Stomach Disorders", "Improves Digestion"],
    productSlugs: ["bilva-tea"],
    color: "rust",
  },
  {
    id: "arjuna-bark",
    name: "Arjuna Bark",
    traditionalAssociation:
      "Bark from the Arjuna tree, part of traditional Indian wellness practices tied to heart health and stamina.",
    benefits: [
      "Heart Health Booster",
      "Decreases LDL",
      "Increases HDL",
      "Eases Indigestion",
      "Relieves Heart Blocks",
    ],
    productSlugs: ["arjuna-tea"],
    color: "rust",
  },
  {
    id: "raavi",
    name: "Raavi Leaf",
    traditionalAssociation:
      "A cooling herb, traditionally reached for on warm days to ease heat and bloating.",
    benefits: ["Helps Reduce Body Heat", "Controls Gas & Bloating", "Relieves Skin Issues"],
    productSlugs: ["raavi-tea"],
    color: "moss",
  },
  {
    id: "lemongrass",
    name: "Lemongrass",
    localName: "Nimma Gaddi",
    traditionalAssociation:
      "A bright citrus grass, traditionally infused for its calming, cleansing character.",
    benefits: ["Increases Skin Glow", "Detox", "Fat Loss", "Mind Relax", "Reduces Free Radical Effects"],
    productSlugs: ["lemongrass-tea"],
    color: "moss",
  },
  {
    id: "pudina",
    name: "Pudina",
    localName: "Mint",
    traditionalAssociation:
      "One of the most familiar herbs in Indian kitchens, brewed for a crisp, clear-headed cup.",
    benefits: ["Improves Memory Power", "Weight Loss", "Controls Breathing Issues"],
    productSlugs: ["pudina-tea"],
    color: "moss",
  },
  {
    id: "thati-bellam",
    name: "Thati Bellam",
    localName: "Palm Jaggery",
    traditionalAssociation:
      "Traditional palm jaggery from South India, used in place of refined sugar for a warmer, mineral-rich sweetness.",
    benefits: ["Provides Natural Iron", "Reduces Weakness", "Reduces Fatigue"],
    productSlugs: ["thati-bellam-coffee"],
    color: "gold",
  },
  {
    id: "sonti",
    name: "Sonti",
    localName: "Dry Ginger",
    traditionalAssociation:
      "Dried ginger long used in South Indian kitchens, reached for to settle the stomach and support immunity.",
    benefits: ["Gastric Relief", "Improves Digestion", "Immunity Booster", "Weight Loss", "Controls Bad Cholesterol"],
    productSlugs: [],
    color: "gold",
  },
  {
    id: "dalchini",
    name: "Dalchini",
    localName: "Cinnamon",
    traditionalAssociation:
      "A warming spice bark, traditionally valued for its antioxidant richness and metabolic support.",
    benefits: [
      "Rich in Antioxidants",
      "Controls Hair Fall",
      "Guards Against Teeth Decay",
      "Eases Swollen Feet",
      "Relieves Tension",
      "Weight Loss",
      "Helps with Vaginal Infections",
      "Controls Blood Sugar Levels",
    ],
    productSlugs: [],
    color: "rust",
  },
  {
    id: "bay-leaf",
    name: "Bay Leaf",
    traditionalAssociation:
      "An aromatic kitchen leaf traditionally reached for to ease digestion and support easy breathing.",
    benefits: [
      "Controls Diabetes",
      "Easy Digestion",
      "Eases Asthma",
      "Eases Breathing Issues",
      "Controls Bad Cholesterol",
      "Relieves Cough",
      "Relieves Cold",
      "Heart Protection",
    ],
    productSlugs: [],
    color: "moss",
  },
  {
    id: "dhumparastam",
    name: "Dhumparastam",
    traditionalAssociation:
      "A traditional herb used to ease joint stiffness and body pain and support respiratory comfort.",
    benefits: ["Eases Arthritis", "Relieves Swelling & Body Pains", "Eases Breathing Issues", "Relieves Vomiting & Cough"],
    productSlugs: [],
    color: "rust",
  },
  {
    id: "shankhapushpi",
    name: "Shankhapushpi",
    traditionalAssociation:
      "A traditional herb long associated with skin radiance and blood purification.",
    benefits: [
      "Relieves Phlegm",
      "Firms Saggy Skin",
      "Skin Glow",
      "Collagen Boost",
      "Reduces Pigmentation",
      "Reduces Pimples",
      "Purifies Blood",
    ],
    productSlugs: [],
    color: "moss",
  },
  {
    id: "pepper",
    name: "Pepper",
    localName: "Black Pepper",
    traditionalAssociation:
      "A sharp, warming spice traditionally used to aid digestion and support respiratory health.",
    benefits: [
      "Easy Digestion",
      "Activates Taste Buds",
      "Relieves Lung Infection",
      "Weight Loss",
      "Eases Throat Infection",
      "Boosts Brain Activity",
    ],
    productSlugs: [],
    color: "rust",
  },
  {
    id: "red-chandanam",
    name: "Red Chandanam",
    localName: "Red Sandalwood",
    traditionalAssociation:
      "A traditional botanical valued for skin rejuvenation and healthy blood.",
    benefits: [
      "Diabetic Control",
      "Rejuvenates Skin",
      "Gastric Relief",
      "Supports Eye Health",
      "Traditionally Used Against Cancer",
      "Helps with Excess Bleeding",
      "Good Blood Agent",
      "Antibiotic Properties",
      "Increases Red Blood Cells",
    ],
    productSlugs: [],
    color: "rust",
  },
  {
    id: "elaichi",
    name: "Elaichi",
    localName: "Cardamom",
    traditionalAssociation:
      "An aromatic pod traditionally used to freshen the palate and ease stress.",
    benefits: [
      "Mouth Freshener",
      "Stress Relief",
      "Eases Nervous Weakness",
      "Cholesterol Control",
      "Helps Reduce Blood Pressure",
      "Relieves Heartburn",
    ],
    productSlugs: [],
    color: "gold",
  },
  {
    id: "nutmeg",
    name: "Nutmeg",
    traditionalAssociation:
      "A warming spice traditionally associated with vitality and skin clarity.",
    benefits: [
      "Supports Sexual Health",
      "Increases Sperm Count",
      "Helps with Urinary Stones",
      "Teeth Polishing",
      "Reduces Pimples",
      "Eases Migraine",
      "Reduces Pigmentation",
      "Helps with Viral Infections & Fever",
    ],
    productSlugs: [],
    color: "gold",
  },
  {
    id: "liquorice",
    name: "Liquorice",
    traditionalAssociation:
      "A sweet root traditionally used to soothe the stomach and strengthen hair.",
    benefits: [
      "Heals Wounds in Stomach",
      "Eases Ulcer",
      "Relieves Constipation",
      "Eases Knee Pain",
      "Strengthens Hair",
      "Fair Skin",
    ],
    productSlugs: [],
    color: "moss",
  },
  {
    id: "sounf",
    name: "Sounf",
    localName: "Fennel",
    traditionalAssociation:
      "An aromatic seed traditionally chewed after meals to aid digestion and freshen breath.",
    benefits: [
      "Relieves Stomach Pain",
      "Controls Intestinal Worms",
      "Gastric Relief",
      "Improves Digestion",
      "Eases Bone Pain",
      "Eases Urinary Pain",
      "Mouth Freshener",
      "Increases Metabolism",
    ],
    productSlugs: [],
    color: "gold",
  },
  {
    id: "multivitamin-leaves",
    name: "Multivitamin Leaves",
    traditionalAssociation:
      "A nutrient-dense leaf traditionally valued as a natural source of vitamins and minerals.",
    benefits: ["Rich Source of Vitamins & Minerals", "Supports Daily Wellness"],
    productSlugs: [],
    color: "moss",
  },
];
