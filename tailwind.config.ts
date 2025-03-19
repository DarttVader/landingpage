import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: "var(--raleway)",
        poppins: "var(--poppins)",
      },
      zIndex: {
        /*z-0: */ //SectionMain on SectionMain.tsx and Home on page.tsx
        1: "1", //NavBar on NavBar.tsx
        2: "2", //MenuOpen on MenuOpen.tsx
        3: "3", //MenuClose on MenuClose.tsx
        4: "4", //Blur ImgRafa on ImageRafa.tsx
        5: "5", //ImgRafa on ImageRafa.tsx
        6: "6", //TextSectionMain on TextSectionMain.tsx
      },
      blur: {
        min: "1px",
      },
      minWidth: {
        67: "16.875rem",
        70: "17.5rem",
      },
      width: {
        border: "2.8rem",
        "44px": "2.75rem",
        "52px": "3.25rem",
        "65%": "65%",
      },
      height: {
        border: "2.8rem",
        "0.1": "0.28rem",
        "0.2": "0.3rem",
        "18": "4.5rem",
        "44px": "2.75rem",
        "52px": "3.25rem",
      },
      translate: {
        "-full": "-100rem", //Usado no menu hamburguer(NavBar.tsx)
      },
      padding: {
        18: "4.5rem",
        min: "0.18rem",
      },
      colors: {
        "red-1": "#8d1e1e",
        "red-2": "#c01e1e",
        "red-wine": "#8B3A3A",
        "red-wine-950": "#362929",
        "bege-rose": "#FFE0E0",
        "cinza-claro": "#C5ADA0",
        "cinza-escuro": "#222222",
        "marrom-claro": "#9B7664",
        "marrom-escuro": "#704936",
        "custom": "#8B5E3C",
        "marrom-preto": "#362321",
        "fugente": "#B5847D",
        "rosa-claro": "#B56576",
        "red-escuro": "#622525",
      },
      screens: {
        "max-1170": { max: "1170px" },
        "max-540": { max: "540px" },
      },
      animation: {
        "spin-slow": "spin 5s linear infinite", //Animação circular loop
      },
      backgroundImage: {
        fundo: "url(/fundo.jpg);", //Fundo SectionMain.tsx
        fundo1: "url(/fundo1.jpg)", //Fundo SectionCards.tsx
        "custom-radial": `radial-gradient(circle, rgba(131,24,67,1) 0%, rgba(190,24,93,1) 50%, 
          rgba(244,114,182,1) 100%)`, //Usado no botão TopClick(Para ir pro topo da pág)
        "custom-conic": `conic-gradient(from 90deg at 50% 50%, rgba(190,24,93,1), 
          #d64f87)`,   //Usado no botão TopClick(Animação de borda)
      },
    },
  },
  plugins: [],
} satisfies Config;
