import { defineConfig } from "astro/config";
import turbolinks from "@astrojs/turbolinks";

export default defineConfig({
	site: "https://grenadier.dev",
	integrations: [turbolinks()],
});
