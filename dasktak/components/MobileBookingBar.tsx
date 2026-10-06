"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { defaultWhatsAppMessage, site, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

// Sticky conversion bar on phones, floating WhatsApp bubble on larger screens. Appears once the hero is scrolled past.
export function MobileBookingBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: "spring", damping: 26, stiffness: 260 }}
            className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-forest-950/90 px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl sm:hidden"
          >
            <div className="grid grid-cols-[auto_1fr_1fr] gap-2">
              <a href={site.phoneHref} aria-label="Call the retreat" className="grid size-12 place-items-center rounded-full border border-white/15 text-linen">
                <Phone className="size-5" />
              </a>
              <a
                href={whatsappLink(defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-sm font-semibold text-white"
              >
                <WhatsAppIcon className="size-4" /> WhatsApp
              </a>
              <a href="#book" className="flex items-center justify-center rounded-full bg-gold text-sm font-semibold text-forest-950">
                Book Direct
              </a>
            </div>
          </motion.div>

          <motion.a
            href={whatsappLink(defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with the host on WhatsApp"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.08 }}
            className="group fixed right-6 bottom-6 z-40 hidden items-center gap-3 rounded-full bg-[#25D366] p-4 text-white shadow-[0_15px_40px_-10px_rgba(37,211,102,0.8)] sm:flex"
          >
            <WhatsAppIcon className="size-6" />
            <span className="max-w-0 overflow-hidden text-sm font-semibold whitespace-nowrap transition-all duration-500 group-hover:max-w-40">
              Chat with host
            </span>
          </motion.a>
        </>
      )}
    </AnimatePresence>
  );
}
