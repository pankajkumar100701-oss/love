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
  title: "Dastak Retreat — Slate Godam, Dharamshala",
  description:
    "A unique hospitality hideaway in Slate Godam, Dharamshala, with breathtaking Kangra Valley views. Book direct for the best rate.",
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
