"use client";

import { useEffect, useRef, useState } from "react";
import { ClipboardList, MessageCircle, ShieldCheck, Wrench } from "lucide-react";
import { Wrapper } from "./Wrapper";

const steps = [
  {
    icon: MessageCircle,
    title: "Susisiekiate",
    text: "Trumpai aprašote situaciją, atsiunčiate nuotraukų arba paskambinate.",
  },
  {
    icon: ClipboardList,
    title: "Įvertiname",
    text: "Aptariame galimą sprendimą, darbų apimtį, laiką ir orientacinę kainą.",
  },
  {
    icon: Wrench,
    title: "Atliekame",
    text: "Darbai atliekami saugiai, tvarkingai ir pagal sutartą planą.",
  },
  {
    icon: ShieldCheck,
    title: "Patikriname",
    text: "Po darbų patikrinamas rezultatas ir paaiškinama, kas buvo atlikta.",
  },
];

export default function WorkProcess() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.28 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#111312] py-20 text-white">
      <Wrapper>
        <h2 className="mx-auto max-w-3xl text-center text-4xl font-bold text-white md:text-5xl">
          Darbo eiga
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {steps.map(({ icon: Icon, title, text }, index) => (
            <article
              key={title}
              className={`relative overflow-hidden rounded-lg bg-white/7 p-6 ring-1 ring-white/10 transition-all duration-700 ease-out ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: visible ? `${index * 130}ms` : "0ms" }}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[#f5b301]" />
              <Icon className="pointer-events-none absolute -right-7 -top-8 h-32 w-32 text-white/[0.035]" />
              <div className="pointer-events-none absolute bottom-0 right-0 h-20 w-20 rounded-tl-full bg-[#f5b301]/8" />

              <div className="relative z-10 mb-6 flex items-center justify-between">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-[#f5b301] text-[#111312]">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-extrabold tracking-[0.14em] text-[#ffd166]">
                  0{index + 1}
                </span>
              </div>

              <h3 className="relative z-10 text-xl font-bold text-white">
                {title}
              </h3>
              <p className="relative z-10 mt-3 leading-7 text-white">{text}</p>
            </article>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
