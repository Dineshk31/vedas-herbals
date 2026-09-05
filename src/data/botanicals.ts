export interface Botanical {
  id: string;
  name: string;
  localName?: string;
  traditionalAssociation: string;
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
    productSlugs: ["bilva-tea"],
    color: "rust",
  },
  {
    id: "arjuna-bark",
    name: "Arjuna Bark",
    traditionalAssociation:
      "Bark from the Arjuna tree, part of traditional Indian wellness practices tied to heart health and stamina.",
    productSlugs: ["arjuna-tea"],
    color: "rust",
  },
  {
    id: "raavi",
    name: "Raavi Leaf",
    traditionalAssociation:
      "A cooling herb, traditionally reached for on warm days to ease heat and bloating.",
    productSlugs: ["raavi-tea"],
    color: "moss",
  },
  {
    id: "lemongrass",
    name: "Lemongrass",
    localName: "Nimma Gaddi",
    traditionalAssociation:
      "A bright citrus grass, traditionally infused for its calming, cleansing character.",
    productSlugs: ["lemongrass-tea"],
    color: "moss",
  },
  {
    id: "pudina",
    name: "Pudina",
    localName: "Mint",
    traditionalAssociation:
      "One of the most familiar herbs in Indian kitchens, brewed for a crisp, clear-headed cup.",
    productSlugs: ["pudina-tea"],
    color: "moss",
  },
  {
    id: "thati-bellam",
    name: "Thati Bellam",
    localName: "Palm Jaggery",
    traditionalAssociation:
      "Traditional palm jaggery from South India, used in place of refined sugar for a warmer, mineral-rich sweetness.",
    productSlugs: ["thati-bellam-coffee"],
    color: "gold",
  },
];
