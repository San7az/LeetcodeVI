/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0)
  dummy.next = head
  if (!head) {
    return null
  }
  let cur = dummy,
    del = dummy
  for (let i = 0; i <= n; i++) {
    cur = cur.next
  }
  while (cur) {
    cur = cur.next
    del = del.next
  }
  del.next = del.next.next
  return dummy.next
}
