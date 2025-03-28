import { CopyRight, MainItens, NavBar, SectionCards, SectionContacts, SectionMain } from "@/exports";
import { Metadata } from "next";

export const metadata: Metadata = {
  description: `Website created by Fabio Ghizoni, make your way silently, and in the future, you will see 
    your success...`,
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
    "Home",
    "Página inicial",
    "Inicial",
    "Primeira Página",
    "Casa",
    "Página Principal",
    "Principal",
  ],
};

const Home = () => {
  return (
    <main className="flex flex-col w-full h-auto mx-auto items-center overflow-hidden justify-center">
      <NavBar />
      <MainItens />
      <SectionMain />
      <SectionCards />
      <SectionContacts />
      <CopyRight />
    </main>
  );
};

export default Home;
