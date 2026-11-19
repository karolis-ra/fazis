import Link from "next/link";
import { ArrowRight, Check, ClipboardCheck, Plus, ShieldCheck, Sparkles } from "lucide-react";
import Hero, { homeHeroImage } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";
import { Wrapper } from "./components/Wrapper";
import BlogCard from "./components/BlogCard";
import ContactStrip from "./components/ContactStrip";
import CustomerReviews from "./components/CustomerReviews";
import InstagramSection from "./components/InstagramSection";
import Reveal from "./components/Reveal";
import WorkProcess from "./components/WorkProcess";
import { blogPosts } from "./data/blogPosts";

export const metadata = {
  title: "Fazis - elektros darbai Vilniuje",
  description: "Elektros montavimo darbai, apsaugos sistemos ir smulkūs elektriko darbai Vilniuje bei aplinkiniuose rajonuose. Paslaugos, kainos ir aiškus susitarimas.",
  alternates: { canonical: "https://fazis.lt/" },
  openGraph: {
    title: "Fazis - elektros darbai Jūsų namams",
    description: "Nuo pirmojo laidelio iki paskutinio šviestuvo. Aiškiai susitariame, atsakingai atliekame.",
    url: "https://fazis.lt/",
    siteName: "Fazis",
    locale: "lt_LT",
    type: "website",
    images: [homeHeroImage],
  },
};

const faq = [
  { question: "Ar atliekate ir nedidelius elektros darbus?", answer: "Taip. Galite kreiptis dėl šviestuvo pakeitimo, kištukinio lizdo, kaitlentės ar LED apšvietimo pajungimo ir kitų nedidelių užduočių." },
  { question: "Kaip sužinoti, kiek kainuos darbai?", answer: "Pradėkite nuo kainos skaičiuoklės arba susisiekite. Tiksliau įvertinti padeda darbų aprašymas, nuotraukos ar planas. Prireikus susitariame dėl objekto apžiūros." },
  { question: "Kur atliekate darbus?", answer: "Dirbame Vilniuje ir aplinkiniuose rajonuose. Susisiekę nurodykite objekto vietą, o mes aptarsime atvykimą ir tinkamą laiką." },
  { question: "Ar medžiagos įtrauktos į darbų kainą?", answer: "Darbų ir medžiagų kainas aptariame atskirai. Skaičiuoklėje medžiagos rodomos kaip preliminarus intervalas, nes suma priklauso nuo pasirinktos įrangos ir montavimo sąlygų." },
];

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <section className="trust-strip" aria-label="Mūsų darbo principai">
          <Wrapper className="trust-items">
            <div className="trust-item"><ShieldCheck /><span>Atsakingas atlikimas</span></div>
            <div className="trust-item"><ClipboardCheck /><span>Aiškus susitarimas</span></div>
            <div className="trust-item"><Sparkles /><span>Tvarkinga darbo vieta</span></div>
          </Wrapper>
        </section>
        <Services />
        <section className="section-space about-preview">
          <Wrapper className="about-preview-grid">
            <Reveal>
              <p className="section-kicker">Fazis požiūris</p>
              <h2 className="section-heading">Tvarka darbuose.<br />Aiškumas bendravime.</h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="section-copy">Geras sprendimas prasideda nuo įsiklausymo. Aptariame Jūsų poreikius ir suprantamai paaiškiname, ką bei kodėl reikia atlikti.</p>
              <ul className="about-principles">
                <li><Check /><span>Darbų apimtį ir orientacinę kainą suderiname prieš pradėdami.</span></li>
                <li><Check /><span>Sprendimus parenkame pagal konkrečią situaciją.</span></li>
                <li><Check /><span>Skiriame dėmesį saugumui, tikslumui ir tvarkai.</span></li>
              </ul>
            </Reveal>
          </Wrapper>
        </section>
        <WorkProcess />
        <InstagramSection />
        <CustomerReviews />
        <section className="section-space blog-section">
          <Wrapper>
            <Reveal className="section-head"><div><p className="section-kicker">Naudinga žinoti</p><h2 className="section-heading">Blogas</h2></div><Link href="/blogas" className="text-link">Visi straipsniai <ArrowRight size={18} /></Link></Reveal>
            <div className="blog-grid">{blogPosts.map((post, index) => <Reveal key={post.slug} delay={index * 80}><BlogCard post={post} /></Reveal>)}</div>
          </Wrapper>
        </section>
        <section className="section-space faq-section">
          <Wrapper className="faq-layout">
            <Reveal><p className="section-kicker">Prieš susisiekiant</p><h2 className="section-heading">D.U.K</h2><p className="section-copy">Keli atsakymai, kad planuoti elektros darbus būtų paprasčiau.</p><Link href="/contacts" className="text-link mt-5">Turite kitą klausimą? <ArrowRight size={18} /></Link></Reveal>
            <div className="faq-list">{faq.map(({ question, answer }) => <details key={question} className="faq-item" name="home-faq"><summary>{question}<Plus /></summary><p>{answer}</p></details>)}</div>
          </Wrapper>
        </section>
        <ContactStrip />
      </main>
      <Footer />
    </>
  );
}
