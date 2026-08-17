import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
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
          <section className="bg-[#111312] pt-20 text-white">
            <Wrapper className="py-12">
              <Link
                href="/blogas"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#ffd166]"
              >
                <ArrowLeft className="h-4 w-4" />
                Grįžti į blogą
              </Link>
              <p className="section-kicker mt-8 text-[#ffd166]">
                {post.category}
              </p>
              <h1 className="mt-3 max-w-4xl text-4xl font-bold md:text-6xl">
                {post.title}
              </h1>
              <div className="mt-5 flex flex-wrap gap-3 text-white">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </Wrapper>
          </section>

          <Wrapper className="py-10">
            <div className="relative h-[320px] overflow-hidden rounded-lg ring-1 ring-white/10 md:h-[480px]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>

            {post.videoUrl && (
              <div className="mt-8 aspect-video overflow-hidden rounded-lg bg-[#111312] ring-1 ring-white/10">
                <iframe
                  title={post.title}
                  src={post.videoUrl}
                  className="h-full w-full"
                  allowFullScreen
                />
              </div>
            )}

            <div className="mx-auto mt-10 max-w-3xl rounded-lg bg-[#343b46] p-6 ring-1 ring-white/10 md:p-8">
              <p className="text-xl leading-9 text-white">{post.excerpt}</p>

              <div className="mt-10 space-y-10">
                {post.content.map((section) => (
                  <section key={section.heading}>
                    <h2 className="text-3xl font-bold text-white">
                      {section.heading}
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-white">
                      {section.body}
                    </p>
                  </section>
                ))}
              </div>

              <section className="mt-12 rounded-lg bg-[#111312] p-6 ring-1 ring-white/10">
                <h2 className="text-3xl font-bold text-white">DUK</h2>
                <div className="mt-6 space-y-5">
                  {post.faq.map((item) => (
                    <div key={item.question} className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#ffd166]" />
                      <div>
                        <h3 className="font-bold text-white">
                          {item.question}
                        </h3>
                        <p className="mt-1 leading-7 text-white">
                          {item.answer}
                        </p>
                      </div>
                    </div>
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
