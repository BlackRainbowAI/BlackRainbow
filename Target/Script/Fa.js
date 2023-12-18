var c = Object.defineProperty;
var d = (t, a) => () => (t && (a = t((t = 0))), a);
var r = (t, a) => {
	for (var e in a) c(t, e, { get: a[e], enumerable: !0 });
};
var o = {};
r(o, { default: () => l });
var l,
	n = d(() => {
		"use strict";
		l = { getElement: async (t, a = document) => a.querySelectorAll(t) };
	});
var s = async () => {
	clearInterval(window.interval),
		(window.interval = setInterval(async () => {
			clearTimeout(window.timeout),
				(window.timeout = setTimeout(
					async () =>
						(
							await i(
								'[data-testid="aircraft-panel__header"] button.rounded-md'
							)
						).forEach((e) => e.click()),
					25e3
				));
			let t = await i(
					'[data-testid="most-tracked-flights-widget"] [data-testid="list-wrapper"] > div'
				),
				a = Math.floor(Math.random() * t.length);
			(await i('[data-testid="map-controls__zoom-in"]')).forEach((e) =>
				setTimeout(() => {
					e?.click(), setTimeout(() => e?.click(), 1e3);
				}, 1e3)
			),
				t.item(a)?.click(),
				(
					await i(
						'.ui-icon.ui-icon-closethick,[data-testid="aircraft__not-live-flight"] [data-testid="base-button"]'
					)
				).forEach((e) => {
					e?.click();
				}),
				setTimeout(async () => {
					(
						await i(
							'[data-testid="aircraft__follow-flight-button"]:not(.text-yellow-500)'
						)
					)
						.item(0)
						?.click(),
						(
							await i(
								'[data-testid="aircraft-panel__more__hide-not-selected-btn"] [aria-checked="false"]'
							)
						).forEach((e) => e?.parentElement?.click());
				}, 3e3),
				(
					await i(".overlay-views-panel,.section.search-overlay")
				).forEach((e) => e.remove());
		}, 3e4));
};
await s();
var {
	default: { getElement: i },
} = await Promise.resolve().then(() => (n(), o));
export { i as getElement };
