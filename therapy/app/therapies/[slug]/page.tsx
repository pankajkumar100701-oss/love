import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import Leaf from "@/components/Leaf";
import { findImage } from "@/lib/images";
import { categories, getTherapy, therapies } from "@/lib/therapies";

export function generateStaticParams() {
  return therapies.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/therapies/[slug]">): Promise<Metadata> {
  const therapy = getTherapy((await params).slug);
  return therapy ? { title: therapy.name, description: therapy.summary } : {};
}

export default function TherapyPage({ params }: PageProps<"/therapies/[slug]">) {
  return (
    <Suspense fallback={<TherapyFallback />}>
      <TherapyDetail params={params} />
    </Suspense>
  );
}

function TherapyFallback() {
  return (
    <section className="bg-sand/60">
      <div className="mx-auto max-w-6xl animate-pulse px-4 py-16 sm:px-6 sm:py-24">
        <div className="h-4 w-40 rounded-full bg-forest/10" />
        <div className="mt-6 h-14 w-3/4 max-w-xl rounded-2xl bg-forest/10" />
        <div className="mt-6 h-5 w-full max-w-2xl rounded-full bg-forest/10" />
        <div className="mt-3 h-5 w-2/3 max-w-xl rounded-full bg-forest/10" />
      </div>
    </section>
  );
}

async function TherapyDetail({ params }: { params: PageProps<"/therapies/[slug]">["params"] }) {
  const therapy = getTherapy((await params).slug);
  if (!therapy) notFound();

  const image = findImage(`therapies/${therapy.slug}`);
  const related = therapies.filter((t) => t.category === therapy.category && t.slug !== therapy.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-sand/60">
        <Leaf className="absolute -right-10 -top-6 w-72 text-sage-deep sm:w-96" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <nav className="text-sm text-ink/60">
            <Link href="/#therapies" className="hover:text-sage-deep">Therapies</Link>
            <span className="mx-2">/</span>
            <span>{categories[therapy.category].label}</span>
          </nav>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] text-forest sm:text-6xl">{therapy.name}</h1>
          <p className="mt-4 font-serif text-2xl italic text-sage-deep">{therapy.tagline}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">{therapy.summary}</p>
          <dl className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
            {[
              ["Session length", therapy.duration],
              ["Investment", therapy.price],
              ["Format", therapy.format],
            ].map(([k, v]) => (
              <div key={k} className="rounded-2xl bg-white/70 p-5">
                <dt className="text-xs uppercase tracking-[0.2em] text-sage-deep">{k}</dt>
                <dd className="mt-2 font-serif text-lg text-forest">{v}</dd>
              </div>
            ))}
          </dl>
          {image && (
            <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-3xl sm:aspect-[21/9]">
              <Image src={image} alt="" fill priority sizes="(min-width: 1152px) 1104px, 100vw" className="object-cover" />
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-16 px-4 py-20 sm:px-6 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <h2 className="font-serif text-3xl text-forest">What is {therapy.name.replace(/ \(.*\)$/, "")}?</h2>
          {therapy.overview.map((p) => (
            <p key={p.slice(0, 24)} className="mt-4 leading-relaxed text-ink/75">{p}</p>
          ))}

          <h2 className="mt-16 font-serif text-3xl text-forest">What to expect</h2>
          <ol className="mt-6 space-y-6">
            {therapy.expect.map((s, i) => (
              <li key={s.title} className="flex gap-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-sage-deep font-serif text-cream">
                  {i + 1}
                </span>
                <div>
                  <p className="font-serif text-xl text-forest">{s.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/70">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 className="mt-16 font-serif text-3xl text-forest">Common questions</h2>
          <div className="mt-4 divide-y divide-forest/10 border-y border-forest/10">
            {therapy.faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg text-forest">
                  {f.q}
                  <span className="text-2xl text-sage transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        <aside className="h-fit rounded-3xl border border-forest/10 bg-white/60 p-7 lg:sticky lg:top-24">
          <h2 className="font-serif text-2xl text-forest">Can help with</h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {therapy.helpsWith.map((h) => (
              <li key={h} className="rounded-full bg-sage/15 px-3 py-1.5 text-sm text-sage-deep">{h}</li>
            ))}
          </ul>
          {therapy.category === "holistic" && (
            <p className="mt-6 rounded-2xl bg-clay/10 p-4 text-xs leading-relaxed text-ink/70">
              Holistic therapies are complementary and are not a substitute for medical or psychiatric care.
            </p>
          )}
          <Link
            href="#book"
            className="mt-6 block rounded-full bg-sage-deep px-6 py-3 text-center text-sm font-medium text-cream transition hover:bg-forest"
          >
            Book this therapy
          </Link>
        </aside>
      </section>

      {related.length > 0 && (
        <section className="bg-forest text-cream">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <h2 className="font-serif text-3xl">More in {categories[therapy.category].label}</h2>
            <ul className="mt-8 grid gap-5 md:grid-cols-3">
              {related.map((t) => (
                <li key={t.slug}>
                  <Link href={`/therapies/${t.slug}`} className="block h-full rounded-3xl bg-cream/10 p-6 transition hover:bg-cream/15">
                    <p className="font-serif text-xl">{t.name}</p>
                    <p className="mt-2 text-sm text-cream/70">{t.tagline}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section id="book" className="scroll-mt-32 md:scroll-mt-20 bg-sand/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="font-serif text-4xl text-forest">Ready when you are.</h2>
            <p className="mt-4 text-ink/70">
              Book a free 15-minute call to ask questions and see whether {therapy.name} is right for you.
            </p>
          </div>
          <ContactForm defaultTherapy={therapy.slug} />
        </div>
      </section>
    </>
  );
}
