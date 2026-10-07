"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { categories, therapies, type Category } from "@/lib/therapies";

type Filter = Category | "all";

const accents: Record<Category, string> = {
  talk: "bg-sage/15 text-sage-deep",
  evidence: "bg-clay/15 text-[#8a5236]",
  holistic: "bg-[#8f7bb0]/15 text-[#56467a]",
};

export default function TherapyExplorer({ images }: { images: Record<string, string> }) {
  const [filter, setFilter] = useState<Filter>("all");
  const shown = filter === "all" ? therapies : therapies.filter((t) => t.category === filter);
  const tabs: Filter[] = ["all", ...(Object.keys(categories) as Category[])];

  return (
    <div>
      <div role="tablist" className="flex flex-wrap gap-2">
        {tabs.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              filter === f
                ? "border-sage-deep bg-sage-deep text-cream"
                : "border-forest/15 text-ink/75 hover:border-sage-deep hover:text-sage-deep"
            }`}
          >
            {f === "all" ? `All therapies (${therapies.length})` : categories[f].label}
          </button>
        ))}
      </div>
      {filter !== "all" && <p className="mt-4 text-sm text-ink/70">{categories[filter].blurb}</p>}

      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((t) => (
          <li key={t.slug}>
            <Link
              href={`/therapies/${t.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-forest/10 bg-white/60 p-6 transition hover:-translate-y-1 hover:border-sage/40 hover:bg-white hover:shadow-[0_20px_40px_-24px_rgba(31,51,38,0.35)]"
            >
              {images[t.slug] && (
                <div className="relative -mx-6 -mt-6 mb-5 aspect-[16/10]">
                  <Image
                    src={images[t.slug]}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <span className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${accents[t.category]}`}>
                {categories[t.category].label}
              </span>
              <h3 className="mt-4 font-serif text-2xl leading-tight text-forest">{t.name}</h3>
              <p className="mt-2 font-serif italic text-sage-deep">{t.tagline}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">{t.summary}</p>
              <div className="mt-5 flex items-center justify-between border-t border-forest/10 pt-4 text-xs text-ink/60">
                <span>{t.duration.split(",")[0]}</span>
                <span className="font-medium text-sage-deep transition group-hover:translate-x-1">
                  Learn more →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
