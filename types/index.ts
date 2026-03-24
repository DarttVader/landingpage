export interface Treatment {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  featured?: boolean;
}

export interface Address {
  city: string;
  street: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface Contact {
  number: string;
  location: string;
  link: string;
  address: string;
}

export interface SocialLink {
  href: string;
  icon: string;
  title: string;
}

export const treatments: Treatment[] = [
  {
    id: 1,
    title: "Flacidez da Pele e do Tecido Subcutâneo",
    description: "Se for gordura, tratamentos como enzimas e lipo enzimática podem ajudar. Já se for flacidez, o ideal é estimular colágeno e dar mais firmeza à pele. Ultrassom microfocado e bioestimuladores de colágeno são excelentes opções para melhorar a sustentação e firmeza da pele.",
    shortDescription: "Ultrassom microfocado e bioestimuladores de colágeno para firmeza e sustentação",
    image: "/flacidez.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Rastreamento do Câncer de Pele",
    description: "O rastreamento anual é fundamental, especialmente para quem tem histórico familiar ou se expõe muito ao sol. Pintinhas aparentemente inofensivas podem se transformar ao longo do tempo, sendo importante a avaliação regular com um dermatologista.",
    shortDescription: "Avaliação dermatológica completa para diagnóstico precoce",
    image: "/cancer.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "Tratamento de Pele em Geral",
    description: "Inclui tratamentos para acne hormonal, manchas, melasma, olheiras, cicatrizes de acne, tech neck, botox e muito mais. Avaliação personalizada para cada caso é essencial.",
    shortDescription: "Tratamentos personalizados: acne, manchas, melasma, olheiras e botox",
    image: "/geral.jpg",
    featured: true,
  },
  {
    id: 4,
    title: "Tratamento de Alopecia Androgenética",
    description: "Você percebeu que seu cabelo não tem o mesmo volume de antes? Fios mais finos, ralos e sem tanta força podem ser um sinal de alerta. O afinamento capilar pode ter várias causas. Não espere para procurar um dermatologista. Quanto antes identificarmos a causa, maiores são as chances de recuperação!",
    shortDescription: "Diagnóstico e tratamento para queda e afinamento capilar",
    image: "/alopecia.jpg",
  },
  {
    id: 5,
    title: "Tratamento da Foliculite",
    description: "A foliculite ocorre quando o pelo não consegue sair corretamente da pele, causando inflamação. Métodos menos agressivos de depilação, como o laser, e cuidados com a pele são essenciais para prevenir e tratar a foliculite.",
    shortDescription: "Tratamentos preventivos e lasers para eliminar a foliculite",
    image: "/foliculite.jpg",
  },
  {
    id: 6,
    title: "Cauterização dos Acrocórdons",
    description: "Acrocórdons são pelinhos pequenos e moles que podem ser removidos rapidamente e de forma indolor no consultório. A cauterização é um procedimento rápido, seguro e eficaz para se livrar dessas pequenas lesões.",
    shortDescription: "Remoção rápida, segura e indolor de acrocórdons",
    image: "/acrocordons.jpg",
  },
  {
    id: 7,
    title: "Fios Lisos de Colágeno",
    description: "Fios de colágeno são ideais para melhorar áreas específicas da pele, como o craquelado abaixo dos olhos, estimulando a produção de colágeno e promovendo uma pele mais uniforme.",
    shortDescription: "Estimulação de colágeno para areas especificas do rosto",
    image: "/colageno.jpg",
  },
  {
    id: 8,
    title: "Pontos de Embelezamento",
    description: "Estratégicos pontos de ácido hialurônico para realçar as características do rosto com sutileza, como contorno dos lábios, malar e harmonia do queixo.",
    shortDescription: "Ácido hialurônico para realçar eharmonizar o rosto",
    image: "/pontos.jpg",
    featured: true,
  },
  {
    id: 9,
    title: "Terapias Combinadas",
    description: "Laser adequado, microagulhamento com drug delivery, bioestimuladores e peelings suaves podem potencializar os resultados sem agredir a pele.",
    shortDescription: "Combinação de técnicas para potencializar resultados",
    image: "/terapias.jpg",
  },
  {
    id: 10,
    title: "Profhilo",
    description: "O Profhilo estimula a produção de colágeno e elastina, tratando flacidez e deixando a pele mais firme. Ideal para promover um glow natural.",
    shortDescription: "Bioestimulador para firmeza e glow natural",
    image: "/profhilo.jpg",
    featured: true,
  },
  {
    id: 11,
    title: "Biópsia e Pequenas Cirurgias",
    description: "Procedimentos necessários para diagnóstico preciso e remoção de lesões suspeitas ou pequenas alterações na pele.",
    shortDescription: "Diagnóstico e remoção segura de lesões",
    image: "/biopsia.jpg",
  },
  {
    id: 12,
    title: "Blindagem Solar Total",
    description: "Além do protetor solar, incluir antioxidantes orais, chapéu e óculos pode minimizar o impacto da luz visível.",
    shortDescription: "Proteção completa contra radiação solar",
    image: "/solar.jpg",
  },
  {
    id: 13,
    title: "Peeling Químico",
    description: "Renova a pele e pode ajudar em várias queixas, desde manchas e acne até viço e textura.",
    shortDescription: "Renovação celular para manchas, acne e textura",
    image: "/pelling.jpg",
  },
];

export const addresses = [
  {
    city: "Pitanga PR",
    street: "Rua Dez de Abril, 251, Centro - 85200-000",
    coordinates: { lat: -24.2001, lng: -51.9825 },
  },
  {
    city: "Manoel Ribas PR",
    street: "Rua Dom Pedro I, 189, Centro - 85260-000",
    coordinates: { lat: -24.5184, lng: -51.6711 },
  },
  {
    city: "Ivaiporã PR",
    street: "Avenida Souza Naves, 1760, Centro - 86870-000",
    coordinates: { lat: -24.2445, lng: -51.6723 },
  },
];

export const contacts = [
  {
    number: "(43) 99968-4679",
    location: "Pitanga - LM Clínica",
    link: "https://api.whatsapp.com/send/?phone=5543999684679&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20em%20Pitanga.",
    address: addresses[0].street,
  },
  {
    number: "(43) 99613-4770",
    location: "Manoel Ribas - Clínica Estética e Saúde",
    link: "https://api.whatsapp.com/send/?phone=5543996134770&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20em%20Manoel%20Ribas.",
    address: addresses[1].street,
  },
  {
    number: "(43) 99813-0857",
    location: "Ivaiporã - Clínica São Lucas",
    link: "https://api.whatsapp.com/send/?phone=5543998130857&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20em%20Ivaipor%C3%A3.",
    address: addresses[2].street,
  },
];

export const socialLinks = [
  {
    href: "https://api.whatsapp.com/send/?phone=5543996134770&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20tratamentos.",
    icon: "whatsapp",
    title: "WhatsApp Dra. Rafaela Mazieiro",
  },
  {
    href: "https://www.instagram.com/drarafamazieiro",
    icon: "instagram",
    title: "Instagram Dra. Rafaela Mazieiro",
  },
  {
    href: "https://www.facebook.com/rafaela.mazieiro",
    icon: "facebook",
    title: "Facebook Dra. Rafaela Mazieiro",
  },
];

export const featuredTreatments = treatments.filter((t) => t.featured);
