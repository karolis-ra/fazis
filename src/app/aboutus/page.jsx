import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardCheck, PhoneCall, ShieldCheck, Sparkles } from "lucide-react";
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
    text: "Elektros darbai turi būti atliekami taip, kad sprendimas būtų patikimas ne tik šiandien, bet ir po metų.",
  },
  {
    icon: ClipboardCheck,
    title: "Aiškus susitarimas",
    text: "Prieš darbą aptariama apimtis, prioritetai ir orientacinė kaina, kad klientui nekiltų nemalonių staigmenų.",
  },
  {
    icon: Sparkles,
    title: "Tvarkingas rezultatas",
    text: "Vertinu ne tik pajungimą, bet ir tai, kaip atrodo galutinis darbas bei kokia tvarka paliekama darbo vietoje.",
  },
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#f8faf7]">
      <Navigation />
      <main>
        <section className="bg-[#111312] pt-20 text-white">
          <Wrapper className="py-16">
            <p className="section-kicker text-[#ffd166]">Apie Fazis</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-bold md:text-6xl">
              Jauna elektros darbų įmonė su rimtu požiūriu į atsakomybę
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">
              Fazis kuriamas ne kaip didelė anoniminė komanda, o kaip patikimas
              elektriko partneris žmonėms, kuriems svarbu suprasti, kas bus
              daroma jų namuose ar verslo patalpose.
            </p>
          </Wrapper>
        </section>

        <Wrapper className="py-16">
          <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-start">
            <div>
              <p className="section-kicker">Prisistatymas</p>
              <h2 className="mt-3 text-3xl font-bold text-[#111312] md:text-5xl">
                Patirtis auga, bet darbo standartas turi būti aukštas nuo pirmos dienos
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-[#47606a]">
              <p>
                Esu pradedantysis elektrikas, todėl man ypač svarbu dirbti
                atsakingai, neskubėti ten, kur reikia tikslumo, ir aiškiai
                komunikuoti su klientu. Jei situacija reikalauja papildomo
                įvertinimo ar siauresnės specializacijos, apie tai pasakau
                tiesiai.
              </p>
              <p>
                Mano tikslas - kad klientas jaustųsi ramiai: žinotų, kas
                daroma, kodėl tai daroma ir kokį rezultatą gaus. Elektros darbai
                nėra vieta spėlionėms, todėl renkuosi tvarkingą procesą,
                patikimas medžiagas ir saugų atlikimą.
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

        <section className="bg-white py-16">
          <Wrapper>
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <p className="section-kicker">Ką gaunate</p>
                <h2 className="mt-3 text-3xl font-bold text-[#111312] md:text-4xl">
                  Ne pažadą apie stebuklus, o aiškų, atsakingą darbą
                </h2>
              </div>
              <ul className="space-y-4">
                {[
                  "Tiesų situacijos įvertinimą",
                  "Aiškiai suderintą darbų apimtį",
                  "Tvarkingą ir saugų atlikimą",
                  "Paaiškinimą, kas buvo padaryta",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#b86f2f]" />
                    <span className="text-lg text-[#2d3835]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Wrapper>
        </section>

        <Wrapper className="py-16">
          <div className="flex flex-col gap-5 rounded-lg bg-[#111312] p-6 text-white md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <h2 className="text-2xl font-bold">Turite elektros klausimą?</h2>
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
