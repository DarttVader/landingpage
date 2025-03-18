import { AnimatedCards, GridCards, TextSection2 } from "@/exports";

const SectionCards = () => {
  return (
    <section
      className="flex flex-col w-full bg-fundo1 bg-cover bg-center min-h-screen px-10 py-10 
        items-center justify-center">
      <TextSection2 />
      <GridCards>
        <AnimatedCards />
      </GridCards>
    </section>
  );
};

export default SectionCards;
