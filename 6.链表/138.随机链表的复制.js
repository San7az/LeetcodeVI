/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
  if (!head) {
    return null;
  }
  let current = head;
  // 1. 遍历链表，复制每个节点
  while (current) {
    const newNode = new _Node(current.val);
    newNode.next = current.next;
    current.next = newNode;
    current = newNode.next;
  }
  // 2. 遍历链表，复制随机指针
  current = head;
  while (current) {
    if (current.random) {
      current.next.random = current.random.next;
    }
    current = current.next.next;
  }
  // 3. 拆分链表，还原原始链表
  current = head;
  let copiedHead = head.next;
  let copiedCurrent = copiedHead;
  while (current) {
    current.next = copiedCurrent.next;
    current = current.next;
    if (current) {
      copiedCurrent.next = current.next;
      copiedCurrent = copiedCurrent.next;
    }
  }
  return copiedHead;
};
