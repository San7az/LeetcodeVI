/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length === 1) {
    return nums
  }
  if (nums.length === 0) {
    return
  }
  let cur = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      ;[nums[cur], nums[i]] = [nums[i], nums[cur]]
      cur++
    }
  }
  return nums
}
