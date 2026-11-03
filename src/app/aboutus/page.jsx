import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { Wrapper } from "../components/Wrapper";
import AnimatedValueCards from "../components/AnimatedValueCards";
import ContactStrip from "../components/ContactStrip";
import InstagramSection from "../components/InstagramSection";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

export const metadata = {
  title: "Apie mus",
  description: "Susipažinkite su Fazis požiūriu į elektros darbus: saugumas, aiškus susitarimas ir tvarkingas rezultatas.",
  alternates: { canonical: "https://fazis.lt/aboutus/" },
};

export default function AboutUsPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero title="Apie mus" image="/images/redesign/hero-hallway.jpg" />
        <section className="section-space">
          <Wrapper>
            <div className="grid gap-8 md:grid-cols-2 md:gap-16">
              <Reveal><p className="section-kicker">Mūsų požiūris</p><h2 className="section-heading mt-4">Fazis - saugumas ir atsakomybė</h2></Reveal>
              <Reveal delay={100} className="section-copy space-y-5">
                <p>Fazis yra auganti elektros darbų įmonė. Mums svarbu dirbti atsakingai, įsiklausyti į Jūsų poreikius ir aiškiai paaiškinti siūlomą sprendimą.</p>
                <p>Elektros darbai nėra vieta spėlionėms. Todėl skiriame dėmesį tikslumui, patikimoms medžiagoms ir tvarkingam procesui, nuo pirmojo pokalbio iki rezultato patikrinimo.</p>
              </Reveal>
            </div>
            <AnimatedValueCards />
          </Wrapper>
        </section>
        <InstagramSection />
        <ContactStrip />
      </main>
      <Footer />
    </>
  );
}
