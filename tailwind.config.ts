import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#96B6C5",
        secondary: "#ADC4CE",
        tertiary: "#EEE0C9",
        quaternary: "#F1F0E8",
      },
    },
    animation: {
      rotate: "rotate 20s infinite",
    },
    keyframes: {
      rotate: {
        "0%": { transform: "rotate(0deg)" },
        "50%": { transform: "rotate(3deg)", scale: "1 1.5" },
        "100%": { transform: "rotate(360deg)" },
      },
    },
  },
  plugins: [],
};
export default config;
