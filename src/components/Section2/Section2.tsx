import { AnimatedCards, GridCards, TextSection2 } from "@/exports";

const Section2 = () => {
  return (
    <section
      className="flex flex-col w-full bg-[url(/fundo1.jpg)] bg-cover bg-center 
        min-h-screen px-10 py-10 items-center justify-center"
    >
      <TextSection2 />
      <GridCards>
        <AnimatedCards />
      </GridCards>
    </section>
  );
};

export default Section2;
