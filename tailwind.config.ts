import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInN200: {
          "0%": { transform: "translateY(-200%)" },
          "100%": { transform: "translateY(0)" },
        },
        screenBg: {
          "0%": { backgroundColor: "var(--bg-slate-800)" },
          "100%": { backgroundColor: "var(--bg-slate-200)" },
        },
      },
      animation: {
        // duration: 500ms, delay: 100ms
        fadeIn: "fadeIn 500ms ease-in-out 100ms forwards",
        // duration: 500ms, delay: 100ms,
        slideInN200: "slideInN200 500ms ease-in-out 100ms forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
