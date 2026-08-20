import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Footer } from "./components/Footer";
import Hero from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { Services } from "./components/Services";
import WorkProcess from "./components/WorkProcess";
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

export default function Home() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <div className="bg-[#f8faf7]">
      <Navigation />
      <Hero />
      <Services />
      <WorkProcess />

      <section className="bg-[#3f4652] py-20 text-white">
        <Wrapper>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-4xl font-bold text-white md:text-5xl">
                Blogas
              </h2>
            </div>
            <Link
              href="/blogas"
              className="group inline-flex items-center gap-2 rounded-full border border-white/22 px-5 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-[#111312]"
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
                className="group overflow-hidden rounded-lg bg-[#343b46] ring-1 ring-white/10 transition-colors hover:bg-[#37404c]"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[#111312]/16" />
                </div>
                <div className="p-6">
                  <p className="text-sm font-bold text-[#ffd166]">
                    {post.readTime}
                  </p>
                  <h3 className="mt-4 text-2xl font-bold text-white group-hover:text-[#ffd166]">
                    {post.title}
                  </h3>
                  <p className="mt-3 leading-7 text-white/68">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Wrapper>
      </section>

      <Footer />
    </div>
  );
}
