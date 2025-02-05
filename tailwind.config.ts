import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--poppins-regular)"],
        lora: ["var(--lora-regular)"],
      },
    },
    colors: {
      rosa: {
        100: '#F8E0E0',
        200: '#F1C1C1',
        300: '#EAA2A2',
        400: '#E38282',
        500: '#DC928F', // Rosa principal (Logo)
        600: '#C36F6D',
        700: '#AA4F4F',
        800: '#913030',
        900: '#781414',
        fluorecente: '#FF2079', // Rosa fluorescente para destaque
      },
      bege: {
        100: '#F4E5D3',
        200: '#E8D2B1',
        300: '#DCBE8F',
        400: '#D0AA6D',
        500: '#C49A6C', // Bege do fundo
        600: '#AA825B',
        700: '#906A4A',
        800: '#76523A',
        900: '#5C3A2A',
      },
      marrom: {
        100: '#E7D5CA',
        200: '#D6B7A8',
        300: '#C59885',
        400: '#B47963',
        500: '#5E2E19', // Marrom para botões e textos
        600: '#4E2715',
        700: '#3E1F10',
        800: '#2E170C',
        900: '#1E0F08',
      },
      branco: {
        100: '#FFFFFF',
        200: '#FDFBF9',
        300: '#FBF6F3',
        400: '#F9F2ED',
        500: '#F8F3EC', // Branco quebrado para textos claros
        600: '#E0DBD5',
        700: '#C8C3BD',
        800: '#B0ABA6',
        900: '#98938E',
      },  
    }
  },
  plugins: [],
} satisfies Config;
