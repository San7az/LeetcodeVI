const arr = [1, 2, 2, 3, 4, 4, 5]
// const uniqueArr = arr.filter(
//   (value, index, arr) => arr.indexOf(value) === index
// )
// const uniqueArr = arr.reduce((acc, cur) => {
//   if (!acc.includes(cur)) {
//     acc.push(cur)
//   }
//   return acc
// }, [])
// const uniqueArr = []
// arr.forEach((value) => {
//   if (uniqueArr.indexOf(value) === -1) {
//     uniqueArr.push(value)
//   }
// })
const uniqueArr = []
arr.forEach((value) => {
  if (!uniqueArr.includes(value)) {
    uniqueArr.push(value)
  }
})
console.log(uniqueArr)
