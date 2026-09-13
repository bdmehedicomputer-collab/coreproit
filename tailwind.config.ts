import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#05070D", 900: "#070A11", 800: "#080C15", 700: "#0B101B" },
        cyanx: "#5DE7FF",
        purplex: "#9B7CFF",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(93,231,255,.08), 0 30px 80px -30px rgba(93,231,255,.35)",
        card: "0 1px 0 0 rgba(255,255,255,.04) inset, 0 30px 60px -40px rgba(0,0,0,.9)",
      },
      keyframes: {
        marquee: { from: { transform: "translate3d(0,0,0)" }, to: { transform: "translate3d(-50%,0,0)" } },
        floaty: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        pulseRing: { "0%": { transform: "scale(.85)", opacity: ".7" }, "100%": { transform: "scale(1.6)", opacity: "0" } },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 2.4s linear infinite",
        "pulse-ring": "pulseRing 2s ease-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
