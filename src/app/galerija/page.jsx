import { existsSync, readdirSync } from "fs";
import path from "path";
import Image from "next/image";
import { Footer } from "../components/Footer";
import GalleryViewer from "../components/GalleryViewer";
import { Navigation } from "../components/Navigation";
import { Wrapper } from "../components/Wrapper";

export const metadata = {
  title: "Galerija",
  description:
    "Fazis atliktų elektros darbų ir apšvietimo sprendimų nuotraukų galerija.",
  alternates: {
    canonical: "https://fazis.lt/galerija/",
  },
  openGraph: {
    title: "Galerija | Fazis",
    description:
      "Atliktų elektros darbų, instaliacijos ir apšvietimo sprendimų nuotraukos.",
    url: "https://fazis.lt/galerija/",
    siteName: "Fazis",
    locale: "lt_LT",
    type: "website",
  },
};

const galleryDirectory = path.join(process.cwd(), "public", "images", "gallery");
const supportedExtensions = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

function formatAltText(fileName) {
  const name = path.parse(fileName).name;
  const readable = name
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!readable) return "Fazis atliktų darbų nuotrauka";

  return `Fazis atlikti darbai - ${readable}`;
}

function getGalleryImages() {
  if (!existsSync(galleryDirectory)) return [];

  return readdirSync(galleryDirectory)
    .filter((fileName) =>
      supportedExtensions.includes(path.extname(fileName).toLowerCase())
    )
    .sort((a, b) => a.localeCompare(b, "lt", { numeric: true }))
    .map((fileName) => ({
      src: `/images/gallery/${fileName}`,
      alt: formatAltText(fileName),
    }));
}

export default function GalleryPage() {
  const images = getGalleryImages();

  return (
    <div className="min-h-screen bg-[#f8faf7]">
      <Navigation />
      <main>
        <section className="relative min-h-[38vh] overflow-hidden bg-[#111312] text-white md:min-h-[48vh]">
          <Image
            src="/images/galerija-hero.jpg"
            alt="Fazis darbų galerija"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,19,18,0.78)_0%,rgba(17,19,18,0.42)_48%,rgba(17,19,18,0.22)_100%)]" />
          <div className="absolute inset-0 bg-[#111312]/16" />
          <Wrapper className="relative z-10 flex min-h-[38vh] items-center justify-center py-10 text-center md:min-h-[48vh] md:justify-start md:py-12 md:text-left">
            <h1 className="text-5xl font-semibold leading-none tracking-normal text-white md:text-7xl">
              Galerija
            </h1>
          </Wrapper>
        </section>

        <section className="py-16">
          <Wrapper>
            {images.length > 0 ? (
              <GalleryViewer images={images} />
            ) : (
              <div className="rounded-lg bg-white p-8 text-center ring-1 ring-[#111312]/10">
                <p className="text-lg font-semibold text-[#111312]">
                  Galerija ruošiama
                </p>
                <p className="mt-2 text-[#47606a]">
                  Netrukus čia atsiras atliktų darbų nuotraukos.
                </p>
              </div>
            )}
          </Wrapper>
        </section>
      </main>
      <Footer />
    </div>
  );
}
