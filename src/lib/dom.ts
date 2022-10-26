export default async () => ({
	getElement: async (
		selector: string,
		parent: HTMLElement | Document = document
	): Promise<NodeListOf<HTMLElement>> => {
		return parent.querySelectorAll(selector);
	},
});
