"use client";

import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { Mountain, Sunrise } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import { useEffect, useState, type PointerEvent } from "react";

export type Slide = { src: StaticImageData; alt: string; title: string; note: string };

const spring = { stiffness: 150, damping: 18, mass: 0.6 };
const ease = [0.22, 1, 0.36, 1] as const;
const SLIDE_MS = 5000;

// A 3D card that tilts toward the pointer: layered depth, moving glare, auto-playing slides with a wipe reveal.
export function TiltCard({ slides }: { slides: Slide[] }) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, spring);
  const sy = useSpring(py, spring);

  const rotateX = useTransform(sy, [0, 1], [11, -11]);
  const rotateY = useTransform(sx, [0, 1], [-14, 14]);
  const glareX = useTransform(sx, [0, 1], [0, 100]);
  const glareY = useTransform(sy, [0, 1], [0, 100]);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,240,210,0.3), transparent 55%)`;
  const imgX = useTransform(sx, [0, 1], [14, -14]);
  const imgY = useTransform(sy, [0, 1], [14, -14]);

  useEffect(() => {
    if (reduce || paused) return;
    const id = setTimeout(() => setActive((i) => (i + 1) % slides.length), SLIDE_MS);
    return () => clearTimeout(id);
  }, [active, paused, reduce, slides.length]);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    px.set(0.5);
    py.set(0.5);
    setPaused(false);
  };

  const slide = slides[active];
  const bob = (delay: number, dist = 8) =>
    reduce ? {} : { animate: { y: [0, -dist, 0] }, transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const, delay } };

  return (
    <motion.div
      onPointerMove={onMove}
      onPointerEnter={(e) => e.pointerType === "mouse" && setPaused(true)}
      onPointerLeave={onLeave}
      {...bob(0, 10)}
      className="relative mx-auto w-full max-w-[440px] [perspective:1400px]"
    >
      {/* Ghost cards behind for depth */}
      <motion.div
        initial={reduce ? false : { rotate: 0, x: 0, y: 0, opacity: 0 }}
        animate={{ rotate: 6, x: 22, y: 18, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.9, ease }}
        className="absolute inset-0 rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-sm"
      />
      <motion.div
        initial={reduce ? false : { rotate: 0, x: 0, y: 0, opacity: 0 }}
        animate={{ rotate: 3, x: 11, y: 9, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.8, ease }}
        className="absolute inset-0 rounded-[30px] border border-white/10 bg-white/[0.06] backdrop-blur-sm"
      />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative rounded-[30px] border border-white/20 bg-forest-900/60 p-2.5 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-3"
      >
        {/* Photo layer */}
        <div
          className="relative aspect-[4/4.6] overflow-hidden rounded-[22px] bg-forest-950 sm:aspect-[4/5]"
          style={{ transform: "translateZ(30px)" }}
        >
          {/* Preload every slide at the same size so the wipe never reveals an unloaded image. */}
          <div aria-hidden className="pointer-events-none absolute inset-0 opacity-0">
            {slides.map((s) => (
              <Image key={s.title} src={s.src} alt="" fill loading="eager" sizes="(min-width: 640px) 960px, 200vw" quality={90} />
            ))}
          </div>
          <AnimatePresence initial={false}>
            <motion.div
              key={active}
              initial={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 0 100%)" }}
              animate={reduce ? { opacity: 1 } : { clipPath: "inset(0 0 0 0%)" }}
              exit={{ opacity: 1 }}
              transition={{ duration: 1.1, ease }}
              className="absolute inset-0"
            >
              <motion.div style={{ x: imgX, y: imgY }} className="absolute -inset-5">
                <motion.div
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: SLIDE_MS / 1000 + 1.5, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image src={slide.src} alt={slide.alt} fill placeholder="blur" sizes="(min-width: 640px) 960px, 200vw" quality={90} className="object-cover" />
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Shine sweep on each slide change */}
          {!reduce && (
            <motion.div
              key={`shine-${active}`}
              initial={{ x: "-120%" }}
              animate={{ x: "120%" }}
              transition={{ duration: 1.3, delay: 0.35, ease: "easeInOut" }}
              className="pointer-events-none absolute inset-y-0 w-1/2 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />
          )}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/10 to-transparent" />
          <motion.div style={{ background: glare }} className="pointer-events-none absolute inset-0 mix-blend-overlay" />

          <div className="absolute right-0 bottom-0 left-0 p-4 sm:p-5">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={active} exit={{ opacity: 0, y: -8, transition: { duration: 0.25 } }}>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-[10px] font-semibold tracking-[0.3em] text-gold uppercase"
                >
                  Inside Dastak · 0{active + 1}
                </motion.p>
                <motion.h3
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, ease }}
                  className="mt-1 font-serif text-[26px] leading-tight text-linen sm:text-[30px]"
                >
                  {slide.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5, ease }}
                  className="mt-1 text-[13px] text-linen/65"
                >
                  {slide.note}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Thumbnail switcher with autoplay progress */}
        <div className="mt-2.5 grid grid-cols-4 gap-2 sm:mt-3" style={{ transform: "translateZ(20px)" }}>
          {slides.map((s, i) => (
            <motion.button
              key={s.title}
              onClick={() => setActive(i)}
              aria-label={`Show ${s.title}`}
              aria-pressed={active === i}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + i * 0.08, ease }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`relative aspect-[4/3] overflow-hidden rounded-xl transition-[opacity,box-shadow] duration-300 ${
                active === i ? "ring-2 ring-gold ring-offset-2 ring-offset-forest-900" : "opacity-50 hover:opacity-100"
              }`}
            >
              <Image src={s.src} alt="" fill sizes="240px" placeholder="blur" className="object-cover" />
              {active === i && !reduce && (
                <span className="absolute inset-x-1.5 bottom-1.5 h-[3px] overflow-hidden rounded-full bg-black/40">
                  <motion.span
                    key={`${active}-${paused}`}
                    initial={{ width: "0%" }}
                    animate={{ width: paused ? "0%" : "100%" }}
                    transition={{ duration: paused ? 0 : SLIDE_MS / 1000, ease: "linear" }}
                    className="block h-full bg-gold"
                  />
                </span>
              )}
            </motion.button>
          ))}
        </div>

        {/* Floating chips above the card surface */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 1.3, ease }}
          className="absolute -top-4 left-3 sm:-left-8"
          style={{ transform: "translateZ(80px)" }}
        >
          <motion.div
            {...bob(0.5, 6)}
            className="flex items-center gap-2 rounded-full border border-white/20 bg-forest-950/80 py-2 pr-4 pl-2.5 shadow-xl backdrop-blur-xl"
          >
            <span className="grid size-7 place-items-center rounded-full bg-gold text-forest-950">
              <Mountain className="size-3.5" />
            </span>
            <span className="text-[12px] font-semibold whitespace-nowrap text-linen">Kangra Valley views</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 1.5, ease }}
          className="absolute top-[38%] right-3 sm:-right-10"
          style={{ transform: "translateZ(100px)" }}
        >
          <motion.div
            {...bob(1.4, 7)}
            className="flex items-center gap-2.5 rounded-2xl border border-gold/30 bg-forest-950/85 px-3.5 py-2.5 shadow-xl backdrop-blur-xl sm:px-4 sm:py-3"
          >
            <Sunrise className="size-5 text-gold" />
            <div className="leading-tight">
              <p className="text-[12px] font-semibold whitespace-nowrap text-linen">Misty mornings</p>
              <p className="text-[11px] whitespace-nowrap text-linen/60">Chai on the balcony</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
