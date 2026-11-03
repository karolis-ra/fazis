import { ClipboardCheck, ShieldCheck, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

const values = [
  { icon: ShieldCheck, title: "Saugumas pirmoje vietoje", text: "Elektros darbai turi būti atliekami taip, kad sprendimas būtų patikimas ne tik šiandien, bet ir ateityje." },
  { icon: ClipboardCheck, title: "Aiškus susitarimas", text: "Prieš darbą aptariame apimtį, prioritetus ir orientacinę kainą, kad žinotumėte, ko tikėtis." },
  { icon: Sparkles, title: "Tvarkingas rezultatas", text: "Rūpinamės ne tik tuo, kad veiktų. Svarbi ir tvarka darbo vietoje, ir estetinis rezultatas." },
];

export default function AnimatedValueCards() {
  return <div className="values-grid">{values.map(({ icon: Icon, title, text }, index) => <Reveal key={title} delay={index * 80}><article className="value-card h-full"><span className="value-number">0{index + 1}</span><div className="value-icon"><Icon size={24} /></div><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div>;
}
