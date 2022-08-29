/**
 * GetElement returns a promise that resolves to a NodeListOf<HTMLElement>
 * @param {string} selector - The CSS selector to find the element.
 * @param {HTMLElement | Document} parent - HTMLElement | Document = document
 * @returns A promise that resolves to a NodeListOf<HTMLElement>
 */
export const getElement = async (
	selector: string,
	parent: HTMLElement | Document = document
): Promise<NodeListOf<HTMLElement>> => {
	return parent.querySelectorAll(selector);
};

export default { getElement };
