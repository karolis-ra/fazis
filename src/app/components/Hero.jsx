import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#111312] text-white">
      <Image
        src="/images/fazis-hero.jpg"
        alt="Šviečianti elektros lemputė"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[72%_50%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,19,18,0.92)_0%,rgba(17,19,18,0.68)_42%,rgba(17,19,18,0.22)_100%)]" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-16 pt-28 md:px-12">
        <div className="max-w-3xl">
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.04] text-white md:text-7xl">
            Patikimi elektros darbai Jūsų namams
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
            Saugumas. Atsakomybė. Tvarka. Punktualumas.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contacts"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#f5b301] px-6 py-3 font-semibold leading-none text-[#111312] transition-colors hover:bg-[#ffd166]"
            >
              <span className="-translate-y-px">Gauti pasiūlymą</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+37062794262"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition-colors hover:bg-white/18"
            >
              <PhoneCall className="h-5 w-5" />
              +370 627 94262
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
