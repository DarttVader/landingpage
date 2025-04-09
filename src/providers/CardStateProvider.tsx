"use client";
import { cardsData, handleScroll } from "@/exports";
import { useState } from "react";

export const CardStateProvider = () => {
  // Estado para controlar a exibição dos cards
  const [showAll, setShowAll] = useState(false);
  // Controla qual card está expandido
  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);

  // Exibir os primeiros 4 cards ou todos os cards, dependendo do estado
  const displayedCards = showAll ? cardsData : cardsData.slice(0, 6);

  // Alterna entre mostrar todos ou apenas alguns cards
  const handleToggleShowAll = (e: React.MouseEvent) => {
    setShowAll(!showAll);
    if (showAll) {
      // Só faz o scroll se for "Ver Menos"
      handleScroll("section-cards", e);
    }
  };

  return {
    displayedCards,
    showAll,
    expandedCardId,
    setExpandedCardId,
    handleToggleShowAll
  };
};
