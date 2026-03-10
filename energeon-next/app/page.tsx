import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import SectionHeader from "@/app/components/SectionHeader";
import ProductCard from "@/app/components/ProductCard";
import AboutCard from "@/app/components/AboutCard";
import CTABanner from "@/app/components/CTABanner";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";
import styles from "./page.module.css";

import { products } from "@/lib/products";

const featuredProducts = products.filter(p => ["alpha-male-stack", "complete-detox-cleanse", "complete-protein-stack"].includes(p.id));

const aboutFeatures = [
  {
    title: "PHresh Superblends",
    image: "/images/phresh-superblends.png",
    description: "A powerhouse of nutrients, packed with vitamins, minerals, and superfoods to fuel your wellness journey.",
  },
  {
    title: "Super Greens",
    image: "/images/supergreens.png",
    description: "Packed with nutrient-rich greens like spinach and kale, offering a natural energy boost while supporting detox.",
  },
  {
    title: "Extended Release Magnesium",
    image: "/images/extend-release-magnessium.png",
    description: "Slow, steady release of magnesium throughout the day, helping to support muscle relaxation and improve sleep.",
  },
];

const storeProducts = products.slice(0, 6);

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />

      {/* Featured Section */}
      <section id="energizing" className="section">
        <div className="container">
          <SectionHeader 
            subtitle="Eat Healthy & Appreciate Nature" 
            title="What's Energizing" 
          />
          <div className="grid-3">
            {featuredProducts.map((product, i) => (
              <ProductCard key={i} {...product} delay={i * 0.15} />
            ))}
          </div>
          <div className={styles.centerActions}>
            <button className="btn-outline">Click for More</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <SectionHeader 
            subtitle="Energetic And Natural Products" 
            title="Explore our Energetic Community" 
          />
          <div className="grid-3">
            {aboutFeatures.map((feature, i) => (
              <AboutCard key={i} {...feature} delay={i * 0.15} />
            ))}
          </div>
          <div className={styles.centerActions}>
            <button className="btn-outline">Join Community</button>
          </div>
        </div>
      </section>

      {/* Store Section */}
      <section id="store" className="section">
        <div className="container">
          <SectionHeader 
            subtitle="Pick Your Desired Product" 
            title="Explore our Energy Bank" 
          />
          <div className="grid-3">
            {storeProducts.map((product, i) => (
              <ProductCard key={i} {...product} delay={(i % 3) * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <ContactSection />
      <Footer />
    </main>
  );
}
