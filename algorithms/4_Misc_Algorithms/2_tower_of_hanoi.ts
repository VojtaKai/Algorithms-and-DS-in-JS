namespace MiscAlgorithms {
    function towerOfHanoi(n: number, fromRod: string, toRod: string, auxRod: string) {
        if (n === 1) {
            console.log(`Move disk 1 from ${fromRod} to ${toRod}`)
            return
        }
        towerOfHanoi(n - 1, fromRod, auxRod, toRod)
        console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)
        towerOfHanoi(n - 1, auxRod, toRod, fromRod)
    }

    // towerOfHanoi(3, 'A', 'C', 'B')
    towerOfHanoi(5, 'A', 'C', 'B')

    // Big-O Time Complexity: O(2^n) - exponential time complexity
}