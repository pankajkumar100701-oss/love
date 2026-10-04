import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { profile } from "@/data/profile";
import type { CSSProperties } from "react";

const { multitudes } = profile;

export const dynamicParams = false;

export function generateStaticParams() {
  return multitudes.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: PageProps<"/multitudes/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const m = multitudes.find((x) => x.slug === slug);
  return m ? { title: `${m.title} — ${profile.name}`, description: m.intro } : {};
}

export default async function MultitudePage({ params }: PageProps<"/multitudes/[slug]">) {
  const { slug } = await params;
  const index = multitudes.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();

  const m = multitudes[index];
  const prev = multitudes[(index - 1 + multitudes.length) % multitudes.length];
  const next = multitudes[(index + 1) % multitudes.length];
  const external = m.link?.href.startsWith("http");

  return (
    <main className="u-detail" style={{ "--c": m.color } as CSSProperties}>
      <div className="u-grain" aria-hidden />
      <div className="u-detail-glow" aria-hidden />

      <nav className="u-detail-top">
        <Link href="/">← {profile.hero.first} <em>{profile.hero.accent}</em></Link>
        <span>
          {m.n} / {String(multitudes.length).padStart(2, "0")}
        </span>
      </nav>

      <article className="u-detail-body">
        <p className="u-eyebrow">{m.sub}</p>
        <h1>
          <em>{m.title}</em>
        </h1>
        <p className="u-detail-intro">{m.intro}</p>

        <ul className="u-detail-points">
          {m.points.map((p, i) => (
            <li key={p}>
              <b>{String(i + 1).padStart(2, "0")}</b>
              {p}
            </li>
          ))}
        </ul>

        {m.link && (
          <a
            href={m.link.href}
            className="u-detail-cta"
            {...(external && { target: "_blank", rel: "noopener noreferrer" })}
          >
            {m.link.label} →
          </a>
        )}
      </article>

      <nav className="u-detail-pager" aria-label="Other multitudes">
        <Link href={`/multitudes/${prev.slug}`}>
          <small>← Previous</small>
          {prev.title}
        </Link>
        <Link href={`/multitudes/${next.slug}`}>
          <small>Next →</small>
          {next.title}
        </Link>
      </nav>
    </main>
  );
}
