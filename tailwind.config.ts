import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--poppins)"],
        lora: ["var(--lora)"],
        playfair: ["var(--playfair)"],
        merriweather: ["var(--merriweather)"],
      },
      screens: {
        "max-1170": { max: "1170px" },
        "max-540": { max: "540px"},
      },
    },
  },
  plugins: [],
} satisfies Config;
