"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
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
        msg: "Ačiū! Žinutė išsiųsta. Susisieksime kaip galima greičiau.",
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
    <div className="min-h-screen bg-[#3f4652]">
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
        <section className="relative min-h-[38vh] overflow-hidden bg-[#111312] text-white md:min-h-[48vh]">
          <Image
            src="/images/kontaktai-hero.jpg"
            alt="Fazis kontaktai"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_74%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,19,18,0.78)_0%,rgba(17,19,18,0.42)_48%,rgba(17,19,18,0.22)_100%)]" />
          <div className="absolute inset-0 bg-[#111312]/16" />
          <Wrapper className="relative z-10 flex min-h-[38vh] items-center justify-center py-10 text-center md:min-h-[48vh] md:justify-start md:py-12 md:text-left">
            <h1 className="text-5xl font-semibold leading-none tracking-normal text-white md:text-7xl">
              Kontaktai
            </h1>
          </Wrapper>
        </section>

        <Wrapper className="py-16">
          <div className="grid gap-10 md:grid-cols-[1fr_0.85fr]">
            <form
              onSubmit={handleSubmit}
              className="rounded-lg bg-[#343b46] p-6 ring-1 ring-white/10 md:p-8"
            >
              <h2 className="text-2xl font-bold text-white">
                Parašykite žinutę
              </h2>

              <div aria-live="polite" className="mt-4 min-h-6">
                {status?.type === "ok" && (
                  <div className="rounded-md border border-green-300/30 bg-green-500/12 px-4 py-2 text-sm font-semibold text-green-100">
                    {status.msg}
                  </div>
                )}
                {status?.type === "error" && (
                  <div className="rounded-md border border-red-300/30 bg-red-500/12 px-4 py-2 text-sm font-semibold text-red-100">
                    {status.msg}
                  </div>
                )}
              </div>

              <div className="mt-5 grid gap-4">
                <div>
                  <label className="mb-1 block text-sm font-semibold text-white">
                    Vardas
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    required
                    disabled={loading}
                    className="w-full rounded-md border border-white/15 bg-[#2f3641] px-4 py-3 text-white outline-none transition placeholder:text-white/42 focus:border-[#f5b301] focus:ring-2 focus:ring-[#f5b301]/25 disabled:opacity-60"
                    placeholder="Jūsų vardas"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-semibold text-white">
                    El. paštas
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    disabled={loading}
                    className="w-full rounded-md border border-white/15 bg-[#2f3641] px-4 py-3 text-white outline-none transition placeholder:text-white/42 focus:border-[#f5b301] focus:ring-2 focus:ring-[#f5b301]/25 disabled:opacity-60"
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
                  <label className="mb-1 block text-sm font-semibold text-white">
                    Žinutė
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    required
                    rows={7}
                    disabled={loading}
                    className="w-full rounded-md border border-white/15 bg-[#2f3641] px-4 py-3 text-white outline-none transition placeholder:text-white/42 focus:border-[#f5b301] focus:ring-2 focus:ring-[#f5b301]/25 disabled:opacity-60"
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
              <div className="rounded-lg bg-[#343b46] p-6 text-white ring-1 ring-white/10 md:p-8">
                <h2 className="text-2xl font-bold">Susisiekite tiesiogiai</h2>
                <div className="mt-6 space-y-4 text-white">
                  <a
                    href="tel:+37062794262"
                    className="flex items-center gap-3 hover:text-[#ffd166]"
                  >
                    <Phone className="h-5 w-5 text-[#ffd166]" />
                    <span>+370 627 94262</span>
                  </a>
                  <a
                    href="mailto:info@fazis.lt"
                    className="flex items-center gap-3 hover:text-[#ffd166]"
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

              <div className="overflow-hidden rounded-lg bg-[#343b46] p-2 ring-1 ring-white/10">
                <iframe
                  title="Fazis aptarnaujama teritorija"
                  src="https://www.google.com/maps?q=54.6872,25.2797&z=11&output=embed"
                  width="100%"
                  height="340"
                  className="rounded-md"
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
