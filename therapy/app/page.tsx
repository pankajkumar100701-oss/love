import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Leaf from "@/components/Leaf";
import TherapyExplorer from "@/components/TherapyExplorer";
import { findImage } from "@/lib/images";
import { categories, therapies, type Category } from "@/lib/therapies";

const steps = [
  { n: "01", title: "Free 15-minute call", text: "Tell us what's going on. We'll suggest the therapy and therapist that fit best." },
  { n: "02", title: "First session", text: "A gentle, unhurried conversation about your story, needs and goals." },
  { n: "03", title: "Your plan", text: "Together we choose the pace, approach and number of sessions that suit you." },
  { n: "04", title: "Growth", text: "Regular reviews, so you always know how you're progressing." },
];

const testimonials = [
  { quote: "I came in convinced nothing would help my panic attacks. Eight sessions of CBT later, I took my first flight in five years.", name: "R.K.", therapy: "CBT" },
  { quote: "Couples therapy gave us a language for the things we'd been fighting about for years. We actually listen now.", name: "A. & S.", therapy: "Couples Therapy" },
  { quote: "The regression session explained a fear I've carried since childhood. I left feeling lighter than I have in a decade.", name: "M.D.", therapy: "Past Life Regression" },
];

const faqs = [
  { q: "How do I know which therapy is right for me?", a: "You don't need to know. Book a free call and we'll recommend an approach based on what you're experiencing. Many clients combine talk therapy with a holistic practice." },
  { q: "Are sessions confidential?", a: "Completely. What you share stays between you and your therapist, except in the rare case of serious risk of harm, which we would always discuss with you first." },
  { q: "Do you offer online sessions?", a: "Yes. Most talk and evidence-based therapies are available over secure video. Regression and art therapy work best in person." },
  { q: "What is your cancellation policy?", a: "Please give 24 hours' notice to reschedule without charge." },
  { q: "Are holistic therapies a replacement for medical care?", a: "No. Hypnotherapy, regression and Reiki are complementary practices. Please continue any medical or psychiatric treatment you're receiving." },
];

export default function Home() {
  const heroImage = findImage("hero");
  const therapistImage = findImage("therapist");
  const therapyImages = Object.fromEntries(
    therapies.flatMap((t) => {
      const src = findImage(`therapies/${t.slug}`);
      return src ? [[t.slug, src]] : [];
    }),
  );

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="grain absolute inset-0" />
        <div className="animate-drift absolute -right-24 -top-24 size-[28rem] rounded-full bg-sage/25 blur-3xl" />
        <div className="animate-drift absolute -bottom-32 -left-20 size-[22rem] rounded-full bg-clay/20 blur-3xl [animation-delay:-6s]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1.2fr_1fr] md:py-28">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-sage-deep">Counselling · Psychotherapy · Holistic healing</p>
            <h1 className="mt-5 font-serif text-5xl leading-[1.05] text-forest sm:text-6xl lg:text-7xl">
              You are <em className="text-sage-deep">welcome</em> here, exactly as you are.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
              Life&apos;s storms aren&apos;t meant to be weathered alone. From talk therapy and CBT to hypnotherapy
              and Reiki, we offer {therapies.length} ways to heal, each one shaped around you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#contact" className="rounded-full bg-sage-deep px-6 py-3.5 text-sm font-medium text-cream transition hover:bg-forest">
                Book a free consultation
              </Link>
              <Link href="#therapies" className="rounded-full border border-forest/20 px-6 py-3.5 text-sm font-medium text-forest transition hover:border-sage-deep">
                Explore therapies
              </Link>
            </div>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
            {heroImage ? (
              <Image
                src={heroImage}
                alt="A calm, sunlit therapy room with plants"
                fill
                priority
                sizes="(min-width: 768px) 384px, 100vw"
                className="rounded-[999px_999px_2rem_2rem] object-cover"
              />
            ) : (
              <>
                <div className="absolute inset-0 rounded-[999px_999px_2rem_2rem] bg-gradient-to-b from-sage/50 via-sage/30 to-sand" />
                <Leaf className="absolute inset-x-10 top-12 text-sage-deep" />
              </>
            )}
            <div className="absolute -left-6 bottom-10 rounded-2xl bg-white/85 p-4 shadow-lg backdrop-blur">
              <p className="font-serif text-3xl text-forest">12+</p>
              <p className="text-xs text-ink/70">years of practice</p>
            </div>
            <div className="absolute -right-4 top-16 rounded-2xl bg-white/85 p-4 shadow-lg backdrop-blur">
              <p className="font-serif text-3xl text-forest">1,800+</p>
              <p className="text-xs text-ink/70">clients supported</p>
            </div>
          </div>
        </div>
      </section>

      {/* Priority message */}
      <section className="bg-forest text-cream">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-3">
          {(Object.keys(categories) as Category[]).map((c) => (
            <div key={c}>
              <p className="font-serif text-2xl">{categories[c].label}</p>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">{categories[c].blurb}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-sage">
                {therapies.filter((t) => t.category === c).length} therapies
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Therapies */}
      <section id="therapies" className="scroll-mt-32 md:scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-sage-deep">Our therapies</p>
            <h2 className="mt-4 font-serif text-4xl text-forest sm:text-5xl">Find the approach that feels right</h2>
            <p className="mt-4 text-ink/70">
              Every person heals differently. Browse each therapy to see who it helps, what a session looks like,
              and how long it takes.
            </p>
          </div>
          <div className="mt-12">
            <TherapyExplorer images={therapyImages} />
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="scroll-mt-32 md:scroll-mt-20 bg-sand/60">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <p className="text-xs uppercase tracking-[0.25em] text-sage-deep">How it works</p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl text-forest sm:text-5xl">Starting therapy, step by gentle step</h2>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li key={s.n} className="border-t border-forest/20 pt-6">
                <span className="font-serif text-4xl text-clay">{s.n}</span>
                <p className="mt-3 font-serif text-xl text-forest">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-32 md:scroll-mt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 sm:px-6 md:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-clay/30 to-sage/40" />
            <div className="absolute inset-8 grid place-items-center overflow-hidden rounded-full bg-cream">
              {therapistImage ? (
                <Image src={therapistImage} alt="Portrait of the therapist" fill sizes="400px" className="object-cover" />
              ) : (
                <span className="font-serif text-8xl italic text-sage-deep">S</span>
              )}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-sage-deep">Meet your therapist</p>
            <h2 className="mt-4 font-serif text-4xl text-forest sm:text-5xl">Dr. Sana Mehra</h2>
            <p className="mt-2 text-sm text-ink/60">M.Phil Clinical Psychology · RCI Registered · Certified Hypnotherapist & Reiki Master</p>
            <p className="mt-6 leading-relaxed text-ink/75">
              I believe healing happens when the mind, body and spirit are all given room. For over twelve years I&apos;ve
              worked with adults, couples, teens and families through anxiety, depression, grief, trauma and the
              quiet struggles that don&apos;t have a name.
            </p>
            <p className="mt-4 leading-relaxed text-ink/75">
              My practice blends evidence-based psychotherapy with holistic tools like hypnosis, regression and
              Reiki, always led by what you need, never by a one-size-fits-all method.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2 text-xs">
              {["Anxiety", "Depression", "Trauma", "Relationships", "Grief", "Self-esteem", "Eating concerns"].map((s) => (
                <li key={s} className="rounded-full bg-sage/15 px-3 py-1.5 text-sage-deep">{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-sage-deep text-cream">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <h2 className="font-serif text-4xl sm:text-5xl">Words from clients</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex flex-col rounded-3xl bg-cream/10 p-7">
                <span className="font-serif text-5xl leading-none text-clay">&ldquo;</span>
                <blockquote className="mt-2 flex-1 font-serif text-lg leading-relaxed">{t.quote}</blockquote>
                <figcaption className="mt-6 text-sm text-cream/70">
                  {t.name} · <span className="text-sage">{t.therapy}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-32 md:scroll-mt-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 md:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-sage-deep">Questions</p>
            <h2 className="mt-4 font-serif text-4xl text-forest sm:text-5xl">Before you begin</h2>
          </div>
          <div className="divide-y divide-forest/10 border-y border-forest/10">
            {faqs.map((f) => (
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
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-32 md:scroll-mt-20 bg-sand/60">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-sage-deep">Get in touch</p>
            <h2 className="mt-4 font-serif text-4xl text-forest sm:text-5xl">No one should fight their battles alone.</h2>
            <dl className="mt-8 space-y-4 text-sm text-ink/75">
              <div><dt className="font-medium text-forest">Studio</dt><dd>2nd Floor, Green Park Extension, New Delhi</dd></div>
              <div><dt className="font-medium text-forest">Hours</dt><dd>Mon–Sat, 10am – 8pm</dd></div>
              <div><dt className="font-medium text-forest">Email</dt><dd>hello@stillwaters.example</dd></div>
            </dl>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
