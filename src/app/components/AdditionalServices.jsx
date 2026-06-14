import {
  Cable,
  CircuitBoard,
  Flashlight,
  LampDesk,
  Plug,
  ShieldAlert,
  TimerReset,
  Wrench,
} from "lucide-react";

const extras = [
  {
    icon: Flashlight,
    title: "Smulkūs gedimai",
    desc: "Neveikiantys šviestuvai, jungikliai, rozetės ar kiti kasdieniai elektros nesklandumai.",
  },
  {
    icon: Plug,
    title: "Rozetės ir jungikliai",
    desc: "Keitimas, perkėlimas, papildomų taškų įrengimas ir tvarkingas pajungimas.",
  },
  {
    icon: LampDesk,
    title: "Apšvietimo sprendimai",
    desc: "Vidaus ir lauko šviestuvų montavimas, LED juostos, zoninis apšvietimas.",
  },
  {
    icon: CircuitBoard,
    title: "Skydelio darbai",
    desc: "Automatų, saugiklių ir apsaugų tvarkymas pagal konkrečią situaciją.",
  },
  {
    icon: Cable,
    title: "Instaliacijos darbai",
    desc: "Nauji elektros taškai, kabelių tiesimas ir paruošimas remontui.",
  },
  {
    icon: ShieldAlert,
    title: "Saugumo patikra",
    desc: "Probleminių vietų įvertinimas, perkaitimo ar netvarkingo pajungimo rizikų aptarimas.",
  },
  {
    icon: TimerReset,
    title: "Skubūs atvejai",
    desc: "Kai reikia greitai suprasti problemą ir rasti saugų sprendimą.",
  },
  {
    icon: Wrench,
    title: "Konsultacijos",
    desc: "Padedu apsispręsti dėl apšvietimo, taškų išdėstymo ar darbų eiliškumo.",
  },
];

export const AdditionalServicesSection = () => {
  return (
    <section className="relative mt-16">
      <p className="section-kicker">Papildomi darbai</p>
      <h2 className="mt-3 max-w-2xl text-3xl font-bold text-[#111312] md:text-4xl">
        Kai reikia ne didelio projekto, o greitai išspręsti problemą
      </h2>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {extras.map(({ icon: Icon, title, desc }) => (
          <article
            key={title}
            className="rounded-lg bg-white p-5 ring-1 ring-[#111312]/10"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#f5b301]/18 text-[#8a5a00]">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-[#111312]">{title}</h3>
            <p className="mt-2 leading-6 text-[#47606a]">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
