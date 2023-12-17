var d = Object.defineProperty;
var m = (e, t) => () => (e && (t = e((e = 0))), t);
var w = (e, t) => {
	for (var a in t) d(e, a, { get: t[a], enumerable: !0 });
};
var l = {};
w(l, { default: () => f });
var f,
	r = m(() => {
		"use strict";
		f = { getElement: async (e, t = document) => t.querySelectorAll(e) };
	});
var s = async () => {
	clearInterval(window.interval),
		(window.interval = setInterval(async () => {
			clearInterval(window.interval),
				(await n(".js-column")).forEach(async (e) => {
					let t = await n(".js-stream-item", e),
						a = t.length,
						o = Math.floor(Math.random() * a);
					(await n(".btd-content-warning", t.item(o))).length === 0 &&
						(await n(".js-stream-item-content", t.item(o))).forEach(
							async (i) => {
								i?.click();
							},
						),
						setTimeout(
							async () => {
								(await n(".js-column-back")).forEach((c) => {
									c?.click();
								}),
									await s();
							},
							24e3 + Math.floor(Math.random() * a * 1e3),
						),
						setTimeout(
							async () => {
								(await n(".column-type-icon")).forEach((c) => {
									c?.click();
								}),
									await s();
							},
							24e3 + Math.floor(Math.random() * a * 1e3),
						);
				});
		}, 3e4));
};
setInterval(
	async () =>
		(await n(".btd-clear-column-link")).forEach((e) => {
			e?.click();
		}),
	55e3,
);
setInterval(async () => {
	let e = await n(".js-translate-call-to-action"),
		t = 0;
	e.forEach((a) => {
		t <= 5 && (a?.click(), t++);
	}),
		setTimeout(
			async () =>
				(
					await n(
						".js-tweet-detail.tweet-detail-wrapper .js-tweet-translation-text.tweet-translation-text",
					)
				).forEach((a) => {
					let o = a.getBoundingClientRect();
					o.top >= 0 &&
						o.bottom <= window.innerHeight &&
						a.scrollIntoView();
				}),
			3e3,
		);
}, 15e3);
await s();
var {
	default: { getElement: n },
} = await Promise.resolve().then(() => (r(), l));
export { n as getElement };
