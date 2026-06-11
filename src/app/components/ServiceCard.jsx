import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Gauge,
  Home,
  LampCeiling,
  Lightbulb,
  PlugZap,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";

const TOP_ICONS = {
  diagnostics: Gauge,
  lighting: Lightbulb,
  sockets: PlugZap,
  installation: Home,
  panels: ShieldCheck,
  repairs: Wrench,
  ceiling: LampCeiling,
  zap: Zap,
};

export const ServiceCard = ({
  title,
  desc,
  price,
  href = "/contacts",
  icon = "zap",
  benefits = [],
}) => {
  const TopIcon = TOP_ICONS[icon] || Zap;

  return (
    <article className="flex h-full flex-col justify-between overflow-hidden rounded-lg bg-white shadow-[0_18px_45px_-28px_rgba(17,19,18,0.65)] ring-1 ring-[#111312]/10 transition-transform duration-300 hover:-translate-y-1">
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-[#111312] text-[#ffd166] shadow-[0_12px_24px_-16px_rgba(17,19,18,0.8)]">
          <TopIcon className="h-6 w-6" />
        </div>

        <h3 className="text-2xl font-bold text-[#111312]">{title}</h3>
        <p className="mt-3 leading-7 text-[#47606a]">{desc}</p>

        {!!benefits.length && (
          <ul className="mt-5 space-y-2 text-left">
            {benefits.map((label) => (
              <li key={label} className="flex items-start gap-2 text-[#2d3835]">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#b86f2f]" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        )}

        {price && (
          <div className="mt-auto pt-6">
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#8a6a28]">
              Orientacinė kaina
            </span>
            <div className="mt-1 text-xl font-bold text-[#111312]">{price}</div>
          </div>
        )}
      </div>

      <div className="p-6 pt-0 md:p-7 md:pt-0">
        <Link
          href={href}
          className="group inline-flex items-center gap-2 rounded-full border border-[#111312]/18 bg-white px-4 py-2 font-semibold text-[#111312] transition-colors hover:border-[#f5b301] hover:bg-[#f5b301]"
        >
          Aptarti darbą
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="h-1.5 w-full bg-gradient-to-r from-[#b86f2f] via-[#f5b301] to-[#47606a]" />
    </article>
  );
};
