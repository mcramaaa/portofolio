import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbit: "Orbitron Variable",
        montserrat: "Montserrat Variable",
      },
      colors: {
        brand: {
          DEFAULT: "#00E5FF",
          dark: "#1C1D20",
          darklight: "#222121",
          grey: "#444242",
          quaternary: "#1abc9c",
        },
      },
    },
  },
  plugins: [nextui()],
};
export default config;
