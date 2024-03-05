// All Star Code Challenge #18

// Solution
function strCount(str, letter) {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++
    }
  }
  return count
}

console.log(strCount("", "z"))

// Solution 2
function strCount(str, letter) {
  return str.split(letter).length - 1
}
