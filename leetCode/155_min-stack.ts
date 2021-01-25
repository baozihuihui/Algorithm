class LinkNode {
  val: number = null;
  next: LinkNode | null = null;
  before: LinkNode | null = null;
  constructor(val: number | null) {
    this.val = val;
  }
  /**
   * 移除自己
   */
  removeSelf() {
    if (this.before) {
      this.before.next = this.next;
    }
    if (this.next) {
      this.next.before = this.before;
    }
  }
  /**
   * 向后插入结点
   * @param node
   */
  appendNode(node: LinkNode) {
    node.next = this.next;
    node.before = this;
    if (this.next) {
      this.next.before = node;
    }
    this.next = node;
  }

  /**
   * 向前插入结点
   * @param node
   */
  unshiftNode(node: LinkNode) {
    this.before.next = node;
    node.before = this.before;
    this.before = node;
    node.next = this;
  }
}

class MinStack {
  private stackHead: LinkNode | null = null;
  private minStatckHead: LinkNode | null = null;

  constructor() {
    this.stackHead = new LinkNode(null);
    this.minStatckHead = new LinkNode(null);
  }

  private handleMinStatck(node: LinkNode): void {
    let midNode = this.minStatckHead.next;
    let isFinsh = false;
    if (!midNode) {
      this.minStatckHead.appendNode(node);
      return;
    }
    while (!isFinsh) {
      if (midNode.val >= node.val) {
        midNode.unshiftNode(node);
        isFinsh = true;
      } else {
        if (!midNode.next) {
          midNode.appendNode(node);
          break;
        }
        midNode = midNode.next;
      }
    }
  }

  push(x: number): void {
    const node = new LinkNode(x);
    this.stackHead.appendNode(node);
    this.handleMinStatck(new LinkNode(x));
  }

  pop(): void {
    let top = this.stackHead.next;
    let midNode = this.minStatckHead.next;
    if (!top) return;
    top.removeSelf();
    while (midNode) {
      if (top.val === midNode.val) {
        midNode.removeSelf();
        midNode = null;
      } else {
        midNode = midNode.next;
      }
    }
    top = null;
  }

  top(): number {
    return this.stackHead.next?.val;
  }

  getMin(): number {
    return this.minStatckHead.next?.val;
  }
}

const statck = new MinStack();
const action = [
  "MinStack",
  "push",
  "push",
  "push",
  "push",
  "getMin",
  "pop",
  "getMin",
  "pop",
  "getMin",
  "pop",
  "getMin",
];
const attribute = [[], [2], [0], [3], [0], [], [], [], [], [], [], []];

for (let i = 0; i < action.length; i++) {
  switch (action[i]) {
    case "push":
      console.log("push", attribute[i][0]);
      statck.push(attribute[i][0]);
      break;
    case "top":
      console.log("top", statck.top());
      break;
    case "getMin":
      console.log("getMin", statck.getMin());
      break;
    case "pop":
      console.log("pop");
      statck.pop();

      break;
  }
}
