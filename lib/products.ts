export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "alpha-male-stack",
    name: "Alpha Male Stack",
    price: 27.99,
    image: "/images/alphamalestack.png",
    category: "Stacks",
    description: "The ultimate performance bundle designed for men. Boost testosterone naturally, improve muscle recovery, and enhance daily energy levels with our science-backed formula.",
    features: ["Natural T-Boosters", "Zinc & Magnesium", "Performance Focused"],
  },
  {
    id: "complete-detox-cleanse",
    name: "Complete Detox Cleanse Stack",
    price: 30.99,
    image: "/images/completedetoxcleansestack.png",
    category: "Health",
    description: "Flush toxins and reset your system. This comprehensive stack supports liver function, improves digestion, and clears skin by removing harmful impurities from your body.",
    features: ["Liver Support", "Probiotic Blend", "Antioxidant Rich"],
  },
  {
    id: "complete-protein-stack",
    name: "Complete Protein Stack",
    price: 20.99,
    image: "/images/completeProteinstack.png",
    category: "Fitness",
    description: "High-quality whey protein isolate combined with essential amino acids. Perfect for muscle building and post-workout recovery with zero fillers and delicious taste.",
    features: ["25g Protein/Serving", "BCAA Infused", "Low Sugar"],
  },
  {
    id: "super-greens",
    name: "Super Greens",
    price: 24.99,
    image: "/images/supergreens.png",
    category: "Nutrition",
    description: "Daily serving of organic greens, fruits, and adaptogens. Boost your immunity, improve energy, and get your daily vegetable intake in one easy, delicious scoop.",
    features: ["Organic Ingredients", "No Artificial Flavors", "Immune Support"],
  },
  {
    id: "magnesium-release",
    name: "Extended Release Magnesium",
    price: 18.99,
    image: "/images/extend-release-magnessium.png",
    category: "Wellness",
    description: "Support muscle relaxation, sleep quality, and cardiovascular health with our unique extended-release formula that prevents digestive upset while ensuring maximum absorption.",
    features: ["Sleep Support", "Muscle Recovery", "High Absorption"],
  },
  {
    id: "phresh-superblends",
    name: "PHresh Superblends",
    price: 22.99,
    image: "/images/phresh-superblends.png",
    category: "Nutrition",
    description: "A synergistic blend of berries, roots, and botanicals designed to fight oxidative stress and keep your energy 'fresh' throughout the most demanding days.",
    features: ["Anti-Aging", "Vibrant Energy", "Natural Botanicals"],
  },
];
