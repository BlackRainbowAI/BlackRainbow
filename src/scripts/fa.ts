import DOM from "../lib/dom.js";

declare global {
	interface Window {
		interval: NodeJS.Timer;
	}
}

const refresh = async () => {
	clearInterval(window.interval);

	window.interval = setInterval(async () => {
		const focus = await DOM.getElement(".most-tracked-item");
		const id = Math.floor(Math.random() * focus.length);

		(await DOM.getElement(".map-control-button.zoom-button.plus")).forEach(
			(el) =>
				setTimeout(() => {
					el?.click();
					setTimeout(() => el?.click(), 1000);
				}, 1000)
		);

		focus.item(id)?.click();

		(await DOM.getElement(".ui-icon.ui-icon-closethick")).forEach((el) => {
			el?.click();
		});

		(await DOM.getElement("#follow-aircraft:not(.active)"))
			.item(0)
			?.click();

		(
			await DOM.getElement(
				'.setting.hide-aircraft .toggle[data-action="hideAircraft"]:not(.on)'
			)
		).forEach((el) => el?.parentElement?.click());

		(
			await DOM.getElement(".overlay-views-panel,.section.search-overlay")
		).forEach((el) => el.remove());
	}, 30000);
};

await refresh();


