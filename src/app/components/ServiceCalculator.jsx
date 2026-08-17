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

const POINT_PRICE = 30;

const workItems = [
  ["socket", "Kištukinio lizdo arba jungiklio keitimas", "vnt.", 15],
  ["light", "Šviestuvo montavimas ir pajungimas", "vnt.", 25],
  ["led", "LED juostos arba LED apšvietimo pajungimas", "m", 12],
  ["hob", "Kaitlentės pajungimas", "vnt.", 45],
  ["sensor", "Judesio arba šviesos daviklio montavimas", "vnt.", 35],
  ["box", "Instaliacinės dėžutės montavimas", "vnt.", 12],
  ["cable", "Kabelio tiesimas paruoštuose kanaluose", "m", 4],
  ["chase", "Sienos štrabavimas laidui", "m", 8],
  ["panel", "Elektros skydo surinkimas arba tvarkymas", "vnt.", 180],
  ["fault", "Gedimo paieška ir diagnostika", "val.", 35],
  ["fan", "Ventiliatoriaus montavimas", "vnt.", 35],
  ["doorbell", "Durų skambučio pajungimas", "vnt.", 30],
].map(([id, title, unit, price]) => ({ id, title, unit, price }));

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
    <aside className="rounded-lg bg-[#111312] p-6 text-white ring-1 ring-white/10 md:p-7">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-[#f5b301] text-[#111312]">
          <Calculator className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#ffd166]">
            Preliminari darbų suma
          </p>
          <p className="text-sm text-white">
            be PVM, galutinis įvertinimas vietoje
          </p>
        </div>
      </div>

      <div className="mt-6">
        <div className="text-4xl font-bold md:text-5xl">
          {formatter.format(range.low)}
        </div>
      </div>

      <div className="mt-6 rounded-md bg-white/8 p-4">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#ffd166]">
          Medžiagos preliminariai
        </p>
        <p className="mt-2 text-2xl font-bold">
          {formatter.format(materialRange.low)} -{" "}
          {formatter.format(materialRange.high)}
        </p>
        <p className="mt-2 text-sm leading-6 text-white">
          Intervalas priklauso nuo kabelių ilgio, automatų, kištukinių lizdų,
          jungiklių, skydelio, gamintojų ir pasirinktų sprendimų.
        </p>
      </div>

      <div className="mt-6 space-y-3 text-sm text-white">
        {details.map((item) => (
          <div key={item} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#ffd166]" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <p className="mt-6 rounded-md bg-[#f5b301]/12 p-4 text-sm font-bold leading-6 text-[#ffd166] ring-1 ring-[#f5b301]/20">
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
    const pointTotal = clampNumber(pointCount) * POINT_PRICE;
    const areaTotal = clampNumber(area) * selectedDensity.pricePerSqm;

    return {
      works: detailedTotal,
      points: pointTotal,
      area: areaTotal,
      estimatedPoints: Math.round(clampNumber(area) * selectedDensity.pointsPerSqm),
    };
  }, [area, pointCount, quantities, selectedDensity]);

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
    <section className="rounded-lg bg-[#343b46] p-5 ring-1 ring-white/10 md:p-8">
      <div>
        <p className="text-base font-extrabold uppercase tracking-[0.12em] text-[#ffd166]">
          Kainos skaičiuoklė
        </p>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-white">
          Skaičiuoklė skirta greitam orientaciniam kainos įvertinimui.
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="grid gap-2 rounded-lg bg-[#2f3641] p-2 sm:grid-cols-3">
            {modes.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => setMode(id)}
                className={`inline-flex items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-bold transition-colors ${
                  mode === id
                    ? "bg-[#f5b301] text-[#111312]"
                    : "text-white hover:bg-white/8"
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
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#ffd166]" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="w-full rounded-full border border-white/12 bg-[#2f3641] py-3 pl-12 pr-4 text-white outline-none placeholder:text-white/42 focus:border-[#f5b301] focus:ring-2 focus:ring-[#f5b301]/20"
                  placeholder="Ieškoti darbo: kištukinis lizdas, šviestuvas, skydelis..."
                />
              </label>

              <div className="mt-5 overflow-hidden rounded-lg border border-white/10">
                <div className="hidden grid-cols-[1fr_92px_110px_148px] gap-3 bg-[#111312] px-4 py-3 text-sm font-bold text-white md:grid">
                  <span>Darbas</span>
                  <span>Vnt.</span>
                  <span>Kaina</span>
                  <span className="text-center">Kiekis</span>
                </div>
                <div className="max-h-[620px] overflow-y-auto">
                  {filteredItems.map((item) => (
                    <div
                      key={item.id}
                      className="grid gap-4 border-b border-white/8 p-4 last:border-b-0 md:grid-cols-[1fr_92px_110px_148px] md:items-center"
                    >
                      <div>
                        <h3 className="font-bold text-white">{item.title}</h3>
                        <p className="mt-1 text-sm text-white md:hidden">
                          {item.unit} · {unitFormatter.format(item.price)} /{" "}
                          {item.unit}
                        </p>
                      </div>
                      <div className="hidden text-sm text-white md:block">
                        {item.unit}
                      </div>
                      <div className="hidden text-sm font-semibold text-[#ffd166] md:block">
                        {unitFormatter.format(item.price)}
                      </div>
                      <div className="flex items-center justify-between rounded-full border border-white/12 px-2 py-1">
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
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white hover:bg-[#f5b301]/20"
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
                          className="w-16 bg-transparent text-center font-bold text-white outline-none"
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
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white hover:bg-[#f5b301]/20"
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
              <div className="rounded-lg border border-white/10 bg-[#3f4652] p-5">
                <label className="font-bold text-white">
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
                    className="w-28 rounded-md border border-white/15 bg-[#343b46] px-4 py-3 text-center text-xl font-bold text-white outline-none focus:border-[#f5b301]"
                    inputMode="numeric"
                  />
                  <span className="text-white">taškai</span>
                </div>
              </div>

              <div className="rounded-lg border border-[#f5b301]/25 bg-[#f5b301]/10 p-5">
                <p className="font-bold text-[#ffd166]">Skaičiavimo principas</p>
                <p className="mt-3 text-3xl font-bold text-[#ffd166]">
                  {formatter.format(POINT_PRICE)} už tašką
                </p>
                <p className="mt-3 text-sm font-semibold leading-6 text-[#ffe3a3]">
                  Pagal elektros taškus skaičiuojama fiksuota 30 Eur kaina už
                  vieną tašką. 
                </p>
              </div>
            </div>
          )}

          {mode === "area" && (
            <div className="mt-6 grid gap-5">
              <div className="rounded-lg border border-white/10 bg-[#3f4652] p-5">
                <label className="font-bold text-white">
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
                    className="w-28 rounded-md border border-white/15 bg-[#343b46] px-4 py-3 text-center text-xl font-bold text-white outline-none focus:border-[#f5b301]"
                    inputMode="numeric"
                  />
                  <span className="text-white">m²</span>
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
                        ? "border-[#f5b301] bg-[#f5b301] text-[#111312]"
                        : "border-white/10 bg-[#3f4652] text-white hover:border-[#f5b301]"
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
            "Į darbų kainą neįtraukti nestandartiniai griovimo ar apdailos darbai",
            "Medžiagų suma rodoma atskirai kaip preliminarus intervalas",
          ]}
          note="Tiksliai kainai reikia plano, nuotraukų arba objekto apžiūros. Skaičiuoklė padeda greitai suprasti biudžeto dydį prieš skambutį."
        />
      </div>
    </section>
  );
}
