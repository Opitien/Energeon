"use client";

import { useState } from "react";
import ProductCard from "@/app/components/ProductCard";
import SectionHeader from "@/app/components/SectionHeader";
import { Product } from "@/lib/products";
import styles from "./store.module.css";

export default function StoreContent({ products }: { products: Product[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];
  
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section className="section" style={{ paddingTop: "8rem" }}>
      <div className="container">
        <SectionHeader 
          subtitle="Premium Energy Cells" 
          title="Full Energy Bank" 
        />
        
        <div className={styles.filterBar}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid-3">
          {filteredProducts.map((product, i) => (
            <ProductCard 
              key={product.id} 
              {...product} 
              delay={(i % 3) * 0.1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
