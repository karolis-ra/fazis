import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import AnimatedValueCards from "../components/AnimatedValueCards";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { Wrapper } from "../components/Wrapper";

export const metadata = {
  title: "Apie mus",
  description:
    "Fazis - atsakinga elektros darbų įmonė, orientuota į saugius sprendimus, aiškią komunikaciją ir tvarkingą rezultatą.",
  alternates: {
    canonical: "https://fazis.lt/aboutus/",
  },
  openGraph: {
    title: "Apie mus | Fazis",
    description:
      "Susipažinkite su Fazis požiūriu į elektros darbus: aiškiai, saugiai ir tvarkingai.",
    url: "https://fazis.lt/aboutus/",
    siteName: "Fazis",
    locale: "lt_LT",
    type: "website",
  },
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#3f4652]">
      <Navigation />
      <main>
        <section className="relative min-h-[38vh] overflow-hidden bg-[#111312] text-white md:min-h-[48vh]">
          <Image
            src="/images/apie-mus-hero.jpg"
            alt="Apie Fazis"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,19,18,0.78)_0%,rgba(17,19,18,0.42)_48%,rgba(17,19,18,0.22)_100%)]" />
          <div className="absolute inset-0 bg-[#111312]/16" />
          <Wrapper className="relative z-10 flex min-h-[38vh] items-center justify-center py-10 text-center md:min-h-[48vh] md:justify-start md:py-12 md:text-left">
            <h1 className="text-5xl font-semibold leading-none tracking-normal text-white md:text-7xl">
              Apie mus
            </h1>
          </Wrapper>
        </section>

        <Wrapper className="py-16">
          <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-start">
            <div>
              <h2 className="text-3xl font-bold text-white md:text-5xl">
                Fazis - saugumas ir atsakomybė
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-white">
              <p>
                Fazis yra auganti elektros darbų įmonė, kuriai ypač svarbu
                dirbti atsakingai ir aiškiai komunikuoti su klientu. Mūsų
                tikslas - kad klientas jaustųsi ramiai ir suprastų, kas daroma
                bei kodėl.
              </p>
              <p>
                Elektros darbai nėra vieta spėlionėms, todėl saugumas,
                patikimos medžiagos ir tvarkingas procesas yra mūsų prioritetas.
              </p>
            </div>
          </div>

          <AnimatedValueCards />
        </Wrapper>

        <Wrapper className="py-16">
          <div className="flex flex-col gap-5 rounded-lg bg-[#111312] p-6 text-white ring-1 ring-white/10 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <h2 className="text-2xl font-bold">Turite klausimą?</h2>
              <p className="mt-2 text-white">
                Parašykite arba paskambinkite, trumpai aptarsime situaciją.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+37062794262"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f5b301] px-5 py-3 font-semibold text-[#111312] hover:bg-[#ffd166]"
              >
                <PhoneCall className="h-5 w-5" />
                Skambinti
              </a>
              <Link
                href="/contacts"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 font-semibold text-white hover:bg-white/10"
              >
                Kontaktai
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Wrapper>
      </main>
      <Footer />
    </div>
  );
}
