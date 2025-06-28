/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  const n = s.length
  let count = 0
  const dp = Array.from({ length: s.length }, () => Array(s.length).fill(false))
  for (let i = 0; i < n; i++) {
    dp[i][i] = true
    count++
  }
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true
      count++
    }
  }
  for (let len = 3; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      let j = i + len - 1
      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true
        count++
      }
    }
  }
  return count
}
