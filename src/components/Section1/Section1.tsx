import { ImageRafa, TextSection1 } from "@/exports";

const Section1 = () => {
  return (
    <section
      className="flex flex-row max-1170:flex-col bg-fundo 
      justify-center items-center h-screen w-full px-10 bg-cover 
      bg-center shadow-2xl relative"
    >
      <TextSection1 />
      <ImageRafa />
    </section>
  );
};

export default Section1;
