import { ClinicProvider } from "@/app/contexts/ClinicContext";
import type { Metadata } from "next";
import { Playfair_Display, Raleway } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const FontDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  preload: true,
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display",
  subsets: ["latin", "latin-ext", "vietnamese", "cyrillic"],
});

const FontRaleway = Raleway({
  subsets: ["latin", "latin-ext", "vietnamese", "cyrillic", "cyrillic-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  preload: true,
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Dra. Rafaela Mazieiro | Dermatologista em Pitanga, Manoel Ribas e Ivaiporã",
  description: `Clínica especializada em dermatologia clínica, estética e preventiva em Pitanga, Manoel Ribas e Ivaiporã. Tratamentos modernos, personalizados e confortáveis para cuidar da saúde e beleza da sua pele. Agende sua consulta!`,
  keywords: [
    "Dermatologista Pitanga",
    "Dermatologista Manoel Ribas",
    "Dermatologista Ivaiporã",
    "Dra Rafaela Mazieiro",
    "Dermatologia Paraná",
    "Tratamento pele",
    "Estética facial",
    "Botox Pitanga",
    "Preenchimento labial",
    "Peeling químico",
    "Laser dermatológico",
    "Câncer de pele",
    "Acne tratamento",
    "Melasma",
    "Flacidez facial",
    "Clínica dermatológica Centro-Oeste Paraná",
  ],
  generator: "Next.js 16",
  alternates: {
    canonical: "https://rafaelamazieiro.vercel.app",
    languages: {
      "pt-BR": "/pt-BR",
    },
  },
  authors: [{ name: "Fábio Ghizoni", url: "https://www.instagram.com/fabio.ghizoni_" }],
  creator: "Fábio Ghizoni",
  publisher: "Dra. Rafaela Mazieiro",
  metadataBase: new URL("https://rafaelamazieiro.vercel.app"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://rafaelamazieiro.vercel.app",
    siteName: "Dra. Rafaela Mazieiro - Dermatologia",
    title: "Dra. Rafaela Mazieiro | Dermatologista",
    description: "Clínica especializada em dermatologia clínica, estética e preventiva. Agende sua consulta em Pitanga, Manoel Ribas ou Ivaiporã!",
    images: [
      {
        url: "/logo.svg",
        width: 400,
        height: 200,
        alt: "Logo Dra. Rafaela Mazieiro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Rafaela Mazieiro | Dermatologista",
    description: "Clínica especializada em dermatologia clínica, estética e preventiva.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${FontDisplay.variable} ${FontRaleway.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="32x32" />
        <Script
          id="google-maps"
          strategy="afterInteractive"
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=marker&callback=initGoogleMaps&loading=async`}
        />
      </head>
      <body className="font-raleway antialiased bg-bege text-dark">
        <ClinicProvider>
          {children}
        </ClinicProvider>
      </body>
    </html>
  );
}
