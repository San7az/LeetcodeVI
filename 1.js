var name = 'Kimi-Window'
const obj = {
  name: 'Kimi',
  greet: function () {
    console.log(this.name)
  },
}
obj.greet() // 输出: Kimi
