import { ImageRafa, TextSectionMain } from "@/exports";

const SectionMain = () => {
  return (
    <section className="flex flex-row max-1170:flex-col bg-fundo justify-center items-center h-screen w-full 
      px-10 bg-cover bg-center shadow-2xl relative z-0 overflow-hidden">
      <div className="bg-black opacity-10 w-full h-full absolute" />
      <TextSectionMain />
      <ImageRafa />
    </section>
  );
};

export default SectionMain;