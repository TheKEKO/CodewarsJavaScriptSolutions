// Count the Monkeys!

// Solution
function monkeyCount(n) {
  array = []
  for (let i = 1; i <= n; i++) {
    array.push(i)
  }
  return array
}

// Solution 2
monkeyCount = (n) => Array.from({ length: n }, (_, i) => i + 1)
