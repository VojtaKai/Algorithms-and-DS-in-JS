function sum(n: number): number {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(sum(10));

// algo has 3 main statements, total, total += i (repeated n times), return total
// O(n) = 1 + (n * 1) + 1 = n + 2 => O(n) = n
// O(n) = n - linear time complexity (As the input size increases, the time complexity increases linearly)
