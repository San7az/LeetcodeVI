/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isBalanced(root) {
  function checkBalance(node) {
    if (!node) {
      return [true, 0];
    }
    const [leftBalanced, leftHeight] = checkBalance(node.left);
    const [rightBalanced, rightHeight] = checkBalance(node.right);
    const balanced =
      leftBalanced && rightBalanced && Math.abs(leftHeight - rightHeight) <= 1;
    const height = Math.max(leftHeight, rightHeight) + 1;
    return [balanced, height];
  }
  return checkBalance(root)[0];
}
