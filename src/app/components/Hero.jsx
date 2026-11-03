import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { Wrapper } from "./Wrapper";

export default function Hero() {
  return <section className="home-hero">
    <Image src="/images/redesign/hero-hallway.jpg" alt="Modernus šviesus prieškambaris su linijiniu LED ir paslėptu lubų apšvietimu" fill priority sizes="100vw" className="hero-photo" />
    <div className="hero-scrim" /><Wrapper className="hero-inner"><div className="hero-copy">
      <p className="hero-location"><MapPin size={16} /> Vilnius ir aplinkiniai rajonai</p>
      <h1 className="hero-title"><span>Elektros darbai.</span><span className="hero-title-accent">Jūsų namams.</span></h1>
      <p className="hero-description">Nuo pirmojo laidelio iki paskutinio šviestuvo. Aiškiai susitariame, atsakingai atliekame.</p>
      <div className="hero-actions"><a href="tel:+37061621663" className="button-primary"><Phone size={18} /> Pasikalbėkime</a><Link href="/services" className="button-secondary">Paslaugos ir kainos <ArrowRight size={18} /></Link></div>
    </div></Wrapper>
  </section>;
}
