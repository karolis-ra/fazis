import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  PhoneCall,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { Wrapper } from "../components/Wrapper";

export const metadata = {
  title: "Apie mus",
  description:
    "Fazis - jauna, atsakinga elektros darbų įmonė, orientuota į saugius sprendimus, aiškią komunikaciją ir tvarkingą rezultatą.",
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

const values = [
  {
    icon: ShieldCheck,
    title: "Saugumas pirmoje vietoje",
    text: "Elektros darbai turi būti atliekami taip, kad sprendimas būtų patikimas ne tik šiandien, bet ir ateityje.",
  },
  {
    icon: ClipboardCheck,
    title: "Aiškus susitarimas",
    text: "Prieš darbą aptariama apimtis, prioritetai ir orientacinė kaina, kad klientui nekiltų nemalonių staigmenų.",
  },
  {
    icon: Sparkles,
    title: "Tvarkingas rezultatas",
    text: "Ne tik sujungiame, kad veiktų, bet ir rūpinamės estetiniu vaizdu.",
  },
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#f8faf7]">
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
              <p className="section-kicker">Prisistatymas</p>
              <h2 className="mt-3 text-3xl font-bold text-[#111312] md:text-5xl">
                Fazis - jauna, bet itin atsakinga elektros darbų įmonė.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-[#47606a]">
              <p>
                Fazis yra auganti elektros darbų įmonė, kuriai ypač svarbu
                dirbti atsakingai ir
                aiškiai komunikuoti su klientu. Mūsų tikslas - kad klientas jaustųsi ramiai - žinotų kas daroma ir kodėl. Elektros darbai nėra vieta spėlionėms, todėl saugumas ir patikimos medžiagas yra prioritetas. 
              </p>
              <p>
                Mūsų tikslas - kad klientas jaustųsi ramiai: žinotų, kas
                daroma, kodėl tai daroma ir kokį rezultatą gaus. Mūsų elektrikų komanda nuolat tobulinasi ir ieško geriausio sprendimo.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-lg bg-white p-6 ring-1 ring-[#111312]/10"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-[#111312] text-[#ffd166]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-[#111312]">{title}</h3>
                <p className="mt-3 leading-7 text-[#47606a]">{text}</p>
              </article>
            ))}
          </div>
        </Wrapper>

        <Wrapper className="py-16">
          <div className="flex flex-col gap-5 rounded-lg bg-[#111312] p-6 text-white md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <h2 className="text-2xl font-bold">Turite klausimą?</h2>
              <p className="mt-2 text-white/70">
                Parašykite arba paskambinkite, trumpai aptarsime situaciją.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contacts"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#f5b301] px-5 py-3 font-semibold text-[#111312] hover:bg-[#ffd166]"
              >
                Kontaktai
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+37062794262"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 font-semibold text-white hover:bg-white/10"
              >
                <PhoneCall className="h-5 w-5" />
                Skambinti
              </a>
            </div>
          </div>
        </Wrapper>
      </main>
      <Footer />
    </div>
  );
}
