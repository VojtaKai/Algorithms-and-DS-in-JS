namespace MathAlgorithms {
    function isPrime(n: number): boolean {
        if (n <= 1) return false;

        const sqrt = Math.floor(Math.sqrt(n));
        let isPrime = true;
        for (let i = 2; i <= sqrt; i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }
        return isPrime;
    }

    // Big-O Time Complexity = O(sqrt(n))

    const primes: number[] = [];
    for (let i = 0; i < 100; i++) {
        const res = isPrime(i);
        if (res) {
            primes.push(i);
        }
    }

    console.log(primes);
}