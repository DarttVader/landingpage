import { ImageRafa, TextMain } from "@/exports";

interface SectionMainProps {
  setIsUlOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SectionMain: React.FC<SectionMainProps> = ({ setIsUlOpen, setIsMenuOpen }) => {
  return (
    <section className="flex flex-col w-full lg:h-screen h-auto bg-fundo1 bg-cover bg-center justify-center
      items-center sm:px-20 px-4 lg:flex-row">
      <TextMain setIsMenuOpen={setIsMenuOpen} setIsUlOpen={setIsUlOpen} />
      <ImageRafa />
    </section>
  );
};

export default SectionMain;