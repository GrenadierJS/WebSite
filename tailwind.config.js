const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	mode: "jit",
	purge: [
		"./public/**/*.html",
		"./src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}",
	],
	darkMode: "media",
	theme: {
		container: {
			center: true,
		},
		extend: {
			fontFamily: {
				sans: ["Fira Sans", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	variants: {},
	plugins: [require("@tailwindcss/ui")],
};
