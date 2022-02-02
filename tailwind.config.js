const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
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
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/line-clamp"),
		require("@tailwindcss/aspect-ratio"),
	],
};
