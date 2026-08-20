import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { Footer } from "../../components/Footer";
import { Navigation } from "../../components/Navigation";
import { Wrapper } from "../../components/Wrapper";
import { blogPosts, getPostBySlug } from "../../data/blogPosts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://fazis.lt/blogas/${post.slug}/`,
    },
    openGraph: {
      title: `${post.title} | Fazis`,
      description: post.excerpt,
      url: `https://fazis.lt/blogas/${post.slug}/`,
      siteName: "Fazis",
      locale: "lt_LT",
      type: "article",
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#3f4652]">
      <Navigation />
      <main>
        <article>
          <section className="relative min-h-[42vh] overflow-hidden bg-[#111312] text-white md:min-h-[48vh]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,19,18,0.88)_0%,rgba(17,19,18,0.64)_46%,rgba(17,19,18,0.24)_100%)]" />
            <div className="absolute inset-0 bg-[#111312]/18" />

            <Wrapper className="relative z-10 flex min-h-[42vh] flex-col justify-center py-12 md:min-h-[48vh]">
              <Link
                href="/blogas"
                className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-white hover:text-[#ffd166]"
              >
                <ArrowLeft className="h-4 w-4" />
                Grįžti į blogą
              </Link>
              <h1 className="mt-7 max-w-4xl text-4xl font-bold md:text-6xl">
                {post.title}
              </h1>
              <div className="mt-5 flex flex-wrap gap-3 text-white">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </Wrapper>
          </section>

          <Wrapper className="py-10">
            <div className="mx-auto max-w-3xl rounded-lg bg-[#343b46] p-6 ring-1 ring-white/10 md:p-8">
              <div className="space-y-10">
                {post.content.map((section) => (
                  <section key={section.heading}>
                    <h2 className="text-3xl font-bold text-white">
                      {section.heading}
                    </h2>
                    <div className="mt-4 space-y-4">
                      {(section.paragraphs ?? [section.body]).map(
                        (paragraph) => (
                          <p
                            key={paragraph}
                            className="text-lg leading-8 text-white"
                          >
                            {paragraph}
                          </p>
                        ),
                      )}
                    </div>
                  </section>
                ))}
              </div>

              <section className="mt-12 border-t border-white/10 pt-10">
                <h2 className="text-3xl font-bold text-white">DUK</h2>
                <div className="mt-6 space-y-3">
                  {post.faq.map((item) => (
                    <details
                      key={item.question}
                      name="blog-faq"
                      className="group rounded-lg bg-[#3f4652] ring-1 ring-white/10"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 font-bold text-white marker:hidden">
                        <span>{item.question}</span>
                        <ChevronDown className="h-5 w-5 shrink-0 text-[#ffd166] transition-transform group-open:rotate-180" />
                      </summary>
                      <p className="px-4 pb-4 leading-7 text-white">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            </div>
          </Wrapper>
        </article>
      </main>
      <Footer />
    </div>
  );
}
