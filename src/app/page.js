import Link from "next/link";
import { ArrowRight, ClipboardList, MessageCircle, ShieldCheck, Wrench } from "lucide-react";
import { Footer } from "./components/Footer";
import Hero from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { Services } from "./components/Services";
import { Wrapper } from "./components/Wrapper";
import { blogPosts } from "./data/blogPosts";

export const metadata = {
  title: "Fazis - elektriko paslaugos Vilniuje ir aplink",
  description:
    "Tvarkingi elektros darbai namams ir verslui: gedimų diagnostika, apšvietimas, rozetės, jungikliai, instaliacija ir smulkūs elektriko darbai.",
  keywords: [
    "elektrikas",
    "elektriko paslaugos",
    "elektros darbai",
    "elektros gedimai",
    "apšvietimo montavimas",
    "rozečių montavimas",
    "Fazis",
  ],
  alternates: {
    canonical: "https://fazis.lt/",
  },
  openGraph: {
    title: "Fazis - elektriko paslaugos",
    description:
      "Atsakingi elektros darbai namams ir verslui. Aiški komunikacija, saugūs sprendimai ir tvarkingas rezultatas.",
    url: "https://fazis.lt/",
    siteName: "Fazis",
    locale: "lt_LT",
    type: "website",
    images: [
      {
        url: "/images/fazis-hero.jpg",
        width: 1920,
        height: 1080,
        alt: "Fazis elektriko paslaugos",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const steps = [
  {
    icon: MessageCircle,
    title: "Susisiekiate",
    text: "Trumpai aprašote situaciją, atsiunčiate nuotraukų arba paskambinate.",
  },
  {
    icon: ClipboardList,
    title: "Įvertiname",
    text: "Aptariame galimą sprendimą, darbų apimtį, laiką ir orientacinę kainą.",
  },
  {
    icon: Wrench,
    title: "Atliekame",
    text: "Darbai atliekami saugiai, tvarkingai ir pagal sutartą planą.",
  },
  {
    icon: ShieldCheck,
    title: "Patikriname",
    text: "Po darbų patikrinamas rezultatas ir paaiškinama, kas buvo atlikta.",
  },
];

export default function Home() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <div className="bg-[#f8faf7]">
      <Navigation />
      <Hero />
      <Services />

      <section className="bg-[#111312] py-20 text-white">
        <Wrapper>
          <p className="section-kicker text-[#ffd166]">Darbo eiga</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-bold text-white md:text-5xl">
            Paprastas procesas be miglos ir spėlionių
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {steps.map(({ icon: Icon, title, text }, index) => (
              <article
                key={title}
                className="rounded-lg bg-white/7 p-6 ring-1 ring-white/10"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-[#f5b301] text-[#111312]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-bold text-[#ffd166]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="mt-3 leading-7 text-white/70">{text}</p>
              </article>
            ))}
          </div>
        </Wrapper>
      </section>

      <section className="bg-white py-20">
        <Wrapper>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-kicker">Blogas</p>
              <h2 className="mt-3 max-w-2xl text-4xl font-bold text-[#111312] md:text-5xl">
                Naudingi atsakymai apie elektrą namuose
              </h2>
            </div>
            <Link
              href="/blogas"
              className="group inline-flex items-center gap-2 rounded-full border border-[#111312]/18 px-5 py-3 font-semibold text-[#111312] transition-colors hover:bg-[#111312] hover:text-white"
            >
              Visi straipsniai
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blogas/${post.slug}`}
                className="group rounded-lg bg-[#f8faf7] p-6 ring-1 ring-[#111312]/10 transition-transform hover:-translate-y-1"
              >
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#b86f2f]">
                  {post.category}
                </p>
                <h3 className="mt-4 text-2xl font-bold text-[#111312] group-hover:text-[#8a5a00]">
                  {post.title}
                </h3>
                <p className="mt-3 leading-7 text-[#47606a]">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </Wrapper>
      </section>

      <Footer />
    </div>
  );
}
