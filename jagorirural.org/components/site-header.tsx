"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { label: "Our journey", href: "/journey" },
  {
    label: "Our engagement",
    href: "/engagement/programs",
    children: [
      { label: "Our programmes", href: "/engagement/programs" },
      { label: "Campaigns & festivals", href: "/engagement/campaigns" },
    ],
  },
  { label: "Our team", href: "/team" },
  { label: "Publications", href: "/publications" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className={`site-header ${isHome ? "site-header--home" : ""}`}>
      <Link href="/" className="brand" aria-label="Jagori Rural home">
        <Image src="/logo.png" alt="" width={50} height={47} className="brand__mark" priority />
        <span className="brand__name">Jagori Rural<br /><em>Charitable Trust</em></span>
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((item) =>
          item.children ? (
            <details key={item.label} className="nav-dropdown">
              <summary>{item.label}<ChevronDown size={15} aria-hidden="true" /></summary>
              <div className="nav-dropdown__panel">
                {item.children.map((child) => <Link key={child.href} href={child.href}>{child.label}</Link>)}
              </div>
            </details>
          ) : <Link key={item.href} href={item.href}>{item.label}</Link>
        )}
        <Link href="/support" className="nav-support">Support our work <span>↗</span></Link>
      </nav>

      <button className="menu-button" onClick={() => setOpen(true)} aria-label="Open navigation menu" aria-expanded={open}>
        <Menu size={22} aria-hidden="true" />
      </button>

      {open && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div className="mobile-menu__top">
            <span>Menu</span>
            <button onClick={() => setOpen(false)} aria-label="Close navigation menu"><X size={23} aria-hidden="true" /></button>
          </div>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <div key={item.label} className="mobile-menu__item">
                <Link href={item.href}>{item.label}</Link>
                {item.children?.map((child) => <Link key={child.href} href={child.href} className="mobile-menu__child">{child.label}</Link>)}
              </div>
            ))}
            <Link href="/support" className="mobile-menu__support">Support our work <span>↗</span></Link>
            <Link href="/contact" className="mobile-menu__contact">Contact us</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
