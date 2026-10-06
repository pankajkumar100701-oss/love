"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, BedDouble, Eye, Ruler, Users, Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { suiteFilters, suites, whatsappLink, type Suite } from "@/lib/site";
import { WhatsAppIcon } from "./icons";
import { SectionHeading } from "./Reveal";

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

function SuiteCard({ suite, index }: { suite: Suite; index: number }) {
  const msg = `Hi Dastak Retreat! I'd like to reserve the ${suite.name} (from ${inr(suite.price)}/night). Could you share availability and your best direct rate?`;
  const enquiry = `Hi! I have a quick question about the ${suite.name} before booking.`;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_30px_60px_-35px_rgba(19,28,21,0.45)] ring-1 ring-forest-900/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={suite.image}
          alt={suite.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-[1.4s] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
        {suite.badge && (
          <span className="absolute top-4 left-4 rounded-full bg-linen/90 px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-forest-900 uppercase backdrop-blur">
            {suite.badge}
          </span>
        )}
        <div className="absolute right-4 bottom-4 left-4 flex flex-wrap gap-2">
          {[
            { icon: Ruler, label: suite.size },
            { icon: Eye, label: suite.view },
          ].map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] font-medium text-linen backdrop-blur-md"
            >
              <Icon className="size-3" /> {label}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-[10px] font-semibold tracking-[0.3em] text-[#8a7350] uppercase">{suite.kicker}</p>
        <h3 className="mt-2 font-serif text-[28px] leading-tight text-forest-900">{suite.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-charcoal/65">{suite.description}</p>

        <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2.5">
          {suite.amenities.map((a) => (
            <li key={a} className="flex items-center gap-2 text-[13px] text-charcoal/80">
              <Check className="size-3.5 shrink-0 text-gold" strokeWidth={2.5} /> {a}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-4 border-t border-forest-900/10 pt-5 text-xs text-charcoal/55">
          <span className="flex items-center gap-1.5"><Users className="size-3.5" /> {suite.sleeps}</span>
          <span className="flex items-center gap-1.5"><BedDouble className="size-3.5" /> Breakfast incl.</span>
        </div>

        <div className="mt-auto pt-6">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <p className="text-[11px] tracking-wide text-charcoal/50 uppercase">From</p>
              <p className="font-serif text-3xl text-forest-900">
                {inr(suite.price)}
                <span className="font-sans text-sm text-charcoal/50"> / night</span>
              </p>
            </div>
            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700 ring-1 ring-emerald-600/15">
              Direct rate
            </span>
          </div>
          <div className="grid grid-cols-[1fr_auto] gap-2">
            <a
              href={whatsappLink(msg)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-forest-900 px-5 text-sm font-semibold text-linen transition hover:bg-forest-800"
            >
              <WhatsAppIcon className="size-4 text-[#25D366]" /> Reserve via WhatsApp
            </a>
            <a
              href={whatsappLink(enquiry)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instant enquiry about ${suite.name}`}
              className="grid size-12 place-items-center rounded-full border border-forest-900/15 text-forest-900 transition hover:border-gold hover:bg-gold hover:text-forest-950"
            >
              <ArrowUpRight className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Suites() {
  const [filter, setFilter] = useState<(typeof suiteFilters)[number]["id"]>("all");
  const visible = suites.filter((s) => filter === "all" || s.categories.includes(filter));

  return (
    <section id="suites" className="bg-linen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Suites & Rooms"
            title={<>Rooms that open <em className="text-[#8a7350]">onto the mountains.</em></>}
            intro="Every stay is designed around the view — wide windows, private decks and quiet corners where the Dhauladhars do the decorating."
          />
          <div role="tablist" aria-label="Filter rooms" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0">
            {suiteFilters.map((f) => (
              <button
                key={f.id}
                role="tab"
                aria-selected={filter === f.id}
                onClick={() => setFilter(f.id)}
                className={`relative shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  filter === f.id ? "text-linen" : "text-charcoal/70 hover:text-charcoal"
                }`}
              >
                {filter === f.id && (
                  <motion.span layoutId="suite-pill" className="absolute inset-0 -z-0 rounded-full bg-forest-900" transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />
                )}
                <span className="relative">{f.label}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((s, i) => (
              <SuiteCard key={s.id} suite={s} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="mt-10 text-center text-sm text-charcoal/55">
          Rates are indicative and vary by season. Message us for long-stay & workation pricing.
        </p>
      </div>
    </section>
  );
}
