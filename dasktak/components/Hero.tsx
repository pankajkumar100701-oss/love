"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Footprints, Images, Leaf, ShieldCheck, UtensilsCrossed } from "lucide-react";
import Image from "next/image";
import exteriorDusk from "@/public/images/exterior-dusk.jpg";
import exteriorDay from "@/public/images/exterior-day.jpg";
import room from "@/public/images/room.jpg";
import baithak from "@/public/images/baithak.jpg";
import lounge from "@/public/images/lounge.jpg";
import { TiltCard, type Slide } from "./TiltCard";

const ease = [0.22, 1, 0.36, 1] as const;

const highlights = [
  { icon: UtensilsCrossed, label: "Baithak — Indian kitchen" },
  { icon: Leaf, label: "Gardens & yoga space" },
  { icon: Footprints, label: "Hikes, treks & village walks" },
];

const slides: Slide[] = [
  { src: room, alt: "Sunlit bedroom with valley-facing windows", title: "Light-filled rooms", note: "Wake up to the valley through wide windows." },
  { src: exteriorDay, alt: "Slate-stone cottages on a green hillside", title: "Slate-stone cottages", note: "Built into the hills of Slate Godam." },
  { src: baithak, alt: "Guests dining at Baithak with valley views", title: "Baithak", note: "Home-style Indian cuisine with a view." },
  { src: lounge, alt: "Quiet lounge corner with round windows", title: "Quiet corners", note: "Board games, books and long afternoons." },
];

export function Hero() {
  const reduce = useReducedMotion();

  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.1, delay, ease },
  });

  return (
    <section id="top" className="grain relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-forest-950 [clip-path:inset(0)]">
      {/* Slow "breathing" zoom on the backdrop; stays inside the section so no image edge can show. */}
      <motion.div
        initial={{ scale: reduce ? 1 : 1.12 }}
        animate={reduce ? { scale: 1 } : { scale: [1.12, 1.03, 1.08] }}
        transition={{ duration: 24, ease: "easeInOut", times: [0, 0.6, 1], repeat: Infinity, repeatType: "mirror" }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src={exteriorDusk}
          alt="Dastak Retreat's stone cottages glowing at dusk below the Dhauladhar hills"
          fill
          priority
          placeholder="blur"
          sizes="120vw"
          quality={90}
          className="object-cover object-[30%_50%]"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-950/90 via-forest-950/60 to-forest-950/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-950/60 via-transparent to-forest-950/90" />
      <div className="pointer-events-none absolute top-1/3 right-[10%] -z-10 size-[520px] rounded-full bg-gold/15 blur-[140px]" />

      <div className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-16 px-4 pt-32 pb-20 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:gap-10 lg:pt-28 lg:pb-16">
        <div>
          <motion.div
            {...fade(0.2)}
            className="mb-6 inline-flex w-fit max-w-full items-center gap-2.5 rounded-2xl border border-white/15 bg-white/[0.06] py-1.5 pr-4 pl-2 backdrop-blur-md sm:rounded-full"
          >
            <span className="relative flex size-2.5 shrink-0">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[11px] leading-snug font-medium tracking-wide text-linen/85 sm:text-xs">
              Slate Godam, Dharamshala <span className="text-gold">•</span> Off the beaten track
            </span>
          </motion.div>

          <motion.h1
            {...fade(0.35)}
            className="max-w-3xl font-serif text-[44px] leading-[0.98] font-light text-linen sm:text-6xl lg:text-[80px]"
          >
            Find your calm in the <em className="text-gold-light">untouched silence</em> of Kangra Valley.
          </motion.h1>

          <motion.p {...fade(0.5)} className="mt-6 max-w-xl text-base leading-relaxed text-linen/75 sm:text-lg">
            A unique hospitality hideaway nestled above Dharamshala — breathtaking valley views, rooms filled with
            natural light, and slow mornings that begin with chai on the balcony.
          </motion.p>

          <motion.div {...fade(0.62)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#inside"
              className="group flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-gradient-to-br from-gold-light to-gold px-7 font-semibold text-forest-950 shadow-[0_15px_40px_-12px_rgba(217,190,143,0.8)] transition hover:brightness-105"
            >
              Check availability
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#inside"
              className="flex min-h-14 items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/[0.05] px-7 font-medium text-linen backdrop-blur-md transition hover:border-gold/60 hover:text-gold-light"
            >
              <Images className="size-4" /> Explore the retreat
            </a>
          </motion.div>

          <motion.p {...fade(0.7)} className="mt-4 flex items-center gap-1.5 text-[12px] text-linen/55">
            <ShieldCheck className="size-3.5 text-gold" /> Book direct — zero OTA commission, best price guaranteed
          </motion.p>

          <motion.ul {...fade(0.8)} className="mt-9 flex flex-wrap gap-2">
            {highlights.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 rounded-full border border-white/12 bg-black/20 px-3.5 py-2 text-[12px] font-medium text-linen/80 backdrop-blur-md"
              >
                <Icon className="size-3.5 text-gold" /> {label}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 50, rotateX: 18 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.4, delay: 0.5, ease }}
          id="inside"
          className="scroll-mt-24 px-1 sm:px-8"
        >
          <TiltCard slides={slides} />
        </motion.div>
      </div>

      <p className="absolute right-0 bottom-4 left-0 px-4 text-center text-[11px] text-linen/35">
        Design Concept by <span className="text-gold/70">Pankaj</span>
      </p>
    </section>
  );
}
