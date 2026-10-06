"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { gallery } from "@/lib/site";
import { SectionHeading } from "./Reveal";

// Spans fill a 2-col (mobile) and 4-col (desktop) grid with no gaps.
const spans = ["col-span-2 row-span-2", "", "", "row-span-2", "", "", "", ""];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const go = useCallback(
    (d: number) => setActive((i) => (i === null ? i : (i + d + gallery.length) % gallery.length)),
    [],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, go]);

  return (
    <section id="gallery" className="bg-linen-dark/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          align="center"
          eyebrow="Gallery"
          title={<>A few frames from <em className="text-[#8a7350]">slower days.</em></>}
        />

        <div className="mt-14 grid grid-flow-dense auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-4 md:gap-4">
          {gallery.map((img, i) => (
            <motion.button
              key={img.src}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.06 }}
              className={`group relative overflow-hidden rounded-2xl focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none md:rounded-3xl ${spans[i] ?? ""}`}
              aria-label={`Open photo: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-[1.2s] ease-out group-hover:scale-110"
              />
              <span className="absolute inset-0 grid place-items-center bg-forest-950/0 transition group-hover:bg-forest-950/35">
                <Expand className="size-6 text-linen opacity-0 transition group-hover:opacity-100" />
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-forest-950/95 p-4 backdrop-blur-lg"
            onClick={() => setActive(null)}
          >
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="relative h-[75vh] w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={gallery[active].src} alt={gallery[active].alt} fill sizes="100vw" className="object-contain" />
            </motion.div>
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-sm text-linen/70">
              {gallery[active].alt} · {active + 1}/{gallery.length}
            </p>
            <button onClick={() => setActive(null)} aria-label="Close" className="absolute top-5 right-5 grid size-12 place-items-center rounded-full border border-white/20 text-linen hover:bg-white/10">
              <X className="size-5" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label="Previous photo" className="absolute left-3 grid size-12 place-items-center rounded-full border border-white/20 bg-forest-950/50 text-linen hover:bg-white/10 sm:left-6">
              <ChevronLeft className="size-5" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); go(1); }} aria-label="Next photo" className="absolute right-3 grid size-12 place-items-center rounded-full border border-white/20 bg-forest-950/50 text-linen hover:bg-white/10 sm:right-6">
              <ChevronRight className="size-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
