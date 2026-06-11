import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { AdditionalServicesSection } from "../components/AdditionalServices";
import ServiceCalculator from "../components/ServiceCalculator";
import { Wrapper } from "../components/Wrapper";

export const metadata = {
  title: "Elektriko paslaugos",
  description:
    "Fazis teikia elektriko paslaugas: gedimų diagnostika, apšvietimo montavimas, rozetės, jungikliai, instaliacijos darbai ir elektros saugos sprendimai.",
  keywords: [
    "elektriko paslaugos",
    "elektros darbai",
    "gedimų diagnostika",
    "apšvietimo montavimas",
    "rozetės",
    "jungikliai",
    "elektros instaliacija",
  ],
  alternates: {
    canonical: "https://fazis.lt/services/",
  },
  openGraph: {
    title: "Elektriko paslaugos | Fazis",
    description:
      "Tvarkingi elektros darbai namams ir verslui: nuo smulkių gedimų iki apšvietimo ir instaliacijos darbų.",
    url: "https://fazis.lt/services/",
    siteName: "Fazis",
    locale: "lt_LT",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#f8faf7]">
      <Navigation />
      <main>
        <section className="bg-[#111312] pt-20 text-white">
          <Wrapper className="py-16">
            <p className="section-kicker text-[#ffd166]">Paslaugos</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-bold md:text-6xl">
              Elektros darbų kainos skaičiuoklė
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
              Pasirinkite konkrečius darbus, elektros taškų skaičių arba namo
              kvadratūrą ir greitai įsivertinkite preliminarų biudžetą.
            </p>
          </Wrapper>
        </section>

        <Wrapper className="py-16">
          <ServiceCalculator />
          <AdditionalServicesSection />
        </Wrapper>
      </main>
      <Footer />
    </div>
  );
}
