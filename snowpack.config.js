module.exports = {
	plugins: ["@snowpack/plugin-postcss"],
	optimize: {
		bundle: true,
		manifest: true,
		minify: true,
		preload: true,
		splitting: true,
		target: "es2018",
		treeshake: true,
	},
};
