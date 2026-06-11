"use client";

import CookieConsent from "react-cookie-consent";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  const handleChoice = () => {
    setVisible(false);
  };

  return (
    <CookieConsent
      id="cookie-banner"
      buttonText="Sutinku"
      declineButtonText="Nesutinku"
      cookieName="fazisCookieConsent"
      enableDeclineButton
      onAccept={handleChoice}
      onDecline={handleChoice}
      style={{
        backgroundColor: "#111312",
        boxShadow: "0 -2px 18px rgba(0,0,0,0.22)",
        transform: visible ? "translateY(0)" : "translateY(100%)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.6s ease-out, opacity 0.6s ease-out",
      }}
      buttonStyle={{
        backgroundColor: "#f5b301",
        color: "#111312",
        borderRadius: "9999px",
        padding: "8px 16px",
        fontSize: "14px",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold",
      }}
      declineButtonStyle={{
        backgroundColor: "transparent",
        color: "white",
        borderRadius: "9999px",
        padding: "8px 16px",
        fontSize: "14px",
        border: "1px solid rgba(255,255,255,0.35)",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      Ši svetainė naudoja slapukus, kad pagerintų naršymo patirtį ir matuotų
      svetainės veikimą.
    </CookieConsent>
  );
}
