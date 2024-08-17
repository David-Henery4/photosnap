import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      smMob: "26.25em", // 420px
      mob: "30em", // 480px
      smTab: "32.5em", // 520px
      mdTab: "41.25em", // 660px
      md2Tab: "45em", // 720px
      tab: "48em", // 768px
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
      lightGrey: "#DFDFDF",
      topBlue: "#5A77FF",
      middlePink: "#BC7198",
      bottomOrange: "#FFC593",
    },
    fontFamily: {
      dmSans: ["var(--font-dmSans)"],
    },
    gridTemplateColumns: {
      overallMob: "24px repeat(10, 1fr) 24px",
      overallTab: "40px repeat(10, 1fr) 40px",
      overallDesk: "165px repeat(10, 1fr) 165px",
      gallery2Cols: "repeat(2,2fr)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      objectPosition: {
        "center-top": "50% 50%",
      },
    },
  },
  plugins: [],
};
export default config;
