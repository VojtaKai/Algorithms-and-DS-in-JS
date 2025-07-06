namespace HashTable {
    class HashTable {
        private table: any[]
        private size: number
        
        constructor(size: number = 100) {
            this.table = new Array(size)
            this.size = size
        }

        // Simple hash function.
        // Typically you don't want a hash function which generates same indexes for different keys. 
        private hash(key: string): number {
            let total = 0
            for (let i = 0; i < key.length; i++) {
                total += key.charCodeAt(i)
            }

            return total % this.size
        }

        set(key: string, value: any) {
            const index = this.hash(key)
            // ISSUE: The smaller the index table, the higher the change of collision. Therefore, this is not a good solution.
            this.table[index] = value
        }

        get(key: string) {
            const index = this.hash(key)
            return this.table[index]
        }

        remove(key: string) {
            const index = this.hash(key)
            return this.table.splice(index, 1, undefined)
        }

        display() {
            for (let i = 0; i < this.table.length; i++) {
                const value = this.table.at(i)
                if (value) {
                    console.log(i, value)
                }
            }
        }
    }

    const table = new HashTable(10);
    table.set("name", "Bruce");
    table.set("age", 25);
    table.display();
    console.log(table.get("name"));
    table.set("mane", "Clark");
    table.set("name", "Diana");
    console.log(table.get("mane"));
    table.remove("name");
    table.display();
}