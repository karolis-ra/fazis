import { readdir } from "node:fs/promises";
import path from "node:path";

// Lead with finished lighting and clear details, then show installation progress.
const galleryOrder = [
  "IMG-2b27937486b8a10737cf9bd61502d725-V.jpg",
  "IMG_20260817_125528_945.jpg",
  "20260804_153631.jpg",
  "IMG_20260817_125528_353.jpg",
  "20260805_151435.jpg",
  "20260927_180215.jpg",
  "20260805_171538.jpg",
  "20260812_122506.jpg",
  "20260911_144049.jpg",
  "IMG_20260817_125528_952.jpg",
  "20260911_154850.jpg",
  "IMG_4393.JPEG",
  "IMG_4689.jpg",
  "20261007_160129.jpg",
  "20261017_155643.jpg",
  "20261017_155649.jpg",
  "20261007_155236.jpg",
  "20261001_152325.jpg",
  "20260812_122507.jpg",
  "20260812_141702.jpg",
  "SiRENA 2.jpeg",
  "Centrale 4.jpeg",
  "20261001_152247.jpg",
  "20260917_153506.jpg",
  "20260917_153446.jpg",
  "IMG_20260817_125528_718.jpg",
  "20260804_181101.jpg",
  "IMG_4709.jpg",
  "GLZO2198.JPEG",
  "20261020_100656.jpg",
  "20261012_121421.jpg",
  "20261012_153508.jpg",
  "20261007_141545.jpg",
  "20260811_172842.jpg",
  "20260806_101716.jpg",
  "AAUT2148.JPG",
  "20260731_162329.jpg",
];

const galleryPriority = new Map(galleryOrder.map((name, index) => [name, index]));
const galleryPositions = {
  "IMG_20260817_125528_945.jpg": "50% 30%",
  "20260804_153631.jpg": "50% 30%",
  "IMG_20260817_125528_353.jpg": "50% 20%",
  "20260805_151435.jpg": "50% 65%",
};

export async function getGalleryImages() {
  const sourceDirectory = path.join(process.cwd(), "public/images/gallery");
  const optimizedDirectory = path.join(process.cwd(), "public/images/gallery-web");
  const files = await readdir(sourceDirectory, { withFileTypes: true });
  const optimizedFiles = new Set(await readdir(optimizedDirectory).catch(() => []));

  return files
    .filter((file) => file.isFile() && /\.(jpe?g|png|webp|avif)$/i.test(file.name))
    .sort((a, b) => {
      const priorityA = galleryPriority.get(a.name) ?? Number.MAX_SAFE_INTEGER;
      const priorityB = galleryPriority.get(b.name) ?? Number.MAX_SAFE_INTEGER;
      return priorityA - priorityB || a.name.localeCompare(b.name, "en", { numeric: true });
    })
    .map((file, index) => {
      const optimizedName = `${file.name}.webp`;
      const src = optimizedFiles.has(optimizedName)
        ? `/images/gallery-web/${encodeURIComponent(optimizedName)}`
        : `/images/gallery/${encodeURIComponent(file.name)}`;

      return {
        src,
        alt: `Fazis elektros darbų ir darbo aplinkos nuotrauka ${index + 1}`,
        title: `Galerijos nuotrauka ${index + 1}`,
        position: galleryPositions[file.name],
      };
    });
}
