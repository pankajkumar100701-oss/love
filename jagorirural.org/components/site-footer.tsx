import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <p className="eyebrow">Jagori Rural Charitable Trust</p>
        <h2>Change grows<br />from the ground up.</h2>
        <Link href="/support" className="button button--light">Support our work <span>↗</span></Link>
      </div>
      <div className="site-footer__bottom">
        <address>Rakkar Road, Sidhbari, Kangra District,<br />Dharamshala, Himachal Pradesh 176215, India</address>
        <div><a href="mailto:jagori@jagorirural.org">jagori@jagorirural.org</a><br /><a href="tel:+919816579397">+91 98165 79397</a></div>
        <div className="site-footer__links"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/contact">Contact</Link></div>
        <p>© {new Date().getFullYear()} Jagori Rural</p>
      </div>
    </footer>
  );
}

