import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogCard({ post, headingLevel = 3 }) {
  const href = `/blogas/${post.slug}/`;
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <article className="blog-card">
      <Link href={href} className="blog-card-image" aria-label={post.title}>
        <Image
          src={post.image.src}
          alt=""
          fill
          sizes="(min-width: 768px) 552px, calc(100vw - 40px)"
        />
      </Link>
      <div className="blog-card-content">
        <Heading className="blog-card-title"><Link href={href}>{post.title}</Link></Heading>
        <p>{post.excerpt}</p>
        <Link href={href} className="text-link">
          Skaityti straipsnį <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
