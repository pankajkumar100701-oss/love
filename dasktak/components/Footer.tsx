import { navLinks, site } from "@/lib/site";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./icons";

const socials = [
  { href: site.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: site.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: site.social.youtube, label: "YouTube", Icon: YoutubeIcon },
];

export function Footer() {
  return (
    <footer className="bg-forest-950 pt-20 pb-28 text-linen sm:pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-10 border-b border-white/10 pb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-serif text-[28px] tracking-[0.2em] whitespace-nowrap sm:text-5xl sm:tracking-[0.28em]">
              DASTAK <span className="text-gold">RETREAT</span>
            </p>
            <p className="mt-3 text-[10px] font-medium tracking-[0.34em] text-linen/45 uppercase">{site.tagline}</p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-linen/55">
              A boutique, pet-friendly mountain retreat for slow mornings and long views.
            </p>
          </div>
          <div className="flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid size-11 place-items-center rounded-full border border-white/15 text-linen/70 transition hover:border-gold hover:text-gold"
              >
                <Icon className="size-[18px]" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-7 gap-y-3 py-8 text-sm text-linen/60">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-gold">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-2 text-xs text-linen/40 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. {site.legalEntity}.
          </p>
          <p>
            Design Concept by <span className="text-gold/80">Pankaj</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
