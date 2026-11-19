import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { Wrapper } from "./Wrapper";

export const homeHeroImage = {
  url: "/images/redesign/fazis-foje.webp",
  width: 1672,
  height: 941,
  alt: "„Fazis“ iškaba ant medinių lentelių sienos su šiltu LED apšvietimu",
};

export default function Hero() {
  return (
    <section className="home-hero">
      <Wrapper className="hero-inner">
        <div className="hero-copy">
          <p className="hero-location"><MapPin size={16} /> Vilnius ir aplinkiniai rajonai</p>
          <h1 className="hero-title"><span>Elektros darbai.</span><span className="hero-title-accent">Jūsų namams.</span></h1>
          <p className="hero-description">Nuo pirmojo laidelio iki paskutinio šviestuvo. Aiškiai susitariame, atsakingai atliekame.</p>
          <div className="hero-actions">
            <a href="tel:+37061621663" className="button-primary"><Phone size={18} /> Pasikalbėkime</a>
            <Link href="/services" className="button-secondary">Paslaugos ir kainos <ArrowRight size={18} /></Link>
          </div>
        </div>
      </Wrapper>
      <div className="hero-visual">
        <picture>
          <source
            media="(width > 960px)"
            srcSet="/images/redesign/fazis-foje-desktop.webp 1672w, /images/redesign/fazis-foje-desktop-2x.webp 3344w"
            sizes="(max-width: 1280px) 1280px, 100vw"
          />
          <Image
            src={homeHeroImage.url}
            alt={homeHeroImage.alt}
            fill
            loading="eager"
            fetchPriority="high"
            className="hero-photo"
          />
        </picture>
        <div className="hero-scrim" />
      </div>
    </section>
  );
}
