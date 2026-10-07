import Link from "next/link";
import { categories, therapies, type Category } from "@/lib/therapies";

export default function SiteFooter() {
  return (
    <footer className="bg-forest text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-4">
        <div>
          <p className="font-serif text-2xl text-cream">Still Waters</p>
          <p className="mt-3 text-sm leading-relaxed">
            Counselling, psychotherapy and holistic healing in a calm, confidential space.
          </p>
        </div>
        {(Object.keys(categories) as Category[]).map((c) => (
          <div key={c}>
            <p className="text-xs uppercase tracking-[0.2em] text-sage">{categories[c].label}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {therapies
                .filter((t) => t.category === c)
                .map((t) => (
                  <li key={t.slug}>
                    <Link href={`/therapies/${t.slug}`} className="hover:text-cream">
                      {t.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs sm:flex-row sm:justify-between sm:px-6">
          <p>© 2026 Still Waters Therapy. All rights reserved.</p>
          <p>
            In crisis? Call Tele-MANAS <a href="tel:14416" className="underline">14416</a> (24×7, free) or
            emergency <a href="tel:112" className="underline">112</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
