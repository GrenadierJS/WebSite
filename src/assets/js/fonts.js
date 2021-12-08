let fonts = {
	"Fira Sans": [400],
};

for (const font in fonts) {
	if (Object.hasOwnProperty.call(fonts, font)) {
		const weights = fonts[font];

		for (let index = 0; index < weights.length; index++) {
			const weight = weights[index];

			let fontName = `wfn${weight / 100}${font
				.toLowerCase()
				.replace(/\s/g, "")}`;

			let fontClass = `wf-${font.toLowerCase().replace(/\s/g, "")}-n${
				weight / 100
			}-active`;

			if (sessionStorage[fontName]) {
				document.documentElement.classList.add(fontClass);
			}

			if ("fonts" in document) {
				Promise.all([
					document.fonts.load(`${weight} 1em ${font}`),
					document.fonts.load(`italic ${weight} 1em ${font}`),
				]).then((_) => {
					document.documentElement.classList.add(fontClass);
					sessionStorage[fontName] = true;
				});
			} else {
				document.documentElement.classList.add(fontClass);
				sessionStorage[fontName] = true;
			}
		}
	}
}
