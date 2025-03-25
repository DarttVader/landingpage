import { ImageRafa, TextSectionMain } from "@/exports";

const SectionMain = () => {
  return (
    <section className="flex flex-row bg-fundo bg-cover bg-center w-screen h-screen shadow-2xl drop-shadow-xl
      px-28 justify-center items-center overflow-hidden min-h-screen z-4 relative max-1170:flex-col">
      <TextSectionMain />
      <ImageRafa />
    </section>
  );
};

export default SectionMain;