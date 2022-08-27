import Utils from "./utils.js";

(async () => {
	const refresh = async () => {
		setInterval(async () => {
			const focus = await Utils.getElement(".most-tracked-item");
			const id = Math.floor(Math.random() * focus.length);

			focus.item(id).click();

			(
				await Utils.getElement(
					"#follow-aircraft,.setting.hide-aircraft,.ui-icon.ui-icon-closethick"
				)
			).forEach((el) => {
				el.click();
			});

			(
				await Utils.getElement(
					".overlay-views-panel, .section search-overlay"
				)
			).forEach((el) => {
				el.remove();
			});

			(
				await Utils.getElement(".map-control-button.zoom-button.plus")
			).forEach((el) => {
				el.click();
				el.click();
				el.click();
				el.click();
			});
		}, 13000);
	};

	await refresh();
})();
