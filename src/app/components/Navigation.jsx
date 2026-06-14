"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, PhoneCall, X } from "lucide-react";

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navLinks = [
    { name: "Pagrindinis", href: "/" },
    { name: "Paslaugos", href: "/services" },
    { name: "Apie mus", href: "/aboutus" },
    { name: "Galerija", href: "/galerija" },
    { name: "Blogas", href: "/blogas" },
    { name: "Kontaktai", href: "/contacts" },
  ];

  const isActive = (href) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  return (
    <nav
      className={`top-0 z-50 w-full border-b border-white/10 backdrop-blur-xl transition-colors ${
        isHome
          ? "fixed bg-[#111312]/35 text-white"
          : "sticky bg-[#111312]/95 text-white shadow-[0_12px_30px_-20px_rgba(0,0,0,0.8)]"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <Link
          href="/"
          className="font-logo text-3xl font-bold tracking-tight text-white"
          onClick={() => setOpen(false)}
        >
          fazis<span className="text-[#f5b301]">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <div className="font-roboto flex gap-7 text-sm font-medium text-white/78 lg:text-base">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className="group relative cursor-pointer"
                >
                  <span
                    className={`transition-colors duration-200 ${
                      active ? "text-[#ffd166]" : "group-hover:text-white"
                    }`}
                  >
                    {link.name}
                  </span>
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] origin-left bg-[#f5b301] transition-all duration-300 ${
                      active
                        ? "w-full animate-underline-pulse underline-glow"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <a
            href="tel:+37062794262"
            aria-label="Skambinti +370 627 94262"
            className="group inline-flex items-center gap-2 rounded-full bg-[#f5b301] px-5 py-2.5 text-sm font-semibold text-[#111312] shadow-call-pulse transition-colors hover:bg-[#ffd166] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd166]/60"
          >
            Skambinti
            <PhoneCall className="h-4 w-4 animate-phone-ring" />
          </a>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white hover:bg-white/10 md:hidden"
          aria-label={open ? "Uždaryti meniu" : "Atidaryti meniu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-2 bg-[#111312]/98 px-6 py-4">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`rounded-md px-2 py-2 font-roboto text-base transition-colors ${
                  active
                    ? "bg-white/10 text-[#ffd166]"
                    : "text-white/82 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <a
            href="tel:+37062794262"
            aria-label="Skambinti +370 627 94262"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#f5b301] px-5 py-3 text-sm font-semibold text-[#111312] hover:bg-[#ffd166]"
          >
            <PhoneCall className="h-4 w-4" />
            Skambinti
          </a>
        </div>
      </div>
    </nav>
  );
};
