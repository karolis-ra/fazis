import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { Wrapper } from "../components/Wrapper";
import { blogPosts } from "../data/blogPosts";

export const metadata = {
  title: "Blogas",
  description:
    "Fazis blogas apie elektros gedimus, apšvietimą, saugumą ir praktiškus elektros darbų patarimus namams.",
  alternates: {
    canonical: "https://fazis.lt/blogas/",
  },
};

export default function BlogPage() {
  const categories = [...new Set(blogPosts.map((post) => post.category))];

  return (
    <div className="min-h-screen bg-[#f8faf7]">
      <Navigation />
      <main>
        <section className="relative min-h-[38vh] overflow-hidden bg-[#111312] text-white md:min-h-[48vh]">
          <Image
            src="/images/blogas-hero.jpg"
            alt="Fazis blogas"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,19,18,0.78)_0%,rgba(17,19,18,0.42)_48%,rgba(17,19,18,0.22)_100%)]" />
          <div className="absolute inset-0 bg-[#111312]/16" />
          <Wrapper className="relative z-10 flex min-h-[38vh] items-center justify-center py-10 text-center md:min-h-[48vh] md:justify-start md:py-12 md:text-left">
            <h1 className="text-5xl font-semibold leading-none tracking-normal text-white md:text-7xl">
              Blogas
            </h1>
          </Wrapper>
        </section>

        <Wrapper className="py-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-[#111312]/12 bg-white px-4 py-2 text-sm font-semibold text-[#2d3835]"
              >
                {category}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="overflow-hidden rounded-lg bg-white ring-1 ring-[#111312]/10 transition-transform hover:-translate-y-1"
              >
                <div className="relative h-52">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#8a6a28]">
                    <span>{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="mt-3 text-2xl font-bold text-[#111312]">
                    {post.title}
                  </h2>
                  <p className="mt-3 leading-7 text-[#47606a]">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blogas/${post.slug}`}
                    className="group mt-5 inline-flex items-center gap-2 font-bold text-[#111312]"
                  >
                    Skaityti
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Wrapper>
      </main>
      <Footer />
    </div>
  );
}
