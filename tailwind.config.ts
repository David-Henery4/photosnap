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
      xSmTab: "32.5em", // 520px
      smTab: "38.75em", // 620px
      mdTab: "41.25em", // 660px
      md2Tab: "45em", // 720px
      tab: "48em", // 768px
      smLap: "60em", // 960px
      mdLap: "61.875em", // 990px
      mdDesk: "68.75em", // 1100px
      desk: "75.3125em", // 1205px
      lgDesk: "85em", // 1360px
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
      lightGrey: "#DFDFDF",
      lighterGrey: "#F5F5F5",
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
      gallery4cols: "repeat(4, 2fr)",
      features2Cols: "repeat(2,2fr)",
      features3Cols: "repeat(3,2fr)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // Mobile
        "cta-bg-mob": "url('/assets/shared/mobile/bg-beta.jpg')",
        "cta-bg-mob-lg": "url('/assets/shared/mobile/bg-beta-lg.jpg')",
        // Tablet
        "cta-bg-Tab": "url('/assets/shared/tablet/bg-beta.jpg')",
        "cta-bg-Tab-lg": "url('/assets/shared/tablet/bg-beta-lg.jpg')",
        // Desktop
        "cta-bg-Desk": "url('/assets/shared/desktop/bg-beta.jpg')",
        "cta-bg-Desk-lg": "url('/assets/shared/desktop/bg-beta-lg.jpg')",
      },
      objectPosition: {
        "center-top": "50% 50%",
      },
    },
  },
  plugins: [],
};
export default config;
