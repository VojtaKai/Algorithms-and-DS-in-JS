namespace MathAlgorithms {
    function factorial(n: number): number {
        // if (n <= 1) return 1;
        // return n * factorial(n - 1);
    
        if (n <= 1) return 1;
    
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    
    console.log(factorial(0));
    console.log(factorial(1));
    console.log(factorial(3));
    console.log(factorial(5));
    
    // Big-O Time Complexity = O(n)
}