import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { ink: "#05070D", cyanx: "#5DE7FF", purplex: "#9B7CFF", panel: "#0B101B" },
      boxShadow: { glow: "0 0 80px rgba(93,231,255,.12)" }
    }
  },
  plugins: []
};
export default config;