import { AnimatedCards, GridCards, TextSectionCards } from "@/exports";

const SectionCards = () => {
  return (
    <section
      className="flex flex-col w-full h-auto bg-fundo1 bg-cover bg-center min-h-screen px-28 py-10 shadow-xl
        drop-shadow-xl items-center justify-center z-3">
      <TextSectionCards />
      <GridCards>
        <AnimatedCards />
      </GridCards>
    </section>
  );
};

export default SectionCards;
