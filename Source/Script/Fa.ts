import DOM from "../Library/DOM.js";

declare global {
	interface Window {
		interval: NodeJS.Timer;
		timeout: NodeJS.Timeout;
	}
}

const refresh = async () => {
	clearInterval(window.interval);

	window.interval = setInterval(async () => {
		clearTimeout(window.timeout);

		window.timeout = setTimeout(
			async () =>
				(
					await DOM.getElement(
						'[data-testid="aircraft-panel__header"] button.rounded-md'
					)
				).forEach((el) => el.click()),
			25000
		);

		const Focus = await DOM.getElement(
			'[data-testid="most-tracked-flights-widget"] [data-testid="list-wrapper"] > div'
		);

		const Identifier = Math.floor(Math.random() * Focus.length);

		(await DOM.getElement('[data-testid="map-controls__zoom-in"]')).forEach(
			(el) =>
				setTimeout(() => {
					el?.click();
					setTimeout(() => el?.click(), 1000);
				}, 1000)
		);

		Focus.item(Identifier)?.click();

		(
			await DOM.getElement(
				'.ui-icon.ui-icon-closethick,[data-testid="aircraft__not-live-flight"] [data-testid="base-button"]'
			)
		).forEach((el) => {
			el?.click();
		});

		setTimeout(async () => {
			(
				await DOM.getElement(
					'[data-testid="aircraft__follow-flight-button"]:not(.text-yellow-500)'
				)
			)
				.item(0)
				?.click();

			(
				await DOM.getElement(
					'[data-testid="aircraft-panel__more__hide-not-selected-btn"] [aria-checked="false"]'
				)
			).forEach((el) => el?.parentElement?.click());
		}, 3000);

		(
			await DOM.getElement(".overlay-views-panel,.section.search-overlay")
		).forEach((el) => el.remove());
	}, 30000);
};

await refresh();
