import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: "var(--display)", // Fonte principal maior( H1, H2 )
        raleway: "var(--raleway)", // Fonte principal menor( H3, H4 )
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
      },
      translate: {
        "1,5": "0.375rem",
      },
      minWidth: {
        67: "16.875rem",
        70: "17.5rem",
        100: "27rem",
      },
      maxWidth: {
        100: "27rem",
      },
      maxHeight: {
        100: "27rem",
      },
      width: {
        image: "43.75rem",
        maximg: "26.688rem",
        border: "2.8rem",
        "44px": "2.75rem",
        "52px": "3.25rem",
        "60%": "60%",
        "40%": "40%",
      },
      height: {
        "11/12": "91.666667%",
        border: "2.8rem",
        img: "40rem",
        "0.1": "0.28rem",
        "0.2": "0.3rem",
        "18": "4.5rem",
        "44px": "2.75rem",
        "52px": "3.25rem",
      },
      padding: {
        18: "4.5rem",
        min: "0.18rem",
      },
      colors: {
        vermelho: {
          normal: "#c01e1e", //Gradientes de texto not-found.tsx
          escuro: "#8d1e1e", //Gradientes de texto not-found.tsx
          escuro2: "#622525", //Gradientes de texto not-found.tsx
        },
        vinho: {
          normal: "#8B3A3A", //Gradientes de texto not-found.tsx
          escuro: "#513D3D",
          escuro2: "#362929",  //Gradientes de texto not-found.tsx
        },
        bege: "#FFE0E0", //Layout.tsx
        fugente: "#B5847D",
        "cinza-claro": "#D6C6BD",
        "cinza-escuro": "#222222",
        "marrom-claro": "#9B7664",
        "marrom-escuro": "#704936",
        "custom": "#8B5E3C",
        "marrom-preto": "#362321",
        "rosa-claro": "#B56576",
      },
      screens: {
        "max-1170": { max: "1170px", },
        "min-1170": { min: "1170px", },
        "max-540": { max: "540px", },
      },
      backgroundImage: {
        fundo: "url(/fundo.jpg);", //Fundo NavBar.tsx
        fundo1: "url(/fundo1.svg)", //Fundo SectionMain.tsx
        fundo2: "url(/fundo2.svg)", //Fundo SectionCards.tsx
      },
    },
  },
  plugins: [],
} satisfies Config;
