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
  description: "Fazis blogas apie kabelių pasirinkimą, automatinius jungiklius, srovės nuotėkio reles ir namų elektros instaliaciją.",
  alternates: { canonical: "https://fazis.lt/blogas/" },
};

export default function BlogPage() {
  return <><Navigation /><main><PageHero title="Blogas" image="/images/redesign/lighting.jpg" /><section className="section-space"><Wrapper><div className="blog-grid">{blogPosts.map((post, index) => <Reveal key={post.slug} delay={index * 80}><BlogCard post={post} /></Reveal>)}</div></Wrapper></section><ContactStrip /></main><Footer /></>;
}
