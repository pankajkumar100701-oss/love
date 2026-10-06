"use client";

import { Car, Mail, MapPin, Navigation, Phone, Plane, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { defaultWhatsAppMessage, mapsDirectionsUrl, mapsEmbedUrl, site, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";
import { Reveal, SectionHeading } from "./Reveal";

const distances = [
  { icon: Plane, place: "Kangra Airport (Gaggal)", value: "~18 km", time: "40 min drive" },
  { icon: Car, place: "Dharamshala town", value: "~5 km", time: "15 min drive" },
  { icon: Navigation, place: "McLeod Ganj", value: "~10 km", time: "25 min drive" },
];

const inputCls =
  "w-full rounded-xl border border-forest-900/12 bg-white px-4 py-3.5 text-[15px] text-charcoal placeholder:text-charcoal/35 outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15";
const labelCls = "mb-1.5 block text-[11px] font-semibold tracking-[0.18em] text-charcoal/60 uppercase";

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", checkIn: "", checkOut: "", notes: "" });
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = [
      `Hi Dastak Retreat! Booking enquiry from ${form.name}.`,
      `Phone: ${form.phone}`,
      form.checkIn && `Dates: ${form.checkIn}${form.checkOut ? ` → ${form.checkOut}` : ""}`,
      form.notes && `Requirements / pets: ${form.notes}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="location" className="bg-linen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Location & Direct Enquiry"
          title={<>Plan your stay — <em className="text-[#8a7350]">straight with the host.</em></>}
          intro="No call centres, no OTA mark-ups. Send us your dates and we'll come back with our best rate, personally."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
          {/* Location */}
          <Reveal className="flex flex-col overflow-hidden rounded-[28px] bg-forest-900 text-linen">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-forest-800 sm:aspect-[16/9]">
              <iframe
                title="Map showing Dastak Retreat in Slate Godam, Dharamshala"
                src={mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 size-full border-0 contrast-[1.05] grayscale-[0.6] invert-[0.88] hue-rotate-180"
              />
              <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-4 bottom-4 flex items-center gap-2 rounded-full bg-gold px-4 py-2.5 text-xs font-semibold text-forest-950 shadow-lg transition hover:bg-gold-light"
              >
                <Navigation className="size-3.5" /> Get directions
              </a>
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="flex gap-3">
                <MapPin className="mt-1 size-5 shrink-0 text-gold" />
                <div>
                  <p className="font-serif text-2xl">Slate Godam, Dharamshala</p>
                  <p className="mt-1 text-sm text-linen/60">{site.address}</p>
                </div>
              </div>
              <ul className="mt-7 grid grid-cols-3 gap-2 sm:gap-3">
                {distances.map(({ icon: Icon, place, value, time }) => (
                  <li key={place} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:p-4">
                    <Icon className="size-4 text-gold" />
                    <p className="mt-3 font-serif text-xl sm:text-2xl">{value}</p>
                    <p className="text-[11px] leading-snug text-linen/60 sm:text-xs">{place}</p>
                    <p className="mt-1 text-[11px] text-linen/40">{time}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-7 text-sm text-linen/70">
                <a href={site.phoneHref} className="flex items-center gap-2 hover:text-gold"><Phone className="size-4" /> {site.phoneDisplay}</a>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-gold"><Mail className="size-4" /> {site.email}</a>
              </div>
            </div>
          </Reveal>

          {/* Enquiry form */}
          <Reveal delay={0.1} className="rounded-[28px] bg-white p-6 shadow-[0_30px_60px_-35px_rgba(19,28,21,0.35)] ring-1 ring-forest-900/5 sm:p-8">
            <h3 className="font-serif text-3xl text-forest-900">Quick booking enquiry</h3>
            <p className="mt-1 text-sm text-charcoal/55">Opens WhatsApp with your details pre-filled — nothing is stored.</p>

            <form onSubmit={onSubmit} className="mt-7 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelCls}>Name</label>
                  <input id="name" required autoComplete="name" value={form.name} onChange={set("name")} placeholder="Your full name" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="phone" className={labelCls}>Contact number</label>
                  <input id="phone" required type="tel" inputMode="tel" autoComplete="tel" value={form.phone} onChange={set("phone")} placeholder="+91" className={inputCls} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="ci" className={labelCls}>Check-in</label>
                  <input id="ci" type="date" value={form.checkIn} onChange={set("checkIn")} className={`${inputCls} date-input-light`} />
                </div>
                <div>
                  <label htmlFor="co" className={labelCls}>Check-out</label>
                  <input id="co" type="date" min={form.checkIn || undefined} value={form.checkOut} onChange={set("checkOut")} className={`${inputCls} date-input-light`} />
                </div>
              </div>
              <div>
                <label htmlFor="notes" className={labelCls}>Requirements / pet details</label>
                <textarea
                  id="notes"
                  rows={4}
                  value={form.notes}
                  onChange={set("notes")}
                  placeholder="e.g. 2 adults, 1 golden retriever, anniversary trip — a valley-view room please."
                  className={`${inputCls} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="mt-2 flex min-h-14 items-center justify-center gap-2 rounded-full bg-forest-900 font-semibold text-linen transition hover:bg-forest-800"
              >
                <Send className="size-4" /> Send enquiry
              </button>
            </form>

            <div className="my-6 flex items-center gap-4 text-xs text-charcoal/40">
              <span className="h-px flex-1 bg-charcoal/10" /> or skip the form <span className="h-px flex-1 bg-charcoal/10" />
            </div>

            <a
              href={whatsappLink(defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-[#25D366] font-semibold text-white shadow-[0_12px_30px_-10px_rgba(37,211,102,0.7)] transition hover:brightness-105"
            >
              <WhatsAppIcon className="size-5" /> Chat with Host on WhatsApp
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
