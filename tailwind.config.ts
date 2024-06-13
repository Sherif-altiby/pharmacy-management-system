import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "btn-color": "#0808bd",
        "page-color": "rgb(245, 245, 245)",
        "title-color": "rgb(69 122 151)",
        "card-bg": "#858587c4",
        "overlay": "rgb(243 244 246 / 54%)",
      }
    },
  },
  plugins: [],
};
export default config;
