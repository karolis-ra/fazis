"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const CONSENT_COOKIE = "fazisCookieConsent";

function hasConsent() {
  const match = document.cookie.match(new RegExp(`${CONSENT_COOKIE}=([^;]+)`));
  const value = match?.[1]?.toLowerCase();
  return value && value !== "false" && value !== "declined";
}

export default function GTM() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setAllowed(hasConsent());

    const onStorage = () => setAllowed(hasConsent());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  if (!allowed || process.env.NODE_ENV !== "production") return null;

  return (
    <Script
      id="gtm"
      src="https://www.googletagmanager.com/gtm.js?id=GTM-M3RDV6JV"
      strategy="lazyOnload"
    />
  );
}
