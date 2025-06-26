// Give two finite non-empty sets, find their Cartesian Product
namespace MiscAlgorithms {
    function cartesianProduct(arr1: number[], arr2: number[]): number[][] {
        const result: number[][] = []
        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length; j++) {
                result.push([arr1[i]!, arr2[j]!])
            }
        }
        return result
    }

    // Big-O Time Complexity: O(n * m) - n is the length of arr1 and m is the length of arr2

    const A = [1, 2]
    const B = [3, 4, 5]
    console.log(cartesianProduct(A, B))
}