const h = "modulepreload",
	g = function (i) {
		return "/" + i;
	},
	d = {},
	E = function (m, a, v) {
		let c = Promise.resolve();
		if (a && a.length > 0) {
			let n = function (e) {
				return Promise.all(
					e.map((o) =>
						Promise.resolve(o).then(
							(s) => ({ status: "fulfilled", value: s }),
							(s) => ({ status: "rejected", reason: s }),
						),
					),
				);
			};
			document.getElementsByTagName("link");
			const t = document.querySelector("meta[property=csp-nonce]"),
				u = t?.nonce || t?.getAttribute("nonce");
			c = n(
				a.map((e) => {
					if (((e = g(e)), e in d)) return;
					d[e] = !0;
					const o = e.endsWith(".css"),
						s = o ? '[rel="stylesheet"]' : "";
					if (document.querySelector(`link[href="${e}"]${s}`)) return;
					const r = document.createElement("link");
					if (
						((r.rel = o ? "stylesheet" : h),
						o || (r.as = "script"),
						(r.crossOrigin = ""),
						(r.href = e),
						u && r.setAttribute("nonce", u),
						document.head.appendChild(r),
						o)
					)
						return new Promise((f, p) => {
							r.addEventListener("load", f),
								r.addEventListener("error", () =>
									p(
										new Error(
											`Unable to preload CSS for ${e}`,
										),
									),
								);
						});
				}),
			);
		}
		function l(n) {
			const t = new Event("vite:preloadError", { cancelable: !0 });
			if (((t.payload = n), window.dispatchEvent(t), !t.defaultPrevented))
				throw n;
		}
		return c.then((n) => {
			for (const t of n || []) t.status === "rejected" && l(t.reason);
			return m().catch(l);
		});
	};
(
	await E(async () => {
		const { initializeApp: i } = await import("./index.esm.BCgD0epW.js");
		return { initializeApp: i };
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
//# sourceMappingURL=Base.astro_astro_type_script_index_0_lang.DvC-LzZc.js.map
