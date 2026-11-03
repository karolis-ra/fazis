"use client";

import { useState } from "react";
import { Clock, Instagram, Mail, MapPin, Phone, Send } from "lucide-react";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { Wrapper } from "../components/Wrapper";
import PageHero from "../components/PageHero";
import { instagramUrl } from "../components/InstagramSection";

export default function ContactsPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "", company: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const onChange = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/contact.php", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name.trim(), email: form.email.trim(), message: form.message.trim(), website: form.company }),
      });
      let data;
      try { data = await res.json(); }
      catch { data = { ok: false, error: "Serverio atsakymas netinkamas." }; }
      if (!res.ok || !data?.ok) throw new Error(data?.error || "Nepavyko išsiųsti. Pabandykite dar kartą.");
      setStatus({ type: "ok", msg: "Ačiū! Žinutė išsiųsta. Susisieksime kaip galima greičiau." });
      setForm({ name: "", email: "", message: "", company: "" });
    } catch (error) {
      setStatus({ type: "error", msg: error.message || "Įvyko klaida. Bandykite dar kartą." });
    } finally { setLoading(false); }
  }

  return (
    <>
      <Navigation />
      <main>
        <PageHero title="Kontaktai" image="/images/redesign/hero-contacts.jpg" className="contacts-hero" />
        <section className="section-space">
          <Wrapper className="grid gap-7 md:grid-cols-[1.1fr_0.9fr] md:gap-10">
            <form onSubmit={handleSubmit} className="contact-form">
              <h2>Parašykite žinutę</h2>
              <p className="section-copy mt-3 text-base">Trumpai papasakokite, kokius darbus planuojate.</p>
              <div aria-live="polite">{status && <p className="form-status" data-type={status.type} role={status.type === "error" ? "alert" : "status"}>{status.msg}</p>}</div>
              <div className="mt-7 grid gap-5">
                <div className="form-field"><label htmlFor="contact-name">Vardas</label><input id="contact-name" name="name" autoComplete="name" value={form.name} onChange={onChange} required disabled={loading} placeholder="Jūsų vardas" /></div>
                <div className="form-field"><label htmlFor="contact-email">El. paštas</label><input id="contact-email" type="email" name="email" autoComplete="email" value={form.email} onChange={onChange} required disabled={loading} placeholder="vardas@pastas.lt" /></div>
                <input type="text" name="company" value={form.company} onChange={onChange} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                <div className="form-field"><label htmlFor="contact-message">Žinutė</label><textarea id="contact-message" name="message" value={form.message} onChange={onChange} required rows={6} disabled={loading} placeholder="Darbų aprašymas, objekto vieta, Jūsų klausimai..." /></div>
                <button type="submit" disabled={loading} className="button-primary disabled:opacity-60"><Send size={17} />{loading ? "Siunčiama..." : "Siųsti žinutę"}</button>
              </div>
            </form>
            <aside className="min-w-0 space-y-6">
              <div className="direct-contact"><h2>Susisiekite tiesiogiai</h2><div className="mt-7 space-y-5">
                <div className="contact-detail"><Phone /><a href="tel:+37061621663">+370 616 21663</a></div>
                <div className="contact-detail"><Mail /><a href="mailto:info@fazis.lt">info@fazis.lt</a></div>
                <div className="contact-detail"><Clock /><span>Darbo laikas: 9:00–18:00</span></div>
                <div className="contact-detail"><MapPin /><span>Vilnius ir aplinkiniai rajonai</span></div>
                <div className="contact-detail"><Instagram /><a href={instagramUrl} target="_blank" rel="noopener noreferrer">@fazis_elektrikas</a></div>
              </div></div>
              <div className="contact-map"><iframe title="Fazis aptarnaujama teritorija" src="https://www.google.com/maps?q=54.6872,25.2797&z=11&output=embed" width="100%" height="300" style={{ border: 0, display: "block" }} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" /></div>
            </aside>
          </Wrapper>
        </section>
      </main>
      <Footer />
    </>
  );
}
