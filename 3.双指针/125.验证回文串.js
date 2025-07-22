/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let cleanedS = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  let reversedS = cleanedS.split('').reverse().join('')
  return cleanedS === reversedS
}
