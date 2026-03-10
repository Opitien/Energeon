"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Star, ShoppingCart, Zap, ShieldCheck, RefreshCcw } from "lucide-react";
import { Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import styles from "../product.module.css";
import ScrollReveal from "@/app/components/ScrollReveal";

export default function ProductContent({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="container">
      <Link href="/store" className={styles.backLink}>
        <ChevronLeft size={20} />
        Back to Store
      </Link>

      <div className={styles.grid}>
        {/* Image Gallery */}
        <ScrollReveal direction="left" className={styles.gallery}>
          <div className={styles.mainImageWrapper}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              className={styles.mainImage}
              priority
            />
          </div>
        </ScrollReveal>

        {/* Product Info */}
        <ScrollReveal direction="right" className={styles.info}>
          <span className={styles.category}>{product.category}</span>
          <h1 className={styles.title}>{product.name}</h1>
          
          <div className={styles.rating}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill={i < 4 ? "var(--color-accent)" : "none"} stroke={i < 4 ? "var(--color-accent)" : "currentColor"} />
            ))}
            <span>(24 Reviews)</span>
          </div>

          <div className={styles.price}>${product.price.toFixed(2)}</div>
          
          <p className={styles.description}>{product.description}</p>

          <div className={styles.features}>
            {product.features.map((feature, i) => (
              <div key={i} className={styles.featureItem}>
                <Zap size={16} className={styles.featureIcon} />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className={styles.actions}>
            <div className={styles.quantity}>
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button className="btn-primary" onClick={handleAddToCart} id="add-to-cart-detail">
              <ShoppingCart size={20} />
              Add to Cart
            </button>
          </div>

          <div className={styles.trustBadges}>
            <div className={styles.badge}>
              <ShieldCheck size={20} />
              <span>Quality Assured</span>
            </div>
            <div className={styles.badge}>
              <RefreshCcw size={20} />
              <span>30 Day Returns</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
