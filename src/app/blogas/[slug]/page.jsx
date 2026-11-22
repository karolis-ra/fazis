import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Footer } from "../../components/Footer";
import { Navigation } from "../../components/Navigation";
import { Wrapper } from "../../components/Wrapper";
import ContactStrip from "../../components/ContactStrip";
import { blogPosts, getPostBySlug } from "../../data/blogPosts";

const dateFormatter = new Intl.DateTimeFormat("lt-LT", { dateStyle: "long", timeZone: "Europe/Vilnius" });

function ArticleText({ text }) {
  return text.split(/\*\*([^*]+)\*\*/).map((part, index) => (
    index % 2 ? <strong key={index}>{part}</strong> : part
  ));
}

function ArticleParagraph({ paragraph }) {
  return typeof paragraph === "string"
    ? <p><ArticleText text={paragraph} /></p>
    : <p className="article-formula">{paragraph.formula}</p>;
}

function ArticleTable({ table, labelledBy }) {
  return (
    <div className="article-table">
      <table aria-labelledby={labelledBy}>
        <thead>
          <tr>{table.headings.map((heading) => <th key={heading} scope="col">{heading}</th>)}</tr>
        </thead>
        <tbody>
          {table.rows.map(([label, ...values]) => (
            <tr key={label}>
              <th scope="row">{label}</th>
              {values.map((value, index) => <td key={table.headings[index + 1]}>{value}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `https://fazis.lt/blogas/${post.slug}/`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: `${post.title} | Fazis`,
      description: post.excerpt,
      url,
      siteName: "Fazis",
      locale: "lt_LT",
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image.src, alt: post.image.alt, width: post.image.width, height: post.image.height }],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const seriesPosts = blogPosts.filter((entry) => entry.series === post.series);
  const seriesIndex = seriesPosts.indexOf(post);
  const previous = seriesPosts[seriesIndex - 1];
  const next = seriesPosts[seriesIndex + 1];
  return (
    <>
      <Navigation />
      <main>
        <article className="blog-article" data-justified={post.justify || undefined}>
          <header className="article-hero">
            <Wrapper>
              <div className="article-width article-heading">
                <Link href="/blogas/" className="text-link article-back"><ArrowLeft size={16} aria-hidden="true" /> Grįžti į blogą</Link>
                <div className="article-meta">
                  <span>{post.series} · {post.seriesPart} dalis</span>
                  <time dateTime={post.date}>{dateFormatter.format(new Date(post.date))}</time>
                </div>
                <h1>{post.title}</h1>
                <p className="article-lead"><ArticleText text={post.intro} /></p>
              </div>
            </Wrapper>
          </header>
          <Wrapper>
            <div className="article-width article-body">
              <nav className="article-contents" aria-labelledby="straipsnio-turinys">
                <h2 id="straipsnio-turinys">Straipsnio turinys</h2>
                <ul>
                  {post.content.map((section) => (
                    <li key={section.id}><a href={`#${section.id}`}>{section.heading}</a></li>
                  ))}
                </ul>
              </nav>
              {post.content.map((section) => {
                const List = section.ordered ? "ol" : "ul";
                const headingId = `${section.id}-antraste`;
                return (
                  <section className="article-section" id={section.id} key={section.id}>
                    <h2 id={headingId}>{section.heading}</h2>
                    {section.figure && (
                      <figure className="article-figure">
                        <a href={post.image.src} aria-label={`Atverti paveikslą visu dydžiu. ${post.image.alt}`}>
                          <Image
                            src={post.image.src}
                            alt={post.image.alt}
                            width={post.image.width}
                            height={post.image.height}
                            sizes="(min-width: 768px) 720px, calc(100vw - 40px)"
                          />
                        </a>
                        <figcaption>{post.image.caption}</figcaption>
                      </figure>
                    )}
                    {section.paragraphs?.map((paragraph) => <ArticleParagraph key={paragraph.formula ?? paragraph} paragraph={paragraph} />)}
                    {section.table && <ArticleTable table={section.table} labelledBy={headingId} />}
                    {section.items && (
                      <List className={section.ordered ? "article-steps" : "article-list"}>
                        {section.items.map((item) => (
                          <li key={item.label}>
                            {section.ordered ? (
                              <>
                                <h3>{item.label} <span lang="en">({item.diagramLabel})</span></h3>
                                <p>{item.text}</p>
                              </>
                            ) : <p><strong>{item.label}</strong> {item.text}</p>}
                          </li>
                        ))}
                      </List>
                    )}
                    {section.after?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </section>
                );
              })}
              <section className="article-sources" aria-labelledby="straipsnio-saltiniai">
                <h2 id="straipsnio-saltiniai">Šaltiniai</h2>
                <ul>
                  {post.sources.map((source) => <li key={source.url}><a href={source.url}>{source.label}</a></li>)}
                </ul>
              </section>
              {(previous || next) && (
                <nav className="article-series-nav" aria-label="Kiti serijos straipsniai">
                  {previous && (
                    <Link href={`/blogas/${previous.slug}/`}>
                      <span>Ankstesnis straipsnis</span>
                      <strong>{previous.title}</strong>
                    </Link>
                  )}
                  {next && (
                    <Link href={`/blogas/${next.slug}/`}>
                      <span>Tolesnis straipsnis</span>
                      <strong>{next.title}</strong>
                    </Link>
                  )}
                </nav>
              )}
            </div>
          </Wrapper>
        </article>
        <ContactStrip />
      </main>
      <Footer />
    </>
  );
}
