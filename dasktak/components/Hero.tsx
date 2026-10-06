"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { unsplash } from "@/lib/site";
import { BookingWidget } from "./BookingWidget";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, reduce ? 1.05 : 1.15]);

  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.1, delay, ease },
  });

  return (
    <section ref={ref} id="top" className="grain relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-forest-950">
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-10">
        <Image
          src={unsplash("1506905925346-21bda4d32df4", 2400)}
          alt="Himalayan peaks rising above a sea of morning clouds"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_60%]"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-950/70 via-forest-950/30 to-forest-950" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_30%_40%,transparent_0%,rgba(10,15,12,0.55)_70%)]" />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-4 pt-32 pb-8 sm:px-6 sm:pb-12 lg:pt-40">
        <motion.div {...fade(0.2)} className="mb-6 inline-flex w-fit max-w-full items-center gap-2.5 rounded-2xl sm:rounded-full border border-white/15 bg-white/[0.06] py-1.5 pr-4 pl-2 backdrop-blur-md">
          <span className="relative flex size-2.5 shrink-0">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[11px] leading-snug font-medium tracking-wide text-linen/85 sm:text-xs">
            Slate Godam, Dharamshala <span className="text-gold">•</span> Pet Friendly{" "}
            <span className="text-gold">•</span> Valley-View Suites
          </span>
        </motion.div>

        <motion.h1
          {...fade(0.35)}
          className="max-w-4xl font-serif text-[44px] leading-[0.98] font-light text-linen sm:text-6xl lg:text-[88px]"
        >
          Find your calm in the <em className="text-gold-light">untouched silence</em> of Kangra Valley.
        </motion.h1>

        <motion.p {...fade(0.5)} className="mt-6 max-w-xl text-base leading-relaxed text-linen/75 sm:text-lg">
          A boutique sanctuary crafted for slow living, misty mornings, and uninterrupted mountain panoramas.
        </motion.p>

        <motion.div {...fade(0.7)} className="mt-10 sm:mt-14">
          <BookingWidget />
        </motion.div>
      </div>
    </section>
  );
}
