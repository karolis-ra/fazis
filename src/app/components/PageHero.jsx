import Image from "next/image";
import { Wrapper } from "./Wrapper";

export default function PageHero({ title, image = "/images/redesign/hero-home.jpg", children, className = "" }) {
  return <section className={`page-hero ${className}`}><Image src={image} alt="" fill priority sizes="100vw" /><div className="page-hero-scrim" /><Wrapper className="page-hero-copy"><h1>{title}</h1>{children}</Wrapper></section>;
}
