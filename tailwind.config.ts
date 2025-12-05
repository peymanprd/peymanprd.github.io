import type { Config } from "tailwindcss";

export default <Config>{
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        display: ["Instrument Serif", "serif"],
      },
      animation: {
        equalize: "equalize 1s ease-in-out infinite",
      },
      keyframes: {
        equalize: {
          "0%, 100%": { height: "20%" },
          "50%": { height: "100%" },
        },
      },
    },
  },
  plugins: [],
};
