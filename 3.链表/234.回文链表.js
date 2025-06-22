/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let slow = head,
    fast = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }
  let prev = null,
    current = slow
  while (current) {
    let next = current.next
    current.next = prev
    prev = current
    current = next
  }
  let left = head,
    right = prev
  while (right) {
    if (left.val !== right.val) {
      return false
    }
    left = left.next
    right = right.next
  }
  return true
}
