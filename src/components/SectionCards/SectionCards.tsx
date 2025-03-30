"use client"
import { AnimatedCards, GridCards, TextCards } from "@/exports";
import { useState } from "react";

const SectionCards = () => {
  const handleScroll = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const Section = document.getElementById(id);
    if (Section) {
      Section.scrollIntoView({ behavior: "smooth" });
    };
  };
  const CardsData = [
    {
      id: 1,
      title: "Tratamento de Alopecia Androgenética",
      description: "Você percebeu que seu cabelo não tem o mesmo volume de antes? Fios mais finos, ralos e sem tanta força podem ser um sinal de alerta, mas será que isso significa calvície? Nem sempre! O afinamento capilar pode ter várias causas, como estresse, deficiências nutricionais, alterações hormonais, uso excessivo de química e até algumas doenças do couro cabeludo. Não espere para procurar um dermatologista. Quanto antes identificarmos a causa, maiores são as chances de recuperação!",
    },
    {
      id: 2,
      title: "Blindagem Solar Total",
      description: "Além do protetor solar, incluir antioxidantes orais, chapéu e óculos pode minimizar o impacto da luz visível.",
    },
    {
      id: 3,
      title: "Terapias Combinadas",
      description: "Laser adequado, microagulhamento com drug delivery, bioestimuladores e peelings suaves podem potencializar os resultados sem agredir a pele.",
    },
    {
      id: 4,
      title: "Flacidez da Pele e do Tecido Subcutâneo",
      description: "Se for gordura, tratamentos como enzimas e lipo enzimática podem ajudar. Já se for flacidez, o ideal é estimular colágeno e dar mais firmeza à pele. Ultrassom microfocado e bioestimuladores de colágeno são excelentes opções para melhorar a sustentação e firmeza da pele.",
    },
    {
      id: 5,
      title: "Peeling Químico",
      description: "Renova a pele e pode ajudar em várias queixas, desde manchas e acne até viço e textura.",
    },
    {
      id: 6,
      title: "Tratamento da Foliculite",
      description: "A foliculite ocorre quando o pelo não consegue sair corretamente da pele, causando inflamação. Métodos menos agressivos de depilação, como o laser, e cuidados com a pele são essenciais para prevenir e tratar a foliculite.",
    },
    {
      id: 7,
      title: "Cauterização dos Acrocórdons",
      description: "Acrocórdons são pelinhas pequenas e moles que podem ser removidas rapidamente e de forma indolor no consultório. A cauterização é um procedimento rápido, seguro e eficaz para se livrar dessas pequenas lesões.",
    },
    {
      id: 8,
      title: "Tratamento de Pele em Geral",
      description: "Inclui tratamentos para acne hormonal, manchas, melasma, olheiras, cicatrizes de acne, tech neck, botox e muito mais. Avaliação personalizada para cada caso é essencial.",
    },
    {
      id: 9,
      title: "Profhilo",
      description: "O Profhilo estimula a produção de colágeno e elastina, tratando flacidez e deixando a pele mais firme. Ideal para promover um glow natural.",
    },
    {
      id: 10,
      title: "Fios Lisos de Colágeno",
      description: "Fios de colágeno são ideais para melhorar áreas específicas da pele, como o craquelado abaixo dos olhos, estimulando a produção de colágeno e promovendo uma pele mais uniforme.",
    },
    {
      id: 11,
      title: "Pontos de Embelezamento",
      description: "Estratégicos pontos de ácido hialurônico para realçar as características do rosto com sutileza, como contorno dos lábios, malar e harmonia do queixo.",
    },
    {
      id: 12,
      title: "Rastreamento do Câncer de Pele",
      description: "O rastreamento anual é fundamental, especialmente para quem tem histórico familiar ou se expõe muito ao sol. Pintinhas aparentemente inofensivas podem se transformar ao longo do tempo, sendo importante a avaliação regular com um dermatologista.",
    },
    {
      id: 13,
      title: "Biópsia e Pequenas Cirurgias",
      description: "Procedimentos necessários para diagnóstico preciso e remoção de lesões suspeitas ou pequenas alterações na pele.",
    },
  ];
  // Estado para controlar a exibição dos cards
  const [showAll, setShowAll] = useState(false);
  // Exibir os primeiros 4 cards ou todos os cards, dependendo do estado
  const displayedCards = showAll ? CardsData : CardsData.slice(0, 4);
  return (
    <section
      id="section-cards"
      className="flex flex-col w-full h-auto min-h-screen py-6 items-center justify-center space-y-6 
        max-1170:px-4">
      <TextCards />
      <GridCards>
        {displayedCards.map((card) => {
          return (
            <AnimatedCards
              key={card.id}
              title={card.title}
              description={card.description}
            />
          );
        })}
      </GridCards>
      <button
        onClick={(e) => {
          setShowAll(!showAll); // Atualiza o estado
          if (showAll) { // Só faz o scroll se for "Ver Menos"
            handleScroll("section-cards", e); // Passa o evento para a função handleScroll
          }
        }}
        className="px-8 py-2 text-2xl font-bold bg-rosa-claro text-white rounded-xl border-2 
          border-white shadow-2xl drop-shadow-2xl hover:contrast-125 hover:scale-105">
        {showAll ? "Ver Menos" : "Ver Todos"}
      </button>
    </section >
  );
};

export default SectionCards;
