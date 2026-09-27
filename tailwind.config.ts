import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core palette — edit here to re-theme the whole site.
        navy: {
          950: "#0b1220",
          900: "#0f1b2d",
          800: "#152538",
          700: "#1c3049",
        },
        slate: {
          950: "#0c1116",
        },
        mist: {
          50: "#f7f8fa",
          100: "#eef1f5",
          200: "#dde3ea",
        },
        teal: {
          400: "#5fb8b0",
          500: "#3f9c94",
          600: "#2f8079",
        },
        ink: {
          DEFAULT: "#1b2530",
          light: "#4b5768",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      boxShadow: {
        soft: "0 20px 45px -25px rgba(15, 27, 45, 0.35)",
        card: "0 12px 30px -18px rgba(15, 27, 45, 0.28)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fade-in 0.6s ease forwards",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
