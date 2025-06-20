function nestedLoops(n: number): number {
  let total = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      total += i + j;
    }
  }
  return total;
}

console.log(nestedLoops(10));

// Time complexity: O(n^2) - quadratic time complexity
// O(n) = n * n = n^2
// Example: 3n^2 + 2n + 1 => n^2

function cubicNesting(n: number): number {
  let total = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        total += i + j + k;
      }
    }
  }

  return total;
}

console.log(cubicNesting(10));

// Time complexity: O(n^3) - cubic time complexity
// O(n) = n * n * n = n^3
// Example: 3n^3 + 2n^2 + n + 1 => n^3