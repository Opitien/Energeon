"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import styles from "./ProductCard.module.css";
import ScrollReveal from "./ScrollReveal";

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  price: number | string;
  delay?: number;
}

export default function ProductCard({ id, image, name, price, delay = 0 }: ProductCardProps) {
  const { addToCart } = useCart();
  
  // Convert price string to number if needed for consistency internally
  const numericPrice = typeof price === "string" ? parseFloat(price.replace("$", "")) : price;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ id, image, name, price: numericPrice, description: "", category: "", features: [] });
  };

  return (
    <ScrollReveal direction="up" delay={delay}>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <Link href={`/product/${id}`}>
            <Image
              src={image}
              alt={name}
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
          <div className={styles.overlay}>
             <button className={styles.actionBtn} aria-label="Add to wishlist">
              <Heart size={18} />
            </button>
            <Link href={`/product/${id}`} className={styles.actionBtn} aria-label="View details">
              <Eye size={18} />
            </Link>
            <button className={styles.actionBtn} onClick={handleAddToCart} aria-label="Add to cart" id={`add-to-cart-${id}`}>
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
        <div className={styles.content}>
          <Link href={`/product/${id}`}>
            <h3 className={styles.name}>{name}</h3>
          </Link>
          <div className={styles.footer}>
            <span className={styles.price}>${numericPrice.toFixed(2)}</span>
            <button className={styles.buyBtn} onClick={handleAddToCart}>Buy Now</button>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
