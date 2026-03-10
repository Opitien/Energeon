"use client";

import { motion } from "framer-motion";
import styles from "./CTABanner.module.css";
import ScrollReveal from "./ScrollReveal";

export default function CTABanner() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <ScrollReveal direction="up" className={styles.wrapper}>
          <div className={styles.content}>
            <h2 className={styles.title}>Boost Your Health With An Energy Refill</h2>
            <p className={styles.text}>
              Join thousands of satisfied customers who have transformed their lives
              with Energeon premium supplements.
            </p>
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              id="cta-shop-now"
            >
              Shop Now
            </motion.button>
          </div>
          <div className={styles.visual}>
            {/* Abstract decorative elements */}
            <div className={styles.circle} />
            <div className={styles.glow} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
