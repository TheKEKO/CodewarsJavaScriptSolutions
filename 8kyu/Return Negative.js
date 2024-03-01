// Return Negative

// Solution
function makeNegative(num) {
  return num > 0 ? -num : num
}

// Solution 2
makeNegative = (num) => (num > 0 ? -num : num)

// Solution 3
function makeNegative(num) {
  return -Math.abs(num)
}

// Solution 4
makeNegative = (num) => -Math.abs(num)
