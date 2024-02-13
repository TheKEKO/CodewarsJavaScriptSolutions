// Is the string uppercase?

// Solution
String.prototype.isUpperCase = function () {
  return !/[a-z]/.test(this)
}

// Solution 2
String.prototype.isUpperCase = function () {
  if (this.toString() == this.toUpperCase()) {
    return true
  } else {
    return false
  }
}
