import { shortDescription, ShowAll } from "@/exports";
import Image, { StaticImageData } from "next/image";

type AnimatedCardsProps = {
  card: {
    id: number;
    title: string;
    description: string;
    image: StaticImageData;
  };
  isExpanded: boolean; // Se o card está expandido
  onToggleExpand: () => void; // Função para alternar a expansão
};

const AnimatedCards = ({ card, isExpanded, onToggleExpand }: AnimatedCardsProps) => {
  return (
    <div
      className="flex flex-col items-center justify-between bg-rosa-claro rounded-2xl p-8 border-2
      border-white shadow-2xl drop-shadow-2xl h-auto max-w-100">
      <div
        title={`Imagem sobre ${card.title}`}
        className="-m-2 rounded-3xl">
        <Image
          alt={card.title}
          src={card.image}
          className="w-full min-w-80 min-h-80 rounded-3xl max-w-80 max-h-80 max-1170:min-w-60 border-2 
            border-black/30" />
      </div>
      <div className="flex flex-col justify-between h-full w-full pt-4 justify-items-center">
        <h1 className="-mx-5 text-center text-3xl text-white font-raleway font-bold mb-5">
          {card.title} <br />
        </h1>
        <h2 className="text-2xl text-start text-white bg-black/30 p-2 -m-3 rounded-xl">
          {isExpanded ? card.description : shortDescription(card.description)}... <br />
          <ShowAll
            spanClassName
            showAll={isExpanded}
            onToggleExpand={onToggleExpand} />
        </h2>
      </div>
    </div>
  );
};

export default AnimatedCards;
