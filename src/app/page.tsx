import { CopyRight, NavBar, Section1, Section2, Section3 } from "@/exports";
import { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Website created by Fabio Ghizoni, make your way silently, and in the future, you will see your success...",
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
    "Casa",
  ],
};

const Home = () => {
  return (
    <main
      className="flex items-center flex-col overflow-hidden justify-center 
      w-full h-auto mx-auto"
    >
      <NavBar />
      <Section1 />
      <Section2 />
      <Section3 />
      <CopyRight />
    </main>
  );
};

export default Home;
