function foo() {
  var a = 1
  let b = 2
  {
    var c = 4
    let d = 5
    console.log(a)
    console.log(b)
  }
  console.log(b)
}
foo()
