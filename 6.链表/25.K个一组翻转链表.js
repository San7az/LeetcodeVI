/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (!head || k <= 1) return head;
  let dummy = new ListNode(0, head);
  let prev = dummy,
    end = dummy;
  while (end.next !== null) {
    for (let i = 0; i < k && end !== null; i++) {
      end = end.next;
    }
    if (end === null) {
      break;
    }
    let start = prev.next;
    let then = end.next;
    end.next = null;
    prev.next = reverse(start);
    start.next = then;
    prev = start;
    end = prev;
  }
  return dummy.next;
};
const reverse = (head) => {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};
