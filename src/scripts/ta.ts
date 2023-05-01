import DOM from "../lib/dom.js";

(async () => {
	let interval: NodeJS.Timer;

	const refresh = async () => {
		clearInterval(interval);

		interval = setInterval(async () => {
			clearInterval(interval);

			(await DOM.getElement(".js-column")).forEach(
				async (el: HTMLElement) => {
					const focus = await DOM.getElement(".js-stream-item", el);
					const length = focus.length;
					const id = Math.floor(Math.random() * length);

					if (
						(
							await DOM.getElement(
								".btd-content-warning",
								focus.item(id)
							)
						).length === 0
					) {
						(
							await DOM.getElement(
								".js-stream-item-content",
								focus.item(id)
							)
						).forEach(async (el: HTMLElement) => {
							el.click();
						});
					}

					setTimeout(async () => {
						const focus = await DOM.getElement(".js-column-back");

						focus.forEach((el: HTMLElement) => {
							el.click();
						});

						await refresh();
					}, 24000 + Math.floor(Math.random() * length * 1000.0));

					setTimeout(async () => {
						const focus = await DOM.getElement(".column-type-icon");

						focus.forEach((el: HTMLElement) => {
							el.click();
						});

						await refresh();
					}, 24000 + Math.floor(Math.random() * length * 1000.0));
				}
			);
		}, 13000);
	};

	setInterval(async () => {
		(await DOM.getElement(".btd-clear-column-link")).forEach(
			(el: HTMLElement) => {
				el.click();
			}
		);
	}, 360000);

	setInterval(async () => {
		(await DOM.getElement(".js-translate-call-to-action")).forEach(
			(el: HTMLElement) => {
				el.click();
			}
		);
	}, 1000.0);

	await refresh();
})();
