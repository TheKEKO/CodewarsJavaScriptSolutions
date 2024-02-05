// Beginner - Lost Without a Map

// Solution 
function maps(x) {
  let newArray = x.map((item) => item * 2)
  return newArray
}

// Solution 2
function maps(x) {
  return x.map((n) => n * 2)
}

// Solution 3
maps = (x) => x.map((e) => e * 2)

// Solution 4
function maps(x) {
  var newArr = []

  x.map(function (y) {
    newArr.push(y * 2)
  })

  return newArr
}
