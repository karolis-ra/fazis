"use client";

import Image from "next/image";
import { useState } from "react";
import {
  BellRing,
  Cable,
  CheckCircle2,
  Flame,
  Gauge,
  LampCeiling,
  Lightbulb,
  Plug,
  PlugZap,
  Radar,
  ShieldCheck,
  SlidersHorizontal,
  Wrench,
  Zap,
} from "lucide-react";
import { Wrapper } from "./Wrapper";

const serviceTabs = [
  {
    id: "montavimas",
    label: "Montavimo darbai",
    icon: Zap,
    title: "Montavimo darbai",
    description:
      "Paruošiame elektros montavimo darbus nuo kabelių išvedžiojimo iki elektros skydo surinkimo. Darbai planuojami taip, kad sistema būtų tvarkinga, aiški ir patogi ateities aptarnavimui.",
    image: "/images/dezutes.jpg",
    imageAlt: "Elektros montavimo darbai",
    items: [
      { icon: Cable, text: "Kabelių išvedžiojimas ir trasų paruošimas" },
      { icon: PlugZap, text: "Elektros taškų, rozečių ir jungiklių paruošimas" },
      { icon: SlidersHorizontal, text: "Elektros skydo surinkimas" },
      { icon: CheckCircle2, text: "Tvarkingas sužymėjimas ir darbų patikra" },
    ],
  },
  {
    id: "apsauga",
    label: "Apsaugos sistemos",
    icon: ShieldCheck,
    title: "Apsaugos sistemos",
    description:
      "Padedame paruošti ir pajungti bazinius saugos sprendimus namams ar komercinėms patalpoms. Dėmesys skiriamas aiškiam montavimui, patikimam pajungimui ir patogiam valdymui.",
    image: "/images/apsauga.jpg",
    imageAlt: "Apsaugos sistemų montavimas",
    items: [
      { icon: Flame, text: "Priešgaisrinių daviklių montavimas" },
      { icon: Radar, text: "Judesio ir buvimo daviklių įrengimas" },
      { icon: BellRing, text: "Signalizacijos elementų pajungimas" },
      { icon: SlidersHorizontal, text: "Valdymo pulto pajungimas" },
    ],
  },
  {
    id: "smulkus",
    label: "Smulkūs darbai",
    icon: Wrench,
    title: "Smulkūs darbai",
    description:
      "Atliekame kasdienius elektros darbus, kai reikia greito, tvarkingo ir aiškaus sprendimo. Tai patogus pasirinkimas smulkiems atnaujinimams, gedimams ar papildomiems pajungimams.",
    image: "/images/kistukinislizdas.jpg",
    imageAlt: "Smulkūs elektros darbai",
    items: [
      { icon: LampCeiling, text: "Šviestuvų keitimas ir montavimas" },
      { icon: Gauge, text: "Gedimų paieška ir diagnostika" },
      { icon: Plug, text: "Kaitlentės pajungimas" },
      { icon: Lightbulb, text: "LED apšvietimo pajungimas" },
      { icon: PlugZap, text: "Kištukinių lizdų keitimas" },
    ],
  },
];

export const Services = () => {
  const [activeTab, setActiveTab] = useState(serviceTabs[0].id);
  const activeService =
    serviceTabs.find((service) => service.id === activeTab) || serviceTabs[0];

  return (
    <section className="bg-[#3f4652] py-20 text-white">
      <Wrapper>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Paslaugos
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl overflow-hidden rounded-lg bg-white/8 ring-1 ring-white/10 md:grid-cols-3">
          {serviceTabs.map(({ id, label, icon: Icon }) => {
            const active = id === activeService.id;

            return (
              <button
                key={id}
                type="button"
                onClick={() => setActiveTab(id)}
                className={`relative flex min-h-20 items-center justify-center gap-3 px-5 py-4 text-center text-base font-bold transition-colors md:text-lg ${
                  active
                    ? "bg-[#f5b301] text-[#111312]"
                    : "text-white/86 hover:bg-white/8 hover:text-white"
                }`}
                aria-pressed={active}
              >
                <Icon className="h-6 w-6 shrink-0" />
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div className="overflow-hidden rounded-lg bg-[#111312] ring-1 ring-white/12">
            <div className="relative aspect-[4/3] min-h-[280px]">
              <Image
                src={activeService.image}
                alt={activeService.imageAlt}
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white md:text-4xl">
              {activeService.title}
            </h3>
            <p className="mt-4 max-w-2xl leading-8 text-white/72">
              {activeService.description}
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {activeService.items.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#f5b301] text-[#111312]">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-semibold leading-7 text-white/88">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
