import Link from "next/link";

type BasicPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children?: React.ReactNode;
};

export function BasicPage({ eyebrow, title, intro, children }: BasicPageProps) {
  return (
    <section className="basic-page">
      <div className="basic-page__hero">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
      <div className="basic-page__body">{children}</div>
    </section>
  );
}

export function ContactDetails() {
  return (
    <div className="contact-details">
      <p><strong>Visit us</strong><br />Rakkar Road, Sidhbari, Kangra District,<br />Dharamshala, Himachal Pradesh 176215, India</p>
      <p><strong>Write to us</strong><br /><a href="mailto:jagori@jagorirural.org">jagori@jagorirural.org</a><br /><a href="tel:+919816579397">+91 98165 79397</a></p>
      <Link href="/support" className="button">Support our work <span>↗</span></Link>
    </div>
  );
}
