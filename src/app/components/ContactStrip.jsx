import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Wrapper } from "./Wrapper";

export default function ContactStrip() {
  return <section className="contact-strip"><Wrapper className="contact-strip-inner"><div><h2>Pradėkime nuo pokalbio.</h2><p>Papasakokite, ko reikia Jūsų namams. Aptarsime sprendimą.</p></div><div className="contact-strip-actions"><a href="tel:+37061621663" className="button-primary"><Phone size={18} /> +370 616 21663</a><Link href="/contacts" className="text-link">Parašyti <ArrowRight size={18} /></Link></div></Wrapper></section>;
}
