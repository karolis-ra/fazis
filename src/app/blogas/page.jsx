import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { Wrapper } from "../components/Wrapper";
import BlogCard from "../components/BlogCard";
import ContactStrip from "../components/ContactStrip";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { blogPosts } from "../data/blogPosts";

export const metadata = {
  title: "Blogas",
  description: "Fazis blogas apie būsto elektros instaliaciją nuo elektros įvado ir planavimo iki montavimo bei darbų priėmimo.",
  alternates: { canonical: "https://fazis.lt/blogas/" },
};

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero title="Blogas" image="/images/redesign/lighting.jpg" />
        <section className="section-space" aria-label="Straipsniai">
          <Wrapper>
            <div className="blog-grid blog-index-grid">
              {blogPosts.map((post, index) => (
                <Reveal key={post.slug} delay={index * 80}>
                  <BlogCard post={post} headingLevel={2} />
                </Reveal>
              ))}
            </div>
          </Wrapper>
        </section>
        <ContactStrip />
      </main>
      <Footer />
    </>
  );
}
