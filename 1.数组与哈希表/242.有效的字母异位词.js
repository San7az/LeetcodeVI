/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false
  }
  const counter = new Array(26).fill(0)
  for (let char of s) {
    counter[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
  }
  console.log(counter)

  for (let char of t) {
    const index = char.charCodeAt(0) - 'a'.charCodeAt(0)
    if (--counter[index] < 0) {
      return false
    }
  }
  for (let count of counter) {
    if (count !== 0) {
      return false
    }
  }
  return true
}
isAnagram('anagram', 'nagaram')
