import { Cable, FilePenLine, ShieldCheck, Wrench } from "lucide-react";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { Wrapper } from "../components/Wrapper";
import ContactStrip from "../components/ContactStrip";
import PageHero from "../components/PageHero";
import ServiceCalculator from "../components/ServiceCalculator";

export const metadata = {
  title: "Paslaugos ir kainos",
  description: "Elektros instaliacija, smulkūs elektros darbai, apsaugos ir vaizdo stebėjimo sistemos, elektros brėžiniai. Kainos skaičiuoklė pagal elektros taškus arba kvadratūrą.",
  alternates: { canonical: "https://fazis.lt/services/" },
};

export default function ServicesPage() {
  const services = [
    { icon: Wrench, title: "Smulkūs elektros darbai" },
    { icon: Cable, title: "Elektros instaliacijos pirmo ir antro etapo darbai" },
    { icon: ShieldCheck, title: "Apsaugos ir vaizdo stebėjimo sistemų montavimas ir diegimas" },
    { icon: FilePenLine, title: "Elektros brėžiniai" },
  ];

  return (
    <>
      <Navigation />
      <main>
        <PageHero title="Paslaugos" image="/images/redesign/installation.jpg" />
        <section className="section-space">
          <Wrapper>
            <div className="mb-12 border-b border-[#dde3e5] pb-12">
              <h2 className="section-heading">Teikiamos paslaugos</h2>
              <ul className="mt-7 grid gap-x-10 gap-y-5 md:grid-cols-2">
                {services.map(({ icon: Icon, title }) => (
                  <li key={title} className="flex items-start gap-3 text-base leading-7">
                    <Icon className="mt-1 h-5 w-5 shrink-0 text-[#236451]" aria-hidden="true" />
                    <span>{title}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ServiceCalculator />
          </Wrapper>
        </section>
        <ContactStrip />
      </main>
      <Footer />
    </>
  );
}
