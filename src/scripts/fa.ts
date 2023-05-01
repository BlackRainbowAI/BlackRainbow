import DOM from "../lib/dom.js";

(async () => {
	let interval: NodeJS.Timer;

	const refresh = async () => {
		clearInterval(interval);

		interval = setInterval(async () => {
			const focus = await DOM.getElement(".most-tracked-item");
			const id = Math.floor(Math.random() * focus.length);

			focus.item(id).click();

			(
				await DOM.getElement(
					"#follow-aircraft,.setting.hide-aircraft,.ui-icon.ui-icon-closethick"
				)
			).forEach((el: HTMLElement) => {
				el.click();
			});

			(
				await DOM.getElement(
					".overlay-views-panel, .section search-overlay"
				)
			).forEach((el: HTMLElement) => {
				el.remove();
			});

			(
				await DOM.getElement(".map-control-button.zoom-button.plus")
			).forEach((el: HTMLElement) => {
				el.click();
				el.click();
			});
		}, 13000);
	};

	await refresh();
})();
