"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Store", href: "/store" },
  { label: "Energizing", href: "/#energizing" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section for home page anchor links
      if (pathname === "/") {
        const sections = ["home", "energizing", "about", "contact"];
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 120) {
              setActiveSection(sections[i]);
              break;
            }
          }
        }
      } else {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("/#") && pathname === "/") {
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.nav
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className={styles.container}>
        {/* Logo */}
        <Link
          href="/"
          className={styles.logo}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className={styles.logoIcon}>
            <Image src="/logo.png" alt="Energeon Logo" width={28} height={28} priority />
          </div>
          <span className={styles.logoText}>Energeon</span>
        </Link>

        {/* Desktop Nav */}
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.navLink} ${
                  (pathname === link.href) || (pathname === "/" && activeSection === link.href.replace("/#", ""))
                    ? styles.active
                    : ""
                }`}
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
                {((pathname === link.href) || (pathname === "/" && activeSection === link.href.replace("/#", ""))) && (
                  <motion.div
                    className={styles.activeIndicator}
                    layoutId="activeNav"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.navActions}>
          {/* Search (Desktop) */}
          <div className={styles.searchWrapper}>
            <Search size={16} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search..."
              className={styles.searchInput}
              aria-label="Search"
            />
          </div>

          {/* Cart Icon */}
          <Link href="/checkout" className={styles.cartBtn} aria-label="View shopping bag" id="nav-cart-btn">
            <ShoppingBag size={22} />
            {itemCount > 0 && (
              <motion.span 
                className={styles.cartBadge}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                key={itemCount}
              >
                {itemCount}
              </motion.span>
            )}
          </Link>

          {/* Mobile Toggle */}
          <button
            className={styles.mobileToggle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className={styles.mobileLinks}>
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className={`${styles.mobileLink} ${
                      pathname === link.href || (pathname === "/" && activeSection === link.href.replace("/#", "")) ? styles.activeMobile : ""
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
              >
                <Link href="/checkout" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>
                  Shopping Bag ({itemCount})
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
