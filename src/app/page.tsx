import { NavBar, SectionHome } from "@/exports";
import { Metadata } from "next";
import Poppins from "next/font/local";

export const metadata: Metadata = {
  title: "Home | Rafaela Mazieiro",
  description: "Website created by Fabio Ghizoni, with the greatest love and affection",
  keywords: [
    "Rafaela Mazieiro", "Page", "Página",
    "Doutora", "Doctor", "Home", "Inicial",
    "Skin Beautification", "Pele bonita",
    "Your Life, Your Skin", "Sua Vida, Sua Pele",
    "Website", "Site", "Fabio Ghizoni", "Softwares",
  ],
  openGraph: {
    title: "Home | Rafaela Mazieiro",
    description: "Site criado por Fabio Ghizoni, com muito amor e carinho"
  },
};

const FontPoppins = Poppins({
  src: "../fonts/Poppins/Poppins-SemiBold.ttf",
  variable: "--poppins-regular",
  weight: "500",
});

const Home = () => {

  return (
    <main className={`${FontPoppins.variable} font-poppins h-screen w-full`}>
      <NavBar />
      <SectionHome />
    </main>
  );
};

export default Home;