import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Wrapper } from "./Wrapper";

export const Footer = () => {
  return (
    <footer className="bg-[#111312] text-white">
      <Wrapper className="py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr] md:items-start">
          <div>
            <h3 className="font-logo text-3xl font-bold">
              fazis<span className="text-[#f5b301]">.</span>
            </h3>
          </div>

          <nav className="flex flex-col gap-3 text-white/78">
            <Link href="/services" className="hover:text-white">
              Paslaugos
            </Link>
            <Link href="/aboutus" className="hover:text-white">
              Apie mus
            </Link>
            <Link href="/galerija" className="hover:text-white">
              Galerija
            </Link>
            <Link href="/blogas" className="hover:text-white">
              Blogas
            </Link>
            <Link href="/contacts" className="hover:text-white">
              Kontaktai
            </Link>
          </nav>

          <div className="space-y-3 text-white/78">
            <a
              href="mailto:info@fazis.lt"
              className="flex items-center gap-2 hover:text-white"
            >
              <Mail className="h-4 w-4 text-[#ffd166]" />
              <span>info@fazis.lt</span>
            </a>
            <a
              href="tel:+37062794262"
              className="flex items-center gap-2 hover:text-white"
            >
              <Phone className="h-4 w-4 text-[#ffd166]" />
              <span>+370 627 94262</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#ffd166]" />
              <span>Vilnius ir aplinkiniai rajonai</span>
            </div>
          </div>
        </div>
      </Wrapper>

      <div className="border-t border-white/10 py-6 text-center text-sm text-white/55">
        © {new Date().getFullYear()} Fazis. Visos teisės saugomos.
      </div>
    </footer>
  );
};
