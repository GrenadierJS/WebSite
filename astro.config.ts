import compress from "astro-compress";
import critters from "astro-critters";

import sitemap from "@astrojs/sitemap";

export default {
	site: "https://grenadier.dev",
	integrations: [
		sitemap(),
		critters(),
		compress({
			logger: 1,
		}),
	],
}
