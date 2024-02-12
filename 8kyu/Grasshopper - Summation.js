// Grasshopper - Summation

// Solution
const summation = function (num) {
  let result = 0
  for (var i = 1; i <= num; i++) {
    result += i
  }
  return result
}

// Solution 2
function summation(num) {
  return (num * (num + 1)) / 2
}

// Solution 3
const summation = (n) => (n * (n + 1)) / 2
