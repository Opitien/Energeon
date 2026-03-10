"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";
import styles from "./ContactSection.module.css";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeader
          subtitle="Always Be In Sync"
          title="Contact Our Energy Team"
        />

        <div className={styles.grid}>
          {/* Contact Info */}
          <ScrollReveal direction="left" className={styles.info}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Contact Details</h3>
              <p className={styles.infoText}>
                Have questions about our products? Reach out, we're here to help.
              </p>

              <div className={styles.contactItems}>
                <div className={styles.item}>
                  <div className={styles.iconBox}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h6>Location</h6>
                    <p>1234 Energy Avenue DC USA</p>
                  </div>
                </div>

                <div className={styles.item}>
                  <div className={styles.iconBox}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <h6>Phone</h6>
                    <p>101 001 001 01</p>
                  </div>
                </div>

                <div className={styles.item}>
                  <div className={styles.iconBox}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <h6>Email</h6>
                    <p>hello@energeon.com</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right" className={styles.formWrapper}>
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={styles.form}
                  onSubmit={handleSubmit}
                  id="contact-form"
                >
                  <div className={styles.formRow}>
                    <div className={styles.field}>
                      <input type="text" placeholder="First Name" required id="first-name" />
                    </div>
                    <div className={styles.field}>
                      <input type="text" placeholder="Last Name" required id="last-name" />
                    </div>
                  </div>
                  <div className={styles.field}>
                    <input type="email" placeholder="Email Address" required id="email" />
                  </div>
                  <div className={styles.field}>
                    <textarea placeholder="Your Message" rows={5} required id="message" />
                  </div>
                  <button 
                    type="submit" 
                    className="btn-primary" 
                    disabled={isLoading}
                    id="submit-contact"
                  >
                    {isLoading ? "Sending..." : "Energy Ping"}
                    <Send size={18} />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={styles.success}
                >
                  <div className={styles.successIcon}>
                    <CheckCircle size={48} />
                  </div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. Our energy team will respond shortly.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
