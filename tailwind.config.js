<<<<<<< HEAD
const defaultTheme = require("tailwindcss/defaultTheme");
=======
import { fontFamily } from "tailwindcss/defaultTheme";
>>>>>>> Fork/Current

export default {
	content: [
		"./Public/**/*.html",
		"./Source/**/*.{astro,js,jsx,ts,tsx,vue,svelte}",
	],

	darkMode: "media",

	theme: {
		container: {
			center: true,
		},
		extend: {
<<<<<<< HEAD
			fontFamily: {
				sans: ["Fira Sans", ...defaultTheme.fontFamily.sans],
=======
			transitionTimingFunction: {
				apple: "cubic-bezier(0.21, 0.1, 0.21, 1)",
			},
			fontFamily: {
				sans: ["Albert Sans", ...fontFamily.sans],
>>>>>>> Fork/Current
			},
			typography: {
				DEFAULT: {
					css: {
						a: {
							"font-weight": "400",
						},
					},
				},
			},
			colors: {
				backgroundLight: "var(--background-light)",
				backgroundDark: "var(--background-dark)",
			},
		},
	},

	variants: {},

	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
	],
};
