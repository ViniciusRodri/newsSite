import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1D2933",
        white: "#ffffff",
        gray: "#C0C7CE",
        red: "#FF0000",
      },
    },
  },
  plugins: [],
} satisfies Config;
