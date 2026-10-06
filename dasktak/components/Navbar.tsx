"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { defaultWhatsAppMessage, navLinks, site, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500 sm:px-6 ${
          scrolled
            ? "border-white/10 bg-forest-950/70 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            : "border-white/10 bg-white/[0.04] backdrop-blur-md"
        }`}
      >
        <a href="#top" className="group flex flex-col leading-none" aria-label="Dastak Retreat home">
          <span className="font-serif text-lg tracking-[0.2em] whitespace-nowrap text-linen sm:text-[22px] sm:tracking-[0.28em]">
            DASTAK <span className="text-gold">RETREAT</span>
          </span>
          <span className="mt-1 text-[9px] font-medium tracking-[0.34em] text-linen/50 uppercase">
            {site.tagline}
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-[13px] font-medium tracking-wide text-linen/75 transition-colors hover:text-linen after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink(defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="grid size-10 place-items-center rounded-full border border-white/15 text-linen/85 transition hover:border-[#25D366]/60 hover:bg-[#25D366]/15 hover:text-[#25D366]"
          >
            <WhatsAppIcon className="size-[18px]" />
          </a>
          <a
            href="#book"
            className="hidden rounded-full bg-gold px-5 py-2.5 text-[13px] font-semibold tracking-wide text-forest-950 transition hover:bg-gold-light hover:shadow-[0_0_30px_-6px_rgba(217,190,143,0.7)] sm:inline-flex"
          >
            Book Direct
          </a>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid size-10 place-items-center rounded-full border border-white/15 text-linen lg:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-forest-950/97 px-6 pt-6 pb-10 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-serif text-xl tracking-[0.28em] text-linen">
                DASTAK <span className="text-gold">RETREAT</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid size-11 place-items-center rounded-full border border-white/15 text-linen"
              >
                <X className="size-5" />
              </button>
            </div>
            <ul className="mt-14 flex flex-col gap-2">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/10 py-4 font-serif text-4xl font-light text-linen"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto grid gap-3">
              <a
                href="#book"
                onClick={() => setOpen(false)}
                className="rounded-full bg-gold py-4 text-center font-semibold text-forest-950"
              >
                Book Direct — Best Rate
              </a>
              <a
                href={site.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full border border-white/15 py-4 text-linen"
              >
                <Phone className="size-4" /> {site.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
