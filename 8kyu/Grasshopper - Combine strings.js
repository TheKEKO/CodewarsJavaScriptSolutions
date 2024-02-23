// Grasshopper - Combine strings

// Solution
function combineNames(firstName, lastName) {
  return firstName + " " + lastName
}

// Solution 2
combineNames = (firstName, lastName) => `${firstName} ${lastName}`

// Solution 3
const combineNames = (...names) => names.join(" ")