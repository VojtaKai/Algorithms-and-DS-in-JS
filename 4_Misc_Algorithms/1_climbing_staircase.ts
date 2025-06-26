// Given a staircase of 'n' steps, count the number of distinct ways to climb to the top. You can either take 1 step or 2 steps at a time.
namespace MiscAlgorithms {
    function climbingStaircaseIterative(n: number): number {
        const noOfWays = [1, 2]
        for (let i = 2; i < n; i++) {
            noOfWays[i] = noOfWays[i - 1]! + noOfWays[i - 2]!
        }
        return noOfWays[n - 1]!
    }

    // Big-O Time Complexity: O(n) - linear time complexity

    console.log(climbingStaircaseIterative(1))
    console.log(climbingStaircaseIterative(2))
    console.log(climbingStaircaseIterative(3))
    console.log(climbingStaircaseIterative(4))
    console.log(climbingStaircaseIterative(10))
    console.log(climbingStaircaseIterative(100))

    // This reminds me of the fibonacci sequence
    function climbingStaircaseRecursive(n: number): number {
        if (n <= 1) return 1
        return climbingStaircaseRecursive(n - 1) + climbingStaircaseRecursive(n - 2)
    }

    // Big-O Time Complexity: O(2^n) - exponential time complexity (slow!)

    console.log(climbingStaircaseRecursive(1))
    console.log(climbingStaircaseRecursive(2))
    console.log(climbingStaircaseRecursive(3))
    console.log(climbingStaircaseRecursive(4))
    console.log(climbingStaircaseRecursive(10))
    // console.log(climbingStaircaseRecursive(100)) // This will take a long time to compute
}