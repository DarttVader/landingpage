import { ImageRafa, TextSectionMain } from "@/exports";

const SectionMain = () => {
  return (
    <section className="flex flex-row bg-fundo bg-cover bg-center w-full h-screen shadow-2xl px-10 relative
      justify-center items-center z-0 max-1170:flex-col overflow-hidden">
      <TextSectionMain />
      <ImageRafa />
    </section>
  );
};

export default SectionMain;