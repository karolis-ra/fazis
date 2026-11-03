import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { Wrapper } from "../components/Wrapper";
import ContactStrip from "../components/ContactStrip";
import GalleryViewer from "../components/GalleryViewer";
import InstagramSection from "../components/InstagramSection";
import { getGalleryImages } from "../data/siteImages";

export const metadata = {
  title: "Galerija",
  description: "Fazis elektros darbų ir darbo aplinkos nuotraukos.",
  alternates: { canonical: "https://fazis.lt/galerija/" },
};

export default async function GalleryPage() {
  const images = await getGalleryImages();
  return <><Navigation /><main><h1 className="sr-only">Galerija</h1><section className="gallery-page"><Wrapper><GalleryViewer images={images} /></Wrapper></section><InstagramSection /><ContactStrip /></main><Footer /></>;
}
