"use client";

import { useMemo, useState } from "react";
import {
  Calculator,
  CheckCircle2,
  Home,
  ListChecks,
  Minus,
  Plus,
  Ruler,
  Search,
  Zap,
} from "lucide-react";

const formatter = new Intl.NumberFormat("lt-LT", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const unitFormatter = new Intl.NumberFormat("lt-LT", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2,
});

const LABOR_MARKUP = 1.25;

const rawWorkItems = [
  ["breakerRcd", "Automatinio jungiklio, nuotėkio relės montavimas", "vnt.", 6],
  ["oldFuseBreaker", "Automatinių jungiklių montavimas vietoje seno tipo saugiklių", "vnt.", 24],
  ["panelInstall", "Automatų skydelio montavimas", "vnt.", 36],
  ["concreteChase", "Betoninės sienos štrobavimas laidui montuoti", "m", 1.8],
  ["braLight", "Bra šviestuvų montažas", "vnt.", 12],
  ["smallBox", "Dėžučių montavimas", "vnt.", 1.2],
  ["doorbell", "Durų skambučio montavimas", "vnt.", 12],
  ["heatedFloor", "Elektra šildomų grindų pajungimas su kabelio kilimėlio įrengimu", "m²", 12],
  ["hob", "Elektrinės viryklės, kaitlentės pajungimas", "vnt.", 18],
  ["installation", "Elektros instaliacijos įrengimas, montavimas", "vnt.", 18],
  ["panelMove", "Elektros paskirstymo skydelio perkėlimas arba apjungimas", "vnt.", 120],
  ["halogenNoTransformer", "Halogeninio šviestuvo montavimas ir pajungimas be transformatoriaus", "vnt.", 3.6],
  ["hoodConnect", "Gartraukio pajungimas", "vnt.", 12],
  ["hoodInstall", "Gartraukio sumontavimas", "vnt.", 24],
  ["drywallChase", "Gipskartonio sienos išpjovimas laidui montuoti", "m", 1.2],
  ["ledLight", "Halogeninio, LED apšvietimo įrengimas, montavimas", "vnt.", 9],
  ["sealedSocket", "Hermetinių kištukinių lizdų, jungiklių montavimas", "vnt.", 5.4],
  ["installBox", "Instaliacinės dėžutės montavimas", "vnt.", 3.6],
  ["cableLay", "Instaliacinio kabelio klojimas", "m", 0.6],
  ["ductConcrete", "Instaliacinio kanalo montavimas ant betoninės sienos", "m", 3.6],
  ["ductDrywall", "Instaliacinio kanalo montavimas ant gipskartonio", "m", 2.4],
  ["ductBrick", "Instaliacinio kanalo montavimas ant mūrinės sienos", "m", 2.4],
  ["recessedLight", "Įleidžiamų šviestuvų montavimas", "vnt.", 8.4],
  ["stabilizer", "Įtampos stabilizatoriaus montavimas ir pajungimas 230V", "vnt.", 24],
  ["sensor", "Judesio, šviesos daviklio montavimas", "vnt.", 12],
  ["wallDrill", "Kapitalinių sienų arba perdangų gręžimas", "vnt.", 6],
  ["communicationBox", "Komunikacijų dėžutės montavimas", "vnt.", 24],
  ["cableRemove", "Laido arba kabelio demontavimas", "m", 1.2],
  ["wireJoin", "Laidų sujungimas dėžutėje", "sujung.", 2.4],
  ["wireConcrete", "Laidų tiesimas ant betoninės sienos", "m", 1.2],
  ["wireBrick", "Laidų tiesimas ant mūrinės sienos", "m", 1.2],
  ["wireTube", "Laidų tiesimas elektrotechniniuose vamzdžiuose", "m", 2.4],
  ["wireDrywall", "Laidų tiesimas gipskartonyje", "m", 1.2],
  ["wireCorrugated", "Laidų tiesimas gofrotuose vamzdžiuose", "m", 1.2],
  ["wireChannels", "Laidų tiesimas paruoštuose kanaluose", "m", 1.2],
  ["ceilingLight", "Lubinio šviestuvo montavimas ir pajungimas", "vnt.", 9.6],
  ["ledStrip", "LED juostos montavimas", "m", 6],
  ["brickChase", "Mūrinės sienos štrobavimas laidui montuoti", "m", 1.2],
  ["newPoint", "Naujų taškų instaliacijos atvedimas", "vnt.", 6],
  ["pendantLight", "Pakabinamų šviestuvų montavimas", "vnt.", 12],
  ["junctionConcrete", "Paskirstymo dėžutės montavimas betoninėje sienoje", "vnt.", 6],
  ["junctionDrywall", "Paskirstymo dėžutės montavimas gipskartonio sienoje", "vnt.", 3.6],
  ["junctionBrick", "Paskirstymo dėžutės montavimas mūrinėje sienoje", "vnt.", 4.8],
  ["junctionRepair", "Paskirstymo dėžutės remontas", "vnt.", 5.4],
  ["distributionPanel", "Paskirstymo skydo apjungimas", "vnt.", 120],
  ["hiddenSocket", "Potinkiniai kištukiniai lizdai, jungiklio montavimas su pajungimu", "vnt.", 4.8],
  ["hiddenPanel12", "Potinkinio skydelio iki 12 grupių montavimas", "vnt.", 48],
  ["socketRemove", "Kištukinio lizdo, jungiklio demontavimas", "vnt.", 2.4],
  ["wallLight", "Sieninio šviestuvo montavimas ir pajungimas", "vnt.", 6],
  ["lowVoltageRemove", "Silpnasrovio laido demontavimas", "m", 1.2],
  ["halogenHoleDrywallCeiling", "Skylės halogeniniam šviestuvui išpjovimas gipskartonio lubose", "vnt.", 3.6],
  ["halogenHoleSuspended", "Skylės halogeniniam šviestuvui išpjovimas pakabinamose lubose", "vnt.", 3.6],
  ["boxHoleConcrete", "Skylės instaliacinei dėžutei išpjovimas betoninėje sienoje", "vnt.", 4.8],
  ["boxHoleDrywall", "Skylės instaliacinei dėžutei išpjovimas gipskartonio sienoje", "vnt.", 2.4],
  ["boxHoleBrick", "Skylės instaliacinei dėžutei išpjovimas mūrinėje sienoje", "vnt.", 3.6],
  ["smallHole", "Skylių gręžimas sienoje iki 25 mm diametru", "vnt.", 4.8],
  ["assembledLight", "Surenkamų šviestuvų montavimas", "vnt.", 24],
  ["lightRemove", "Šviestuvo demontavimas", "vnt.", 2.4],
  ["armstrongLight", "Šviestuvo montavimas ir pajungimas Armstrong tipo lubose", "vnt.", 9.6],
  ["socketPatron", "Šviestuvų patronų keitimas", "vnt.", 4.2],
  ["intercom", "Telefonspynės montavimas", "vnt.", 36],
  ["transformer", "Transformatoriaus montavimas ir pajungimas", "vnt.", 18],
  ["threePhaseMeter", "Trifazio elektros energijos skaitiklio montavimas ir pajungimas", "vnt.", 18],
  ["threePhaseSocket", "Trijų fazių kištukinio lizdo montavimas", "vnt.", 4.2],
  ["chaseGeneral", "Vagų įrengimas, štrabavimas", "m", 2.4],
  ["cctv", "Vaizdo stebėjimo sistemos montavimas", "vnt.", 120],
  ["waterMeter", "Vandens skaitiklio montavimas", "vnt.", 14.4],
  ["waterHeaterInstall", "Vandens šildytuvo montavimas", "vnt.", 30],
  ["waterHeaterConnect", "Vandens šildytuvo pajungimas", "vnt.", 12],
  ["fan", "Ventiliatoriaus montavimas", "vnt.", 12],
  ["singlePhaseMeter", "Vienfazio elektros energijos skaitiklio montavimas ir pajungimas", "vnt.", 12],
  ["surfaceJunction", "Virštinkinės paskirstymo dėžutės montavimas", "vnt.", 4.8],
  ["surfaceSocket", "Virštinkiniai kištukiniai lizdai, jungiklio montavimas su pajungimu", "vnt.", 6],
  ["surfacePanel12", "Virštinkinio skydelio iki 12 grupių montavimas", "vnt.", 12],
];

const workItems = rawWorkItems.map(([id, title, unit, sourcePrice]) => ({
  id,
  title,
  unit,
  sourcePrice,
  price: Math.max(1, Math.round(sourcePrice * LABOR_MARKUP * 2) / 2),
}));

const densityOptions = [
  { id: "basic", label: "Ekonomiškas", pointsPerSqm: 0.85, pricePerSqm: 38 },
  { id: "standard", label: "Standartinis", pointsPerSqm: 1.05, pricePerSqm: 46 },
  { id: "comfort", label: "Patogus", pointsPerSqm: 1.25, pricePerSqm: 56 },
];

function clampNumber(value, min = 0, max = 9999) {
  const parsed = Number(value);
  if (Number.isNaN(parsed)) return min;
  return Math.min(max, Math.max(min, parsed));
}

function getRange(total) {
  return {
    low: Math.round(total * 0.95),
    high: Math.round(total * 1.12),
  };
}

function getMaterialRange(mode, { total, pointCount, area }) {
  if (mode === "points") {
    return {
      low: Math.round(pointCount * 8),
      high: Math.round(pointCount * 35),
    };
  }

  if (mode === "area") {
    return {
      low: Math.round(area * 10),
      high: Math.round(area * 45),
    };
  }

  return {
    low: Math.round(total * 0.25),
    high: Math.round(total * 1.1),
  };
}

function Summary({ total, materialRange, note, details }) {
  const range = getRange(total);

  return (
    <aside className="rounded-lg bg-[#111312] p-6 text-white md:p-7">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-[#f5b301] text-[#111312]">
          <Calculator className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#ffd166]">
            Preliminari darbų suma
          </p>
          <p className="text-sm text-white/60">
            be PVM, galutinis įvertinimas vietoje
          </p>
        </div>
      </div>

      <div className="mt-6">
        <div className="text-4xl font-bold md:text-5xl">
          {formatter.format(range.low)}
        </div>
        <div className="mt-1 text-xl font-semibold text-white/74">
          iki {formatter.format(range.high)}
        </div>
      </div>

      <div className="mt-6 rounded-md bg-white/8 p-4">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#ffd166]">
          Medžiagos preliminariai
        </p>
        <p className="mt-2 text-2xl font-bold">
          {formatter.format(materialRange.low)} - {formatter.format(materialRange.high)}
        </p>
        <p className="mt-2 text-sm leading-6 text-white/62">
          Intervalas priklauso nuo kabelių ilgio, automatų, rozečių, jungiklių,
          skydelio, gamintojų ir pasirinktų sprendimų.
        </p>
      </div>

      <div className="mt-6 space-y-3 text-sm text-white/72">
        {details.map((item) => (
          <div key={item} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#ffd166]" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <p className="mt-6 rounded-md bg-white/8 p-4 text-sm leading-6 text-white/70">
        {note}
      </p>
    </aside>
  );
}

export default function ServiceCalculator() {
  const [mode, setMode] = useState("works");
  const [query, setQuery] = useState("");
  const [quantities, setQuantities] = useState(() =>
    Object.fromEntries(workItems.map((item) => [item.id, 0]))
  );
  const [pointCount, setPointCount] = useState(60);
  const [pointPrice, setPointPrice] = useState(42);
  const [area, setArea] = useState(80);
  const [density, setDensity] = useState("standard");

  const selectedDensity =
    densityOptions.find((item) => item.id === density) || densityOptions[1];

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return workItems;
    return workItems.filter((item) =>
      item.title.toLowerCase().includes(normalizedQuery)
    );
  }, [query]);

  const totals = useMemo(() => {
    const detailedTotal = workItems.reduce(
      (sum, item) => sum + clampNumber(quantities[item.id]) * item.price,
      0
    );
    const pointTotal = clampNumber(pointCount) * clampNumber(pointPrice, 1, 200);
    const areaTotal = clampNumber(area) * selectedDensity.pricePerSqm;

    return {
      works: detailedTotal,
      points: pointTotal,
      area: areaTotal,
      estimatedPoints: Math.round(clampNumber(area) * selectedDensity.pointsPerSqm),
    };
  }, [area, pointCount, pointPrice, quantities, selectedDensity]);

  const total = totals[mode];
  const materialRange = getMaterialRange(mode, {
    total,
    pointCount: clampNumber(pointCount),
    area: clampNumber(area),
  });

  const modes = [
    { id: "works", label: "Pagal darbus", icon: ListChecks },
    { id: "points", label: "Pagal elektros taškus", icon: Zap },
    { id: "area", label: "Pagal kvadratūrą", icon: Ruler },
  ];

  return (
    <section className="rounded-lg bg-white p-5 shadow-[0_18px_45px_-30px_rgba(17,19,18,0.7)] ring-1 ring-[#111312]/10 md:p-8">
      <div>
        <p className="section-kicker">Kainos skaičiuoklė</p>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-[#47606a]">
          Skaičiuoklė skirta greitam orientaciniam kainos įvertinimui. 
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="grid gap-2 rounded-lg bg-[#f8faf7] p-2 sm:grid-cols-3">
            {modes.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => setMode(id)}
                className={`inline-flex items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-bold transition-colors ${
                  mode === id
                    ? "bg-[#111312] text-white"
                    : "text-[#2d3835] hover:bg-white"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </div>

          {mode === "works" && (
            <div className="mt-6">
              <label className="relative block">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#8a6a28]" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="w-full rounded-full border border-[#111312]/12 py-3 pl-12 pr-4 outline-none focus:border-[#f5b301] focus:ring-2 focus:ring-[#f5b301]/20"
                  placeholder="Ieškoti darbo: kištukinis lizdas, šviestuvas, skydelis..."
                />
              </label>

              <div className="mt-5 overflow-hidden rounded-lg border border-[#111312]/10">
                <div className="hidden grid-cols-[1fr_92px_110px_148px] gap-3 bg-[#111312] px-4 py-3 text-sm font-bold text-white md:grid">
                  <span>Darbas</span>
                  <span>Vnt.</span>
                  <span>Kaina</span>
                  <span className="text-center">Kiekis</span>
                </div>
                <div className="max-h-[720px] overflow-y-auto">
                  {filteredItems.map((item) => (
                    <div
                      key={item.id}
                      className="grid gap-4 border-b border-[#111312]/8 p-4 last:border-b-0 md:grid-cols-[1fr_92px_110px_148px] md:items-center"
                    >
                      <div>
                        <h3 className="font-bold text-[#111312]">{item.title}</h3>
                        <p className="mt-1 text-sm text-[#47606a] md:hidden">
                          {item.unit} · {unitFormatter.format(item.price)} / {item.unit}
                        </p>
                      </div>
                      <div className="hidden text-sm text-[#47606a] md:block">
                        {item.unit}
                      </div>
                      <div className="hidden text-sm font-semibold text-[#8a6a28] md:block">
                        {unitFormatter.format(item.price)}
                      </div>
                      <div className="flex items-center justify-between rounded-full border border-[#111312]/12 px-2 py-1">
                        <button
                          type="button"
                          onClick={() =>
                            setQuantities((current) => ({
                              ...current,
                              [item.id]: Math.max(
                                0,
                                clampNumber(current[item.id]) - 1
                              ),
                            }))
                          }
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-[#f5b301]/20"
                          aria-label={`Sumažinti ${item.title}`}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <input
                          value={quantities[item.id]}
                          onChange={(event) =>
                            setQuantities((current) => ({
                              ...current,
                              [item.id]: clampNumber(event.target.value),
                            }))
                          }
                          className="w-16 bg-transparent text-center font-bold outline-none"
                          inputMode="numeric"
                          aria-label={item.title}
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setQuantities((current) => ({
                              ...current,
                              [item.id]: clampNumber(current[item.id]) + 1,
                            }))
                          }
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-[#f5b301]/20"
                          aria-label={`Padidinti ${item.title}`}
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {mode === "points" && (
            <div className="mt-6 grid gap-5">
              <div className="rounded-lg border border-[#111312]/10 p-5">
                <label className="font-bold text-[#111312]">
                  Elektros taškų skaičius
                </label>
                <input
                  type="range"
                  min="5"
                  max="180"
                  value={pointCount}
                  onChange={(event) => setPointCount(clampNumber(event.target.value))}
                  className="mt-5 w-full accent-[#f5b301]"
                />
                <div className="mt-3 flex items-center gap-3">
                  <input
                    value={pointCount}
                    onChange={(event) => setPointCount(clampNumber(event.target.value))}
                    className="w-28 rounded-md border border-[#111312]/15 px-4 py-3 text-center text-xl font-bold outline-none focus:border-[#f5b301]"
                    inputMode="numeric"
                  />
                  <span className="text-[#47606a]">taškai</span>
                </div>
              </div>

              <div className="rounded-lg border border-[#111312]/10 p-5">
                <label className="font-bold text-[#111312]">
                  Kaina už tašką
                </label>
                <p className="mt-2 text-sm leading-6 text-[#47606a]">
                  Palikta kiek aukščiau rinkos vidurkio, kad skaičiuoklė
                  nerodytų per optimistinės sumos.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <input
                    value={pointPrice}
                    onChange={(event) =>
                      setPointPrice(clampNumber(event.target.value, 1, 200))
                    }
                    className="w-28 rounded-md border border-[#111312]/15 px-4 py-3 text-center text-xl font-bold outline-none focus:border-[#f5b301]"
                    inputMode="numeric"
                  />
                  <span className="text-[#47606a]">€/tašką</span>
                </div>
              </div>
            </div>
          )}

          {mode === "area" && (
            <div className="mt-6 grid gap-5">
              <div className="rounded-lg border border-[#111312]/10 p-5">
                <label className="font-bold text-[#111312]">
                  Namo arba buto kvadratūra
                </label>
                <input
                  type="range"
                  min="20"
                  max="250"
                  value={area}
                  onChange={(event) => setArea(clampNumber(event.target.value))}
                  className="mt-5 w-full accent-[#f5b301]"
                />
                <div className="mt-3 flex items-center gap-3">
                  <input
                    value={area}
                    onChange={(event) => setArea(clampNumber(event.target.value))}
                    className="w-28 rounded-md border border-[#111312]/15 px-4 py-3 text-center text-xl font-bold outline-none focus:border-[#f5b301]"
                    inputMode="numeric"
                  />
                  <span className="text-[#47606a]">m²</span>
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {densityOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setDensity(option.id)}
                    className={`rounded-lg border p-4 text-left transition-colors ${
                      density === option.id
                        ? "border-[#111312] bg-[#111312] text-white"
                        : "border-[#111312]/10 bg-white text-[#111312] hover:border-[#f5b301]"
                    }`}
                  >
                    <Home className="h-5 w-5" />
                    <h3 className="mt-3 font-bold">{option.label}</h3>
                    <p className="mt-1 text-sm opacity-75">
                      apie {option.pointsPerSqm} taško / m²
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <Summary
          total={total}
          materialRange={materialRange}
          details={[
            mode === "works"
              ? "Skaičiuojama pagal pasirinktų darbų kiekius"
              : mode === "points"
                ? `${pointCount} taškų × ${formatter.format(pointPrice)}`
                : `${area} m², apie ${totals.estimatedPoints} elektros taškai`,
            "Į darbų kainą neįtraukti nestandartiniai griovimo ar apdailos darbai",
            "Medžiagų suma rodoma atskirai kaip preliminarus intervalas",
          ]}
          note="Tiksliai kainai reikia plano, nuotraukų arba objekto apžiūros. Skaičiuoklė padeda greitai suprasti biudžeto dydį prieš skambutį."
        />
      </div>
    </section>
  );
}
