/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length === 1) {
    return false
  }
  const bracketMap = {
    ')': '(',
    '}': '{',
    ']': '[',
  }
  const stack = []
  for (let char of s) {
    if (Object.values(bracketMap).includes(char)) {
      stack.push(char)
    } else {
      if (!stack.length || stack.pop() !== bracketMap[char]) {
        return false
      }
    }
  }
  return stack.length === 0
}
