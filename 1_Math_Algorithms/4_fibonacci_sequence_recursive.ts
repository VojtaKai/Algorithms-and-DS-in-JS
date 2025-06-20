namespace MathAlgorithms {
// Find the nth number in the Fibonacci sequence
function fibonacciRecursive(n: number): number {
    if (n < 0) {
        throw new Error("Input must be a positive integer");
    };

    // Base case - return the first two numbers
    if (n === 0) return 0;
    if (n === 1) return 1;

    // or simplified base case
    // if (n < 2) return n;

    // Recursive call - result is the sum of the two previous numbers
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Big-O Time Complexity: O(2^n) --> Terrible performance, not practical for large inputs, use iterative approach instead (0_fibonacci_sequence.ts)

console.log(fibonacciRecursive(0));
console.log(fibonacciRecursive(1));
console.log(fibonacciRecursive(2));
console.log(fibonacciRecursive(3));
console.log(fibonacciRecursive(4));
console.log(fibonacciRecursive(5));
console.log(fibonacciRecursive(6));
}