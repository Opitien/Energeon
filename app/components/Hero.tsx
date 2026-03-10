"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Background layers */}
      <div className={styles.bgImage} />
      <div className={styles.bgOverlay} />
      <div className={styles.bgGlow} />

      {/* Floating particles */}
      <div className={styles.particles}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
            }}
            style={{
              left: `${15 + i * 14}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
          />
        ))}
      </div>

      <div className={`container ${styles.content}`}>
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Sparkles size={14} />
          <span>Premium Wellness Products</span>
        </motion.div>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Energizing Your Life
          <br />
          <span className={styles.titleAccent}>With Healthy Options</span>
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Discover premium supplements and superfoods designed to boost your
          energy, fuel your body, and elevate your wellness journey naturally.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a href="#store" className="btn-primary" id="hero-cta-shop">
            Explore Store
            <ArrowRight size={18} />
          </a>
          <a href="#about" className="btn-outline" id="hero-cta-learn">
            Learn More
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className={styles.stats}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className={styles.stat}>
            <span className={styles.statValue}>50+</span>
            <span className={styles.statLabel}>Products</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statValue}>10K+</span>
            <span className={styles.statLabel}>Customers</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statValue}>100%</span>
            <span className={styles.statLabel}>Natural</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
