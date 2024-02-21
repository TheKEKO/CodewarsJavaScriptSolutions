// Pillars

// Solution
function pillars(numPill, dist, width) {
  if (width <= 10) {
    return (numPill - 1) * dist * 100 + (numPill - 2) * 0
  } else if (width <= 10 && dist >= 20) {
    return (numPill - 1) * dist * 100 + (numPill - 2) * width
  } else {
    return (numPill - 1) * dist * 100 + (numPill - 2) * width
  }
}

// Solution 2
function pillars(numPill, dist, width) {
  return numPill <= 10 ? 0 : (numPill - 1) * dist * 100 + (numPill - 2) * width
}
