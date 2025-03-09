import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
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
  title: "Home | Rafaela Mazieiro",
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
  ],
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/pt-BR",
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    }
  },
  metadataBase: new URL(process.env.BASE_URL as string),
  openGraph: {
    title: "WebSite | Rafaela Mazieiro",
    images: "/public/logo.svg",
    description:
      "Sua pele merece mais do que promessas!! Merece resultados, vamos nessa juntos?",
    url: process.env.BASE_URL,
    siteName: "Rafaela Mazieiro",
    authors: ["Fábio Ghizoni", "Rafael Leuch"],
    creators: ["Fábio Ghizoni", "Rafael Leuch"],
    countryName: "Brazil",
  },
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="pt-br">
      <GoogleTagManager gtmId={process.env.TAG_MANAGER as string} />
      <body className={`${FontPoppins.className} bg-bege-rose`}>
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS as string} />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.TAG_MANAGER}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            loading="lazy"
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
