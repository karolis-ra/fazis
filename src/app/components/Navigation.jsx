"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, Send, X } from "lucide-react";
import { Wrapper } from "./Wrapper";

const navLinks = [
  { name: "Pagrindinis", href: "/" }, { name: "Paslaugos", href: "/services" },
  { name: "Apie mus", href: "/aboutus" }, { name: "Galerija", href: "/galerija" },
  { name: "Blogas", href: "/blogas" }, { name: "Kontaktai", href: "/contacts" },
];

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [showCallbar, setShowCallbar] = useState(false);
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const isActive = (href) => href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
  useEffect(() => {
    const onScroll = () => setShowCallbar(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);
  return <>
    <header className="site-header"><Wrapper className="nav-inner">
      <Link href="/" className="brand" aria-label="Fazis, pagrindinis puslapis" onClick={() => setOpen(false)}>fazis<span className="brand-dot">.</span></Link>
      <nav className="desktop-nav" aria-label="Pagrindinė navigacija">{navLinks.map(({ name, href }) => <Link key={href} href={href} aria-current={isActive(href) ? "page" : undefined}>{name}</Link>)}</nav>
      <div className="nav-actions"><a href="tel:+37061621663" className="button-primary nav-call" aria-label="Skambinti +370 616 21663"><Phone size={17} /> Skambinti</a><button type="button" className="menu-button" aria-label={open ? "Uždaryti meniu" : "Atidaryti meniu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button></div>
    </Wrapper>{open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobilioji navigacija">{navLinks.map(({ name, href }) => <Link key={href} href={href} aria-current={isActive(href) ? "page" : undefined} onClick={() => setOpen(false)}>{name}</Link>)}</nav>}</header>
    {pathname !== "/contacts" && <div className="mobile-callbar" data-visible={showCallbar && !open}><a href="tel:+37061621663" className="button-primary"><Phone size={17} /> Skambinti</a><Link href="/contacts" className="button-secondary"><Send size={16} /> Parašyti</Link></div>}
  </>;
};
