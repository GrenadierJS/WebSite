import { defineConfig } from "astro/config";
import critters from "astro-critters";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
	site: "https://grenadier.dev",
	experimental: {
		integrations: true,
	},
	integrations: [
		sitemap(),
		critters(),
		compress(),
	],
});
