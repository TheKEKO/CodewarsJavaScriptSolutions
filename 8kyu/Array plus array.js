// Array plus array

// Solution
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((a, b) => a + b)
}

// Solution 2
arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((a, b) => a + b)
