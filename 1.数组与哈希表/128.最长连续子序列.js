/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) {
    return 0
  }
  const uniqueNums = Array.from(new Set(nums)).sort((a, b) => a - b)
  let maxLength = 0
  let currentLength = 1
  for (let i = 1; i < uniqueNums.length; i++) {
    if (uniqueNums[i] === uniqueNums[i - 1] + 1) {
      currentLength++
    } else {
      maxLength = Math.max(currentLength, maxLength)
      currentLength = 1
    }
  }
  maxLength = Math.max(currentLength, maxLength)
  return maxLength
}
