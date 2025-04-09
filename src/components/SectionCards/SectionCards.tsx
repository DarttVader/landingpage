"use client";
import { AnimatedCards, CardStateProvider, ShowAll, TextCards } from "@/exports";

const SectionCards = () => {
  const {
    showAll,
    expandedCardId,
    displayedCards,
    setExpandedCardId,
    handleToggleShowAll
  } = CardStateProvider();
  return (
    <section
      id="section-cards"
      className="flex flex-col w-full h-auto min-h-screen py-10 items-center justify-center 
      bg-gradient-to-b from-[#EFCCAE] via-fugente/50 to-bege bg-contain bg-center 
        px-20 space-y-6 max-1170:px-4 max-1170:mt-40">
      <TextCards className="bg-gradient-to-r text-5xl text-transparent bg-clip-text from-rosa-claro 
        to-fugente font-bold md:text-6xl" />
      <div className="w-full min-h-screen grid grid-cols-3 gap-5 max-1170:grid-cols-1
        justify-items-center">
        {displayedCards.map((card) => {
          return (
            <AnimatedCards
              card={card}
              key={card.id}
              isExpanded={expandedCardId === card.id} // Verifica se o card está expandido
              onToggleExpand={() =>
                setExpandedCardId(expandedCardId === card.id ? null : card.id) // Alterna o estado de expansão
              } />
          );
        })}
      </div>
      <ShowAll
        showAll={showAll}
        handleToggleShowAll={handleToggleShowAll}
        title={`Ver ${showAll ? `menos` : `todos`}`}
      />
    </section >
  );
};

export default SectionCards;
