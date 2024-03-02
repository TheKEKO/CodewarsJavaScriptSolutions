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

// Solution 2
function buildFun(n) {
  let res = []

  for (let i = 0; i < n; i++) {
    res.push(() => i)
  }
  return res
}

// Solution 3
const buildFun = (n) => [...Array(n)].map((_, i) => () => i)
