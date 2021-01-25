/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next) return head;
  let result = null,
    lastNode = null;
  let reverseList = [];
  while (head) {
    // 1、取出需要交换的段落对应的栈
    reverseList = getReverList(head, k);
    // 2、判断段落是否满足交换条件
    if (reverseList.length !== k) {
      lastNode.next = head;
      result = result ? result : head;
      break;
    }
    // 3、将当前交换结点连接到该段落
    if (lastNode) {
      lastNode.next = reverseList[0];
    }
    // 4、将head 指向下一个段落起始点
    head = reverseList[0].next;
    // 5、记录当前段落的结束点
    lastNode = reverseList[k - 1];
    // 6、将反转后数组结点链接
    let temp = linkNode(reverseList, k);
    if (!result) {
      result = temp;
    }
  }

  return result;
}

function getReverList(head: ListNode | null, k: number): ListNode[] {
  let result = [];
  for (let i = 0; i < k; i++) {
    result.unshift(head);
    if (!head.next) {
      break;
    }
    head = head.next;
  }
  return result;
}

function linkNode(list: ListNode[], k: number) {
  let result = list[0];
  for (let i = 0; i < k; i++) {
    list[i].next = list[i + 1] ? list[i + 1] : null;
  }
  return result;
}

function createLinkNode(start: number, num: number) {
  let next = null;
  if (start < num) {
    next = createLinkNode(start + 1, num);
  }
  return new ListNode(start, next);
}

function showList(node: ListNode) {
  while (node) {
    console.log("val", node.val);
    node = node.next;
  }
}

let first = createLinkNode(1, 5);

let reverse = reverseKGroup(first, 2);

showList(reverse);
