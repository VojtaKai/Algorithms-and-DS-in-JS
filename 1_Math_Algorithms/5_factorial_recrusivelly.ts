namespace MathAlgorithms {
    function factorial(n: number): number {
        if (n < 0) {
            throw new Error("Input must be a positive integer");
        }

        // Base case - return 1 for 0
        if (n === 0) return 1;

        // Recursive call - result is the product of the current number and the factorial of the previous number
        return n * factorial(n - 1);
    }

    for (const i of [0, 1, 2, 3, 4, 5, 6, 20]) {
        console.log(`Factorial for number ${i} is ${factorial(i)}`);
    }

    // Big-O Time Complexity: O(n)
}