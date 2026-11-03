import { ArrowUpRight, Instagram } from "lucide-react";
import Reveal from "./Reveal";
import { Wrapper } from "./Wrapper";

export const instagramUrl = "https://www.instagram.com/fazis_elektrikas/";
export default function InstagramSection() {
  return (
    <section className="section-space instagram-section" aria-label="Fazis Instagrame">
      <Wrapper>
        <Reveal className="instagram-inner">
          <div className="instagram-copy">
            <p className="section-kicker">Palaikykime ryšį</p>
            <h2 className="section-heading">Elektros darbai iš arčiau.</h2>
            <p className="section-copy">Čia dalinsimės darbų eiga, apšvietimo idėjomis ir trumpais patarimais Jūsų namams.</p>
          </div>
          <div className="instagram-profile">
            <a className="instagram-account" href={instagramUrl} target="_blank" rel="noopener noreferrer">
              <span className="instagram-logo" aria-hidden="true"><Instagram /></span>
              <span className="instagram-account-copy"><span className="instagram-handle">@fazis_elektrikas</span><span className="instagram-label">Fazis · Instagram</span></span>
            </a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="button-primary">Sekti Instagrame <ArrowUpRight size={18} /></a>
          </div>
        </Reveal>
      </Wrapper>
    </section>
  );
}
