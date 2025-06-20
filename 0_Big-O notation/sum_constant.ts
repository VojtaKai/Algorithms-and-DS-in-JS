function summation(n: number): number {
  return (n * (n + 1)) / 2; // line is executed only once
}

console.log(summation(10));

// Time complexity: O(1) - constant time complexity
