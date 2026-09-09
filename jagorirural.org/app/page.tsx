import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { MountainScene } from "@/components/mountain-scene";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__photo"><Image src="https://static.wixstatic.com/media/e07cd5_07be529141ba4f718ae75d818f56f1e5~mv2.jpg/v1/fill/w_1960,h_1536,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/e07cd5_07be529141ba4f718ae75d818f56f1e5~mv2.jpg" alt="Jagori Rural community members together outdoors" fill sizes="100vw" preload className="object-cover" /></div>
        <MountainScene />
        <div className="hero__grid" />
        <div className="hero__content">
          <p className="eyebrow hero__eyebrow">Himachal Pradesh, India <span>•</span> Since 2002</p>
          <h1>Justice grows<br /><i>from the ground up.</i></h1>
          <p className="hero__intro">We work alongside rural communities to build lives rooted in equality, dignity and ecological care.</p>
          <div className="hero__actions"><Link href="/engagement/programs" className="button button--light">Explore our work <ArrowDownRight size={17} /></Link><Link href="/support" className="text-link">Stand with us <ArrowUpRight size={16} /></Link></div>
        </div>
        <div className="hero__portrait"><Image src="/new-hero-image.jpeg" alt="A community member participating in a Jagori Rural programme" fill sizes="(max-width: 700px) 42vw, 24vw" className="object-cover" /><p>Rooted in community<br />Led by people</p></div>
        <p className="hero__scroll">Scroll to discover <span>↓</span></p>
      </section>

      <section className="intro-section">
        <p className="eyebrow">Our work, our promise</p>
        <div><h2>Rural communities already hold the knowledge and power to shape their futures.</h2><p>Jagori Rural creates spaces where women, young people, farmers and marginalised groups can turn that power into collective action.</p><Link href="/journey" className="text-link text-link--dark">Meet Jagori Rural <ArrowUpRight size={16} /></Link></div>
      </section>

      <section className="focus-section"><div className="focus-section__heading"><p className="eyebrow">Where we show up</p><h2>Many paths.<br /><i>One shared future.</i></h2></div><div className="focus-cards">{[{ number: "01", title: "Gender justice", text: "Building safety, leadership and pathways to justice." }, { number: "02", title: "Young voices", text: "Helping girls and young people shape their own futures." }, { number: "03", title: "Living landscapes", text: "Supporting sustainable farming and ecological resilience." }].map((item) => <Link href="/engagement/programs" className="focus-card" key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p><ArrowUpRight size={19} /></Link>)}</div></section>
    </>
  );
}
