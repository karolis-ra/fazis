import "./globals.css";
import GTM from "./components/GTM";
import CookieBanner from "./components/CookieBanner";

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
      </head>
      <body className="antialiased bg-[#f8faf7] text-[#111312]">
        <GTM />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
