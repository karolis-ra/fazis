import { ClipboardList, MessageCircle, ShieldCheck, Wrench } from "lucide-react";
import Reveal from "./Reveal";
import { Wrapper } from "./Wrapper";

const steps = [
  { icon: MessageCircle, title: "Susisiekiate", text: "Papasakojate, ko reikia. Galite paskambinti arba atsiųsti žinutę ir nuotraukų." },
  { icon: ClipboardList, title: "Aptariame", text: "Įvertiname darbų apimtį, susitariame dėl sprendimo, laiko ir orientacinės kainos." },
  { icon: Wrench, title: "Atliekame", text: "Dirbame pagal sutartą planą, dėmesį skirdami tikslumui ir tvarkai." },
  { icon: ShieldCheck, title: "Patikriname", text: "Patikriname rezultatą ir paaiškiname, kas atlikta bei ką svarbu žinoti." },
];
export default function WorkProcess() {
  return <section className="section-space process-section"><Wrapper><Reveal className="section-head"><div><p className="section-kicker">Nuo pokalbio iki rezultato</p><h2 className="section-heading">Darbo eiga</h2></div></Reveal><div className="process-grid">{steps.map(({ icon: Icon, title, text }, index) => <Reveal key={title} className="process-step" delay={index * 80}><div className="process-top"><div className="process-icon"><Icon size={23} /></div><span className="process-number">0{index + 1}</span></div><h3>{title}</h3><p>{text}</p></Reveal>)}</div></Wrapper></section>;
}
