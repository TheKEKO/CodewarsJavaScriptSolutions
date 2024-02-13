// Is the string uppercase?

// Solution
String.prototype.isUpperCase = function () {
  return !/[a-z]/.test(this)
}
