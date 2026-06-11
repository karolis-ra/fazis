import {
  Cable,
  Gauge,
  LampCeiling,
  Lightbulb,
  PlugZap,
  ShieldCheck,
} from "lucide-react";
import { Wrapper } from "./Wrapper";

const services = [
  {
    icon: Gauge,
    title: "Gedimų diagnostika",
    text: "Patikrinu, kodėl dingsta elektra, kaista kontaktai, išmuša automatai ar neveikia konkretūs taškai.",
  },
  {
    icon: Lightbulb,
    title: "Apšvietimas",
    text: "Montuoju ir pajungiu šviestuvus, LED juostas, lauko apšvietimą ir apšvietimo valdymą.",
  },
  {
    icon: PlugZap,
    title: "Rozetės ir jungikliai",
    text: "Keičiu, perkeliu ir įrengiu naujus elektros taškus pagal patalpų poreikius.",
  },
  {
    icon: Cable,
    title: "Instaliacija",
    text: "Atlieku kabelių tiesimo, naujų linijų ir remonto metu reikalingus elektros paruošimo darbus.",
  },
  {
    icon: ShieldCheck,
    title: "Saugos sprendimai",
    text: "Padedu sutvarkyti apsaugas, automatinius jungiklius ir rizikingas elektros vietas.",
  },
  {
    icon: LampCeiling,
    title: "Smulkūs darbai",
    text: "Kai reikia greitai ir tvarkingai išspręsti kasdienį elektros klausimą namuose ar biure.",
  },
];

export const Services = () => {
  return (
    <section className="bg-[#f8faf7] py-20">
      <Wrapper>
        <div className="max-w-3xl">
          <p className="section-kicker">Paslaugos</p>
          <h2 className="mt-3 text-4xl font-bold text-[#111312] md:text-5xl">
            Elektros darbai, kuriems svarbi tvarka ir saugumas
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#47606a]">
            Dirbu su aiškiu procesu: įvertinu situaciją, paaiškinu sprendimą ir
            prieš pradėdamas suderinu darbų apimtį.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-lg bg-white p-6 ring-1 ring-[#111312]/10 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-[#111312] text-[#ffd166]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#111312]">{title}</h3>
              <p className="mt-3 leading-7 text-[#47606a]">{text}</p>
            </article>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};
