// Understanding closures - the basics

// Solution
function buildFun(n) {
  let res = []

  for (let i = 0; i < n; i++) {
    res.push(function () {
      return i
    })
  }
  return res
}
