/**
 * @param {number[]} height
 * @return {number}
 * 面积 = 距离 * 高度
 */
var maxArea = function (height) {
  let left = 0,
    right = height.length - 1
  let maxVolume = 0
  while (left < right) {
    const distance = right - left
    const minHeight = Math.min(height[left], height[right])
    const currentVolume = distance * minHeight
    maxVolume = Math.max(currentVolume, maxVolume)
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  return maxVolume
}
