import { BadgePercent, Coffee, Headset, PawPrint } from "lucide-react";
import { Reveal } from "./Reveal";

const perks = [
  { icon: BadgePercent, title: "Best Rate Guarantee", body: "Lower than any OTA — or we match it." },
  { icon: PawPrint, title: "Pet-Friendly Warm Hospitality", body: "Beds, bowls & open lawns for your pets." },
  { icon: Coffee, title: "Complimentary Mountain Tea & Breakfast", body: "Kangra chai on your balcony, every morning." },
  { icon: Headset, title: "Flexible Check-In / Direct Host Support", body: "Talk to the people who run the place." },
];

export function ValueRibbon() {
  return (
    <section aria-label="Why book direct" className="relative bg-forest-950 pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 flex items-center gap-4">
          <span className="text-[11px] font-semibold tracking-[0.32em] text-gold uppercase">Why book direct</span>
          <span className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.08} y={16} className="group bg-forest-950 p-6 transition-colors hover:bg-forest-900 sm:p-7">
              <div className="mb-5 grid size-11 place-items-center rounded-full border border-gold/30 bg-gold/10 text-gold transition group-hover:scale-110 group-hover:bg-gold group-hover:text-forest-950">
                <Icon className="size-5" strokeWidth={1.6} />
              </div>
              <h3 className="font-serif text-xl leading-snug text-linen">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-linen/55">{body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
