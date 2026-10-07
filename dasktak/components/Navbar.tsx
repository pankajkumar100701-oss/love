"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-full border px-4 py-2.5 transition-all duration-500 sm:px-6 ${
          scrolled
            ? "border-white/10 bg-forest-950/70 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            : "border-white/10 bg-white/[0.04] backdrop-blur-md"
        }`}
      >
        <a href="#top" className="flex min-w-0 flex-col leading-none" aria-label="Dastak Retreat home">
          <span className="font-serif text-[17px] tracking-[0.18em] whitespace-nowrap text-linen sm:text-[22px] sm:tracking-[0.28em]">
            DASTAK <span className="text-gold">RETREAT</span>
          </span>
          <span className="mt-1 text-[8px] font-medium tracking-[0.26em] whitespace-nowrap text-linen/50 uppercase sm:text-[9px] sm:tracking-[0.34em]">
            {site.tagline}
          </span>
        </a>

        <a
          href="#inside"
          className="shrink-0 rounded-full bg-gold px-4 py-2.5 text-[13px] font-semibold tracking-wide whitespace-nowrap text-forest-950 transition hover:bg-gold-light hover:shadow-[0_0_30px_-6px_rgba(217,190,143,0.7)] sm:px-5"
        >
          Book Direct
        </a>
      </nav>
    </motion.header>
  );
}
