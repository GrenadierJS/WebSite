import { defineConfig } from "astro/config";
import critters from "astro-critters";
import compress from "astro-compress";

export default defineConfig({
<<<<<<< HEAD
	site: "https://grenadier.dev",
=======
	// TODO Place your site URL here
	// site: "",
>>>>>>> upstream/main
	experimental: {
		integrations: true,
	},
	integrations: [critters(), compress()],
});
