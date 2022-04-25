import { defineConfig } from "astro/config";
import critters from "astro-critters";

export default defineConfig({
	site: "https://grenadier.dev",
	integrations: [
		critters({
			preload: "body",
			inlineFonts: true,
		}),
	],
});
