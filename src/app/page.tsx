import { NavBar, SectionHome } from "@/exports";
import { Metadata } from "next";

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
    description: "Site criado por Fabio Ghizoni, com muito amor e carinho",
  },
};

const Home = () => {

  return (
    <main className="flex items-center flex-col overflow-hidden 
      justify-center mx-auto">
      <NavBar />
      <SectionHome />
    </main>
  );
};

export default Home;