import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import critters from "astro-critters";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://grenadier.dev",
	experimental: {
		integrations: true,
	},
	integrations: [sitemap(), critters(), compress()],
});
