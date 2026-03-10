"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Trash2, Plus, Minus, CreditCard, Truck, ShieldCheck, ArrowRight } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SectionHeader from "@/app/components/SectionHeader";
import { useCart } from "@/context/CartContext";
import styles from "./checkout.module.css";
import ScrollReveal from "@/app/components/ScrollReveal";

export default function CheckoutPage() {
  const { cart, updateQuantity, removeFromCart, cartTotal, itemCount } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate payment
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <main className={styles.main}>
        <Navbar />
        <section className="section" style={{ paddingTop: "10rem" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <div className={styles.successIcon}>
              <ShieldCheck size={80} />
            </div>
            <h1 className={styles.title}>Energy Received!</h1>
            <p className={styles.successText}>
              Your order has been placed successfully. You will receive a confirmation email shortly.
              We're preparing your energy refill right now!
            </p>
            <Link href="/store" className="btn-primary" style={{ marginTop: "2rem" }}>
              Continue Shopping
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <Navbar />

      <section className="section" style={{ paddingTop: "8rem" }}>
        <div className="container">
          <SectionHeader 
            subtitle="Finalize Order" 
            title="Checkout" 
          />

          {cart.length === 0 ? (
            <div className={styles.emptyCart}>
              <h2>Your bag is empty</h2>
              <p>Looks like you haven't added any energy cells to your bag yet.</p>
              <Link href="/store" className="btn-primary" style={{ marginTop: "1.5rem" }}>
                Explore Store
              </Link>
            </div>
          ) : (
            <div className={styles.grid}>
              {/* Cart List */}
              <div className={styles.cartSection}>
                <h3 className={styles.sectionTitle}>Your Energy Cells ({itemCount})</h3>
                <div className={styles.cartList}>
                  {cart.map((item) => (
                    <div key={item.id} className={styles.cartItem}>
                      <div className={styles.itemImage}>
                        <Image src={item.image} alt={item.name} fill sizes="100px" />
                      </div>
                      <div className={styles.itemInfo}>
                        <div className={styles.itemHeader}>
                          <h4>{item.name}</h4>
                          <span className={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                        <p className={styles.itemCategory}>{item.category}</p>
                        <div className={styles.itemActions}>
                          <div className={styles.quantity}>
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label="Decrease quantity">
                              <Minus size={14} />
                            </button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="Increase quantity">
                              <Plus size={14} />
                            </button>
                          </div>
                          <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>
                            <Trash2 size={16} />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Checkout Form & Summary */}
              <div className={styles.summarySection}>
                <div className={styles.summaryCard}>
                  <h3 className={styles.sectionTitle}>Order Summary</h3>
                  <div className={styles.summaryTable}>
                    <div className={styles.summaryRow}>
                      <span>Subtotal</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className={styles.summaryRow}>
                      <span>Shipping</span>
                      <span>Calculated next</span>
                    </div>
                    <div className={styles.divider} />
                    <div className={`${styles.summaryRow} ${styles.total}`}>
                      <span>Total</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <form className={styles.form} onSubmit={handleCheckout}>
                    <h4 className={styles.formSubtitle}>Shipping Address</h4>
                    <div className={styles.fieldGroup}>
                      <input type="text" placeholder="Full Name" required />
                      <input type="email" placeholder="Email Address" required />
                    </div>
                    <input type="text" placeholder="Street Address" required />
                    <div className={styles.fieldGroup}>
                      <input type="text" placeholder="City" required />
                      <input type="text" placeholder="ZIP Code" required />
                    </div>

                    <h4 className={styles.formSubtitle} style={{ marginTop: "1.5rem" }}>Payment Method</h4>
                    <div className={styles.paymentMethods}>
                      <div className={`${styles.paymentBtn} ${styles.active}`}>
                        <CreditCard size={20} />
                        Card
                      </div>
                      <div className={styles.paymentBtn}>
                        Other
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      className="btn-primary" 
                      style={{ width: "100%", marginTop: "2rem" }}
                      disabled={isLoading}
                    >
                      {isLoading ? "Processing..." : `Pay $${cartTotal.toFixed(2)}`}
                      {!isLoading && <ArrowRight size={18} />}
                    </button>
                  </form>
                  
                  <div className={styles.securityInfo}>
                    <ShieldCheck size={16} />
                    <span>Secure encrypted checkout</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
