/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = []
  const backtrack = (s = '', left = 0, right = 0) => {
    if (s.length === n * 2) {
      result.push(s)
      return
    }
    if (left < n) {
      backtrack(s + '(', left + 1, right)
    }
    if (right < left) {
      backtrack(s + ')', left, right + 1)
    }
  }
  backtrack()
  return result
}
