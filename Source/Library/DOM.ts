interface NodeListOf<TNode extends Node> extends NodeList {
	item(Index: number): TNode;

	forEach(
		callbackfn: (
			value: TNode,
			key: number,
			parent: NodeListOf<TNode>,
		) => void,
		// biome-ignore lint/suspicious/noExplicitAny:
		thisArg?: any,
	): void;

	[index: number]: TNode;
}

export default {
	getElement: async (
		Selector: string,
		Parent: HTMLElement | Document = document,
	): Promise<NodeListOf<HTMLElement>> =>
		Parent.querySelectorAll<HTMLElement>(Selector),
};
