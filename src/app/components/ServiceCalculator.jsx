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

const POINT_PRICE = 25;
// Keep the detailed calculator available for a future release.
const ENABLE_WORKS_MODE = false;

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
  return (
    <aside className="h-fit rounded-lg border border-[#d7e3dc] bg-[#eef3f1] p-6 text-[#20282b] md:p-7">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-[#f5b301] text-[#111312]">
          <Calculator className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#785500]">
            Preliminari darbų suma
          </p>
          <p className="text-sm text-[#20282b]">
            be PVM, galutinis įvertinimas vietoje
          </p>
        </div>
      </div>

      <div className="mt-6">
        <div className="text-4xl font-bold md:text-5xl">
          {formatter.format(total)}
        </div>
      </div>

      <div className="mt-6 border-y border-[#d7e3dc] py-5">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#785500]">
          Medžiagos preliminariai
        </p>
        <p className="mt-2 text-2xl font-bold">
          {formatter.format(materialRange.low)} -{" "}
          {formatter.format(materialRange.high)}
        </p>
        <p className="mt-2 text-sm leading-6 text-[#20282b]">
          Intervalas priklauso nuo kabelių ilgio, automatų, kištukinių lizdų,
          jungiklių, skydelio, gamintojų ir pasirinktų sprendimų.
        </p>
      </div>

      <div className="mt-6 space-y-3 text-sm text-[#20282b]">
        {details.map((item) => (
          <div key={item} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#785500]" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <p className="mt-6 border-l-4 border-[#f5b301] bg-[#ffedb9] p-4 text-sm font-bold leading-6 text-[#5b450c]">
        {note}
      </p>
    </aside>
  );
}

export default function ServiceCalculator() {
  const [mode, setMode] = useState(ENABLE_WORKS_MODE ? "works" : "points");
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
  ].filter(({ id }) => ENABLE_WORKS_MODE || id !== "works");

  return (
    <section className="min-w-0">
      <div>
        <h2 className="text-3xl font-bold text-[#916700] md:text-4xl">Kainos skaičiuoklė</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-[#20282b]">
          Skaičiuoklė skirta greitam orientaciniam kainos įvertinimui.
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.85fr)]">
        <div className="min-w-0">
          <div className={`grid ${ENABLE_WORKS_MODE ? "grid-cols-3" : "grid-cols-2"} gap-1 rounded-lg bg-[#eef2f4] p-1`}>
            {modes.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => setMode(id)}
                aria-pressed={mode === id}
                className={`inline-flex items-center justify-center gap-2 min-h-16 rounded-md px-2 py-3 text-xs font-bold transition-colors md:text-sm ${
                  mode === id
                    ? "bg-[#f5b301] text-[#111312]"
                    : "text-[#20282b] hover:bg-[#e4ece8]"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {label}
              </button>
            ))}
          </div>

          {ENABLE_WORKS_MODE && mode === "works" && (
            <div className="mt-6">
              <label className="relative block">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#785500]" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="w-full rounded-full border border-[#d4dcdf] bg-[#eef2f4] py-3 pl-12 pr-4 text-[#20282b] outline-none placeholder:text-[#6c7b83] focus:border-[#f5b301] focus:ring-2 focus:ring-[#f5b301]/20"
                  aria-label="Ieškoti darbo"
                  placeholder="Ieškoti darbo..."
                />
              </label>

              <div className="mt-5 overflow-hidden rounded-lg border border-[#dde3e5]">
                <div className="hidden grid-cols-[minmax(0,1fr)_42px_66px_132px] gap-3 bg-[#eef3f1] px-4 py-3 text-sm font-bold text-[#20282b] md:grid">
                  <span>Darbas</span>
                  <span>Vnt.</span>
                  <span>Kaina</span>
                  <span className="text-center">Kiekis</span>
                </div>
                <div className="max-h-[620px] overflow-y-auto">
                  {filteredItems.length === 0 && <p className="p-5 text-sm text-[#59666d]">Pagal šią paiešką darbų nerasta.</p>}
                  {filteredItems.map((item) => (
                    <div
                      key={item.id}
                      className="grid gap-4 border-b border-[#e5e9eb] p-4 last:border-b-0 md:grid-cols-[minmax(0,1fr)_42px_66px_132px] md:items-center"
                    >
                      <div>
                        <h3 className="font-bold text-[#20282b]">{item.title}</h3>
                        <p className="mt-1 text-sm text-[#20282b] md:hidden">
                          {item.unit} · {unitFormatter.format(item.price)} /{" "}
                          {item.unit}
                        </p>
                      </div>
                      <div className="hidden text-sm text-[#20282b] md:block">
                        {item.unit}
                      </div>
                      <div className="hidden text-sm font-semibold text-[#785500] md:block">
                        {unitFormatter.format(item.price)}
                      </div>
                      <div className="flex items-center justify-between rounded-full border border-[#d4dcdf] px-2 py-1">
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
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#20282b] hover:bg-[#f5b301]/20"
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
                          className="w-8 bg-transparent text-center font-bold text-[#20282b] outline-none"
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
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#20282b] hover:bg-[#f5b301]/20"
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
              <div className="rounded-lg border border-[#dde3e5] bg-[#f5f7f8] p-5">
                <label className="font-bold text-[#20282b]">
                  Elektros taškų skaičius
                </label>
                <input
                  type="range"
                  aria-label="Elektros taškų skaičius"
                  min="5"
                  max="180"
                  value={pointCount}
                  onChange={(event) => setPointCount(clampNumber(event.target.value))}
                  className="mt-5 w-full accent-[#f5b301]"
                />
                <div className="mt-3 flex items-center gap-3">
                  <input
                    aria-label="Elektros taškų skaičius"
                    value={pointCount}
                    onChange={(event) => setPointCount(clampNumber(event.target.value))}
                    className="w-28 rounded-md border border-[#cfd9dd] bg-white px-4 py-3 text-center text-xl font-bold text-[#20282b] outline-none focus:border-[#f5b301]"
                    inputMode="numeric"
                  />
                  <span className="text-[#20282b]">taškai</span>
                </div>
              </div>

              <div className="rounded-lg border border-[#f5b301]/25 bg-[#f5b301]/10 p-5">
                <p className="font-bold text-[#785500]">Skaičiavimo principas</p>
                <p className="mt-3 text-3xl font-bold text-[#785500]">
                  {formatter.format(POINT_PRICE)} už tašką
                </p>
                <p className="mt-3 text-sm font-semibold leading-6 text-[#785500]">
                  Pagal elektros taškus skaičiuojama fiksuota {POINT_PRICE} Eur kaina už
                  vieną tašką. 
                </p>
              </div>
            </div>
          )}

          {mode === "area" && (
            <div className="mt-6 grid gap-5">
              <div className="rounded-lg border border-[#dde3e5] bg-[#f5f7f8] p-5">
                <label className="font-bold text-[#20282b]">
                  Namo arba buto kvadratūra
                </label>
                <input
                  type="range"
                  aria-label="Namo arba buto kvadratūra"
                  min="20"
                  max="250"
                  value={area}
                  onChange={(event) => setArea(clampNumber(event.target.value))}
                  className="mt-5 w-full accent-[#f5b301]"
                />
                <div className="mt-3 flex items-center gap-3">
                  <input
                    aria-label="Namo arba buto kvadratūra"
                    value={area}
                    onChange={(event) => setArea(clampNumber(event.target.value))}
                    className="w-28 rounded-md border border-[#cfd9dd] bg-white px-4 py-3 text-center text-xl font-bold text-[#20282b] outline-none focus:border-[#f5b301]"
                    inputMode="numeric"
                  />
                  <span className="text-[#20282b]">m²</span>
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
                        : "border-[#dde3e5] bg-[#f5f7f8] text-[#20282b] hover:border-[#f5b301]"
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
