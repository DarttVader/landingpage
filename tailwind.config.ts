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
        playfair: ["var(--playfair-extrabold-italic)"],
      },
      screens: {
        "max-1170": { max: "1170px" },
      },
    },
  },
  plugins: [],
} satisfies Config;
