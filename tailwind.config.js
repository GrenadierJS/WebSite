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
		extend: {},
	},
	variants: {},
	plugins: [require("@tailwindcss/ui")],
};
