"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Pause, Play, X } from "lucide-react";

export default function GalleryViewer({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [autoPlay, setAutoPlay] = useState(true);
  const [inView, setInView] = useState(false);
  const sliderRef = useRef(null);
  const dialogRef = useRef(null);
  const touchStart = useRef(null);
  const hasManyImages = images.length > 1;
  const dotStart = Math.min(Math.max(activeIndex - 2, 0), Math.max(images.length - 5, 0));
  const activeImage = images[activeIndex];
  const lightboxOpen = lightboxIndex !== null;
  const lightboxImage = lightboxOpen ? images[lightboxIndex] : null;
  const move = (delta) => setActiveIndex((index) => (index + delta + images.length) % images.length);
  const moveLightbox = (delta) => setLightboxIndex((index) => (index + delta + images.length) % images.length);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setAutoPlay(false);
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.2 });
    if (sliderRef.current) observer.observe(sliderRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasManyImages || !autoPlay || !inView || lightboxOpen) return;
    const timer = setTimeout(() => setActiveIndex((index) => (index + 1) % images.length), 5500);
    return () => clearTimeout(timer);
  }, [activeIndex, autoPlay, inView, lightboxOpen, hasManyImages, images.length]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.querySelector("button")?.focus();
    const onKeyDown = (event) => {
      if (event.key === "Escape") setLightboxIndex(null);
      if (hasManyImages && (event.key === "ArrowLeft" || event.key === "ArrowRight")) {
        event.preventDefault();
        const delta = event.key === "ArrowLeft" ? -1 : 1;
        setLightboxIndex((index) => (index + delta + images.length) % images.length);
      }
      if (event.key === "Tab") {
        const controls = dialogRef.current?.querySelectorAll("button");
        const first = controls?.[0];
        const last = controls?.[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      previousFocus?.focus();
    };
  }, [lightboxOpen, hasManyImages, images.length]);

  function finishSwipe(event, isLightbox = false) {
    if (touchStart.current === null || !event.changedTouches[0]) return;
    const delta = touchStart.current - event.changedTouches[0].clientX;
    touchStart.current = null;
    if (Math.abs(delta) < 50 || !hasManyImages) return;
    if (isLightbox) moveLightbox(delta > 0 ? 1 : -1);
    else { setAutoPlay(false); move(delta > 0 ? 1 : -1); }
  }

  if (!activeImage) return null;

  return (
    <div className="w-full min-w-0">
      <div ref={sliderRef} className="overflow-hidden rounded-md border border-[#dde3e5] bg-white" role="region" aria-roledescription="karuselė" aria-label="Fazis nuotraukų galerija">
        <div className="relative aspect-[4/3] sm:aspect-[16/9]" style={{ touchAction: "pan-y" }} onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={(event) => finishSwipe(event)}>
          <Image key={activeImage.src} src={activeImage.src} alt={activeImage.alt} fill sizes="(min-width: 1280px) 1184px, 100vw" className="gallery-slide-image object-cover" priority={activeIndex === 0} />
          <button type="button" onClick={() => setLightboxIndex(activeIndex)} className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/50 bg-white/95 text-[#20282b]" aria-label="Padidinti nuotrauką" title="Padidinti nuotrauką"><Maximize2 size={20} /></button>
          {hasManyImages && <>
            <button type="button" onClick={() => { setAutoPlay(false); move(-1); }} className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md bg-white/95 text-[#20282b] md:left-5" aria-label="Ankstesnė nuotrauka" title="Ankstesnė nuotrauka"><ChevronLeft size={25} /></button>
            <button type="button" onClick={() => { setAutoPlay(false); move(1); }} className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md bg-white/95 text-[#20282b] md:right-5" aria-label="Kita nuotrauka" title="Kita nuotrauka"><ChevronRight size={25} /></button>
          </>}
        </div>
        <div className="flex min-h-16 items-center justify-between gap-4 px-4 py-2 md:px-6">
          <p className="text-sm text-[#59666d]" aria-live={autoPlay ? "off" : "polite"}>{activeIndex + 1} / {images.length}</p>
          {hasManyImages && <button type="button" onClick={() => setAutoPlay(!autoPlay)} className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#dde3e5]" aria-label={autoPlay ? "Sustabdyti skaidrių keitimą" : "Paleisti skaidrių keitimą"} title={autoPlay ? "Sustabdyti skaidrių keitimą" : "Paleisti skaidrių keitimą"}>{autoPlay ? <Pause size={18} /> : <Play size={18} />}</button>}
        </div>
      </div>
      {hasManyImages && <div className="gallery-dots">{images.slice(dotStart, dotStart + 5).map((image, offset) => {
        const index = dotStart + offset;
        return <button key={image.src} type="button" onClick={() => { setAutoPlay(false); setActiveIndex(index); }} aria-label={`Rodyti nuotrauką ${index + 1}`} aria-current={index === activeIndex ? "true" : undefined} />;
      })}</div>}
      <div className="gallery-mosaic" aria-label="Visos galerijos nuotraukos">
        {images.map((image, index) => <button key={image.src} type="button" onClick={() => setLightboxIndex(index)} className="gallery-mosaic-item" aria-label={`Padidinti: ${image.alt}`}><Image src={image.src} alt={image.alt} fill sizes="(min-width: 1280px) 700px, (min-width: 768px) 60vw, 100vw" className="object-cover" style={{ objectPosition: image.position || "center" }} /></button>)}
      </div>
      {lightboxImage && <div ref={dialogRef} className="fixed inset-0 z-[100] bg-[#151c21]/97 text-white" role="dialog" aria-modal="true" aria-label={lightboxImage.title} onClick={() => setLightboxIndex(null)}>
        <div className="absolute left-5 right-20 top-6 z-10 text-sm"><p className="text-white/65">{lightboxIndex + 1} / {images.length}</p></div>
        <button type="button" onClick={() => setLightboxIndex(null)} className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-md bg-white/10" aria-label="Uždaryti nuotrauką" title="Uždaryti nuotrauką"><X size={24} /></button>
        <div className="absolute inset-x-4 bottom-24 top-24 md:inset-x-20 md:bottom-12" style={{ touchAction: "pan-y" }} onClick={(event) => event.stopPropagation()} onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={(event) => finishSwipe(event, true)}><Image src={lightboxImage.src} alt={lightboxImage.alt} fill sizes="100vw" className="object-contain" /></div>
        {hasManyImages && <div className="absolute inset-x-4 bottom-5 z-20 flex justify-between md:inset-x-5 md:bottom-1/2">
          <button type="button" onClick={(event) => { event.stopPropagation(); moveLightbox(-1); }} className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-white/10" aria-label="Ankstesnė padidinta nuotrauka"><ChevronLeft size={28} /></button>
          <button type="button" onClick={(event) => { event.stopPropagation(); moveLightbox(1); }} className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-white/10" aria-label="Kita padidinta nuotrauka"><ChevronRight size={28} /></button>
        </div>}
      </div>}
    </div>
  );
}
