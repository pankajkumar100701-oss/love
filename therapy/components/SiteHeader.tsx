import Link from "next/link";

const links = [
  { href: "/#therapies", label: "Therapies" },
  { href: "/#approach", label: "Approach" },
  { href: "/#about", label: "About" },
  { href: "/#faq", label: "FAQ" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-forest/10 bg-cream/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-full bg-sage-deep text-cream font-serif text-lg">
            ~
          </span>
          <span className="font-serif text-xl tracking-tight text-forest">Still Waters</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-ink/80 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition hover:text-sage-deep">
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#contact"
          className="rounded-full bg-sage-deep px-5 py-2.5 text-sm font-medium text-cream transition hover:bg-forest"
        >
          Book a free call
        </Link>
      </div>
      <nav className="flex justify-center gap-6 border-t border-forest/10 px-4 py-2.5 text-sm text-ink/80 md:hidden">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="transition hover:text-sage-deep">
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
