interface NodeListOf<TNode extends Node> extends NodeList {
	item(index: number): TNode;

	forEach(
		callbackfn: (
			value: TNode,
			key: number,
			parent: NodeListOf<TNode>
		) => void,
		// rome-ignore lint/suspicious/noExplicitAny:
		thisArg?: any
	): void;
	[index: number]: TNode;
}

export default {
	getElement: async (
		selector: string,
		parent: HTMLElement | Document = document
	): Promise<NodeListOf<HTMLElement>> => {
		return parent.querySelectorAll(selector);
	},
};
