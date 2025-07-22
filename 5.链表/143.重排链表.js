/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head || !head.next) {
    return
  }
  let slow = head,
    fast = head
  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }
  let prev = null
  let current = slow.next
  slow.next = null
  while (current) {
    let next = current.next
    current.next = prev
    prev = current
    current = next
  }
  let left = head,
    right = prev
  while (right) {
    let t1 = left.next
    let t2 = right.next
    left.next = right
    right.next = t1
    left = t1
    right = t2
  }
}
