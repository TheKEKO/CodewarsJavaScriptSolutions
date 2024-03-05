// Sum of positive

// Solution
function positiveSum(arr) {
  return arr.filter((element) => element > 0).reduce((a, b) => a + b, 0)
}

// Solution 2
const positiveSum = (arr) =>
  arr.filter((element) => element > 0).reduce((a, b) => a + b, 0)
