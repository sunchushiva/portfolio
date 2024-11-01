import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryOne: "#ffbcbc",
      },
      fontSize: {
        xsm: "0.6rem",
        xsmp: "0.7rem",
      },
      screens: {
        xsm: "10px",

        sm: "576px",
        // => @media (min-width: 576px) { ... }

        md: "850px",
        // => @media (min-width: 960px) { ... }

        lg: "1100px",
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
};
export default config;
