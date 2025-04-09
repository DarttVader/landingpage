import { CopyRight, MainItens, MenuManager, SectionCards, SectionContacts } from "@/exports";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Dra Rafaela Mazieiro`,
  description: `Sua pele merece mais do que promessas!! Merece resultados! Vamos nessa juntos? Venha para
    nosso site para ver nossos tratamentos ou agende uma consulta. Site criado por Fabio Ghizoni, 
    siga seu caminho silenciosamente e, no futuro, você verá seu sucesso..`,
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
      <MenuManager />
      <SectionCards />
      <SectionContacts />
      <MainItens />
      <CopyRight />
    </main>
  );
};

export default Home;
