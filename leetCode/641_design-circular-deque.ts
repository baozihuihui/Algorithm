class LinkNode {
  prev: LinkNode | null;
  next: LinkNode | null;
  value: number | null;
  constructor(value: number | null) {
    this.value = value;
  }
}

class MyCircularDeque {
  private capacitance = 0;
  private headNode = new LinkNode(null);
  private lastNode = new LinkNode(null);
  constructor(k: number) {
    this.capacitance = k;
    this.headNode.next = this.lastNode;
    this.lastNode.prev = this.headNode;
  }

  insertFront(value: number): boolean {
    if (this.isFull()) return false;
    --this.capacitance;
    const node = new LinkNode(value);
    node.next = this.headNode.next;
    node.prev = this.headNode;
    this.headNode.next.prev = node;
    this.headNode.next = node;
    return true;
  }

  insertLast(value: number): boolean {
    if (this.isFull()) return false;
    --this.capacitance;
    const node = new LinkNode(value);
    node.next = this.lastNode;
    node.prev = this.lastNode.prev;
    this.lastNode.prev.next = node;
    this.lastNode.prev = node;
    return true;
  }

  deleteFront(): boolean {
    if (this.isEmpty()) return false;
    ++this.capacitance;
    const removeNode = this.headNode.next;
    this.headNode.next = removeNode.next;
    removeNode.next.prev = this.headNode;
    return true;
  }

  deleteLast(): boolean {
    if (this.isEmpty()) return false;
    ++this.capacitance;
    const removeNode = this.lastNode.prev;
    this.lastNode.prev = removeNode.prev;
    removeNode.prev.next = this.lastNode;
    return true;
  }

  getFront(): number {
    if (this.isEmpty()) return -1;
    return this.headNode.next.value;
  }

  getRear(): number {
    if (this.isEmpty()) return -1;
    return this.lastNode.prev.value;
  }

  isEmpty(): boolean {
    return this.headNode.next === this.lastNode;
  }

  isFull(): boolean {
    return this.capacitance === 0;
  }
}

let obj: MyCircularDeque = null;

const actions = [
  "MyCircularDeque",
  "insertLast",
  "insertLast",
  "insertFront",
  "insertFront",
  "getRear",
  "isFull",
  "deleteLast",
  "insertFront",
  "getFront",
];
const attrs = [[3], [1], [2], [3], [4], [], [], [], [4], []];

for (let i = 0; i < actions.length; i++) {
  const attr = attrs[i][0];
  switch (actions[i]) {
    case "MyCircularDeque":
      obj = new MyCircularDeque(attr);
      break;
    case "insertLast":
      console.log(obj.insertLast(attr));
      break;
    case "insertFront":
      console.log(obj.insertFront(attr));
      break;
    case "getFront":
      console.log(obj.getFront());
      break;
    case "getRear":
      console.log(obj.getRear());
      break;
    case "deleteFront":
      console.log(obj.deleteFront());
      break;
    case "deleteLast":
      console.log(obj.deleteLast());
      break;
    case "isEmpty":
      console.log(obj.isEmpty());
      break;
    case "isFull":
      console.log(obj.isFull());
      break;
  }
}
