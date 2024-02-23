// Grasshopper - Combine strings

// Solution
function combineNames(firstName, lastName) {
  return firstName + " " + lastName
}

// Solution 2
const combineNames = (...names) => names.join(" ")
