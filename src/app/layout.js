import "./globals.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://fazis.lt"),
  title: {
    default: "Fazis - elektriko paslaugos",
    template: "%s | Fazis",
  },
  description:
    "Fazis teikia tvarkingas ir atsakingas elektriko paslaugas namams bei verslui.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="lt" className="bg-[#f8faf7]">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <Script
          id="cookie-script"
          src="https://cdn.cookie-script.com/s/0f4ab1ee7ce420d8920298af25930b77.js"
          strategy="afterInteractive"
          charSet="UTF-8"
        />
      </head>
      <body className="antialiased bg-[#f8faf7] text-[#111312]">
        {children}
      </body>
    </html>
  );
}
