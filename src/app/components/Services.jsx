"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cable, Check, ShieldCheck, Wrench } from "lucide-react";
import Reveal from "./Reveal";
import { Wrapper } from "./Wrapper";

const services = [
  { id: "installation", icon: Cable, label: "Montavimo darbai", image: "/images/redesign/installation.jpg", alt: "Elektros instaliacijos montavimo darbų teminė nuotrauka", title: "Nuo pirmojo kabelio iki tvarkingo skydo.", text: "Elektros instaliacija naujiems namams ar atnaujinamai erdvei. Darbus planuojame pagal patalpų poreikius ir numatytą įrangą.", items: ["Kabelių išvedžiojimas ir naujų linijų įrengimas", "Instaliacinių dėžučių ir elektros taškų montavimas", "Elektros skydo surinkimas ir pajungimas", "Apšvietimo bei kištukinių lizdų paruošimas"] },
  { id: "security", icon: ShieldCheck, label: "Apsaugos sistemos", image: "/images/redesign/security.jpg", alt: "Apsaugos kameros ir namų saugumo teminė nuotrauka", title: "Daugiau ramybės Jūsų namuose.", text: "Apgalvoti apsaugos sprendimai namams ir kitoms patalpoms. Aptariame įrangą, jos vietas ir tai, kaip sistema bus naudojama kasdien.", items: ["Priešgaisrinių daviklių montavimas", "Judesio ir buvimo daviklių įrengimas", "Signalizacijos valdymo pulto pajungimas", "Sistemos veikimo patikrinimas ir paaiškinimas"] },
  { id: "small", icon: Wrench, label: "Smulkūs darbai", image: "/images/redesign/lighting.jpg", alt: "Namų šviestuvų ir apšvietimo teminė nuotrauka", title: "Maži darbai. Jaukesnė kasdienybė.", text: "Kai reikia pakeisti, pajungti ar išsiaiškinti, kodėl neveikia. Skiriame dėmesį ir nedidelėms užduotims, kurios svarbios Jūsų namų patogumui.", items: ["Šviestuvų keitimas ir LED apšvietimo pajungimas", "Elektros gedimų paieška ir diagnostika", "Kaitlentės bei kitos įrangos pajungimas", "Kištukinių lizdų ir jungiklių keitimas"] },
];

export const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef([]);
  const active = services[activeIndex];
  const ActiveIcon = active.icon;
  function onTabKeyDown(event, index) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % services.length;
    else if (event.key === "ArrowLeft") next = (index + services.length - 1) % services.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = services.length - 1;
    else return;
    event.preventDefault(); setActiveIndex(next); tabRefs.current[next]?.focus();
  }
  return <section id="paslaugos" className="section-space services-section"><Wrapper>
    <Reveal className="section-head"><div><p className="section-kicker">Namams ir verslui</p><h2 className="section-heading">Paslaugos</h2></div><p className="section-copy">Vienas kontaktas skirtingiems elektros darbams. Pasirinkite, ko reikia Jūsų erdvei.</p></Reveal>
    <div className="service-tabs" role="tablist" aria-label="Paslaugų kategorijos">{services.map(({ id, icon: Icon, label }, index) => <button key={id} ref={(element) => { tabRefs.current[index] = element; }} type="button" role="tab" id={`tab-${id}`} aria-selected={index === activeIndex} aria-controls="service-panel" tabIndex={index === activeIndex ? 0 : -1} className="service-tab" onClick={() => setActiveIndex(index)} onKeyDown={(event) => onTabKeyDown(event, index)}><Icon /><span>{label}</span></button>)}</div>
    <div key={active.id} id="service-panel" role="tabpanel" aria-labelledby={`tab-${active.id}`} tabIndex={0} className="services-panel"><div className="services-photo"><Image src={active.image} alt={active.alt} fill sizes="(min-width: 768px) 50vw, 100vw" /><div className="services-photo-label"><ActiveIcon size={18} />{active.label}</div></div><div className="services-copy"><p className="services-number">0{activeIndex + 1} / {active.label}</p><h3 className="services-title">{active.title}</h3><p className="section-copy">{active.text}</p><ul className="service-list">{active.items.map((item) => <li key={item}><Check /><span>{item}</span></li>)}</ul><Link href="/services" className="text-link">Įvertinti darbų kainą <ArrowRight size={18} /></Link></div></div>
  </Wrapper></section>;
};
