import type { Metadata } from "next";
import Poppins from "next/font/local";
import "./globals.css";

const FontPoppins = Poppins({
  src: "../fonts/Poppins/Poppins-Regular.ttf",
  variable: "--poppins-regular",
});

export const metadata: Metadata = {
  title: "Rafaela Mazieiro",
  description: "Website created by Fabio Ghizoni, with the greatest love and affection",
  keywords: [
    "Rafaela Mazieiro",
    "Doutora", "Doctor",
    "Skin Beautification", "Pele bonita",
    "Your Life, Your Skin", "Sua Vida, Sua Pele",
    "Website", "Site", "Fabio Ghizoni", "Softwares",
  ],
  openGraph: {
    title: "Rafaela Mazieiro",
    description: "Site de Rafaela Mazieiro"
  },
};
        
const RootLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <html lang="pt-br">
      <body className={`${FontPoppins.variable} font-poppins`}>

        {children}
      </body>
    </html >
  );
};

export default RootLayout;
