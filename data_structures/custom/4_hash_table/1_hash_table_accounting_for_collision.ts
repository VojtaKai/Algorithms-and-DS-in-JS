namespace HashTable {
    class HashTable {
        private table: [string, any][][]
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
            const bucket = this.table[index]

            if (!bucket) {
                this.table[index] = [[key, value]]
            } else {
                const sameKeyItem = bucket.find(item => item[0] === key)
                if (sameKeyItem) {
                    // replace value for identical key
                    sameKeyItem[1] = value
                } else {
                    bucket.push([key, value])
                }
            }
        }

        get(key: string) {
            const index = this.hash(key)
            const bucket = this.table[index]

            if (bucket) {
                const sameKeyItem = bucket.find(item => item[0] === key)
                if (sameKeyItem) {
                    return sameKeyItem[1]
                }
            }

            return undefined
        }

        remove(key: string) {
            const index = this.hash(key)
            const bucket = this.table[index]

            if (bucket) {
                const sameKeyItem = bucket.find(item => item[0] === key)
                if (sameKeyItem) {
                    return bucket.splice(bucket.indexOf(sameKeyItem), 1)
                }
            }

            return undefined
        }

        display() {
            for (let i = 0; i < this.table.length; i++) {
                const bucket = this.table[i]
                if (bucket && bucket.length > 0) {
                    console.log(i, bucket)
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
    table.display();
    console.log(table.get("mane"));
    console.log(table.remove("name"));
    table.display();
}