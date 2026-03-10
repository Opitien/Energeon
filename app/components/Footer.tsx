"use client";

import { motion } from "framer-motion";
import { Zap, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Newsletter */}
        <div className={styles.newsletter}>
          <div className={styles.newsletterContent}>
            <h3>Subscribe to Our Newsletter</h3>
            <p>Get the latest energy tips and exclusive product releases.</p>
          </div>
          <form className={styles.newsletterForm} id="newsletter-form">
            <input type="email" placeholder="Enter your email" required id="newsletter-email" />
            <button type="submit" className="btn-primary" id="newsletter-submit">Subscribe</button>
          </form>
        </div>

        <div className={styles.mainFooter}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <Zap size={24} fill="currentColor" />
              <span>Energeon</span>
            </div>
            <p className={styles.brandTagline}>
              Energizing your life with premium health options and sustainable wellness.
            </p>
            <div className={styles.socials}>
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="Linkedin"><Linkedin size={20} /></a>
            </div>
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.linkGroup}>
              <h5>Customer Care</h5>
              <ul>
                <li><a href="#">24/7 Service</a></li>
                <li><a href="#">Support Center</a></li>
                <li><a href="#">Accountability</a></li>
                <li><a href="#">Authenticity</a></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h5>Energy FAQ's</h5>
              <ul>
                <li><a href="#">No E-Charges</a></li>
                <li><a href="#">Home Delivery</a></li>
                <li><a href="#">Quality Assurance</a></li>
                <li><a href="#">Insurance</a></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h5>Company</h5>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#energizing">Energizing</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#store">Store</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>© {new Date().getFullYear()} Energeon. All energy reserved.</p>
          <button onClick={scrollToTop} className={styles.scrollBtn} aria-label="Scroll to top" id="scroll-to-top">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
