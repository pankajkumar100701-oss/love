import { Flame, Footprints, Laptop, UtensilsCrossed, type LucideIcon } from "lucide-react";
import Image from "next/image";
import { unsplash } from "@/lib/site";
import { Reveal, SectionHeading } from "./Reveal";

type Tile = {
  title: string;
  body: string;
  icon: LucideIcon;
  image: string;
  alt: string;
  className: string;
  tag: string;
};

const tiles: Tile[] = [
  {
    title: "Forest walks & Slate Godam trails",
    body: "Step out of the gate into deodar and pine. Unhurried morning trails, birdsong, and valley lookouts only locals know.",
    icon: Footprints,
    image: unsplash("1441974231531-c6227db76b6e", 1400),
    alt: "Sunlit forest trail through tall trees",
    className: "md:col-span-2 md:row-span-2 min-h-[420px] md:min-h-0",
    tag: "Every morning",
  },
  {
    title: "Open lawns & starry bonfire nights",
    body: "Pets off-leash on the lawn by day; crackling fires under a sky full of stars by night.",
    icon: Flame,
    image: unsplash("1475483768296-6163e08872a1", 1000),
    alt: "Friends gathered around a bonfire at night",
    className: "min-h-[300px]",
    tag: "Pet friendly",
  },
  {
    title: "Farm-to-table Himachali meals",
    body: "Siddu, madra, rajma-chawal and Kangra tea — slow-cooked from the region's farms.",
    icon: UtensilsCrossed,
    image: unsplash("1547592180-85f173990554", 1000),
    alt: "A spread of fresh, colourful home-cooked dishes",
    className: "min-h-[300px]",
    tag: "Locally sourced",
  },
  {
    title: "Quiet workation zones amid the deodars",
    body: "Fast WiFi, ergonomic desks and a view that makes Monday feel optional. Long-stay rates on request.",
    icon: Laptop,
    image: unsplash("1504280390367-361c6d9f38f4", 1400),
    alt: "View of a pine forest framed by an open tent",
    className: "md:col-span-3 min-h-[300px] md:min-h-[320px]",
    tag: "High-speed WiFi",
  },
];

export function Experiences() {
  return (
    <section id="experiences" className="relative overflow-hidden bg-forest-900 py-24 sm:py-32">
      <div className="pointer-events-none absolute -top-40 right-0 size-[600px] rounded-full bg-gold/10 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          tone="dark"
          eyebrow="Kangra Valley Experiences"
          title={<>Days measured in <em className="text-gold-light">mist, pine & firelight.</em></>}
          intro="There's no itinerary at Dastak — just a valley that rewards slowing down. Here's how our guests tend to spend it."
        />

        <div className="mt-14 grid auto-rows-[minmax(260px,auto)] grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {tiles.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08} className={`group relative isolate overflow-hidden rounded-[28px] ${t.className}`}>
              <Image
                src={t.image}
                alt={t.alt}
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="-z-10 object-cover transition duration-[1.6s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-950 via-forest-950/45 to-forest-950/5" />
              <div className="flex h-full flex-col justify-between p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-full border border-white/20 bg-white/10 text-gold-light backdrop-blur-md">
                    <t.icon className="size-5" strokeWidth={1.6} />
                  </span>
                  <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-linen/80 uppercase backdrop-blur-md">
                    {t.tag}
                  </span>
                </div>
                <div className="max-w-md">
                  <h3 className="font-serif text-3xl leading-tight text-linen sm:text-[34px]">{t.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-linen/70">
                    {t.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
