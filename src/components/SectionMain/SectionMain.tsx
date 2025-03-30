import { ImageRafa, TextMain } from "@/exports";

const SectionMain = () => {
  return (
    <section className="flex flex-row w-full h-screen justify-center items-center max-1170:flex-col 
      max-1170:px-4 max-1170:py-4">
      <TextMain />
      <ImageRafa />
    </section>
  );
};

export default SectionMain;