/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let read = 0,
    write = 0,
    count = 1
  while (read < chars.length) {
    if (read + 1 < chars.length && chars[read] === chars[read + 1]) {
      count++
      read++
    } else {
      chars[write] = chars[read]
      write++
      if (count > 1) {
        const countStr = count.toString()
        for (let i = 0; i < countStr.length; i++) {
          chars[write] = countStr[i]
          write++
        }
      }
      count = 1
      read++
    }
  }
  return chars.length
}
