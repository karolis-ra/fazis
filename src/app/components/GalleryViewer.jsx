"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

export default function GalleryViewer({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const hasManyImages = images.length > 1;
  const activeImage = images[activeIndex];
  const lightboxImage =
    lightboxIndex === null ? null : images[lightboxIndex] || null;

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % images.length);
  };

  const showPreviousLightbox = () => {
    setLightboxIndex((index) => (index - 1 + images.length) % images.length);
  };

  const showNextLightbox = () => {
    setLightboxIndex((index) => (index + 1) % images.length);
  };

  useEffect(() => {
    if (!hasManyImages || lightboxIndex !== null) return;

    const interval = setInterval(showNext, 5000);
    return () => clearInterval(interval);
  }, [hasManyImages, lightboxIndex, images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowLeft") showPreviousLightbox();
      if (event.key === "ArrowRight") showNextLightbox();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex, images.length]);

  if (!activeImage) return null;

  return (
    <div className="w-full min-w-0 max-w-full overflow-x-hidden">
      <div className="w-full min-w-0 max-w-full overflow-hidden rounded-lg bg-[#111312] ring-1 ring-white/10">
        <div className="relative aspect-[16/9] min-h-[280px] w-full min-w-0 max-w-full md:min-h-[420px]">
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            sizes="(min-width: 1280px) 1152px, 100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,19,18,0.08)_0%,rgba(17,19,18,0.58)_100%)]" />

          <button
            type="button"
            onClick={() => setLightboxIndex(activeIndex)}
            className="absolute right-3 top-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#111312]/82 text-white shadow-lg backdrop-blur transition-colors hover:bg-[#111312] md:right-4 md:top-4 md:h-11 md:w-11"
            aria-label="Padidinti nuotrauką"
          >
            <Maximize2 className="h-5 w-5" />
          </button>

          {hasManyImages && (
            <>
              <button
                type="button"
                onClick={showPrevious}
                className="absolute left-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md bg-[#111312]/82 text-white shadow-lg backdrop-blur transition-colors hover:bg-[#111312] md:inline-flex"
                aria-label="Ankstesnė nuotrauka"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={showNext}
                className="absolute right-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md bg-[#111312]/82 text-white shadow-lg backdrop-blur transition-colors hover:bg-[#111312] md:inline-flex"
                aria-label="Kita nuotrauka"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between md:hidden">
                <button
                  type="button"
                  onClick={showPrevious}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-[#111312]/86 text-white shadow-lg backdrop-blur"
                  aria-label="Ankstesnė nuotrauka"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <div className="rounded-full bg-[#111312]/82 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur">
                  {activeIndex + 1} / {images.length}
                </div>
                <button
                  type="button"
                  onClick={showNext}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-[#111312]/86 text-white shadow-lg backdrop-blur"
                  aria-label="Kita nuotrauka"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </>
          )}

          <div className="absolute bottom-4 left-4 hidden rounded-full bg-[#111312]/78 px-4 py-2 text-sm font-semibold text-white backdrop-blur md:block">
            {activeIndex + 1} / {images.length}
          </div>
        </div>
      </div>

      {hasManyImages && (
        <div className="mt-5 w-full max-w-full overflow-hidden">
          <div className="mx-auto flex max-w-full flex-wrap justify-center gap-2 px-1">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex
                  ? "w-9 bg-[#f5b301]"
                  : "w-2.5 bg-white/24 hover:bg-white/45"
              }`}
              aria-label={`Rodyti nuotrauką ${index + 1}`}
            />
          ))}
          </div>
        </div>
      )}

      <div className="mt-12 grid w-full min-w-0 max-w-full gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setLightboxIndex(index)}
            className="group min-w-0 overflow-hidden rounded-lg bg-[#343b46] text-left ring-1 ring-white/10"
            aria-label="Padidinti nuotrauką"
          >
            <span className="relative block aspect-[4/3]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#111312]/76 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                <Maximize2 className="h-4 w-4" />
              </span>
            </span>
          </button>
        ))}
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] bg-[#111312]/94 p-4 backdrop-blur-sm md:p-8"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-md bg-white/10 text-white transition-colors hover:bg-white/18"
            aria-label="Uždaryti"
          >
            <X className="h-6 w-6" />
          </button>

          {hasManyImages && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPreviousLightbox();
                }}
                className="absolute left-4 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md bg-white/10 text-white transition-colors hover:bg-white/18"
                aria-label="Ankstesnė nuotrauka"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNextLightbox();
                }}
                className="absolute right-4 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md bg-white/10 text-white transition-colors hover:bg-white/18"
                aria-label="Kita nuotrauka"
              >
                <ChevronRight className="h-7 w-7" />
              </button>
            </>
          )}

          <div
            className="relative mx-auto flex h-full max-w-6xl items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
