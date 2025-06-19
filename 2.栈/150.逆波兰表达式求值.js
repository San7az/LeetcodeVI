/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = []
  for (let token of tokens) {
    if (!isNaN(token)) {
      stack.push(parseInt(token))
    } else {
      let num1 = stack.pop()
      let num2 = stack.pop()
      switch (token) {
        case '+':
          stack.push(num2 + num1)
          break
        case '-':
          stack.push(num2 - num1)
          break
        case '*':
          stack.push(num2 * num1)
          break
        case '/':
          stack.push(Math.trunc(num2 / num1))
          break
      }
    }
  }
  return stack.pop()
}
