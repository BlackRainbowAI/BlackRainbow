interface NodeListOf<TNode extends Node> extends NodeList {
    item(index: number): TNode;
    forEach(callbackfn: (value: TNode, key: number, parent: NodeListOf<TNode>) => void, thisArg?: any): void;
    [index: number]: TNode;
}
declare const _default: {
    getElement: (selector: string, parent?: HTMLElement | Document) => Promise<NodeListOf<HTMLElement>>;
};
export default _default;
