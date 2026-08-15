import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          olive: "#81A333",
          green: "#5F8447",
          "green-light": "#9AC655",
          purple: "#945897",
          charcoal: "#2A2A2A",
          black: "#0F0F0F",
          white: "#FFFFFF",
          cream: "#E7E2D2",
        },
        primary: {
          DEFAULT: "#81A333",
          hover: "#5F8447",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#5F8447",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#9AC655",
          purple: "#945897",
        },
        background: {
          DEFAULT: "#FFFFFF",
          muted: "#E7E2D2",
        },
        foreground: {
          DEFAULT: "#0F0F0F",
          muted: "#525252",
        },
        border: {
          DEFAULT: "#E7E2D2",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          dark: "#2A2A2A",
          darker: "#0F0F0F",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-plus-jakarta)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        card: "0 2px 10px 0 rgba(15, 15, 15, 0.06)",
        "card-hover": "0 12px 28px -8px rgba(15, 15, 15, 0.16)",
      },
      maxWidth: {
        container: "1400px",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out both",
        "slide-in-right": "slide-in-right 0.3s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
