import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dastak Retreat — Boutique Valley-View Stay in Slate Godam, Dharamshala",
  description:
    "A pet-friendly boutique retreat in Slate Godam, Kangra Valley. Valley-view suites, forest walks, Himachali meals and the best rate guaranteed when you book direct.",
};

export const viewport: Viewport = {
  themeColor: "#0a0f0c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
