// Multiply the number

//Solution
function multiply(number) {
  const absoluteValue = Math.abs(number)
  const power = Math.floor(Math.log10(absoluteValue)) + 1

  if (number < 0) {
    return -number * -Math.pow(5, power)
  } else {
    return number * Math.pow(5, power)
  }
}