import { CopyRight, MainItens, MenuProvider, SectionCards, SectionContacts } from "@/exports";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Home | Dra Rafaela Mazieiro`,
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
    <main className="flex flex-col space-y-0 w-full h-auto items-center overflow-hidden justify-center
      mx-auto">
      <MenuProvider />
      <SectionCards />
      <SectionContacts />
      <MainItens />
      <CopyRight />
    </main>
  );
};

export default Home;
