import { Contact } from "@/components/Contact";
import { Experiences } from "@/components/Experiences";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { MobileBookingBar } from "@/components/MobileBookingBar";
import { Navbar } from "@/components/Navbar";
import { Suites } from "@/components/Suites";
import { Valley } from "@/components/Valley";
import { ValueRibbon } from "@/components/ValueRibbon";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ValueRibbon />
        <Suites />
        <Experiences />
        <Valley />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <MobileBookingBar />
    </>
  );
}
