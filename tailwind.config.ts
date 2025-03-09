import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      zIndex: {
        "1": "1",
        "2": "2",
        "3": "3",
      },
      minWidth: {
        "70": "17.5rem",
      },
      width: {
        "44px": "2.75rem",
        "52px": "3.25rem",
        "65%": "65%",
      },
      height: {
        "0.1": "0.080rem",
        "44px": "2.75rem",
        "52px": "3.25rem",
      },
      padding: {
        "0.5": "0.125rem",
        "18": "4.5rem",
      },
      colors: {
        "red-1": "#8d1e1e",
        "red-2": "#c01e1e",
        "red-wine": "#8B3A3A",
        "red-wine-950": "#362929",
        "bege-rose": "#FFE0E0",
        "cinza-claro": "#C5ADA0",
        "marrom-claro": "#9B7664",
        "marrom-escuro": "#704936",
        "marrom-preto": "#362321",
        "fugente": "#B5847D",
        "red-escuro": "#622525",
      },
      screens: {
        "max-1170": { max: "1170px" },
        "max-540": { max: "540px" },
      },
      backgroundImage: {
        fundo: "url(/fundo.jpg);",
      },
    },
  },
  plugins: [],
} satisfies Config;
