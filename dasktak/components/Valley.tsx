import Image from "next/image";
import { unsplash } from "@/lib/site";
import { Reveal } from "./Reveal";

const stats = [
  { value: "1,450m", label: "Above sea level" },
  { value: "180°", label: "Dhauladhar panorama" },
  { value: "0", label: "Traffic horns, guaranteed" },
];

export function Valley() {
  return (
    <section id="valley" className="bg-linen py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px]">
            <Image
              src={unsplash("1544735716-392fe2489ffa", 1400)}
              alt="Snow-capped Himalayan ridge above forested hills"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -right-2 -bottom-8 w-[52%] overflow-hidden rounded-[24px] border-[6px] border-linen shadow-2xl sm:-right-8">
            <div className="relative aspect-square">
              <Image
                src={unsplash("1576092768241-dec231879fc3", 700)}
                alt="A glass of freshly brewed Kangra tea"
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-[11px] font-semibold tracking-[0.32em] text-[#8a7350] uppercase">
              <span className="h-px w-8 bg-current opacity-60" /> The Valley
            </p>
            <h2 className="font-serif text-4xl leading-[1.05] font-light text-forest-900 sm:text-5xl lg:text-6xl">
              Where the Dhauladhars <em className="text-[#8a7350]">knock gently</em> at your door.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-charcoal/70">
              <em className="font-serif text-2xl text-forest-900 not-italic">Dastak</em> means a knock — and here, it&rsquo;s
              the mountains that come calling. Tucked into the quiet folds of Slate Godam, above the bustle of
              Dharamshala, the retreat looks out over tea gardens, terraced fields and a snowline that turns rose-gold at dusk.
            </p>
            <p className="mt-4 leading-relaxed text-charcoal/65">
              Close enough to McLeod Ganj, Bhagsu and the Kangra tea estates for a day out; far enough that the only
              thing you&rsquo;ll hear at night is the wind in the deodars.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-10 grid grid-cols-3 gap-4 border-t border-forest-900/10 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-serif text-3xl text-forest-900 sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-xs leading-snug text-charcoal/55">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
