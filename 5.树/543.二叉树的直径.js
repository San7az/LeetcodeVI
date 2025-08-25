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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;
  const dfs = (root) => {
    if (root === null) {
      return { height: 0, diameter: 0 };
    }
    const left = dfs(root.left);
    const right = dfs(root.right);
    let diameter = left.height + right.height;
    maxDiameter = Math.max(maxDiameter, diameter);
    const currentHeight = Math.max(left.height, right.height) + 1;
    return { height: currentHeight, diameter: maxDiameter };
  };
  dfs(root);
  return maxDiameter;
};
