import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogCard({ post }) {
  return <article className="blog-card"><Link href={`/blogas/${post.slug}`} className="blog-card-image" aria-label={post.title}><Image src={post.image} alt={post.title} fill sizes="(min-width: 768px) 33vw, 100vw" /></Link><div className="blog-card-content"><h3><Link href={`/blogas/${post.slug}`}>{post.title}</Link></h3><p>{post.excerpt}</p><Link href={`/blogas/${post.slug}`} className="text-link">Skaityti straipsnį <ArrowRight size={17} /></Link></div></article>;
}
