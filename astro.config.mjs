import { defineConfig } from "astro/config";
import critters from "astro-critters";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
	site: "https://grenadier.dev",
	experimental: {
		integrations: true,
	},
<<<<<<< Updated upstream
	integrations: [
		sitemap(),
		critters({
			"preload": "swap-high",
		}),
		compress(),
	],
=======
	integrations: [critters({
			"preload": "swap-high",
		}), compress()],
>>>>>>> Stashed changes
});
