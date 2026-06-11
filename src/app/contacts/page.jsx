"use client";

import { useEffect, useState } from "react";
import { AlertTriangle, CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { Wrapper } from "../components/Wrapper";

export default function ContactsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!status) return;
    setShowToast(true);
    const t = setTimeout(() => setShowToast(false), 3500);
    return () => clearTimeout(t);
  }, [status]);

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          website: form.company,
        }),
      });

      let data;
      try {
        data = await res.json();
      } catch {
        data = { ok: false, error: "Serverio atsakymas netinkamas." };
      }

      if (!res.ok || !data?.ok) {
        throw new Error(
          data?.error || "Nepavyko išsiųsti. Pabandykite dar kartą."
        );
      }

      setStatus({
        type: "ok",
        msg: "Ačiū! Žinutė išsiųsta. Susisieksiu kaip galima greičiau.",
      });
      setForm({ name: "", email: "", message: "", company: "" });
    } catch (err) {
      setStatus({
        type: "error",
        msg: err.message || "Įvyko klaida. Bandykite dar kartą.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#f8faf7]">
      <Navigation />

      {status && (
        <div
          className={`fixed bottom-4 right-4 z-50 transform transition-all duration-300 ${
            showToast ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          role="status"
          aria-live="polite"
        >
          <div
            className={`flex items-start gap-3 rounded-lg px-4 py-3 shadow-lg ring-1 ${
              status.type === "ok"
                ? "bg-green-50 text-green-800 ring-green-200"
                : "bg-red-50 text-red-800 ring-red-200"
            }`}
          >
            {status.type === "ok" ? (
              <CheckCircle2 className="mt-0.5 h-5 w-5" />
            ) : (
              <AlertTriangle className="mt-0.5 h-5 w-5" />
            )}
            <p className="text-sm">{status.msg}</p>
          </div>
        </div>
      )}

      <main>
        <section className="bg-[#111312] pt-20 text-white">
          <Wrapper className="py-16">
            <p className="section-kicker text-[#ffd166]">Kontaktai</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-bold md:text-6xl">
              Papasakokite, kokio elektros darbo reikia
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
              Kuo aiškiau aprašysite situaciją, tuo greičiau galėsiu įvertinti
              darbų apimtį. Galite pridėti detalių: adresą, problemą, norimą
              laiką ir, jei reikia, nuotraukų paminėjimą.
            </p>
          </Wrapper>
        </section>

        <Wrapper className="py-16">
          <div className="grid gap-10 md:grid-cols-[1fr_0.85fr]">
            <form
              onSubmit={handleSubmit}
              className="rounded-lg bg-white p-6 shadow-[0_18px_45px_-30px_rgba(17,19,18,0.7)] ring-1 ring-[#111312]/10 md:p-8"
            >
              <h2 className="text-2xl font-bold text-[#111312]">
                Parašykite žinutę
              </h2>

              <div aria-live="polite" className="mt-4 min-h-6">
                {status?.type === "ok" && (
                  <div className="rounded-md border border-green-200 bg-green-50 px-4 py-2 text-sm text-green-800">
                    {status.msg}
                  </div>
                )}
                {status?.type === "error" && (
                  <div className="rounded-md border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-800">
                    {status.msg}
                  </div>
                )}
              </div>

              <div className="mt-5 grid gap-4">
                <div>
                  <label className="mb-1 block text-sm font-semibold text-[#2d3835]">
                    Vardas
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    required
                    disabled={loading}
                    className="w-full rounded-md border border-[#111312]/15 px-4 py-3 outline-none transition focus:border-[#f5b301] focus:ring-2 focus:ring-[#f5b301]/25 disabled:opacity-60"
                    placeholder="Jūsų vardas"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-semibold text-[#2d3835]">
                    El. paštas
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    disabled={loading}
                    className="w-full rounded-md border border-[#111312]/15 px-4 py-3 outline-none transition focus:border-[#f5b301] focus:ring-2 focus:ring-[#f5b301]/25 disabled:opacity-60"
                    placeholder="vardas@pastas.lt"
                  />
                </div>

                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={onChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <label className="mb-1 block text-sm font-semibold text-[#2d3835]">
                    Žinutė
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    required
                    rows={7}
                    disabled={loading}
                    className="w-full rounded-md border border-[#111312]/15 px-4 py-3 outline-none transition focus:border-[#f5b301] focus:ring-2 focus:ring-[#f5b301]/25 disabled:opacity-60"
                    placeholder="Trumpai aprašykite problemą ar planuojamą darbą"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center rounded-full bg-[#f5b301] px-6 py-3 font-bold text-[#111312] transition-colors hover:bg-[#ffd166] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Siunčiama..." : "Siųsti žinutę"}
                </button>
              </div>
            </form>

            <aside className="space-y-6">
              <div className="rounded-lg bg-[#111312] p-6 text-white md:p-8">
                <h2 className="text-2xl font-bold">Susisiekite tiesiogiai</h2>
                <div className="mt-6 space-y-4 text-white/82">
                  <a
                    href="tel:+37062794262"
                    className="flex items-center gap-3 hover:text-white"
                  >
                    <Phone className="h-5 w-5 text-[#ffd166]" />
                    <span>+370 627 94262</span>
                  </a>
                  <a
                    href="mailto:info@fazis.lt"
                    className="flex items-center gap-3 hover:text-white"
                  >
                    <Mail className="h-5 w-5 text-[#ffd166]" />
                    <span>info@fazis.lt</span>
                  </a>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-[#ffd166]" />
                    <span>Darbo laikas: 9:00-18:00</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-[#ffd166]" />
                    <span>Vilnius ir aplinkiniai rajonai</span>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg bg-white ring-1 ring-[#111312]/10">
                <iframe
                  title="Fazis aptarnaujama teritorija"
                  src="https://www.google.com/maps?q=54.6872,25.2797&z=11&output=embed"
                  width="100%"
                  height="340"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </aside>
          </div>
        </Wrapper>
      </main>
      <Footer />
    </div>
  );
}
