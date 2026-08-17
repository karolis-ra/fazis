"use client";

import { useEffect, useRef, useState } from "react";
import { ClipboardCheck, ShieldCheck, Sparkles } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Saugumas pirmoje vietoje",
    text: "Elektros darbai turi būti atliekami taip, kad sprendimas būtų patikimas ne tik šiandien, bet ir ateityje.",
  },
  {
    icon: ClipboardCheck,
    title: "Aiškus susitarimas",
    text: "Prieš darbą aptariama apimtis, prioritetai ir orientacinė kaina, kad klientui nekiltų nemalonių staigmenų.",
  },
  {
    icon: Sparkles,
    title: "Tvarkingas rezultatas",
    text: "Ne tik sujungiame, kad veiktų, bet ir rūpinamės estetiniu vaizdu bei tvarka darbo vietoje.",
  },
];

export default function AnimatedValueCards() {
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
      { threshold: 0.22 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="mt-12 grid gap-5 md:grid-cols-3">
      {values.map(({ icon: Icon, title, text }, index) => (
        <article
          key={title}
          className={`relative overflow-hidden rounded-lg bg-[#343b46] p-6 ring-1 ring-white/10 transition-all duration-700 ease-out ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: visible ? `${index * 130}ms` : "0ms" }}
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-[#f5b301]" />
          <Icon className="pointer-events-none absolute -right-7 -top-8 h-36 w-36 text-white/[0.035]" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 rounded-tl-full bg-[#f5b301]/8" />

          <div className="relative z-10 mb-6 flex items-center justify-between">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-[#111312] text-[#ffd166] ring-1 ring-white/10">
              <Icon className="h-6 w-6" />
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
  );
}
