import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Plus } from "lucide-react";
import { Footer } from "../../components/Footer";
import { Navigation } from "../../components/Navigation";
import { Wrapper } from "../../components/Wrapper";
import ContactStrip from "../../components/ContactStrip";
import { blogPosts, getPostBySlug } from "../../data/blogPosts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title, description: post.excerpt,
    alternates: { canonical: `https://fazis.lt/blogas/${post.slug}/` },
    openGraph: { title: `${post.title} | Fazis`, description: post.excerpt, url: `https://fazis.lt/blogas/${post.slug}/`, siteName: "Fazis", locale: "lt_LT", type: "article", images: [{ url: post.image, alt: post.title }] },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  return (
    <>
      <Navigation />
      <main>
        <article>
          <section className="page-hero article-hero">
            <Image src={post.image} alt="" fill priority sizes="100vw" />
            <div className="page-hero-scrim" />
            <Wrapper className="page-hero-copy">
              <Link href="/blogas" className="text-link article-back"><ArrowLeft size={16} /> Grįžti į blogą</Link>
              <h1>{post.title}</h1>
              <div className="article-meta"><time dateTime={post.date}>{post.date}</time></div>
            </Wrapper>
          </section>
          <Wrapper>
            <div className="article-body">
              <div className="space-y-10">
                {post.content.map((section) => <section key={section.heading}><h2>{section.heading}</h2><div className="mt-5 space-y-5">{(section.paragraphs ?? [section.body]).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>)}
              </div>
              <section className="mt-14 border-t border-[#dde3e5] pt-10">
                <h2>DUK</h2>
                <div className="faq-list mt-6">{post.faq.map((item) => <details key={item.question} name="blog-faq" className="faq-item"><summary>{item.question}<Plus /></summary><p>{item.answer}</p></details>)}</div>
              </section>
            </div>
          </Wrapper>
        </article>
        <ContactStrip />
      </main>
      <Footer />
    </>
  );
}
