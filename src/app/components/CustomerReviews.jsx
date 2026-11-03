import { ArrowUpRight, Star } from "lucide-react";
import { customerReviews } from "../data/customerReviews";
import Reveal from "./Reveal";
import { Wrapper } from "./Wrapper";

export default function CustomerReviews() {
  if (!customerReviews.length) return null;
  return <section className="section-space bg-white"><Wrapper><Reveal className="section-head"><div><p className="section-kicker">Klientų patirtys</p><h2 className="section-heading">Atsiliepimai</h2></div></Reveal><div className="values-grid">{customerReviews.map((review, index) => <Reveal key={`${review.name}-${index}`} delay={index * 80}><article className="value-card"><div className="flex gap-1 text-[#a37100]" aria-label={`${review.rating} iš 5 žvaigždučių`}>{Array.from({ length: Math.min(5, Math.max(1, review.rating)) }, (_, i) => <Star key={i} size={17} fill="currentColor" />)}</div><p>{review.text}</p><h3>{review.name}</h3>{review.sourceUrl && <a className="text-link mt-3" href={review.sourceUrl} target="_blank" rel="noopener noreferrer">Originalus atsiliepimas <ArrowUpRight size={16} /></a>}</article></Reveal>)}</div></Wrapper></section>;
}
