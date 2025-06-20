namespace MathAlgorithms {
    function fibonacci(n: number): number[] {
        if (n < 0) {
            throw new Error("Input must be a positive integer");
        }

        const sequence: number[] = [];
        for (let i = 0; i < n; i++) {
            if (sequence.length < 2) {
                sequence.push(i);
                continue;
            }

            const lastElement = sequence[sequence.length - 1]!;
            const beforeLastElement = sequence[sequence.length - 2]!;
            sequence.push(lastElement + beforeLastElement);
        }
        return sequence;
    }

    console.log(fibonacci(0));
    console.log(fibonacci(1));
    console.log(fibonacci(2));
    console.log(fibonacci(3));
    console.log(fibonacci(4));
    console.log(fibonacci(5));
    console.log(fibonacci(6));

    // Big-O Time Complexity = O(n)
}