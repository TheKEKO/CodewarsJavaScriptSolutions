// Beginner - Reduce but Grow

// Solution
function grow(x) {
  let result = 1
  x.forEach((num) => {
    result *= num
  })
  return result
}