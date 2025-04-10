import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { Playfair_Display, Raleway } from "next/font/google";
import LogoSvg from "public/logo.svg";
import "./globals.css";

const FontDisplay = Playfair_Display({
  weight: "900",
  preload: true,
  style: "italic",
  display: "swap",
  variable: "--display",
  subsets: ["latin", "latin-ext", "vietnamese", "cyrillic"],
});

const FontRaleway = Raleway({
  subsets: ["latin", "latin-ext", "vietnamese", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "600"],
  preload: true,
  style: ["normal", "italic"],
  display: "swap",
  variable: "--raleway",
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
  title: "Dra Rafaela Mazieiro",
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
    title: "Dra Rafaela Mazieiro",
    url: "https://rafaelamazieiro.vercel.app",
    authors: ["Fábio Ghizoni", "Rafael Leuch"],
    creators: ["Fábio Ghizoni", "Rafael Leuch"],
    description: "Sua pele merece mais do que promessas!! Merece resultados! Vamos nessa juntos?",
  },
  description: `Sua pele merece mais do que promessas, merece resultados! Aqui, você encontra os melhores 
    tratamentos e consultas dermatológicas para cuidar da saúde e beleza da sua pele. Nossos tratamentos
    contam com flacidez da pele e do tecido subcutâneo, rastreamento do câncer de pele, tratamento da 
    foliculite, cauterização dos acrocórdons, entre outros tratamentos`,
  appleWebApp: {
    capable: true,
    title: "Rafaela Mazieiro",
    startupImage: typeof LogoSvg,
    statusBarStyle: "black-translucent",
  },
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="pt-br" className="antialiased">
      <body className={`${FontRaleway.className} ${FontDisplay.variable} bg-bege`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
