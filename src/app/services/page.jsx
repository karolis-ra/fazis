import Image from "next/image";
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
        <section className="relative min-h-[38vh] overflow-hidden bg-[#111312] text-white md:min-h-[48vh]">
          <Image
            src="/images/paslaugo-hero.jpg"
            alt="Fazis elektros darbų paslaugos"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,19,18,0.78)_0%,rgba(17,19,18,0.42)_48%,rgba(17,19,18,0.22)_100%)]" />
          <div className="absolute inset-0 bg-[#111312]/16" />
          <Wrapper className="relative z-10 flex min-h-[38vh] items-center justify-center py-10 text-center md:min-h-[48vh] md:justify-start md:py-12 md:text-left">
            <h1 className="text-5xl font-semibold leading-none tracking-normal text-white md:text-7xl">
              Paslaugos
            </h1>
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
