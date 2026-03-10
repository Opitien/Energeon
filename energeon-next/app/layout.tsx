import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Energeon — Energizing Your Life With Healthy Options",
    template: "%s | Energeon"
  },
  description:
    "Discover premium health supplements and superfoods at Energeon. Boost your energy, detox your body, and fuel your wellness journey with our curated collection of natural products.",
  keywords: [
    "health supplements",
    "superfoods",
    "energy",
    "detox",
    "protein",
    "wellness",
    "Energeon",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Energeon — Energizing Your Life",
    description:
      "Premium health supplements and superfoods to fuel your wellness journey.",
    url: "https://energeon.com",
    siteName: "Energeon",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Energeon — Premium Wellness and Energy",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Energeon — Energizing Your Life",
    description: "Premium health supplements and superfoods to fuel your wellness journey.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { CartProvider } from "@/context/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body suppressHydrationWarning>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
