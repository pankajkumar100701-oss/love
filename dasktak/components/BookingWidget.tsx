"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CalendarDays, ChevronDown, Minus, Plus, ShieldCheck, Users } from "lucide-react";
import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { whatsappLink } from "@/lib/site";

type Guests = { rooms: number; adults: number; kids: number; pets: number };

const guestFields: { key: keyof Guests; label: string; hint: string; min: number; max: number }[] = [
  { key: "rooms", label: "Rooms", hint: "Suites & cottages", min: 1, max: 6 },
  { key: "adults", label: "Adults", hint: "Ages 13+", min: 1, max: 12 },
  { key: "kids", label: "Kids", hint: "Ages 2–12", min: 0, max: 8 },
  { key: "pets", label: "Pets", hint: "Dogs & cats welcome", min: 0, max: 4 },
];

const toISO = (d: Date) => {
  const local = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
};
const addDays = (iso: string, n: number) => {
  const d = new Date(iso + "T00:00:00");
  d.setDate(d.getDate() + n);
  return toISO(d);
};
const pretty = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

const noopSubscribe = () => () => {};

function plural(n: number, word: string) {
  return `${n} ${word}${n === 1 ? "" : "s"}`;
}

export function BookingWidget() {
  // "Today" depends on the visitor's clock, so it is empty during SSR and filled in on the client.
  const today = useSyncExternalStore(noopSubscribe, () => toISO(new Date()), () => "");
  const [pickedIn, setCheckIn] = useState("");
  const [pickedOut, setCheckOut] = useState("");
  const checkIn = pickedIn || (today && addDays(today, 7));
  const checkOut = pickedOut || (today && addDays(today, 9));
  const [guests, setGuests] = useState<Guests>({ rooms: 1, adults: 2, kids: 0, pets: 0 });
  const [guestOpen, setGuestOpen] = useState(false);
  const guestRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!guestOpen) return;
    const close = (e: MouseEvent) => {
      if (guestRef.current && !guestRef.current.contains(e.target as Node)) setGuestOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [guestOpen]);

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    return Math.max(0, Math.round((+new Date(checkOut) - +new Date(checkIn)) / 86400000));
  }, [checkIn, checkOut]);

  const summary = [
    plural(guests.rooms, "Room"),
    plural(guests.adults + guests.kids, "Guest"),
    guests.pets ? plural(guests.pets, "Pet") : null,
  ]
    .filter(Boolean)
    .join(" · ");

  const message = [
    "Hi Dastak Retreat! I'd like to check availability and your best direct rate:",
    checkIn && `• Check-in: ${pretty(checkIn)}`,
    checkOut && `• Check-out: ${pretty(checkOut)} (${plural(nights, "night")})`,
    `• ${plural(guests.rooms, "room")}, ${plural(guests.adults, "adult")}${guests.kids ? `, ${plural(guests.kids, "kid")}` : ""}${guests.pets ? `, ${plural(guests.pets, "pet")}` : ""}`,
  ]
    .filter(Boolean)
    .join("\n");

  const onCheckIn = (v: string) => {
    setCheckIn(v);
    if (v && v >= checkOut) setCheckOut(addDays(v, 1));
  };

  const step = (key: keyof Guests, delta: number) => {
    const f = guestFields.find((x) => x.key === key)!;
    setGuests((g) => ({ ...g, [key]: Math.min(f.max, Math.max(f.min, g[key] + delta)) }));
  };

  const fieldBase =
    "group relative flex min-h-[64px] flex-col justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2.5 transition hover:border-gold/40 focus-within:border-gold/60";

  return (
    <div
      id="book"
      className="relative w-full rounded-[28px] border border-white/15 bg-forest-950/55 p-3 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur-2xl sm:p-4"
    >
      <div className="grid gap-2.5 md:grid-cols-[1fr_1fr_1.15fr_auto]">
        <label className={fieldBase}>
          <span className="flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.22em] text-gold uppercase">
            <CalendarDays className="size-3.5" /> Check-in
          </span>
          <input
            type="date"
            value={checkIn}
            min={today}
            onChange={(e) => onCheckIn(e.target.value)}
            className="date-input mt-1 w-full bg-transparent text-[15px] font-medium text-linen outline-none"
          />
        </label>

        <label className={fieldBase}>
          <span className="flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.22em] text-gold uppercase">
            <CalendarDays className="size-3.5" /> Check-out
          </span>
          <input
            type="date"
            value={checkOut}
            min={checkIn ? addDays(checkIn, 1) : today}
            onChange={(e) => setCheckOut(e.target.value)}
            className="date-input mt-1 w-full bg-transparent text-[15px] font-medium text-linen outline-none"
          />
        </label>

        <div ref={guestRef} className="relative">
          <button
            type="button"
            onClick={() => setGuestOpen((o) => !o)}
            aria-expanded={guestOpen}
            className={`${fieldBase} w-full text-left`}
          >
            <span className="flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.22em] text-gold uppercase">
              <Users className="size-3.5" /> Rooms & Guests
            </span>
            <span className="mt-1 flex items-center justify-between text-[15px] font-medium text-linen">
              {summary}
              <ChevronDown className={`size-4 text-linen/50 transition ${guestOpen ? "rotate-180" : ""}`} />
            </span>
          </button>

          <AnimatePresence>
            {guestOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 bottom-[calc(100%+10px)] left-0 z-30 rounded-2xl border border-white/10 bg-forest-900/95 p-2 shadow-2xl backdrop-blur-xl"
              >
                {guestFields.map((f) => (
                  <div key={f.key} className="flex items-center justify-between rounded-xl px-3 py-3">
                    <div>
                      <p className="text-sm font-medium text-linen">{f.label}</p>
                      <p className="text-xs text-linen/45">{f.hint}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => step(f.key, -1)}
                        disabled={guests[f.key] <= f.min}
                        aria-label={`Fewer ${f.label}`}
                        className="grid size-9 place-items-center rounded-full border border-white/15 text-linen transition hover:border-gold disabled:opacity-30"
                      >
                        <Minus className="size-3.5" />
                      </button>
                      <span className="w-5 text-center text-sm font-semibold text-linen tabular-nums">{guests[f.key]}</span>
                      <button
                        type="button"
                        onClick={() => step(f.key, 1)}
                        disabled={guests[f.key] >= f.max}
                        aria-label={`More ${f.label}`}
                        className="grid size-9 place-items-center rounded-full border border-white/15 text-linen transition hover:border-gold disabled:opacity-30"
                      >
                        <Plus className="size-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => setGuestOpen(false)}
                  className="mt-1 w-full rounded-xl bg-white/5 py-2.5 text-xs font-semibold tracking-widest text-gold uppercase hover:bg-white/10"
                >
                  Done
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex min-h-[64px] items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-gold-light to-gold px-6 text-center text-[14px] font-semibold text-forest-950 shadow-[0_10px_30px_-10px_rgba(217,190,143,0.8)] transition hover:brightness-105 md:max-w-[220px]"
        >
          <span className="leading-tight">Check Availability & Best Rates</span>
          <ArrowRight className="size-4 shrink-0 transition group-hover:translate-x-1" />
        </a>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 px-2 text-[11px] font-medium tracking-wide text-linen/60 md:justify-between">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="size-3.5 text-gold" />
          Zero OTA Commission • Guaranteed Best Price
        </span>
        <span className="text-linen/45">
          {nights > 0 ? `${plural(nights, "night")} · ` : ""}Your enquiry goes straight to the host on WhatsApp
        </span>
      </div>
    </div>
  );
}
