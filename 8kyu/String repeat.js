// String repeat

// Solution
function repeatStr(n, s) {
  return s.repeat(n)
}

// Solution 2
function repeatStr(n, s) {
  var str = ""
  for (var i = 0; i < n; i++) {
    str += s
  }
  return str
}

// Solution 3
