import { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import StoreContent from "./StoreContent";
import { products } from "@/lib/products";
import styles from "./store.module.css";

export const metadata: Metadata = {
  title: "Store",
  description: "Browse our full collection of premium energy stacks, protein formulas, and detox cleanses. Fuel your journey with Energeon.",
  openGraph: {
    title: "Store | Energeon",
    description: "Full collection of premium energy cells and wellness stacks.",
  }
};

export default function StorePage() {
  return (
    <main className={styles.main}>
      <Navbar />
      <StoreContent products={products} />
      <Footer />
    </main>
  );
}
