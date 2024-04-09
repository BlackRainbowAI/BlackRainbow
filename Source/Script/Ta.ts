declare global {
	interface Window {
		interval: NodeJS.Timer;
	}
}

const refresh = async () => {
	clearInterval(window.interval);

	window.interval = setInterval(async () => {
		clearInterval(window.interval);

		(await getElement(".js-column")).forEach(async (el) => {
			const focus = await getElement(".js-stream-item", el);
			const length = focus.length;
			const id = Math.floor(Math.random() * length);

			if (
				(await getElement(".btd-content-warning", focus.item(id)))
					.length === 0
			) {
				(
					await getElement(".js-stream-item-content", focus.item(id))
				).forEach((el) => el?.click());
			}

			setTimeout(
				async () => {
					const focus = await getElement(".js-column-back");

					focus.forEach((el) => {
						el?.click();
					});

					await refresh();
				},
				24000 + Math.floor(Math.random() * length * 1000)
			);

			setTimeout(
				async () => {
					const focus = await getElement(".column-type-icon");

					focus.forEach((el) => {
						el?.click();
					});

					await refresh();
				},
				24000 + Math.floor(Math.random() * length * 1000)
			);
		});
	}, 30000);
};

setInterval(
	async () =>
		(await getElement(".btd-clear-column-link")).forEach((el) => {
			el?.click();
		}),
	55000
);

setInterval(async () => {
	const translations = await getElement(".js-translate-call-to-action");

	let index = 0;

	translations.forEach((el) => {
		if (index <= 5) {
			el?.click();
			index++;
		}
	});

	setTimeout(
		async () =>
			(
				await getElement(
					".js-tweet-detail.tweet-detail-wrapper .js-tweet-translation-text.tweet-translation-text"
				)
			).forEach((el) => {
				const position = el.getBoundingClientRect();

				if (
					position.top >= 0 &&
					position.bottom <= window.innerHeight
				) {
					el.scrollIntoView();
				}
			}),
		3000
	);
}, 15000);

await refresh();

export const {
	default: { getElement },
} = await import("../Library/DOM.js");
