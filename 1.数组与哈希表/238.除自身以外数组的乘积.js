/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length
  const answer = new Array(n)
  let leftProduct = 1
  for (let i = 0; i < n; i++) {
    answer[i] = leftProduct
    leftProduct = leftProduct * nums[i]
  }
  let rightProduct = 1
  for (let i = n - 1; i >= 0; i--) {
    answer[i] = answer[i] * rightProduct
    rightProduct = rightProduct * nums[i]
  }
  return answer
}
