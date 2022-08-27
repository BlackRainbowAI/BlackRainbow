import Utils from "./utils.js";

(async () => {
	const refresh = async () => {
		// @ts-ignore
		clearInterval(window.refreshInterval);

		// @ts-ignore
		window.refreshInterval = setInterval(async () => {
			// @ts-ignore
			clearInterval(window.refreshInterval);

			(await Utils.getElement(".js-column")).forEach(async (el) => {
				const focus = await Utils.getElement(".js-stream-item", el);
				const length = focus.length;
				const id = Math.floor(Math.random() * length);

				if (
					(
						await Utils.getElement(
							".btd-content-warning",
							focus.item(id)
						)
					).length == 0
				) {
					(
						await Utils.getElement(
							".js-stream-item-content",
							focus.item(id)
						)
					).forEach(async (el) => {
						el.click();
					});
				}

				setTimeout(async () => {
					const focus = await Utils.getElement(".js-column-back");
					const id = Math.floor(Math.random() * length);

					focus.item(id).click();
					await refresh();
				}, 24000 + Math.floor(Math.random() * length * 1000));

				setTimeout(async () => {
					const focus = await Utils.getElement(".column-type-icon");
					const id = Math.floor(Math.random() * length);

					focus.item(id).click();
					await refresh();
				}, 24000 + Math.floor(Math.random() * length * 1000));
			});
		}, 13000);
	};

	setInterval(async () => {
		(await Utils.getElement(".btd-clear-column-link")).forEach((el) => {
			el.click();
		});
	}, 360000);

	setInterval(async () => {
		(await Utils.getElement(".js-translate-call-to-action")).forEach(
			(el) => {
				el.click();
			}
		);
	}, 1000);

	await refresh();
})();
