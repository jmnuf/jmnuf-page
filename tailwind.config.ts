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
	    },
	    animation: {
		fadeIn: "fadeIn 150ms ease-in-out forwards",
	    },
	},
    },
    plugins: [],
} satisfies Config;
