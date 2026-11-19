import { readdir } from "node:fs/promises";
import path from "node:path";

// Lead with finished lighting and clear details, then show installation progress.
const galleryOrder = [
  "20260804_153631.jpg.webp",
  "20260805_151435.jpg.webp",
  "20260812_122506.jpg.webp",
  "IMG_4393.JPEG.webp",
  "IMG_4689.jpg.webp",
  "20261007_160129.jpg.webp",
  "20261017_155643.jpg.webp",
  "20261017_155649.jpg.webp",
  "20261007_155236.jpg.webp",
  "20261001_152325.jpg.webp",
  "20260812_141702.jpg.webp",
  "SiRENA 2.jpeg.webp",
  "Centrale 4.jpeg.webp",
  "20261001_152247.jpg.webp",
  "20260917_153446.jpg.webp",
  "20260804_181101.jpg.webp",
  "IMG_4709.jpg.webp",
  "GLZO2198.JPEG.webp",
  "20261020_100656.jpg.webp",
  "20261012_121421.jpg.webp",
  "20261012_153508.jpg.webp",
  "20261007_141545.jpg.webp",
  "20260811_172842.jpg.webp",
  "20260806_101716.jpg.webp",
  "AAUT2148.JPG.webp",
];

const galleryPriority = new Map(galleryOrder.map((name, index) => [name, index]));
const galleryPositions = {
  "20260804_153631.jpg.webp": "50% 30%",
  "20260805_151435.jpg.webp": "50% 65%",
};

export async function getGalleryImages() {
  const directory = path.join(process.cwd(), "public", "images", "gallery-web");
  const files = await readdir(directory, { withFileTypes: true });

  return files
    .filter((file) => file.isFile() && /\.(jpe?g|png|webp|avif)$/i.test(file.name))
    .sort((a, b) => {
      const priorityA = galleryPriority.get(a.name) ?? Number.MAX_SAFE_INTEGER;
      const priorityB = galleryPriority.get(b.name) ?? Number.MAX_SAFE_INTEGER;
      return priorityA - priorityB || a.name.localeCompare(b.name, "en", { numeric: true });
    })
    .map((file, index) => ({
      src: `/images/gallery-web/${encodeURIComponent(file.name)}`,
      alt: `Fazis elektros darbų ir darbo aplinkos nuotrauka ${index + 1}`,
      title: `Galerijos nuotrauka ${index + 1}`,
      position: galleryPositions[file.name],
    }));
}
