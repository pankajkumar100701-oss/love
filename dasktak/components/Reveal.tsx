"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({ children, className, delay = 0, y = 28 }: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "light",
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
}) {
  const dark = tone === "dark";
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`mb-4 flex items-center gap-3 text-[11px] font-semibold tracking-[0.32em] uppercase ${align === "center" ? "justify-center" : ""} ${dark ? "text-gold" : "text-[#8a7350]"}`}>
        <span className="h-px w-8 bg-current opacity-60" />
        {eyebrow}
      </p>
      <h2 className={`font-serif text-4xl leading-[1.05] font-light sm:text-5xl lg:text-6xl ${dark ? "text-linen" : "text-forest-900"}`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? "text-linen/65" : "text-charcoal/70"}`}>{intro}</p>
      )}
    </Reveal>
  );
}
