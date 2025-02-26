import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "red-1": "#8d1e1e",
        "red-2": "#c01e1e",
        "red-wine": "#8B3A3A",
        "red-wine-950": "#362929",
        "bege-rose": "#FFE0E0",
      },
      screens: {
        "max-1170": { max: "1170px" },
        "max-540": { max: "540px" },
      },
      backgroundImage: {
        fundo: "url(/fundo.jpg);",
      },
      dropShadow: {
        shadowcustom: "0_0_4px_#c01e1e",
      },
    },
  },
  plugins: [],
} satisfies Config;
