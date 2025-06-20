namespace MathAlgorithms {
// My solution, more mathematical approach
function isPowerOfTwo(n: number): boolean {
    const power = Math.log(n) / Math.log(2);

    return power % 1 === 0;
}

// Big-O Time Complexity: O(1)
console.log("========== My solution ==========");
// Test numbers from 0 to 257 to check which ones are powers of two
for (const i of [0, 0.5, 1, 2, 5, 10, 256, 257]) {
    const result = isPowerOfTwo(i);
    console.log(`Number ${i} is a power of two: ${result}`);
}

// Iterative approach
function isPowerOfTwo2(n: number): boolean {
    if (n < 1) return false;

    while (n > 1) {
        if (n % 2 !== 0) return false;
        n /= 2;
    }

    return true;
}

console.log("========== Iterative approach ==========");
for (const i of [0, 0.5, 1, 2, 5, 10, 256, 257]) {
    const result = isPowerOfTwo2(i);
    console.log(`Number ${i} is a power of two: ${result}`);
}

// Big-O Time Complexity: O(log n)

// Bitwise approach, works only for positive integers
function isPowerOfTwoBitWise(n: number): boolean {
    if (n < 1) return false;

    return (n & (n - 1)) === 0;
}

// Big-O Time Complexity: O(1)

console.log("========== Bitwise approach ==========");
for (const i of [0, 0.5, 1, 2, 5, 10, 256, 257]) {
    const result = isPowerOfTwo2(i);
    console.log(`Number ${i} is a power of two: ${result}`);
}
}