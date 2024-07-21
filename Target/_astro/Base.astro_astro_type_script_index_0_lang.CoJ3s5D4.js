const p = "modulepreload",
	f = function (o) {
		return "/" + o;
	},
	c = {},
	h = function (l, i, g) {
		let a = Promise.resolve();
		if (i && i.length > 0) {
			document.getElementsByTagName("link");
			const n = document.querySelector("meta[property=csp-nonce]"),
				r = n?.nonce || n?.getAttribute("nonce");
			a = Promise.all(
				i.map((e) => {
					if (((e = f(e)), e in c)) return;
					c[e] = !0;
					const s = e.endsWith(".css"),
						d = s ? '[rel="stylesheet"]' : "";
					if (document.querySelector(`link[href="${e}"]${d}`)) return;
					const t = document.createElement("link");
					if (
						((t.rel = s ? "stylesheet" : p),
						s || ((t.as = "script"), (t.crossOrigin = "")),
						(t.href = e),
						r && t.setAttribute("nonce", r),
						document.head.appendChild(t),
						s)
					)
						return new Promise((u, m) => {
							t.addEventListener("load", u),
								t.addEventListener("error", () =>
									m(
										new Error(
											`Unable to preload CSS for ${e}`,
										),
									),
								);
						});
				}),
			);
		}
		return a
			.then(() => l())
			.catch((n) => {
				const r = new Event("vite:preloadError", { cancelable: !0 });
				if (
					((r.payload = n),
					window.dispatchEvent(r),
					!r.defaultPrevented)
				)
					throw n;
			});
	};
(
	await h(async () => {
		const { initializeApp: o } = await import("./index.esm.CQlgJgN2.js");
		return { initializeApp: o };
	}, [])
).initializeApp({
	apiKey: "AIzaSyA2-PGZUDCvuMP-et1ajAWb2r6QXY4WGl4",
	authDomain: "grenadierjs.firebaseapp.com",
	databaseURL: "https://grenadierjs.firebaseio.com",
	projectId: "grenadierjs",
	storageBucket: "grenadierjs.appspot.com",
	messagingSenderId: "16903102826",
	appId: "1:16903102826:web:f85c7fd237548c3edf4513",
	measurementId: "G-EQHF084T2N",
});
//# sourceMappingURL=Base.astro_astro_type_script_index_0_lang.CoJ3s5D4.js.map
