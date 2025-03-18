import { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const FontPoppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  preload: true,
  style: ["normal", "italic"],
  display: "auto",
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
  title: "Home | Rafaela Mazieiro",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL("https://rafaelamazieiro-sooty.vercel.app/"),
  authors: [
    { name: "Fábio Ghizoni", url: "https://rafaelamazieiro-sooty.vercel.app/" },
    { name: "Rafael Leuch", url: "https://rafaelamazieiro-sooty.vercel.app/" },
  ],
  description: `Website created by Fábio Ghizoni, make your way silently, and in the future, you will see 
    your success...`,
  openGraph: {
    images: "/logo.svg",
    countryName: "Brazil",
    siteName: "Rafaela Mazieiro",
    description: "Sua pele merece mais do que promessas!! Merece resultados! Vamos nessa juntos?",
    url: "https://rafaelamazieiro-sooty.vercel.app/",
    title: "WebSite | Rafaela Mazieiro",
    authors: ["Fábio Ghizoni", "Rafael Leuch"],
    creators: ["Fábio Ghizoni", "Rafael Leuch"],
  },
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="pt-br">
      <body className={`${FontPoppins.className} bg-bege-rose`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
