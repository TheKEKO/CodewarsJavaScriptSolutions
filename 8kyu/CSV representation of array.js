// CSV representation of array

// Solution
function toCsvText(array) {
  return array.map((subrray) => subrray.join(",")).join("\n")
}

// Solution 2
function toCsvText(array) {
  return array.join("\n")
}

// Solution 3
const toCsvText = (array) => array.join("\n")
