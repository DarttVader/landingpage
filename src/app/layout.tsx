import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { Poppins, Raleway } from "next/font/google";
import LogoSvg from "public/logo.svg";
import "./globals.css";

const FontPoppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  preload: true,
  style: ["normal", "italic"],
  display: "auto",
  variable: "--poppins",
});

const FontRaleway = Raleway({
  subsets: ["latin", "latin-ext", "vietnamese", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "600"],
  preload: true,
  style: ["normal", "italic"],
  display: "auto",
  variable: "--raleway"
});

export const metadata: Metadata = {
  keywords: [
    "Rafaela Mazieiro",
    "Page",
    "Página",
    "Doutora",
    "Doctor",
    "Home",
    "Inicial",
    "Skin Beautification",
    "Pele bonita",
    "Your Life, Your Skin",
    "Sua Vida, Sua Pele",
    "Website",
    "Site",
    "Fabio Ghizoni",
    "Softwares",
    "História",
    "Dermatologia",
    "Ciência",
    "Next JS",
    "JavaScript",
    "JS",
    "CSS",
    "HTML",
    "Tailwind CSS",
    "React",
    "DOM",
    "Leaflet",
  ],
  generator: "Next JS",
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/pt-BR",
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  creator: "Fábio Ghizoni",
  publisher: "Fábio Ghizoni",
  applicationName: "Next JS",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL("https://rafaelamazieiro.vercel.app"),
  authors: [
    { name: "Fábio Ghizoni", url: "https://www.instagram.com/fabio.ghizoni_" },
    { name: "Rafael Leuch", url: "https://www.instagram.com/leuch_raf" },
  ],
  openGraph: {
    images: LogoSvg,
    countryName: "Brazil",
    siteName: "Rafaela Mazieiro",
    description: "Sua pele merece mais do que promessas!! Merece resultados! Vamos nessa juntos?",
    url: "https://rafaelamazieiro.vercel.app",
    title: "WebSite | Rafaela Mazieiro",
    authors: ["Fábio Ghizoni", "Rafael Leuch"],
    creators: ["Fábio Ghizoni", "Rafael Leuch"],
  },
  appleWebApp: {
    title: "Rafaela Mazieiro",
    startupImage: typeof LogoSvg,
    statusBarStyle: "black-translucent",
    capable: true,
  },
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="pt-br">
      <body className={`${FontPoppins.variable} ${FontRaleway.variable} font-poppins bg-bege`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
