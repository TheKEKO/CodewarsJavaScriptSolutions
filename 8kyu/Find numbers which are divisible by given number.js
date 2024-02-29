// Find numbers which are divisible by given number

// Solution
function divisibleBy(numbers, divisor) {
  return numbers.filter((num) => num % divisor === 0)
}
